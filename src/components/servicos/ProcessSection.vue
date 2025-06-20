<template>
  <section class="relative overflow-hidden m-0" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-50">
      <!-- Header da seção otimizado -->
      <div class="text-center mb-12">
        <!-- Badge superior compacto -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-semibold mb-6 shadow-lg">
          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span>Processo que Converte</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            5 Etapas Simples
          </span>
          <br>
          para seu Sucesso Digital
        </h2>

        <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Nossa metodologia <strong class="text-blue-400">estratégica em 5 etapas</strong> já transformou negócios comuns em <strong class="text-emerald-400">líderes digitais</strong>  <span class="text-purple-300">planejamento inicial</span> à <span class="text-pink-300">entrega final</span>, cada passo foi projetado para maximizar seu <strong class="text-emerald-400">retorno sobre investimento</strong>.
        </p>
      </div>

      <!-- Timeline do processo otimizado -->
      <div class="relative">
        <!-- Linha conectora central simplificada -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden lg:block opacity-40"></div>

        <!-- Etapas do processo compactas -->
        <div class="space-y-8 lg:space-y-12">
          <div
            v-for="(step, index) in process"
            :key="step.id"
            class="flex flex-col lg:flex-row items-center relative"
            :class="index % 2 === 0 ? '' : 'lg:flex-row-reverse'"
          >
            <!-- Número da etapa tecnológico -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl items-center justify-center text-white font-bold text-lg z-20 shadow-2xl hidden lg:flex tech-number"
              :class="{
                'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/50': getStepColor(step.icon) === 'blue',
                'bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 shadow-purple-500/50': getStepColor(step.icon) === 'purple',
                'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-emerald-500/50': getStepColor(step.icon) === 'emerald',
                'bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 shadow-yellow-500/50': getStepColor(step.icon) === 'yellow',
                'bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 shadow-pink-500/50': getStepColor(step.icon) === 'pink'
              }"
            >
              <!-- Inner Glow Effect -->
              <div class="absolute inset-0 rounded-2xl opacity-60 blur-md"
                :class="{
                  'bg-blue-400': getStepColor(step.icon) === 'blue',
                  'bg-purple-400': getStepColor(step.icon) === 'purple',
                  'bg-emerald-400': getStepColor(step.icon) === 'emerald',
                  'bg-yellow-400': getStepColor(step.icon) === 'yellow',
                  'bg-pink-400': getStepColor(step.icon) === 'pink'
                }"
              ></div>
              <!-- Animated Border -->
              <div class="absolute inset-0 rounded-2xl border border-white/20 animate-pulse"></div>
              <span class="relative z-10 font-black">{{ index + 1 }}</span>
            </div>

            <!-- Conteúdo da etapa moderno -->
            <div class="w-full lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'">
              <div class="group relative tech-card bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
                :class="{
                  'hover:shadow-blue-500/15 hover:border-blue-500/40': getStepColor(step.icon) === 'blue',
                  'hover:shadow-purple-500/15 hover:border-purple-500/40': getStepColor(step.icon) === 'purple',
                  'hover:shadow-emerald-500/15 hover:border-emerald-500/40': getStepColor(step.icon) === 'emerald',
                  'hover:shadow-yellow-500/15 hover:border-yellow-500/40': getStepColor(step.icon) === 'yellow',
                  'hover:shadow-pink-500/15 hover:border-pink-500/40': getStepColor(step.icon) === 'pink'
                }"
              >
                <!-- Tech Background Pattern -->
                <div class="absolute inset-0 opacity-5">
                  <div class="absolute top-0 left-0 w-full h-full"
                    style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 20px 20px;">
                  </div>
                </div>

                <!-- Circuit Pattern -->
                <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg width="40" height="40" viewBox="0 0 40 40" class="text-current">
                    <path d="M0 20h8v-8h8v16h8v-8h8v8h8" stroke="currentColor" stroke-width="1" fill="none"/>
                    <circle cx="8" cy="12" r="2" fill="currentColor"/>
                    <circle cx="24" cy="20" r="2" fill="currentColor"/>
                    <circle cx="32" cy="28" r="2" fill="currentColor"/>
                  </svg>
                </div>

                <!-- Data Particles -->
                <div class="absolute inset-0 pointer-events-none overflow-hidden">
                  <div class="absolute top-8 left-8 w-1 h-1 bg-current opacity-30 rounded-full animate-ping" style="animation-delay: 0s;"></div>
                  <div class="absolute bottom-12 right-12 w-1.5 h-1.5 bg-current opacity-20 rounded-full animate-ping" style="animation-delay: 1s;"></div>
                  <div class="absolute top-16 right-20 w-0.5 h-0.5 bg-current opacity-40 rounded-full animate-ping" style="animation-delay: 2s;"></div>
                </div>

                <!-- Glowing Edge Effect -->
                <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  :class="{
                    'bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10': getStepColor(step.icon) === 'blue',
                    'bg-gradient-to-r from-purple-600/10 via-transparent to-purple-600/10': getStepColor(step.icon) === 'purple',
                    'bg-gradient-to-r from-emerald-600/10 via-transparent to-emerald-600/10': getStepColor(step.icon) === 'emerald',
                    'bg-gradient-to-r from-yellow-600/10 via-transparent to-yellow-600/10': getStepColor(step.icon) === 'yellow',
                    'bg-gradient-to-r from-pink-600/10 via-transparent to-pink-600/10': getStepColor(step.icon) === 'pink'
                  }"
                ></div>

                <!-- Tech Header -->
                <div class="relative z-10 flex items-center mb-6">
                  <!-- Tech Icon Container -->
                  <div class="relative p-4 rounded-2xl mr-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    :class="{
                      'bg-gradient-to-br from-blue-600/30 to-blue-800/30 shadow-lg shadow-blue-500/20': getStepColor(step.icon) === 'blue',
                      'bg-gradient-to-br from-purple-600/30 to-purple-800/30 shadow-lg shadow-purple-500/20': getStepColor(step.icon) === 'purple',
                      'bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 shadow-lg shadow-emerald-500/20': getStepColor(step.icon) === 'emerald',
                      'bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 shadow-lg shadow-yellow-500/20': getStepColor(step.icon) === 'yellow',
                      'bg-gradient-to-br from-pink-600/30 to-pink-800/30 shadow-lg shadow-pink-500/20': getStepColor(step.icon) === 'pink'
                    }"
                  >
                    <!-- Inner Glow -->
                    <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                      :class="{
                        'bg-blue-500/40': getStepColor(step.icon) === 'blue',
                        'bg-purple-500/40': getStepColor(step.icon) === 'purple',
                        'bg-emerald-500/40': getStepColor(step.icon) === 'emerald',
                        'bg-yellow-500/40': getStepColor(step.icon) === 'yellow',
                        'bg-pink-500/40': getStepColor(step.icon) === 'pink'
                      }"
                    ></div>

                    <component :is="getStepIcon(step.icon)"
                      class="w-7 h-7 relative z-10 transition-colors duration-300"
                      :class="{
                        'text-blue-300 group-hover:text-blue-200': getStepColor(step.icon) === 'blue',
                        'text-purple-300 group-hover:text-purple-200': getStepColor(step.icon) === 'purple',
                        'text-emerald-300 group-hover:text-emerald-200': getStepColor(step.icon) === 'emerald',
                        'text-yellow-300 group-hover:text-yellow-200': getStepColor(step.icon) === 'yellow',
                        'text-pink-300 group-hover:text-pink-200': getStepColor(step.icon) === 'pink'
                      }"
                    />
                  </div>

                  <!-- Número mobile tech -->
                  <div class="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm mr-4 shadow-lg"
                    :class="{
                      'bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-500/30': getStepColor(step.icon) === 'blue',
                      'bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-500/30': getStepColor(step.icon) === 'purple',
                      'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-500/30': getStepColor(step.icon) === 'emerald',
                      'bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-yellow-500/30': getStepColor(step.icon) === 'yellow',
                      'bg-gradient-to-br from-pink-500 to-pink-700 shadow-pink-500/30': getStepColor(step.icon) === 'pink'
                    }"
                  >
                    {{ index + 1 }}
                  </div>

                  <!-- Tech Title Section -->
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h3 class="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                        :class="{
                          'group-hover:from-blue-300 group-hover:to-blue-400': getStepColor(step.icon) === 'blue',
                          'group-hover:from-purple-300 group-hover:to-purple-400': getStepColor(step.icon) === 'purple',
                          'group-hover:from-emerald-300 group-hover:to-emerald-400': getStepColor(step.icon) === 'emerald',
                          'group-hover:from-yellow-300 group-hover:to-yellow-400': getStepColor(step.icon) === 'yellow',
                          'group-hover:from-pink-300 group-hover:to-pink-400': getStepColor(step.icon) === 'pink'
                        }"
                      >
                        {{ step.title }}
                      </h3>
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full h-1 bg-gray-700/30 rounded-full overflow-hidden mb-2">
                      <div class="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                        :style="{ width: ((index + 1) / process.length * 100) + '%' }"
                        :class="{
                          'bg-gradient-to-r from-blue-500 to-blue-400': getStepColor(step.icon) === 'blue',
                          'bg-gradient-to-r from-purple-500 to-purple-400': getStepColor(step.icon) === 'purple',
                          'bg-gradient-to-r from-emerald-500 to-emerald-400': getStepColor(step.icon) === 'emerald',
                          'bg-gradient-to-r from-yellow-500 to-yellow-400': getStepColor(step.icon) === 'yellow',
                          'bg-gradient-to-r from-pink-500 to-pink-400': getStepColor(step.icon) === 'pink'
                        }"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Tech Description -->
                <div class="relative z-10 mb-6">
                  <p class="text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {{ step.description }}
                  </p>
                </div>

                <!-- Tech Results Panel -->
                <div class="relative z-10 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700/40 backdrop-blur-sm group-hover:border-gray-600/60 transition-all duration-300">
                  <!-- Mini Circuit Pattern -->
                  <div class="absolute top-2 right-2 opacity-10">
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-emerald-400">
                      <path d="M2 10h4v-4h4v8h4v-4h4" stroke="currentColor" stroke-width="0.5" fill="none"/>
                      <circle cx="6" cy="6" r="1" fill="currentColor"/>
                      <circle cx="14" cy="10" r="1" fill="currentColor"/>
                    </svg>
                  </div>

                  <div class="flex items-start gap-3">
                    <!-- Result Icon -->
                    <div class="relative p-2 rounded-lg"
                      :class="{
                        'bg-blue-500/20': getStepColor(step.icon) === 'blue',
                        'bg-purple-500/20': getStepColor(step.icon) === 'purple',
                        'bg-emerald-500/20': getStepColor(step.icon) === 'emerald',
                        'bg-yellow-500/20': getStepColor(step.icon) === 'yellow',
                        'bg-pink-500/20': getStepColor(step.icon) === 'pink'
                      }"
                    >
                      <!-- Glow effect for icon -->
                      <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"
                        :class="{
                          'bg-blue-400/40': getStepColor(step.icon) === 'blue',
                          'bg-purple-400/40': getStepColor(step.icon) === 'purple',
                          'bg-emerald-400/40': getStepColor(step.icon) === 'emerald',
                          'bg-yellow-400/40': getStepColor(step.icon) === 'yellow',
                          'bg-pink-400/40': getStepColor(step.icon) === 'pink'
                        }"
                      ></div>
                      <svg class="w-4 h-4 text-emerald-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                    </div>

                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="text-sm font-bold text-emerald-400">Resultado Esperado</span>
                        <div class="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
                      </div>                      <p class="text-sm text-gray-300 font-medium leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{{ getStepResult(step.icon) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Espaço vazio no desktop -->
            <div class="hidden lg:block lg:w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- CTA da seção otimizado -->
      <div class="text-center mt-16">
        <div class="relative bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-800/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 overflow-hidden">
          <!-- Background decoration compacto -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-2 left-2 w-20 h-20 bg-blue-600/20 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute bottom-2 right-2 w-20 h-20 bg-emerald-600/20 rounded-full blur-xl animate-pulse" style="animation-delay: 2s"></div>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 rounded-full text-emerald-300 text-sm font-semibold mb-4">
              <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Resultados Comprovados</span>
            </div>

            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
              Pronto para <span class="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Transformar</span> seu Negócio?
            </h3>

            <p class="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Sistema revolucionário que já <strong class="text-emerald-400">catapultou diversos negócios</strong> de estagnados para líderes de mercado.
              <br class="hidden sm:block">
              <span class="text-blue-300 font-semibold">Transforme seu faturamento com resultados significativos e duradouros</span>
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5541984821206"
                target="_blank"
                class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 overflow-hidden"
              >
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/20 to-emerald-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                  </svg>
                  Quero Aumentar Minhas Vendas
                </span>

                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              <a
                href="/contato.html"
                class="group relative inline-flex items-center gap-2 px-6 py-4 border-2 border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Análise Gratuita
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue'

