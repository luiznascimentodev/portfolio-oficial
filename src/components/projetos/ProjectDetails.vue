<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
    @click.self="$emit('close')"
    @keydown.esc="$emit('close')"
    tabindex="-1"
  >
    <div
      ref="modalRef"
      class="relative bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-md border border-gray-800/50 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
      style="box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.75);"
    >
      <!-- Efeito de brilho discreto nos cantos -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <!-- Header com controles e design minimalista -->
      <div class="flex justify-between items-center p-5 sm:p-6 border-b border-gray-800/30 backdrop-blur-md relative z-10">
        <div class="flex items-center gap-3">
          <!-- Indicador visual animado -->
          <div class="w-1.5 h-10 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500 rounded-full animate-pulse"></div>

          <!-- Título com indicador visual de importância -->
          <div>
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              {{ project.title }}
              <span class="inline-block ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-75"></span>
            </h2>
          </div>
        </div>

        <div class="flex gap-2">
          <!-- Links externos com efeitos hover aprimorados -->
          <a
            v-if="project.demo && project.demo !== '#'"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-200 flex items-center justify-center"
            title="Visitar demonstração"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            v-if="project.github && project.github !== '#'"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all duration-200 flex items-center justify-center"
            title="Ver código no GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>

          <!-- Botão fechar com efeito hover mais suave -->
          <button
            @click="$emit('close')"
            class="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30"
            aria-label="Fechar detalhes"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Conteúdo rolável com UI moderna -->
      <div class="overflow-y-auto custom-scrollbar flex-grow">
        <!-- Hero image com efeitos visuais aprimorados -->
        <div class="relative h-56 sm:h-72 md:h-80 overflow-hidden">
          <!-- Efeito de parallax sutil no hover -->
          <div class="absolute inset-0 transform hover:scale-105 transition-transform duration-700 ease-out">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Gradiente mais sofisticado -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20"></div>

          <!-- Overlay com pattern discreto -->
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2NmgtNnYtNmg2em0tNiAwdjZoLTZ2LTZoNnptMTIgMHY2aDZoLTZ2LTZ6bS0xOCAwdjZoLTZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

          <!-- Conteúdo sobre a imagem no estilo de cartão -->
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <!-- Badge de status do projeto -->


            <!-- Título e descrição em camada -->
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">{{ project.title }}</h3>
            <p class="text-sm text-gray-300 max-w-2xl line-clamp-2">{{ project.description }}</p>

            <!-- Technologies com design moderno -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(tech, index) in project.technologies"
                :key="tech"
                class="px-3 py-1.5 bg-gray-900/80 backdrop-blur-md text-xs font-medium rounded-full border border-gray-700 text-gray-300 flex items-center gap-1.5"
              >
                <span class="w-1.5 h-1.5 rounded-full" :class="[
                  index % 4 === 0 ? 'bg-blue-400' :
                  index % 4 === 1 ? 'bg-emerald-400' :
                  index % 4 === 2 ? 'bg-purple-400' :
                  'bg-amber-400'
                ]"></span>
                {{ tech }}
              </span>
            </div>
          </div>
        </div>        <!-- Conteúdo do projeto com design minimalista e seções bem estruturadas -->
        <div class="p-4 sm:p-6 space-y-6">
          <!-- Navegação por tabs redesenhada com ícones e indicadores -->
          <div class="flex border-b border-gray-800/70 mb-6 overflow-x-auto hide-scrollbar relative">
            <div class="flex">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'px-5 py-3 font-medium text-sm whitespace-nowrap flex items-center gap-2 relative transition-all duration-300',
                  activeTab === tab.id
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-200'
                ]"
                :aria-selected="activeTab === tab.id"
                role="tab"
              >
                <!-- Ícone do Tab -->
                <span class="w-5 h-5 flex items-center justify-center">
                  <svg v-if="tab.id === 'overview'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <svg v-if="tab.id === 'technical'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>

                <!-- Label do Tab -->
                {{ tab.label }}

                <!-- Indicador de tab ativo como elemento absoluto -->
                <div
                  v-if="activeTab === tab.id"
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                  style="animation: fadeSlideIn 0.3s ease-out forwards;"
                ></div>
              </button>
            </div>

            <!-- Decoração sutil no extremo direito -->
            <div class="flex-shrink-0 ml-auto h-full w-8 bg-gradient-to-r from-transparent to-gray-900/80"></div>
          </div>

          <!-- Tab: Visão Geral -->
          <!-- Tab: Visão Geral com design elegante -->
          <div v-show="activeTab === 'overview'" class="space-y-6">
            <div class="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-gray-700/30">
              <p class="text-gray-300 leading-relaxed text-sm sm:text-base">{{ project.detailedDescription }}</p>
            </div>

            <!-- Cards destacados com gradientes sutis -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Resultados -->
              <div class="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-5 rounded-xl border border-blue-900/30 hover:border-blue-600/30 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/20">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white">Resultados</h3>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">{{ project.results }}</p>
              </div>

              <!-- Desafios -->
              <div class="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-5 rounded-xl border border-purple-900/30 hover:border-purple-600/30 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/20">
                    <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white">Desafios</h3>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">{{ project.challenges }}</p>
              </div>
            </div>

            <!-- Características/Funcionalidades com ícones modernos -->
            <div class="bg-gradient-to-br from-emerald-900/10 to-gray-900/30 p-5 rounded-xl border border-emerald-900/20">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-emerald-500/20">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Funcionalidades
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                <li
                  v-for="(feature, index) in project.features"
                  :key="feature"
                  class="flex items-start gap-2 group"
                  :style="{transition: `transform 0.2s ease ${index * 50}ms`}"
                >
                  <div class="w-5 h-5 rounded flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/10 transition-colors duration-200">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tab: Detalhes Técnicos com visualização melhorada -->
          <div v-show="activeTab === 'technical'" class="space-y-6">
            <div class="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-5 rounded-xl border border-gray-700/30">
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-500/20">
                  <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                Stack Técnica
              </h3>
              <p class="text-gray-300 leading-relaxed text-sm sm:text-base">{{ project.technicalDetails }}</p>

              <!-- Tech stack visualmente sofisticado -->
              <div class="mt-6 flex flex-wrap gap-2">
                <div
                  v-for="(tech, index) in project.technologies"
                  :key="tech"
                  :style="{animationDelay: `${index * 50}ms`}"
                  class="px-3 py-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 text-blue-300 text-sm rounded-lg border border-blue-700/20 flex items-center gap-2 hover:border-blue-500/30 hover:bg-blue-900/40 transition-all duration-300"
                >
                  <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer com ações modernas -->
        <div class="border-t border-gray-800/30 p-5 flex justify-between items-center">
          <div class="text-xs text-gray-500 italic">

          </div>

          <div class="flex gap-3">
            <!-- Ver projeto - primeiro botão -->
            <a
              v-if="project.demo && project.demo !== '#'"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl hover:shadow-blue-600/20"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver projeto
            </a>

            <!-- Ver código no GitHub - segundo botão -->
            <a
              v-if="project.github && project.github !== '#'"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl hover:shadow-purple-600/20"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
              Ver código
            </a>

            <!-- Fechar - terceiro botão -->
            <button
              @click="$emit('close')"
              class="px-5 py-2.5 bg-gray-800/80 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'ProjectDetails',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup() {
    // Estado da tab ativa
    const activeTab = ref('overview')

    // Definição das tabs disponíveis
    const tabs = [
      { id: 'overview', label: 'Visão Geral' },
      { id: 'technical', label: 'Detalhes Técnicos' }
    ]

    return {
      activeTab,
      tabs,
    }
  },
  mounted() {
    // Focus trap para acessibilidade
    this.$nextTick(() => {
      // Foco no modal
      if (this.$refs.modalRef) {
        this.$refs.modalRef.focus()
      }

      // Bloquear scroll do body
      document.body.classList.add('overflow-hidden')
    })

    // Adicionar event listener para tecla ESC
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    // Restaurar scroll do body
    document.body.classList.remove('overflow-hidden')

    // Remover event listener
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
/* Animações para entrada/saída do modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar personalizada */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.4);
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.6);
}

/* Esconder scrollbar horizontal */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animação de ping mais lenta */
@keyframes ping-slow {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Animação de pulse mais lenta */
@keyframes pulse-slow {
  50% {
    opacity: 0.6;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animação para fade in de elementos */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
