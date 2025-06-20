<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
  >
    <div class="flex flex-col items-center">
      <!-- Spinner -->
      <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <!-- Loading text -->
      <div class="mt-4 text-blue-400 text-lg">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'LoadingSpinner',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    message: {
      type: String,
      default: 'Carregando...'
    }
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-spin-slow {
  animation: spin-slow 0.4s linear infinite; /* Aumentado de 0.2s para 0.4s */
  will-change: transform;
  contain: layout paint;
}

.animate-blink {
  animation: blink 0.12s step-end infinite; /* Aumentado de 0.06s para 0.12s */
  will-change: opacity;
  contain: strict;
}

/* Transição de fade mais suave */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease; /* Aumentado de 0.02s para 0.05s */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo para a borda animada */
.gradient-code-border {
  background: linear-gradient(45deg, #3b82f6, #10b981, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientBg 0.4s ease infinite; /* Aumentado de 0.2s para 0.4s */
}

@keyframes gradientBg {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
