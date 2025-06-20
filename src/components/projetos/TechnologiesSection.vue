<template>
  <section class="relative min-h-screen py-20 overflow-hidden">
    <!-- Background Comum -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-8">
        <!-- Badge de Status -->
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-purple-300 font-medium">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span>Arsenal Tecnológico Avançado</span>
        </div>

        <!-- Título Principal -->
        <div class="space-y-4">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Tecnologias que
            </span>
            <br>
            <span class="bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Transformam Negócios
            </span>
          </h2>
        </div>

        <!-- Descrição -->
        <p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Cada tecnologia do meu arsenal foi <span class="text-purple-400 font-semibold">estrategicamente selecionada</span>
          para entregar <span class="text-emerald-400 font-semibold">performance excepcional</span>,
          <span class="text-blue-400 font-semibold">escalabilidade empresarial</span> e
          <span class="text-yellow-400 font-semibold">ROI comprovado</span> em cada projeto
        </p>
      </div>

      <!-- Technologies Grid Principal -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16 max-w-5xl mx-auto">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="group relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-xl p-6 text-center transition-colors duration-300 hover:border-gray-600/50 cursor-pointer"
        >
          <!-- Ícone da tecnologia -->
          <div class="relative mb-4">
            <div class="w-12 h-12 mx-auto bg-gray-700/30 rounded-xl flex items-center justify-center">
              <img :src="getTechIcon(tech.name)" :alt="tech.name" class="w-8 h-8 object-contain" />
            </div>
          </div>

          <!-- Nome da tecnologia -->
          <h3 class="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
            {{ tech.name }}
          </h3>

          <!-- Descrição de valor (aparece no hover) -->
          <div class="absolute inset-x-0 bottom-0 p-3 bg-gray-900/90 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="text-xs text-gray-300 font-medium">{{ getTechValue(tech.name) }}</p>
          </div>
        </div>
      </div>

      <!-- Seção de Valor e Impacto -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Por Que Estas Tecnologias Fazem a Diferença
            </span>
          </h3>
          <p class="text-gray-400 max-w-3xl mx-auto">
            Cada escolha tecnológica é uma decisão estratégica para maximizar o sucesso do seu projeto
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Performance -->
          <div class="text-center">
            <div class="bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-6 bg-emerald-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white mb-4">Performance Otimizada</h4>
              <p class="text-gray-400 leading-relaxed">
                <span class="text-emerald-400 font-semibold">50% mais rápido</span> que soluções convencionais.
                Cada tecnologia é escolhida para entregar velocidade e eficiência máximas.
              </p>
            </div>
          </div>

          <!-- Escalabilidade -->
          <div class="text-center">
            <div class="bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/50 transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white mb-4">Escalabilidade Empresarial</h4>
              <p class="text-gray-400 leading-relaxed">
                Arquiteturas que crescem com seu negócio.
                <span class="text-blue-400 font-semibold">Suporte a milhões de usuários</span> sem comprometer a performance.
              </p>
            </div>
          </div>

          <!-- ROI -->
          <div class="text-center">
            <div class="bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 hover:border-purple-500/50 transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-6 bg-purple-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white mb-4">ROI Comprovado</h4>
              <p class="text-gray-400 leading-relaxed">
                <span class="text-purple-400 font-semibold">Redução de 70% nos custos</span> de manutenção.
                Tecnologias maduras que garantem estabilidade e retorno de investimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Especialidades Técnicas -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-8">
          <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Expertise Técnica que Gera Resultados
          </span>
        </h3>

        <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <div v-for="category in techCategories" :key="category.name"
               class="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
            <div class="w-3 h-3 rounded-full"
                 :class="category.color"></div>
            <span class="text-gray-300 font-medium">
              {{ category.name }}
            </span>
            <span class="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
              {{ category.benefit }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import CommonBackground from '../ui/CommonBackground.vue'

const props = defineProps({
  technologies: {
    type: Array,
    required: true
  }
})

// Ícones das tecnologias usando CDN devicon
const getTechIcon = (techName) => {
  const icons = {
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  }
  return icons[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
}

// Valor e impacto de cada tecnologia
const getTechValue = (techName) => {
  const values = {
    'HTML': 'Base semântica para SEO superior e acessibilidade',
    'CSS': 'Design responsivo e experiências visuais memoráveis',
    'JavaScript': 'Interatividade avançada e performance otimizada',
    'PHP': 'Backend robusto para sistemas empresariais',
    'C#': 'Soluções corporativas de alta performance',
    'Java': 'Aplicações enterprise escaláveis e seguras',
    'Vue.js': 'Interfaces reativas com desenvolvimento ágil',
    'React': 'Ecosistema maduro para aplicações complexas',
    'Node.js': 'APIs rápidas e arquitetura moderna',
    'MySQL': 'Confiabilidade comprovada em dados críticos',
    'PostgreSQL': 'Performance avançada para big data'
  }
  return values[techName] || 'Tecnologia de ponta para soluções modernas'
}

// Categorias de tecnologias (simplificadas)
const techCategories = computed(() => {
  const categories = [
    {
      name: 'Frontend & UI/UX',
      color: 'bg-blue-400',
      benefit: 'Conversão +40%'
    },
    {
      name: 'Backend & Databases',
      color: 'bg-emerald-400',
      benefit: 'Performance +60%'
    },
    {
      name: 'Linguagens Core',
      color: 'bg-yellow-400',
      benefit: 'Produtividade +80%'
    },
    {
      name: 'Frameworks Modernos',
      color: 'bg-purple-400',
      benefit: 'Time-to-Market -50%'
    }
  ]
  return categories
})
</script>

<style scoped>
/* Animações de entrada */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes gentleGlow {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
  }
  50% {
    box-shadow: 0 8px 40px rgba(139, 92, 246, 0.2);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Classes de animação */
.animate-slide-up {
  animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-fade-scale {
  animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-gentle-glow {
  animation: gentleGlow 3s ease-in-out infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Efeitos de glassmorphism modernos */
.backdrop-blur-xl {
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
}

/* Transições suaves e fluidas */
* {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Efeitos especiais de hover nos cards */
.group:hover .absolute {
  transform: scale(1.05);
}

/* Animação de entrada escalonada para os cards */
.group:nth-child(1) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
.group:nth-child(2) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
.group:nth-child(3) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
.group:nth-child(4) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both; }
.group:nth-child(5) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
.group:nth-child(6) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; }
.group:nth-child(7) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
.group:nth-child(8) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both; }
.group:nth-child(9) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
.group:nth-child(10) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both; }
.group:nth-child(11) { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both; }

/* Efeito de borda minimalista */
.group::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.group:hover::before {
  opacity: 1;
}

/* Performance optimizations */
.group {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Focus states modernos para acessibilidade */
.group:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.6);
  outline-offset: 4px;
  border-radius: 12px;
}

/* Responsividade melhorada */
@media (max-width: 768px) {
  .group {
    padding: 1rem;
  }

  .text-4xl {
    font-size: 2.25rem;
  }

  .text-6xl {
    font-size: 3rem;
  }
}

/* Scroll reveal mais suave */
@media (prefers-reduced-motion: no-preference) {
  .group {
    opacity: 0;
    transform: translateY(30px);
    animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

/* Redução de movimento para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Efeito de profundidade sutil */
.group:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Micro-interações nos ícones */
.group:hover img {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 8px 16px rgba(139, 92, 246, 0.3));
}

/* Efeito especial para os cards de valor */
.group:hover .w-16.h-16 {
  animation: gentleGlow 2s ease-in-out infinite;
}

/* Animação para os benefícios das categorias */
.group:hover .text-purple-400 {
  animation: shimmer 1.5s ease-in-out infinite;
}

/* Efeito de typing para descrições de valor */
@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover .absolute.inset-x-0.bottom-0 p {
  animation: fadeInText 0.5s ease-out 0.2s both;
}
</style>
