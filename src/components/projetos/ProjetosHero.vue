<template>
  <section id="projetos-hero" class="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
    <!-- Background Comum -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="text-center space-y-12 animate-fade-in-up">

        <!-- Badge de Status -->
        <div class="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 font-medium shadow-lg">
          <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse"></div>
          <span>Portfólio Profissional</span>
        </div>

        <!-- Título Principal -->
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Projetos que
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Transformam Ideias
            </span>
            <br>
            <span class="bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              em Realidade
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Descubra como minhas <span class="text-blue-400 font-semibold">soluções digitais inovadoras</span>
            impulsionam negócios e criam experiências excepcionais.
            Cada projeto é uma prova do meu compromisso com a
            <span class="text-emerald-400 font-semibold">excelência técnica</span> e
            <span class="text-blue-400 font-semibold">resultados tangíveis</span>.
          </p>
        </div>

        <!-- Estatísticas Premium -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
          <div class="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div class="flex items-center justify-center mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div class="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">15+</div>
            <div class="text-sm text-gray-400 font-medium">Tecnologias Dominadas</div>
          </div>

          <div class="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div class="flex items-center justify-center mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <div class="text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">100%</div>
            <div class="text-sm text-gray-400 font-medium">Código Original</div>
          </div>

          <div class="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div class="flex items-center justify-center mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">98+</div>
            <div class="text-sm text-gray-400 font-medium">Performance Score</div>
          </div>
        </div>

        <!-- Categorias Destacadas -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-8">
          <div class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl text-blue-300 font-medium hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full group-hover:animate-pulse"></div>
            <span>Desenvolvimento Full Stack</span>
          </div>
          <div class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30 rounded-2xl text-emerald-300 font-medium hover:bg-emerald-600/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
            <div class="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full group-hover:animate-pulse"></div>
            <span>Interfaces Modernas</span>
          </div>
          <div class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-2xl text-purple-300 font-medium hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div class="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full group-hover:animate-pulse"></div>
            <span>Sistemas Empresariais</span>
          </div>
        </div>

        <!-- Call to Action Premium -->
        <div class="pt-12">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#projetos"
               class="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              <span>Explorar Projetos</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>

            <a href="/contato.html"
               class="group inline-flex items-center gap-4 px-10 py-5 bg-gray-800 border-2 border-gray-700 hover:border-emerald-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span>Contratar Agora</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Scroll Indicator -->
          <div class="mt-16 flex flex-col items-center animate-bounce">
            <div class="text-gray-400 text-sm font-medium mb-2">Veja meus projetos</div>
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import CommonBackground from '../ui/CommonBackground.vue'

const emit = defineEmits(['mounted'])

onMounted(() => {
  emit('mounted')
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.9) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

