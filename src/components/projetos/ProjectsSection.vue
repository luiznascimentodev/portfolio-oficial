<template>
  <section id="projetos" class="relative min-h-screen py-20 overflow-hidden">
    <!-- Background Comum -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-8">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-blue-300 font-medium shadow-lg hover:bg-gray-800/80 transition-all duration-300">
          <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse"></div>
          <span>Portfólio Destacado</span>
        </div>

        <!-- Main Title -->
        <div class="space-y-4">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Projetos que
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Fazem a Diferença
            </span>
          </h2>
        </div>

        <!-- Description -->
        <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Cada solução desenvolvida representa inovação, qualidade técnica e
          <span class="text-blue-400 font-semibold">resultados excepcionais</span> para meus clientes
        </p>
      </div>



      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="project in currentPageProjects"
          :key="project.id"
          class="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >

            <!-- Status Badge -->
            <div class="absolute top-3 left-3">
              <span
                :class="project.status === 'Concluído'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                  : 'bg-gradient-to-r from-yellow-500 to-yellow-600'"
                class="px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <!-- Title -->
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-gray-700/60 border border-gray-600/50 text-gray-300 text-xs rounded-lg font-medium"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 3"
                class="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs rounded-lg font-medium"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-4">
              <a
                :href="project.demo || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span class="text-sm">Demo</span>
              </a>

              <a
                :href="project.github || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/60 border border-gray-600/50 hover:bg-gray-600/80 hover:border-gray-500/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="text-sm">Código</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Pagination -->
      <div class="flex flex-col items-center gap-8 mt-20">
        <!-- Navigation Controls -->
        <div class="flex items-center justify-center gap-4">
          <!-- Previous Button -->
          <button
            v-if="currentPage > 1"
            @click="previousPage"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Anterior</span>
          </button>

          <!-- Page Numbers -->
          <div class="flex items-center gap-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'w-10 h-10 rounded-xl font-bold transition-all duration-300',
                currentPage === page
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                  : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-800/80 hover:text-white hover:border-blue-500/30'
              ]"
            >
              {{ page }}
            </button>
          </div>

          <!-- Next Button -->
          <button
            v-if="currentPage < totalPages"
            @click="nextPage"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            <span>Próxima</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Page Info -->
        <div class="text-center">
          <p class="text-gray-400">
            Página <span class="text-blue-400 font-semibold">{{ currentPage }}</span>
            de <span class="text-emerald-400 font-semibold">{{ totalPages }}</span>
            <span class="mx-2">•</span>
            <span class="text-blue-400 font-semibold">{{ projects.length }}</span> projetos
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import CommonBackground from '../ui/CommonBackground.vue'


const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

// Estados reativos
const currentPage = ref(1)
const projectsPerPage = 3



// Computed properties
const totalPages = computed(() => {
  return Math.ceil(props.projects.length / projectsPerPage)
})

const currentPageProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage
  const end = start + projectsPerPage
  return props.projects.slice(start, end)
})

// Computed para páginas visíveis com elipses
const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    // Se tem 7 ou menos páginas, mostra todas
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Lógica complexa para mostrar páginas com elipses
    if (current <= 4) {
      // Início: 1 2 3 4 5 ... 10
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 3) {
      // Final: 1 ... 6 7 8 9 10
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    } else {
      // Meio: 1 ... 4 5 6 ... 10
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    }
  }

  return pages
})



// Métodos simplificados
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}
</script>

<style scoped>
/* Line clamp para limitar texto */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animações customizadas */
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

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
  }
}

/* Efeitos de glassmorphism aprimorados */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Transições suaves para todos os elementos interativos */
button, a {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects aprimorados para cards */
.group:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Efeito especial para página ativa */
.bg-gradient-to-br.from-blue-500.to-blue-600 {
  animation: glow 2s ease-in-out infinite;
}

/* Efeito de loading spinner personalizado */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Efeitos de hover para botões de navegação */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

button:not(:disabled):hover {
  transform: translateY(-2px);
}

button:not(:disabled):active {
  transform: translateY(0) scale(0.98);
}

/* Animação para separadores */
.w-px.h-6 {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

/* Responsive adjustments aprimorados */
@media (max-width: 768px) {
  .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .flex.items-center.gap-3 {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .px-6.py-3 {
    padding: 0.5rem 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Efeito de focus para acessibilidade */
button:focus-visible {
  outline: 2px solid rgba(59, 130, 246, 0.8);
  outline-offset: 2px;
}

/* Animação de entrada para novos elementos */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

/* Efeito especial para números de página */
.w-12.h-12.font-bold {
  position: relative;
  overflow: hidden;
}

.w-12.h-12.font-bold::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.w-12.h-12.font-bold:hover::before {
  left: 100%;
}

/* Custom scrollbar se necessário */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(55, 65, 81, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
