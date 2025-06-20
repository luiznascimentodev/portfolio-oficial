<template>
  <header id="inicio" class="min-h-[75vh] sm:min-h-[90vh] flex items-center justify-center py-10 sm:py-12 md:py-12 lg:py-16 pb-14 xs:pb-20 relative overflow-hidden print:py-8" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-30">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-5 sm:gap-8 lg:gap-10 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 animate-fade-in-up relative z-40 px-4 sm:px-1">


          <!-- Professional Title Section -->
          <div class="space-y-3 sm:space-y-4 md:space-y-5">

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Luiz
              </span>
              <br class="xs:hidden sm:block">
              <span class="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Nascimento
              </span>
            </h1>
            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start">
              <h2 class="text-2xl font-medium text-blue-100/80 flex items-center justify-center lg:justify-start flex-wrap gap-2.5">
                <span>Desenvolvedor Full Stack</span>
                <span class="h-2 w-2 rounded-full bg-blue-500/70"></span>

              </h2>
            </div>
          </div>

          <!-- Description -->
          <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Desenvolvedor apaixonado por <span class="text-blue-400 font-semibold">transformar conceitos em código</span>,
            criando soluções web inovadoras e interfaces intuitivas que geram resultados tangíveis.
          </p>

          <!-- Contact and Social Links in a professional layout -->
          <div class="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-2.5 justify-center lg:justify-start mt-3 xs:mt-4 sm:mt-5 relative z-50">
            <a href="https://www.linkedin.com/in/luiz-felippe-nascimento" target="_blank"
              class="group flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg bg-blue-900/20 border border-blue-800/20
              hover:bg-blue-800/20 transition-all duration-300 transform hover:scale-105">
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-blue-400 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="text-xs xs:text-sm text-gray-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </a>

            <a href="https://github.com/luiznascimentodev" target="_blank"
              class="group flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg bg-gray-800/40 border border-gray-700/20
              hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105">
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-gray-300 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="text-xs xs:text-sm text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            </a>

            <a href="https://wa.me/+5541984821206" target="_blank"
              class="group flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg bg-green-900/20 border border-green-800/20
              hover:bg-green-800/20 transition-all duration-300 transform hover:scale-105">
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-green-400 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
              </svg>
              <span class="text-xs xs:text-sm text-gray-300 group-hover:text-green-400 transition-colors">WhatsApp</span>
            </a>

            <a href="mailto:luiznascdev@gmail.com" target="_blank"
              class="group flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg bg-gray-800/40 border border-gray-700/20
              hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105">
              <svg class="w-4 h-4 xs:w-5 xs:h-5 text-blue-300 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-xs xs:text-sm text-gray-300 group-hover:text-blue-300 transition-colors truncate">luiznascdev@gmail.com</span>
            </a>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-2 sm:gap-3 md:gap-5 max-w-full sm:max-w-md mx-auto lg:mx-0 relative z-20 px-1 sm:px-0 mt-5">
            <div class="text-center p-2 sm:p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                +5
              </div>
              <div class="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium truncate">Anos Experiência</div>
            </div>
            <div class="text-center p-2 sm:p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                +50
              </div>
              <div class="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium truncate">Projetos</div>
            </div>
            <div class="text-center p-2 sm:p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                100%
              </div>
              <div class="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium truncate">Comprometimento</div>
            </div>
          </div>
        </div>

        <!-- Professional Profile Section -->
        <div class="animate-fade-in-up relative z-40" style="animation-delay: 0.3s;">
          <!-- Professional summary -->
          <div class="bg-gray-800/40 border border-gray-700/20 rounded-xl p-5 mb-5 transform transition-all duration-300 hover:shadow-lg hover:bg-gray-800/60">
            <h3 class="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Perfil Profissional</span>
            </h3>
            <p class="text-gray-300 text-base leading-relaxed">
                Desenvolvedor Full Stack <span class="text-blue-400 font-medium">especialista com mais de 5 anos</span>
                criando soluções digitais de ponta a ponta. Domínio em todo o ciclo de desenvolvimento:
                do back-end robusto em Node.js e PHP às interfaces interativas e responsivas
                com <span class="text-emerald-400 font-medium">Vue.js</span>, transformando desafios complexos em experiências digitais excepcionais.
            </p>
            <p class="text-gray-300 text-base leading-relaxed mt-2.5">
              Minha abordagem combina <span class="text-emerald-400 font-medium">excelência técnica</span> com visão
              estratégica, entregando produtos que funcionam perfeitamente e geram resultados mensuráveis.
            </p>
          </div>

          <!-- Key Credentials -->

          <!-- Download CV and Ver Competências -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start print:hidden relative z-50">
            <a href="/src/assets/luiz-nascimento-desenvolvedor-fullstack.pdf" target="_blank"
               class="group inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative z-50">
              <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
              <svg class="w-5 h-5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="#skills-section"
               class="group inline-flex items-center justify-center px-5 py-2.5 bg-gray-800 border border-gray-700 hover:border-blue-600 text-white text-base font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative z-50">
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Ver Competências</span>
              <svg class="w-5 h-5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Print-only contact info -->
      <div class="hidden print:flex print:flex-wrap print:justify-start print:gap-5 print:mt-3 print:text-sm print:text-gray-600">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          luiznascimentodev@gmail.com
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +55 (41) 9 8482-1206
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          Curitiba, PR
        </div>
      </div>
    </div>


  </header>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue'
