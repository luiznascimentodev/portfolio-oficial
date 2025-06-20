<template>
  <header class="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden m-0" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="z-index: 50;">
      <div class="text-center space-y-8">
        <!-- Título Principal -->
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="text-gray-100">Desenvolvimento Web</span>
            <br>
            <span class="bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              que Impulsiona Resultados
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Transforme sua presença digital com soluções modernas, responsivas e otimizadas para
            <span class="text-emerald-400 font-semibold">gerar mais leads e vendas</span> para seu negócio.
          </p>
        </div>

        <!-- Estatísticas de Serviços -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:bg-gray-800/60 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px]">
            <div class="flex items-center justify-center mb-3">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div class="text-sm text-gray-400">Projetos Entregues</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:bg-gray-800/60 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px]">
            <div class="flex items-center justify-center mb-3">
              <svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div class="text-sm text-gray-400">Aumento em Leads</div>
          </div>

          <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:bg-gray-800/60 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px]">
            <div class="flex items-center justify-center mb-3">
              <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-purple-400 mb-2">3-15</div>
            <div class="text-sm text-gray-400">Dias para Entrega</div>
          </div>
        </div>

        <!-- Serviços em Destaque -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/20 border border-blue-800/30 rounded-full text-sm text-blue-300">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            Sites Responsivos
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/20 border border-emerald-800/30 rounded-full text-sm text-emerald-300">
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            E-commerce
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-900/20 border border-purple-800/30 rounded-full text-sm text-purple-300">
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            Sistemas Web
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-900/20 border border-yellow-800/30 rounded-full text-sm text-yellow-300">
            <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
            SEO & Marketing
          </div>
        </div>

        <!-- Call-to-Action -->
        <div class="pt-8 space-y-6">
          <!-- Oferta especial -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-emerald-800/30 border border-emerald-700/40 text-emerald-300 text-sm font-medium">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span>Consulta gratuita para novos clientes</span>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicos"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              <span>Ver Todos os Serviços</span>
            </a>

            <a href="/contato.html"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/50 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          <!-- Indicador de scroll -->
          <div class="mt-12 animate-bounce">
            <svg class="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue'

export default {
  name: 'ServicosHero',
  components: {
    CommonBackground
  }
}
</script>