export default {
  name: 'ProcessSection',
  components: {
    CommonBackground
  },
  props: {
    process: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup() {
    const getStepColor = (icon) => {
      const colors = {
        discovery: 'blue',
        design: 'purple',
        development: 'emerald',
        testing: 'yellow',
        delivery: 'pink'
      }
      return colors[icon] || 'blue'
    }

    const getStepIcon = (iconType) => {
      return {
        template: `
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-8 h-8">
            ${getIconPath(iconType)}
          </svg>
        `
      }
    }

    const getIconPath = (iconType) => {
      switch(iconType) {
        case 'discovery':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>'
        case 'design':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>'
        case 'development':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
        case 'testing':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
        case 'delivery':
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>'
        default:
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>'
      }
    }

    const getStepDeliverables = (icon) => {
      const deliverables = {
        discovery: 'Briefing & Estratégia',
        design: 'Protótipos & UI',
        development: 'Código & Deploy',
        testing: 'QA & Validação',
        delivery: 'Entrega & Docs'
      }
      return deliverables[icon] || 'Entregáveis'
    }

    const getStepTools = (icon) => {
      const tools = {
        discovery: 'Miro & Figma',
        design: 'Figma & Adobe',
        development: 'VS Code & Git',
        testing: 'Cypress & Jest',
        delivery: 'Vercel & GitHub'
      }
      return tools[icon] || 'Ferramentas'
    }

    const getStepCommunication = (icon) => {
      const communication = {
        discovery: 'Calls Diárias',
        design: 'Reviews & Feedback',
        development: 'Updates Semanais',
        testing: 'Reports & Demos',
        delivery: 'Handoff & Suporte'
      }
      return communication[icon] || 'Comunicação'
    }

    const getStepResult = (icon) => {
      const results = {
        discovery: 'Estratégia clara para triplicar suas vendas online',
        design: 'Design que converte visitantes em clientes pagantes',
        development: 'Sistema otimizado para máxima performance e conversão',
        testing: 'Produto 100% funcional e livre de bugs',
        delivery: 'Negócio pronto para gerar receita imediatamente'
      }
      return results[icon] || 'Resultado garantido'
    }

    return {
      getStepColor,
      getStepIcon,
      getStepDeliverables,
      getStepTools,
      getStepCommunication,
      getStepResult
    }
  }
}
</script>

<style scoped>
/* Animações otimizadas para conversão */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Efeitos de hover otimizados */
.step-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-card:hover {
  transform: translateY(-4px) scale(1.01);
}

.step-card:hover .step-icon {
  transform: scale(1.05);
}

/* Timeline conectora compacta */
.timeline-connector {
  background: linear-gradient(
    to bottom,
    #3b82f6,
    #8b5cf6,
    #10b981
  );
  opacity: 0.4;
}

/* Efeito de cristal otimizado */
.glass-effect {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.4);
}

