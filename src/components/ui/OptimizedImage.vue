<template>
  <picture class="optimized-image" :class="containerClass">
    <!-- Imagens em webp com diferentes tamanhos para srcset -->
    <source
      v-if="srcSets"
      type="image/webp"
      :srcset="srcSets"
      :sizes="sizes || defaultSizes"
    >

    <!-- Fallback para browsers que não suportam webp -->
    <source
      v-if="fallbackSrc"
      type="image/png"
      :srcset="fallbackSrc"
      :sizes="sizes || defaultSizes"
    >

    <!-- Imagem principal com lazy loading inteligente -->
    <img
      :src="src"
      :alt="alt"
      :loading="priority === 'high' ? 'eager' : 'lazy'"
      :decoding="priority === 'high' ? 'sync' : 'async'"
      :fetchpriority="priority"
      :width="width"
      :height="height"
      :class="imageClass"
      @load="onImageLoaded"
      @error="onImageError"
      :style="imageStyle"
    >
  </picture>
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    // URL da imagem principal (usado como fallback)
    src: {
      type: String,
      required: true
    },
    // Texto alternativo para acessibilidade
    alt: {
      type: String,
      required: true
    },
    // Lista de srcsets para diferentes resoluções (formato webp)
    srcSets: {
      type: String,
      default: ''
    },
    // Fallback para browsers sem suporte a webp
    fallbackSrc: {
      type: String,
      default: ''
    },
    // Tamanhos responsivos para diferentes breakpoints
    sizes: {
      type: String,
      default: ''
    },
    // Largura da imagem para evitar CLS
    width: {
      type: [Number, String],
      default: 'auto'
    },
    // Altura da imagem para evitar CLS
    height: {
      type: [Number, String],
      default: 'auto'
    },
    // Classe CSS para o container
    containerClass: {
      type: String,
      default: ''
    },
    // Classe CSS para a imagem
    imageClass: {
      type: String,
      default: ''
    },
    // Estilos inline para a imagem
    imageStyle: {
      type: Object,
      default: () => ({})
    },
    // Prioridade de carregamento (high para LCP)
    priority: {
      type: String,
      default: 'low', // 'high' ou 'low'
      validator: (value) => ['high', 'low'].includes(value)
    }
  },
  data() {
    return {
      imageLoaded: false,
      imageError: false,
      defaultSizes: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
    }
  },
  methods: {
    onImageLoaded() {
      this.imageLoaded = true
      this.imageError = false
      this.$emit('loaded')

      // Performance marking para LCP
      if (this.priority === 'high' && window.performance && window.performance.mark) {
        window.performance.mark('lcp-image-loaded')
      }
    },
    onImageError() {
      this.imageError = true
      this.$emit('error')
    }
  }
}
</script>

<style scoped>
.optimized-image {
  display: inline-block;
  position: relative;
  /* Removido overflow: hidden que pode causar quadrado */
  /* Removido contain que pode causar problemas com transparência */
  background: transparent;
}

.optimized-image img {
  max-width: 100%;
  height: auto;
  /* Otimizações para melhor qualidade de imagem */
  image-rendering: high-quality;
  image-rendering: -webkit-optimize-contrast;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  /* Garantir transparência */
  background: transparent;
  /* Suavizar bordas */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Suporte para content-visibility */
@supports (content-visibility: auto) {
  .optimized-image img {
    content-visibility: auto;
  }
}
</style>
