<template>
  <div class="projects-wrapper">
    <!-- Versão personalizada dos projetos -->
    <section id="projetos" class="relative py-16 sm:py-20 overflow-hidden">
      <!-- Background comum com componente dedicado -->
      <CommonBackground class="z-0" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <!-- Section Header com efeito 3D e animações -->
        <div class="text-center mb-16 sm:mb-20 relative">


          <!-- Badge superior com efeito glow -->


          <!-- Título sem efeito de animação -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight relative inline-block">
            <span class="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Soluções Que Fazem a
            </span>
            <span class="inline-block ml-2 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Diferença
            </span>
            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500/70 to-emerald-500/70 rounded-full"></div>
          </h2>

          <!-- Descrição com destaque visual -->
          <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto relative">
            Conheça alguns dos projetos que desenvolvi combinando criatividade,
            <span class="relative inline-block">
              <span class="text-blue-400 font-medium">inovação</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/30 rounded"></span>
            </span>
            e excelência técnica
          </p>

          <!-- Elemento decorativo inferior -->

        </div>

        <!-- Projects Grid com efeito de stagger em animações -->
        <div class="relative">
          <Transition name="projects" mode="out-in" @after-leave="$emit('transition-complete')" @after-enter="$emit('transition-complete')">
            <div
              :key="currentPage"
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
              style="perspective: 1000px;"
            >
          <div
            v-for="project in projects"
            :key="project.id"
            class="group bg-gradient-to-br from-gray-800/40 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/40 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
            style="transform-style: preserve-3d;"
          >
            <!-- Project Image com efeito 3D suave -->
            <div class="relative overflow-hidden h-52">
              <img
                :src="getCorrectImagePath(project.image)"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              >

              <!-- Overlay gradient com blur suave -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-50 group-hover:opacity-70 transition-all duration-300"></div>

              <!-- Destaque visual no hover -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/10 mix-blend-overlay transition-opacity duration-300"></div>

              <!-- Badges com tecnologias -->
              <div class="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-3 py-1.5 bg-gray-900/80 backdrop-blur-md text-xs font-medium text-blue-400 rounded-full border border-blue-500/20 shadow-sm transform transition-transform duration-300 group-hover:translate-y-0 translate-y-1 group-hover:scale-105"
                  style="transition-delay: calc(var(--index) * 50ms);"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 3"
                  class="px-3 py-1.5 bg-gray-900/80 backdrop-blur-md text-xs font-medium text-gray-400 rounded-full border border-gray-500/20 shadow-sm transform transition-transform duration-300 group-hover:translate-y-0 translate-y-1"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>


            </div>

            <!-- Project Content -->
            <div class="p-6 space-y-3 flex-grow relative">
              <!-- Linha decorativa -->
              <div class="absolute left-6 top-0 w-10 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform -translate-y-1/2 group-hover:w-16 transition-all duration-300"></div>

              <!-- Title com efeito de gradiente -->
              <h3 class="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 text-white transition-all duration-300">
                {{ project.title }}
              </h3>

              <!-- Description com linha suave -->
              <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>
            </div>

            <!-- Action Button moderno -->
            <div class="px-6 pb-6 pt-2">
              <button
                @click="$emit('toggle-details', project.id)"
                class="group-btn w-full py-3 bg-gray-800/70 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-gray-300 hover:text-white text-sm font-medium rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md"
                aria-label="Ver detalhes do projeto"
              >
                <svg class="w-4 h-4 transition-transform duration-300 group-btn-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="relative">
                  Saiba mais
                  <span class="absolute -bottom-1 left-0 w-0 group-btn-hover:w-full h-0.5 bg-white rounded transition-all duration-300"></span>
                </span>
              </button>
            </div>
          </div>
            </div>
          </Transition>
        </div>

        <!-- Controles de Paginação -->
        <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 space-x-2">
          <!-- Botão de página anterior -->
          <button
            @click="$emit('prev-page')"
            :disabled="currentPage === 1"
            :class="[
              'w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300',
              currentPage === 1
                ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                : 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
            ]"
            aria-label="Página anterior"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Indicadores de página -->
          <div class="flex items-center space-x-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="$emit('change-page', page)"
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300',
                currentPage === page
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
              ]"
              :aria-label="`Página ${page}`"
              :aria-current="currentPage === page ? 'page' : undefined"
            >
              {{ page }}
            </button>
          </div>

          <!-- Botão de próxima página -->
          <button
            @click="$emit('next-page')"
            :disabled="currentPage === totalPages"
            :class="[
              'w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300',
              currentPage === totalPages
                ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                : 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
            ]"
            aria-label="Próxima página"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal de Detalhes com animações aprimoradas -->
    <Teleport to="body">
      <!-- Overlay backdrop com blur -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="expandedProjectId && selectedProject"
          class="fixed inset-0 z-40 bg-gray-900/70 backdrop-blur-sm"
          @click="$emit('toggle-details', null)"
          aria-hidden="true"
        ></div>
      </Transition>

      <!-- Modal com efeito 3D suave -->
      <Transition
        enter-active-class="transition ease-out duration-400"
        enter-from-class="opacity-0 translate-y-8 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-8 scale-95"
      >
        <ProjectDetails
          v-if="expandedProjectId && selectedProject"
          :project="selectedProject"
          @close="$emit('toggle-details', null)"
          class="modal-content"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* Efeito de transição para troca de projetos na paginação */
.projects-enter-active,
.projects-leave-active {
  transition: all 0.5s ease;
}

.projects-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.projects-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Efeito estaggered para os botões de paginação */
button {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Animação do texto de página atual */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>

<script>
import { computed, defineAsyncComponent } from 'vue'
import ProjectDetails from './ProjectDetails.vue'
import CommonBackground from '../ui/CommonBackground.vue'


export default {
  name: 'ProjectsWrapper',
  components: {
    ProjectDetails,
    CommonBackground
  },
  props: {
    projects: {
      type: Array,
      required: true
    },
    expandedProjectId: {
      type: [Number, null],
      default: null
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  emits: ['toggle-details', 'change-page', 'next-page', 'prev-page', 'transition-complete'],
  setup(props) {
    // Importar o componente ProjectsSection dinamicamente
    const ProjectsSectionComponent = defineAsyncComponent(() =>
      import('../projetos/ProjectsSection.vue')
    )

    // Encontrar o projeto selecionado
    const selectedProject = computed(() => {
      if (!props.expandedProjectId) return null
      return props.projects.find(project => project.id === props.expandedProjectId)
    })

    const getCorrectImagePath = (path) => {
      // Se o caminho já for uma URL completa (placeholder ou externa), retorna como está
      if (path.startsWith("http") || path.startsWith("https")) {
        return path;
      }

      // Para caminhos relativos começando com /, remover a / inicial
      if (path.startsWith("/assets/")) {
        return path.substring(1);
      }

      return path;
    }

    return {
      ProjectsSectionComponent,
      selectedProject,
      getCorrectImagePath,
    }
  }
}
</script>

<style scoped>
.projects-wrapper {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
