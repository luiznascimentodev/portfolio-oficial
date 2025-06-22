<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-90 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-90 translate-y-2"
  >
    <button
      v-if="show"
      class="back-to-top-btn"
      @click="scrollToTop"
      title="Voltar ao topo da página"
      aria-label="Voltar ao topo da página"
    >
      <div class="flex flex-col items-center justify-center w-full h-full">
        <svg
          class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <!-- Seta para cima mais clara -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v12" />
        </svg>
        <span class="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 mt-1 hidden sm:inline">Topo</span>
        <span class="sr-only">Voltar ao topo</span>
      </div>
    </button>
  </Transition>
</template>

<script>
export default {
  name: 'BackToTopButton',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top-btn {
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  z-index: 9999 !important;
  width: 2.5rem !important;
  height: 2.5rem !important;
  background-color: rgba(17, 24, 39, 0.9) !important;
  backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(55, 65, 81, 0.3) !important;
  border-radius: 0.5rem !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  outline: none !important;
  transform: scale(0.9) !important;
}

.back-to-top-btn:hover {
  background-color: rgba(37, 99, 235, 0.2) !important;
  border-color: rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.25) !important;
  transform: scale(1) !important;
}

.back-to-top-btn svg {
  width: 1.125rem !important;
  height: 1.125rem !important;
  color: rgb(156, 163, 175) !important;
  transition: color 0.3s ease !important;
}

.back-to-top-btn:hover svg {
  color: rgb(96, 165, 250) !important;
}

/* Garantir que funcione em todos os viewports */
@media (max-width: 640px) {
  .back-to-top-btn {
    bottom: 1rem !important;
    right: 1rem !important;
    width: 2.25rem !important;
    height: 2.25rem !important;
  }

  .back-to-top-btn svg {
    width: 1rem !important;
    height: 1rem !important;
  }
}

@media (min-width: 640px) {
  .back-to-top-btn {
    width: 3rem !important;
    height: 3rem !important;
  }

  .back-to-top-btn svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}
</style>
