#!/bin/bash

# Script para otimização de imagens
# Criado por Luiz Nascimento - luiznascimento.dev

# Ativar modo de depuração
set -x

# Diretório de origem das imagens
SRC_DIR="./src/assets"
echo "Diretório de origem: $SRC_DIR (caminho absoluto: $(realpath "$SRC_DIR"))"

# Verificar se o diretório existe
if [ ! -d "$SRC_DIR" ]; then
    echo "ERRO: Diretório $SRC_DIR não encontrado!"
    echo "O script deve ser executado a partir da pasta 'scripts'."
    exit 1
fi

# Determinar qual comando do ImageMagick usar
determine_imagemagick_command() {
    if command -v magick &> /dev/null; then
        echo "magick"
    else
        echo "convert"
    fi
}

IMAGEMAGICK_CMD=$(determine_imagemagick_command)
echo "Usando comando do ImageMagick: $IMAGEMAGICK_CMD"

# Função para verificar dependências
check_dependencies() {
    echo "Verificando dependências..."
    local dependencies=("cwebp" "pngquant" "jpegoptim")
    local missing=()

    for dep in "${dependencies[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            missing+=("$dep")
        fi
    done

    if [ ${#missing[@]} -ne 0 ]; then
        echo "As seguintes dependências estão faltando:"
        for dep in "${missing[@]}"; do
            echo "- $dep"
        done
        echo ""
        echo "Por favor, instale-as com:"
        echo "sudo apt install webp imagemagick pngquant jpegoptim"
        exit 1
    fi

    echo "Todas as dependências estão instaladas!"
}

# Função para otimizar uma imagem
optimize_image() {
    local input=$1
    local filename=$(basename "$input")
    local name="${filename%.*}"
    local ext="${filename##*.}"
    local dir=$(dirname "$input")

    echo "🔄 Processando $filename..."
    echo "  Caminho completo: $input"
    echo "  Nome base: $name"
    echo "  Extensão: $ext"
    echo "  Diretório: $dir"

    # Verificar se o arquivo existe
    if [ ! -f "$input" ]; then
        echo "ERRO: O arquivo $input não existe!"
        return 1
    fi

    # Criar versão LCP (Largest Contentful Paint) - tamanho muito pequeno para carregamento ultra-rápido
    if [ "$ext" == "png" ] || [ "$ext" == "jpg" ] || [ "$ext" == "jpeg" ]; then
        echo "  ↳ Gerando versão LCP (webp) - qualidade ultra-otimizada com preservação de transparência"
        if [ "$ext" == "png" ]; then
            # Para PNG com possível transparência, preservar o canal alfa
            $IMAGEMAGICK_CMD "$input" -resize "200x200>" -quality 40 -define webp:alpha-quality=100 -define webp:method=6 "$dir/${name}-lcp.webp"
        else
            $IMAGEMAGICK_CMD "$input" -resize "200x200>" -quality 30 -define webp:lossless=false -define webp:method=6 "$dir/${name}-lcp.webp"
        fi
    fi

    # Criar versões responsivas em WEBP (melhor formato para web)
    echo "  ↳ Gerando versões responsivas em webp..."
    # Versões específicas
    widths=(150 300 420 640 800)

    for width in "${widths[@]}"; do
        echo "    • Versão ${width}px..."
        if [ "$ext" == "png" ]; then
            # Para PNG com possível transparência, preservar o canal alfa
            $IMAGEMAGICK_CMD "$input" -resize "${width}x${width}>" -quality 80 -define webp:alpha-quality=100 -define webp:method=6 "$dir/${name}-${width}.webp"
        else
            $IMAGEMAGICK_CMD "$input" -resize "${width}x${width}>" -quality 75 -define webp:lossless=false -define webp:method=6 "$dir/${name}-${width}.webp"
        fi
    done

    # Versão padrão otimizada
    echo "  ↳ Gerando versão webp otimizada..."
    if [ "$ext" == "png" ]; then
        # Para PNG com possível transparência, preservar o canal alfa
        $IMAGEMAGICK_CMD "$input" -quality 85 -define webp:alpha-quality=100 -define webp:method=6 "$dir/${name}-optimized.webp"
    else
        $IMAGEMAGICK_CMD "$input" -quality 85 -define webp:lossless=false -define webp:method=6 "$dir/${name}-optimized.webp"
    fi

    # Se for PNG, otimizar o original também
    if [ "$ext" == "png" ]; then
        echo "  ↳ Otimizando PNG original..."
        pngquant --force --quality=65-80 --skip-if-larger --verbose --output "$dir/${name}-compressed.png" "$input"

        # Se a versão comprimida for criada e menor, substituir a original
        if [ -f "$dir/${name}-compressed.png" ]; then
            orig_size=$(stat -c%s "$input")
            comp_size=$(stat -c%s "$dir/${name}-compressed.png")

            if [ $comp_size -lt $orig_size ]; then
                echo "    • PNG comprimido é $(( (orig_size - comp_size) * 100 / orig_size ))% menor!"
            else
                echo "    • PNG comprimido não é menor que o original, mantendo o original."
                rm "$dir/${name}-compressed.png"
            fi
        fi
    fi

    echo "✅ $filename processado com sucesso!"
}

# Função para processar todos os avatares
process_avatars() {
    echo "🖼️ Processando imagens de avatar..."

    # Procurar por imagens de avatar
    echo "Procurando por imagens de avatar em $SRC_DIR..."

    # Verificar se existem arquivos correspondentes ao padrão
    if ! ls "$SRC_DIR"/avatar/avatar-img* &>/dev/null; then
        echo "ERRO: Nenhuma imagem de avatar encontrada em $SRC_DIR!"
        echo "Arquivos disponíveis:"
        ls -la "$SRC_DIR"
        exit 1
    fi

    avatars=("$SRC_DIR"/avatar/avatar-img*)
    echo "Encontradas ${#avatars[@]} imagens de avatar."

    for avatar in "${avatars[@]}"; do
        echo "Verificando avatar: $avatar"
        if [[ "$avatar" == *"-original."* ]]; then
            echo "Processando avatar original: $avatar"
            optimize_image "$avatar"
        fi
    done

    echo "🎉 Processamento de avatares concluído!"
}

# Função principal
main() {
    echo "=== Otimizador de Imagens ==="
    echo "Para melhorar a experiência mobile e LCP do site"
    echo ""

    check_dependencies
    process_avatars

    echo ""
    echo "🚀 Otimização de imagens concluída!"
    echo "Agora suas imagens estão otimizadas para performance mobile!"
}

# Executar a função principal
main
