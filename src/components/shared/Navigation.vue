<template>
  <nav :class="[
    'w-full z-50 transition-all duration-200',
    isScrolled ? 'fixed top-0 left-0 right-0 shadow-lg bg-gray-900/95 backdrop-blur-xl border-b border-blue-900/30' : 'relative bg-gray-900/90 backdrop-blur-lg border-b border-gray-800'
  ]">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div class="flex items-center h-14 sm:h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-72">
          <a href="/"
             class="block"
             aria-label="Ir para página inicial">
            <NavigationTyping />
          </a>
        </div>

        <!-- Desktop Navigation - Centralizado -->
        <div class="hidden md:flex items-center justify-center flex-1">
          <div class="flex items-center space-x-1 bg-gray-900/50 rounded-full p-1" role="navigation" aria-label="Menu principal">
            <a v-for="item in navigation"
               :key="item.name"
               :href="item.href"
               :aria-current="item.current ? 'page' : undefined"
               class="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
               :class="item.current
                 ? 'bg-gray-800 text-blue-400 shadow-sm'
                 : 'text-gray-200 hover:text-white hover:bg-gray-800/50'">
              <span class="relative z-10">{{ item.name }}</span>
              <div v-if="item.current" class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-500/10 rounded-full"></div>
            </a>
          </div>
        </div>

        <!-- Right side actions -->
        <div class="flex items-center space-x-2 sm:space-x-3 flex-1 md:flex-none md:w-56 lg:w-72 justify-end">
          <!-- CTA flutuante visível apenas quando rolado na versão desktop -->
          <a
            v-if="isScrolled"
            href="/contato.html"
            aria-label="Iniciar novo projeto"
            class="hidden md:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span class="text-xs sm:text-sm font-medium">Iniciar Projeto</span>
            <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <!-- Mobile menu button com efeito baseado no scroll -->
          <button
            @click="$emit('toggle-mobile-menu')"
            aria-label="Abrir menu de navegação"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-navigation-menu"
            aria-haspopup="true"
            role="button"
            :class="[
              'md:hidden p-2 sm:p-2.5 rounded-full transition-all duration-200',
              isScrolled
                ? 'bg-blue-700 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                : 'bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900'
            ]">
            <svg class="w-5 h-5 transition-transform duration-200"
                 :class="mobileMenuOpen ? 'rotate-90' : 'rotate-0'"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 aria-hidden="true">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        id="mobile-navigation-menu"
        v-show="mobileMenuOpen"
        role="navigation"
        aria-label="Menu de navegação mobile"
        :class="[
          'md:hidden left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg',
          isScrolled ? 'fixed top-14 sm:top-16' : 'absolute top-full'
        ]"
        @click.self="$emit('close-mobile-menu')">
        <div class="px-3 sm:px-4 py-3 sm:py-4 space-y-1.5 sm:space-y-2">
          <a v-for="item in navigation"
             :key="item.name"
             :href="item.href"
             :aria-current="item.current ? 'page' : undefined"
             class="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
             :class="item.current
               ? 'bg-gradient-to-r from-blue-900/20 to-emerald-900/20 text-blue-400 border border-blue-800'
               : 'text-gray-200 hover:bg-gray-800 hover:text-white'"
             @click="$emit('close-mobile-menu')">
            <span>{{ item.name }}</span>
            <svg v-if="item.current" class="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </a>

          <!-- CTA no menu mobile -->
          <a href="/contato.html"
             aria-label="Iniciar novo projeto"
             class="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-medium rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
             @click="$emit('close-mobile-menu')">
            <span>Iniciar Projeto</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import NavigationTyping from '../legacy/NavigationTyping.vue'

export default {
  name: 'Navigation',
  components: {
    NavigationTyping
  },
  props: {
    mobileMenuOpen: Boolean,
    navigation: Array
  },
  setup(props, { emit }) {
    const isScrolled = ref(false)
    const navHeight = ref(64) // Altura padrão do menu (h-16 = 64px)

    // Implementação de throttle (limitar frequência de chamadas)
    const throttle = (func, delay) => {
      let inThrottle = false
      let lastFunc = null
      let lastRan = 0

      return function() {
        const context = this
        const args = arguments

        if (!inThrottle) {
          func.apply(context, args)
          lastRan = Date.now()
          inThrottle = true
          setTimeout(() => {
            inThrottle = false
            if (lastFunc) {
              lastFunc.apply(context, args)
              lastFunc = null
            }
          }, delay)
        } else {
          // Armazena a última chamada para executar após o término do throttle
          lastFunc = func
        }
      }
    }

    // Implementação de debounce para transições mais suaves
    const debounce = (func, delay) => {
      let debounceTimer
      return function() {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
      }
    }

    // Variáveis para gerenciar o estado de scroll
    let lastScrollState = false
    let scrollTimeout = null
    let debounceTimeout = null

    // Função para verificar o scroll e atualizar o estado
    const checkScroll = () => {
      const scrolled = window.scrollY > 50

      // Lógica para evitar flickering durante scroll
      if (lastScrollState && !scrolled) {
        // Ao rolar para cima e passar do limite, atrasamos a mudança
        if (scrollTimeout) clearTimeout(scrollTimeout)

        scrollTimeout = setTimeout(() => {
          if (window.scrollY <= 50) { // Verificar novamente para garantir
            isScrolled.value = false
            lastScrollState = false
            updateNavHeight()
            emit('scroll-state-change', { scrolled: false, height: navHeight.value })
          }
        }, 300) // 300ms de atraso antes de remover a navegação fixa
      } else if (!lastScrollState && scrolled) {
        // Ao rolar para baixo e passar do limite, mudança imediata
        if (scrollTimeout) clearTimeout(scrollTimeout)
        isScrolled.value = true
        lastScrollState = true
        updateNavHeight()
        emit('scroll-state-change', { scrolled: true, height: navHeight.value })
      }
    }

    // Função para atualizar a altura da navegação
    const updateNavHeight = () => {
      nextTick(() => {
        const navElement = document.querySelector('nav')
        if (navElement) {
          navHeight.value = navElement.offsetHeight
        }
      })
    }

    // Versão throttled da função de checagem
    const throttledCheckScroll = throttle(checkScroll, 100)

    // Adiciona os event listeners quando o componente é montado
    onMounted(() => {
      // Verifica o estado inicial do scroll
      checkScroll()

      // Adiciona o event listener com throttle
      window.addEventListener('scroll', throttledCheckScroll, { passive: true })

      // Atualiza a altura inicial do menu
      updateNavHeight()

      emit('mounted')
    })

    // Remove os event listeners quando o componente é desmontado
    onUnmounted(() => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      if (debounceTimeout) clearTimeout(debounceTimeout)
      window.removeEventListener('scroll', throttledCheckScroll)
    })

    return {
      isScrolled,
      navHeight
    }
  },
  emits: ['toggle-mobile-menu', 'close-mobile-menu', 'scroll-state-change', 'mounted']
}
</script>

<style scoped>
/* Estilo para navegação flutuante */
.fixed-navigation {
  position: fixed;
  animation: slideDownNav 0.3s ease-out forwards;
  width: 100%;
  will-change: transform, opacity;
  /* Força o uso de aceleração de hardware */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@keyframes slideDownNav {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Adiciona estabilidade para transição */
nav {
  transition-property: background-color, box-shadow, border-color;
  transition-duration: 0.2s;
}

/* Estilo para sombra animada quando em modo flutuante */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2);
}

/* Efeito de glassmorphism mais acentuado quando em modo flutuante */
.backdrop-blur-xl {
  backdrop-filter: blur(16px);
}
</style>
