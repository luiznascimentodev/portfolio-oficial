<template>
  <div class="min-h-screen bg-gray-900 relative">
    <!-- Background simples sem componente externo -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <!-- Efeito de partículas simples -->
      <div class="absolute inset-0 opacity-20">
        <div v-for="i in 50" :key="i"
             :class="`absolute w-1 h-1 bg-blue-400 rounded-full animate-ping`"
             :style="{
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 3 + 's'
             }"></div>
      </div>
    </div>

    <!-- Navigation Simples -->
    <nav class="relative z-10 w-full bg-gray-900/90 backdrop-blur-lg border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-bold text-white">Luiz Nascimento</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {{ item.name }}
              </a>
            </div>
          </div>
          <a href="/contato.html"
             class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Contato
          </a>
        </div>
      </div>
    </nav>

    <!-- 404 Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div class="text-center max-w-2xl mx-auto">
        <!-- 404 Icon -->
        <div class="mb-8">
          <div class="w-32 h-32 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl flex items-center justify-center border border-red-700/30 shadow-2xl backdrop-blur-sm mx-auto">
            <svg class="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        <!-- Error Number -->
        <h1 class="text-8xl sm:text-9xl font-bold leading-none mb-4">
          <span class="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-8"></div>

        <!-- Error Messages -->
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Página Não Encontrada
        </h2>

        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          Parece que você se perdeu no código! A página que você está procurando
          <span class="text-red-400 font-semibold">não existe</span> ou foi movida para outro lugar.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/"
             class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Voltar ao Início
          </a>

          <button @click="goBack"
                  class="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-600 transition-all duration-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Voltar
          </button>
        </div>
      </div>
    </div>

    <!-- Footer Simples -->
    <footer class="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} Luiz Nascimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button v-show="showBackToTop" @click="scrollToTop"
            class="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NotFound404App',
  setup() {
    const showBackToTop = ref(false)

    const navigation = [
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ]

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const goBack = () => {
      // Verifica se há histórico para voltar
      if (window.history.length > 1) {
        window.history.back()
      } else {
        // Se não há histórico, vai para a página inicial
        window.location.href = '/'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // Log opcional para analytics
      console.log('404 Error - Page not found:', window.location.pathname)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showBackToTop,
      navigation,
      scrollToTop,
      goBack
    }
  }
}
</script>