import TechIcons from '../ui/TechIcons.vue'
import TypingEffect from '../ui/TypingEffect.vue'

export default {
  name: 'CurriculoHero',
  components: {
    CommonBackground,
    TechIcons,
    TypingEffect
  },
  mounted() {
    // Ajustar o espaçamento entre as seções
    const header = document.querySelector('header');
    const nextSection = header.nextElementSibling;

    if (nextSection) {
      nextSection.style.marginTop = '0';
    }

    // Desativar animações para impressão
    window.addEventListener('beforeprint', this.disableAnimations);
    window.addEventListener('afterprint', this.enableAnimations);
  },
  beforeUnmount() {
    // Remover event listeners
    window.removeEventListener('beforeprint', this.disableAnimations);
    window.removeEventListener('afterprint', this.enableAnimations);
  },
  methods: {
    disableAnimations() {
      document.body.classList.add('print-mode');
    },
    enableAnimations() {
      document.body.classList.remove('print-mode');
    }
  }
}
</script>

<style scoped>
/* Desativar animações na impressão */
@media print {
  .animate-ping,
  .animate-bounce {
    animation: none !important;
  }

  .min-h-screen {
    min-height: auto !important;
  }
}

/* Garantir transições suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Impedir sobreposição de elementos */
.relative {
  position: relative;
  z-index: 1;
}

/* Melhorar a visualização em dispositivos pequenos */
@media (max-width: 640px) {
  .grid {
    row-gap: 1.5rem;
  }
}

/* Garantir que o texto não extrapola os containers */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Melhor controle de overflow para as credenciais */
.min-w-0 {
  min-width: 0;
}

.max-w-full {
  max-width: 100%;
}

/* Estilos para os textos das credenciais */
.credential-label,
.credential-value {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  line-height: 1.2;
  display: block;
  white-space: normal;
  overflow: visible;
  width: 100%;
  padding-right: 0.1rem;
}

.credential-label {
  margin-bottom: 0.125rem;
}

.credential-value {
  font-size: 0.875rem;
  line-height: 1.25;
  margin-top: 0.125rem;
}

/* Ajustes específicos para as caixas de credenciais */
.credential-box {
  width: 100%;
  box-sizing: border-box;
  min-height: 3.5rem;
  height: auto;
  display: flex;
  align-items: center;
  min-width: 0;
}

@media (min-width: 640px) {
  .credential-box {
    min-width: 150px;
    width: auto;
  }
}

@media (min-width: 768px) {
  .credential-box {
    min-width: 160px;
  }
}

@media (min-width: 1024px) {
  .credential-box {
    min-width: 170px;
  }
}

/* Ajustes para telas pequenas com tamanhos aumentados em 25% */
@media (max-width: 480px) {
  .text-xl, .text-2xl, .text-3xl {
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .p-4, .p-5 {
    padding: 1rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-2\.5 {
    gap: 0.625rem;
  }

  .w-5, .h-5 {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* Ajustes específicos para as credenciais em telas pequenas */
  .grid-cols-2 > div {
    min-height: 0;
    padding: 0.5rem 0.75rem;
  }

  .grid-cols-2 > div svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
