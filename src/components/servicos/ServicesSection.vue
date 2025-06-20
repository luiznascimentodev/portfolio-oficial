<template>
  <section class="relative overflow-hidden m-0" id="servicos" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style="z-index: 50;">
      <!-- Section Header -->
      <div class="text-center mb-12 space-y-4">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-700/30 text-emerald-400 text-sm font-medium">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span>Soluções que Convertem</span>
        </div>

        <!-- Title -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          <span class="bg-gradient-to-r from-blue-400 via-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Transforme Visitantes
          </span>
          <br>
          <span class="text-gray-100">em Clientes Pagantes</span>
        </h2>

        <p class="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <span class="text-emerald-400 font-semibold">Comprovado por resultados:</span> soluções
          estratégicas desenvolvidas para maximizar o retorno do seu investimento e
          impulsionar o crescimento do seu negócio.
        </p>
      </div>

      <!-- Services Grid - 3 colunas com altura uniforme -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">

        <!-- Landing Pages -->
        <div class="h-full">
          <div class="relative group h-full">
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full hover:border-blue-500/40 transition-all duration-500 group-hover:bg-gray-800/90 flex flex-col min-h-[650px]">

              <!-- Header -->
              <div class="mb-8">
                <div class="mb-6">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/30 w-fit">
                    <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"/>
                    </svg>
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-white mb-4">
                  Landing Pages
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  Páginas de alta conversão otimizadas para capturar leads e gerar vendas com design estratégico.
                </p>
              </div>

              <!-- Features -->
              <div class="flex-1 mb-8">
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Design responsivo e moderno</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Otimização para conversões</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Integração com ferramentas</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Performance otimizada</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">SEO otimizado</span>
                  </li>
                </ul>
              </div>

              <!-- Price & CTA -->
              <div class="mt-auto">
                <div class="flex items-center justify-between mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <div>
                    <p class="text-sm text-gray-400">A partir de</p>
                    <p class="text-3xl font-bold text-blue-400">R$ 600</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-400">Prazo</p>
                    <p class="text-lg font-semibold text-white">3-5 dias</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5541984821206?text=Olá!%20Tenho%20interesse%20em%20uma%20landing%20page.%20Gostaria%20de%20receber%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Solicitar</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Consultoria Gratuita -->
        <div class="h-full">
          <div class="relative group h-full">
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full hover:border-emerald-500/40 transition-all duration-500 group-hover:bg-gray-800/90 flex flex-col min-h-[650px]">

              <!-- Header -->
              <div class="text-center mb-8">
                <div class="mb-6 flex justify-center">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-600/20 border border-emerald-500/30">
                    <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-white mb-4">
                  Consultoria Gratuita
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  Conversa estratégica de 30 minutos para entender suas necessidades e desenhar a solução ideal.
                </p>
              </div>

              <!-- Features -->
              <div class="flex-1 mb-8">
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300 text-lg">Análise completa do seu negócio</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300 text-lg">Proposta personalizada sem compromisso</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300 text-lg">Estratégias para maximizar conversões</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300 text-lg">Cronograma e orçamento detalhado</span>
                  </li>
                </ul>
              </div>

              <!-- Value Highlight -->
              <div class="text-center mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20">
                <p class="text-white font-bold text-2xl">
                  <span class="text-emerald-400">GRATUITO</span>
                </p>
              </div>

              <!-- CTA Button -->
              <div class="mt-auto">
                <a
                  href="https://wa.me/5541984821206?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20para%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 text-center text-lg"
                >
                  <span class="flex items-center justify-center gap-3">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Agendar Agora!</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Projetos Personalizados -->
        <div class="h-full">
          <div class="relative group h-full">
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full hover:border-purple-500/40 transition-all duration-500 group-hover:bg-gray-800/90 flex flex-col min-h-[650px]">

              <!-- Header -->
              <div class="mb-8">
                <div class="mb-6">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 w-fit">
                    <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-white mb-4">
                  Projetos Personalizados
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  Desenvolvimento sob medida para suas necessidades específicas. Soluções únicas e escaláveis.
                </p>
              </div>

              <!-- Features -->
              <div class="flex-1 mb-8">
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Análise completa de requisitos</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Tecnologias modernas</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Acompanhamento constante</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Suporte pós-entrega</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-300">Documentação completa</span>
                  </li>
                </ul>
              </div>

              <!-- Price & CTA -->
              <div class="mt-auto">
                <div class="flex items-center justify-between mb-6 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                  <div>
                    <p class="text-sm text-gray-400">Investimento</p>
                    <p class="text-2xl font-bold text-purple-400">Sob Consulta</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-400">Prazo</p>
                    <p class="text-lg font-semibold text-white">Variável</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5541984821206?text=Olá!%20Preciso%20de%20um%20projeto%20personalizado.%20Gostaria%20de%20conversar%20sobre%20minha%20ideia."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Orçamento</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom CTA Section -->
      <div class="mt-20 relative">
        <!-- Efeito de Fundo Tecnológico -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute inset-0 opacity-30 bg-grid-pattern"></div>

          <!-- Orbes Luminosos -->
          <div class="absolute left-1/4 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div class="absolute right-1/3 -bottom-10 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s;"></div>

          <!-- Linhas Digitais -->
          <div class="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          <div class="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>

        <!-- Container Principal -->
        <div class="relative backdrop-blur-lg bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border border-white/10 rounded-3xl px-8 py-10 max-w-4xl mx-auto shadow-2xl shadow-blue-500/5 overflow-hidden z-10">

          <!-- Círculos decorativos nos cantos -->
          <div class="absolute top-0 left-0 w-20 h-20 border-t border-l border-emerald-500/30 rounded-tl-3xl -translate-x-[40%] -translate-y-[40%]"></div>
          <div class="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-blue-500/30 rounded-br-3xl translate-x-[40%] translate-y-[40%]"></div>

          <!-- Badge/Status Pill -->
          <div class="flex justify-center mb-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="relative flex items-center gap-1">
                <span class="relative z-10">Tecnologia que gera resultados</span>


              </div>
            </div>
          </div>

          <!-- Estatísticas Sociais -->
          <div class="flex flex-wrap justify-center gap-6 mb-8">
            <div class="flex items-center gap-3">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-2 border-gray-900 flex items-center justify-center z-30">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 border-2 border-gray-900 flex items-center justify-center z-20">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center z-10">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div class="text-left">
                <p class="text-white font-semibold">+50 Projetos Entregues</p>
                <p class="text-blue-400 text-sm">Clientes satisfeitos</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="text-left">
                <p class="text-white font-semibold">Tecnologia de Ponta</p>
                <p class="text-blue-400 text-sm">Soluções modernas</p>
              </div>
            </div>
          </div>

          <!-- Título Principal -->
          <div class="text-center mb-8 relative">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">
                Eleve seu Negócio ao Próximo Nível
              </span>
            </h2>

            <!-- Texto Persuasivo -->
            <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Desenvolvo <span class="text-emerald-400 font-medium">soluções digitais estratégicas</span> que transformam visitantes em clientes fiéis. Construídas com as tecnologias mais modernas do mercado para garantir <span class="text-blue-400 font-medium">desempenho excepcional</span> e <span class="text-blue-400 font-medium">conversões superiores</span> sem falsas promessas.
            </p>
            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>
          </div>

          <!-- 3 Benefícios/Características em Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-white">Entregas Rápidas</h3>
              </div>
              <p class="text-gray-400 text-sm">Resultados em tempo recorde sem comprometer a qualidade</p>
            </div>

            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-white">Métricas Reais</h3>
              </div>
              <p class="text-gray-400 text-sm">Acompanhe o crescimento do seu projeto com dados concretos</p>
            </div>

            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-white">Segurança</h3>
              </div>
              <p class="text-gray-400 text-sm">Proteção avançada para seus dados e dos seus clientes</p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato.html"
              class="flex-1 sm:flex-none sm:min-w-[180px] group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 border border-white/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative flex items-center justify-center gap-3">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Iniciar Conversa</span>
              </span>
            </a>

            <a
              href="/projetos.html"
              class="flex-1 sm:flex-none sm:min-w-[180px] bg-gray-800/80 hover:bg-gray-700/80 border border-white/5 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:border-white/10"
            >
              <span class="flex items-center justify-center gap-3">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>Explorar Cases</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Fim CTA Section -->
    </div>
  </section>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue'

