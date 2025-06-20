<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Common Background -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-700/30 text-blue-400 text-sm font-medium mb-6">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Dúvidas Frequentes</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Perguntas que Recebo
          </span>
          <br>
          <span class="bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Frequentemente
          </span>
        </h2>

        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Preparei as respostas para as <span class="text-blue-400 font-semibold">principais dúvidas</span> que meus clientes costumam ter.
          <br class="hidden sm:block">
          Caso sua pergunta não esteja aqui, <span class="text-emerald-400 font-semibold">entre em contato comigo</span> diretamente.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4 mb-16">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <button
            @click="toggleFaq(faq.id)"
            class="relative w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-inset transition-all duration-300"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-white pr-6 group-hover:text-blue-300 transition-colors duration-300">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <div class="p-2 rounded-xl bg-gray-700/50 group-hover:bg-blue-600/20 transition-all duration-300">
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transform transition-all duration-300"
                    :class="openFaqs.includes(faq.id) ? 'rotate-180 text-blue-400' : ''"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <div
            v-show="openFaqs.includes(faq.id)"
            class="relative px-6 pb-6 text-gray-300 animate-fade-in"
          >
            <div class="border-t border-gray-700/50 pt-4 text-base leading-relaxed">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Call to Action -->
      <div class="text-center space-y-8 animate-fade-in-up">
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Não encontrou sua resposta?
          </h3>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Entre em contato comigo diretamente. Respondo rapidamente e adoro conversar sobre novos projetos!
          </p>
        </div>

        <!-- Contact methods grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <!-- WhatsApp - Priority -->
          <a
            href="https://wa.me/+5541984821206?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20desenvolvimento%20web."
            target="_blank"
            class="group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:border-green-500/30">
              <div class="flex items-center gap-4">
                <div class="flex-shrink-0">
                  <div class="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1 text-left">
                  <h4 class="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">WhatsApp</h4>
                  <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Resposta instantânea</p>
                  <div class="flex items-center gap-2 mt-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-xs text-green-400 font-medium">Online agora</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Email -->
          <a
            href="mailto:luiznascdev@gmail.com?subject=Dúvida%20sobre%20desenvolvimento&body=Olá%20Luiz,%0A%0ATenho%20uma%20dúvida%20sobre..."
            class="group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:border-blue-500/30">
              <div class="flex items-center gap-4">
                <div class="flex-shrink-0">
                  <div class="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1 text-left">
                  <h4 class="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Email</h4>
                  <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Resposta em até 6h</p>
                  <p class="text-xs text-blue-400 font-medium mt-2">luiznascdev@gmail.com</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Final CTA -->
        <div class="pt-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-300 text-sm font-medium">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Disponível para novos projetos</span>
            <span class="text-emerald-400">•</span>
            <span class="text-gray-400">Vamos conversar sobre sua ideia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import CommonBackground from '../ui/CommonBackground.vue'

export default {
  name: 'FAQSection',
  components: {
    CommonBackground
  },
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const openFaqs = ref([])

    const toggleFaq = (id) => {
      const index = openFaqs.value.indexOf(id)
      if (index > -1) {
        openFaqs.value.splice(index, 1)
      } else {
        openFaqs.value.push(id)
      }
    }

    return {
      openFaqs,
      toggleFaq
    }
  }
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