/* Scroll reveal otimizado */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Gradiente de texto para conversão */
.conversion-gradient {
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Botões otimizados para conversão */
.conversion-btn {
  position: relative;
  overflow: hidden;
}

.conversion-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.conversion-btn:hover::before {
  left: 100%;
}

/* Responsividade otimizada */
@media (max-width: 768px) {
  .step-card {
    margin-bottom: 1rem;
  }

  .timeline-connector {
    display: none;
  }
}

/* Micro-interações para engajamento */
.micro-bounce {
  transition: transform 0.2s ease;
}

.micro-bounce:hover {
  transform: scale(1.05);
}

.micro-bounce:active {
  transform: scale(0.95);
}

/* Efeitos de partículas reduzidos */
.particle-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(59, 130, 246, 0.2), transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(16, 185, 129, 0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.2), transparent);
  background-repeat: repeat;
  background-size: 120px 80px;
  animation: particleFloat 15s linear infinite;
  pointer-events: none;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60px);
  }
}

/* Efeitos tecnológicos específicos */
.tech-card {
  position: relative;
}

.tech-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-number {
  position: relative;
  overflow: hidden;
}

.tech-number::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: rotate 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-number:hover::before {
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Shimmer effect para resultados */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

/* Data flow animation */
@keyframes dataFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.data-flow {
  animation: dataFlow 3s ease-in-out infinite;
}
</style>