export default {
  name: 'ServicesSection',
  components: {
    CommonBackground
  },
  props: {
    services: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
/* Otimizações de animação */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Efeitos de hover otimizados */
.service-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-4px) scale(1.01);
}

.service-card:hover .service-icon {
  transform: scale(1.05);
}

/* Efeito de cristal otimizado */
.glass-effect {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.4);
}

/* Scroll reveal otimizado */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Gradiente de texto para conversão */
.conversion-gradient {
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Botões otimizados para conversão */
.conversion-btn {
  position: relative;
  overflow: hidden;
}

.conversion-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.conversion-btn:hover::before {
  left: 100%;
}

/* Responsividade otimizada */
@media (max-width: 768px) {
  .service-card {
    margin-bottom: 1rem;
  }
}

/* Micro-interações para engajamento */
.micro-bounce {
  transition: transform 0.2s ease;
}

.micro-bounce:hover {
  transform: scale(1.05);
}

.micro-bounce:active {
  transform: scale(0.95);
}

/* Efeitos de partículas reduzidos */
.particle-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(59, 130, 246, 0.2), transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(16, 185, 129, 0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.2), transparent);
  background-repeat: repeat;
  background-size: 120px 80px;
  animation: particleFloat 15s linear infinite;
  pointer-events: none;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60px);
  }
}

/* Classes para a nova seção de CTA */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
