<template>
  <section class="skills-section relative min-h-[80vh] flex items-center justify-center py-8 sm:py-10 lg:py-12 overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 scale-[0.8] transform-gpu">
      <!-- Hard Skills Section -->
      <div class="mb-16">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl sm:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Expertise Técnica
            </span>
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Domínio comprovado das tecnologias de ponta que impulsionam os resultados de negócios na transformação digital</p>
        </div>

        <!-- Technologies Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="tech in technologies" :key="tech.name"
               class="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50
                      hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center">
                <img :src="tech.logo" :alt="tech.name" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{{ tech.name }}</h3>
              <p class="text-gray-400 text-sm">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="mt-24 relative">
        <!-- Floating Elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div class="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div class="text-center mb-16 relative">
          <h2 class="text-4xl sm:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Diferenciais Estratégicos
            </span>
          </h2>
          <p class="text-gray-400 opacity-90 text-lg font-light max-w-3xl mx-auto">
            Competências comportamentais comprovadas que agregam valor imediato e potencializam equipes de alto desempenho
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="skill in softSkills" :key="skill.name"
               class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div class="relative p-6 sm:p-8 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-2xl border border-gray-700 border-opacity-20
                      hover:bg-opacity-30 transition-all duration-500 group-hover:border-opacity-40">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="p-3 rounded-xl bg-gray-800 bg-opacity-40 backdrop-blur-sm border border-gray-700 border-opacity-20 shadow-sm hover:shadow-md transition-all duration-300">
                    <component :is="skill.icon" class="w-5 h-5 text-blue-400 opacity-90 group-hover:text-emerald-400 transition-colors duration-300"/>
                  </div>
                  <h3 class="text-lg font-medium text-white opacity-90 group-hover:text-white transition-colors duration-300">
                    {{ skill.name }}
                  </h3>
                </div>
                <p class="text-gray-400 opacity-90 text-sm leading-relaxed pl-[52px]">
                  {{ skill.description }}
                </p>
                <!-- Removed percentage indicators -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CommonBackground from '../ui/CommonBackground.vue'
import { h } from 'vue'

// Componente base simples para ícones modernos
const IconBase = {
  props: ['icon'],
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      class: 'w-6 h-6',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, this.icon.map(d => h('path', { d })));
  }
}

// Ícone de Liderança e Trabalho em Equipe
const TeamIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6.75 9a2 2 0 11-4 0 2 2 0 014 0z'
      ]
    };
  }
}

// Ícone de Resolução de Problemas
const LightbulbIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
      ]
    };
  }
}

// Ícone de Gestão de Projetos
const ChartIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z',
        'M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z',
        'M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
      ]
    };
  }
}

// Ícone de Comunicação Efetiva
const CommunicationIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
      ]
    };
  }
}

// Ícone de Adaptabilidade
const PuzzleIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z'
      ]
    };
  }
}

// Ícone de Gestão de Tempo
const TimeIcon = {
  extends: IconBase,
  setup() {
    return {
      icon: [
        'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
      ]
    };
  }
}

const technologies = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Maestria em JavaScript moderno (ES6+) com foco em performance e aplicações escaláveis de nível empresarial.'
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Desenvolvimento de estruturas web otimizadas para SEO, acessibilidade e compatibilidade multiplataforma.'
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Criação de interfaces responsivas de alta fidelidade com animações otimizadas e experiências visuais impactantes.'
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    description: 'Especialista em Vue.js com Composition API para desenvolvimento de aplicações SPA e SSR de alto desempenho e baixa latência.'
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Implementação de soluções avançadas com React e ecossistema Redux, otimizadas para performance e experiência do usuário.'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Desenvolvimento robusto com TypeScript para garantir manutenibilidade e prevenção de erros em projetos de grande escala.'
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Modelagem e otimização de bancos de dados MySQL para aplicações críticas, garantindo integridade e performance em alta carga.'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    description: 'Implementação de soluções avançadas com PostgreSQL, utilizando recursos como JSON, particionamento e full-text search.'
  }
]

const softSkills = [
  {
    name: 'Liderança e Trabalho em Equipe',
    description: 'Histórico comprovado de liderança técnica e colaboração que eleva a produtividade da equipe, reduzindo o tempo de entrega em até 30% em projetos anteriores.',
    icon: TeamIcon,
    iconBgClass: 'bg-gradient-to-br from-blue-600 to-blue-800',
    gradientClass: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  {
    name: 'Resolução de Problemas',
    description: 'Capacidade excepcional de identificar gargalos técnicos e implementar soluções inovadoras que reduziram bugs em produção em 75% em projetos anteriores.',
    icon: LightbulbIcon,
    iconBgClass: 'bg-gradient-to-br from-purple-600 to-purple-800',
    gradientClass: 'bg-gradient-to-r from-purple-400 to-purple-600'
  },
  {
    name: 'Gestão de Projetos',
    description: 'Experiência com metodologias ágeis e entrega contínua, conduzindo projetos complexos à conclusão bem-sucedida com cumprimento consistente de prazos e orçamentos.',
    icon: ChartIcon,
    iconBgClass: 'bg-gradient-to-br from-green-600 to-green-800',
    gradientClass: 'bg-gradient-to-r from-green-400 to-green-600'
  },
  {
    name: 'Comunicação Efetiva',
    description: 'Excelência em traduzir conceitos técnicos para stakeholders não-técnicos, facilitando alinhamento entre equipes e clientes para decisões estratégicas precisas.',
    icon: CommunicationIcon,
    iconBgClass: 'bg-gradient-to-br from-pink-600 to-pink-800',
    gradientClass: 'bg-gradient-to-r from-pink-400 to-pink-600'
  },
  {
    name: 'Adaptabilidade e Aprendizado Rápido',
    description: 'Histórico de domínio de novas tecnologias em tempo recorde, com implementação de soluções inovadoras que impulsionam a vantagem competitiva da empresa.',
    icon: PuzzleIcon,
    iconBgClass: 'bg-gradient-to-br from-yellow-600 to-yellow-800',
    gradientClass: 'bg-gradient-to-r from-yellow-400 to-yellow-600'
  },
  {
    name: 'Gestão de Tempo e Produtividade',
    description: 'Capacidade comprovada de gerenciar múltiplas prioridades em ambientes de alta pressão, entregando consistentemente resultados antes dos prazos com qualidade superior.',
    icon: TimeIcon,
    iconBgClass: 'bg-gradient-to-br from-red-600 to-red-800',
    gradientClass: 'bg-gradient-to-r from-red-400 to-red-600'
  }
]
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.skills-section {
  background-color: rgb(17, 24, 39);
  background-image:
    radial-gradient(at 47% 33%, rgba(59, 130, 246, 0.15) 0, transparent 59%),
    radial-gradient(at 82% 65%, rgba(16, 185, 129, 0.15) 0, transparent 55%);
}
</style>