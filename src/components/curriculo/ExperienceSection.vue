<template>
  <section class="experience-section relative py-8 sm:py-10 lg:py-12 overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <!-- Section Header - Compact -->
      <div class="text-center mb-8 sm:mb-10 animate-fade-in-up">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Trajetória
          </span>
          <span class="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent ml-2">
            Profissional
          </span>
        </h2>
        <p class="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Experiência comprovada em desenvolvimento de soluções digitais de alto impacto, alinhando tecnologia e objetivos de negócio para resultados mensuráveis
        </p>
      </div>

      <!-- Experience Cards - Side by Side Modern Layout -->
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <!-- Current Experience: Freelancer -->
        <div class="relative animate-fade-in-up group perspective freelancer-card" style="animation-delay: 0.2s;">
          <!-- Card Glow Effect Container -->
          <div class="card-glow-container relative transition-transform duration-500 ease-out transform-gpu">
            <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 sm:p-6 transition-all duration-500 h-full relative z-10">
            <!-- Status Badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
              Atual
            </div>

            <!-- Job Title & Period -->
            <div class="mb-4">
              <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                Desenvolvedor Full Stack
              </h3>
              <p class="text-blue-400 font-semibold mb-1">Desenvolvedor Independente</p>
              <p class="text-gray-400 text-sm">2023 - Presente</p>
            </div>

            <!-- Description -->
            <p class="text-gray-300 leading-relaxed mb-4 text-sm">
              Especialista em desenvolvimento de soluções web completas, utilizando tecnologias modernas para oferecer produtos digitais de alta performance, escaláveis e com experiência de usuário excepcional. Responsável por todo o ciclo de desenvolvimento, desde concepção e arquitetura até implementação e manutenção.
            </p>

            <!-- Key Achievements - Compact -->
            <div class="space-y-3 mb-4">
              <div class="bg-gray-700/30 rounded-lg p-3 border-l-4 border-blue-400">
                <h5 class="text-blue-400 font-semibold mb-1 text-sm">Desenvolvimento Técnico</h5>
                <ul class="space-y-0.5 text-gray-300 text-xs">
                  <li>• Desenvolvimento de mais de 25 aplicações utilizando Vue.js, Node.js e PHP</li>
                  <li>• Implementação de APIs RESTful com otimização de 40% em performance</li>
                  <li>• Arquitetura de sistemas escaláveis com infraestrutura em nuvem</li>
                  <li>• Redução de 35% no tempo de carregamento através de técnicas avançadas de cache</li>
                </ul>
              </div>
              <div class="bg-gray-700/30 rounded-lg p-3 border-l-4 border-emerald-400">
                <h5 class="text-emerald-400 font-semibold mb-1 text-sm">Gestão de Projetos</h5>
                <ul class="space-y-0.5 text-gray-300 text-xs">
                  <li>• Entrega de mais de 15 projetos dentro do prazo e orçamento estabelecidos</li>
                  <li>• Alcance de 98% de taxa de satisfação dos clientes</li>
                  <li>• Implementação de metodologias ágeis para garantir entregas contínuas</li>
                  <li>• Comunicação efetiva com stakeholders para alinhamento de expectativas</li>
                </ul>
              </div>
            </div>

            <!-- Technologies - Simplified -->
            <div class="mb-4">
              <h4 class="text-white font-medium text-sm mb-2 flex items-center">
                <svg class="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                Stack Principal
              </h4>
              <div class="flex flex-wrap gap-1">
                <span v-for="tech in mainFreelancerTechs" :key="tech"
                      class="px-2 py-1 bg-blue-600/20 rounded text-xs text-blue-300 hover:bg-blue-600/30 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-3 gap-2">
              <div class="text-center p-2 bg-blue-600/10 rounded-lg border border-blue-600/20">
                <div class="text-sm font-bold text-blue-400">25+</div>
                <div class="text-xs text-gray-400">Projetos</div>
              </div>
              <div class="text-center p-2 bg-emerald-600/10 rounded-lg border border-emerald-600/20">
                <div class="text-sm font-bold text-emerald-400">98%</div>
                <div class="text-xs text-gray-400">Satisfação</div>
              </div>
              <div class="text-center p-2 bg-purple-600/10 rounded-lg border border-purple-600/20">
                <div class="text-sm font-bold text-purple-400">40%</div>
                <div class="text-xs text-gray-400">Performance</div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <!-- Previous Experience: Agency -->
        <div class="relative animate-fade-in-up group perspective agency-card" style="animation-delay: 0.4s;">
          <!-- Card Glow Effect Container -->
          <div class="card-glow-container relative transition-transform duration-500 ease-out transform-gpu">
            <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 sm:p-6 transition-all duration-500 h-full relative z-10">
            <!-- Job Title & Period -->
            <div class="mb-4">
              <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                Desenvolvedor WordPress Sênior
              </h3>
              <p class="text-purple-400 font-semibold mb-1">Agência de Desenvolvimento Web</p>
              <p class="text-gray-400 text-sm">2015 - 2018 | 3 anos</p>
            </div>

            <!-- Context -->
            <div class="mb-4 p-3 bg-purple-600/10 rounded-lg border border-purple-600/20">
              <h5 class="text-purple-400 font-semibold mb-1 text-sm">Área de Atuação</h5>
              <p class="text-gray-300 text-xs leading-relaxed">
                Desenvolvimento de soluções digitais para o setor de construção civil e imobiliário, com foco em geração de leads qualificados e implementação de estratégias de presença digital para maximização de resultados comerciais.
              </p>
            </div>

            <!-- Description -->
            <p class="text-gray-300 leading-relaxed mb-4 text-sm">
              Responsável pelo desenvolvimento e manutenção de sites corporativos de alto desempenho, com especialização em WordPress, personalização avançada de temas e implementação de estratégias de SEO orientadas por dados. Coordenação técnica de projetos e otimização para resultados mensuráveis.
            </p>

            <!-- Key Achievements - Compact -->
            <div class="space-y-3 mb-4">
              <div class="bg-gray-700/30 rounded-lg p-3 border-l-4 border-purple-400">
                <h5 class="text-purple-400 font-semibold mb-1 text-sm">Desenvolvimento de Soluções</h5>
                <ul class="space-y-0.5 text-gray-300 text-xs">
                  <li>• Implementação de mais de 35 sites para construtoras e imobiliárias</li>
                  <li>• Criação de temas WordPress customizados com foco em conversão</li>
                  <li>• Desenvolvimento de funcionalidades específicas para o setor imobiliário</li>
                  <li>• Integração com sistemas de CRM para gestão eficiente de leads</li>
                </ul>
              </div>
              <div class="bg-gray-700/30 rounded-lg p-3 border-l-4 border-blue-400">
                <h5 class="text-blue-400 font-semibold mb-1 text-sm">SEO e Marketing Digital</h5>
                <ul class="space-y-0.5 text-gray-300 text-xs">
                  <li>• Aumento de 150% no tráfego orgânico dos sites desenvolvidos</li>
                  <li>• Criação de landing pages com taxa de conversão entre 8-12%</li>
                  <li>• Implementação de estratégias de estrutura de dados para rich snippets</li>
                  <li>• Análise e otimização contínua baseada em métricas de desempenho</li>
                </ul>
              </div>
            </div>

            <!-- Technologies - Simplified -->
            <div class="mb-4">
              <h4 class="text-white font-medium text-sm mb-2 flex items-center">
                <svg class="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                Stack Principal
              </h4>
              <div class="flex flex-wrap gap-1">
                <span v-for="tech in mainAgencyTechs" :key="tech"
                      class="px-2 py-1 bg-purple-600/20 rounded text-xs text-purple-300 hover:bg-purple-600/30 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-3 gap-2">
              <div class="text-center p-2 bg-purple-600/10 rounded-lg border border-purple-600/20">
                <div class="text-sm font-bold text-purple-400">35+</div>
                <div class="text-xs text-gray-400">Sites</div>
              </div>
              <div class="text-center p-2 bg-blue-600/10 rounded-lg border border-blue-600/20">
                <div class="text-sm font-bold text-blue-400">150%</div>
                <div class="text-xs text-gray-400">Tráfego</div>
              </div>
              <div class="text-center p-2 bg-green-600/10 rounded-lg border border-green-600/20">
                <div class="text-sm font-bold text-green-400">12%</div>
                <div class="text-xs text-gray-400">Conversão</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue';

export default {
  name: 'ExperienceSection',
  components: {
    CommonBackground
  },
  data() {
    return {
      // Main Technologies - Simplified for compact display
      mainFreelancerTechs: [
        'Vue.js', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Git'
      ],
      mainAgencyTechs: [
        'WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'SEO', 'jQuery'
      ],

      // Complete arrays for backward compatibility
      freelancerFrontend: [
        'Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Sass/SCSS'
      ],
      freelancerBackend: [
        'Node.js', 'PHP 8+', 'C#', 'Java', 'Express.js', 'Laravel', 'REST APIs', 'GraphQL'
      ],
      freelancerDatabase: [
        'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Eloquent ORM'
      ],
      freelancerTools: [
        'Git/GitHub', 'Docker', 'VS Code', 'Postman', 'Figma', 'Webpack', 'Vite', 'NPM/Yarn'
      ],

      agencyDevelopment: [
        'WordPress', 'PHP 7+', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'MySQL', 'Apache'
      ],
      agencySEO: [
        'Google Analytics', 'Google Search Console', 'SEMrush', 'Yoast SEO', 'Schema.org', 'Google Tag Manager'
      ],
      agencyIntegrations: [
        'RD Station', 'HubSpot', 'Mailchimp', 'WhatsApp API', 'Google Calendar', 'PayPal', 'PagSeguro'
      ],
      agencyTools: [
        'cPanel', 'FileZilla', 'Photoshop', 'Git', 'Chrome DevTools', 'PageSpeed Insights', 'GTmetrix'
      ]
    }
  }
}
</script>

<style scoped>
.experience-section {
  position: relative;
}

/* Custom animations */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

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

/* Floating animation for background elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Refined Card Hover Effect with Subtle Glow */
.perspective {
  perspective: 1000px;
  transform-style: preserve-3d;
  overflow: visible;
  padding: 1rem;
  margin: -1rem;
}

.card-glow-container {
  overflow: visible;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); /* Suave e profissional */
  position: relative;
}

/* Base shadow effect - mais sutil */
.card-glow-container::before {
  content: '';
  position: absolute;
  inset: 0; /* Reduzido para não extravasar */
  border-radius: 0.75rem;
  z-index: 0;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.03);
  filter: blur(1px); /* Blur reduzido para efeito mais sutil */
}

/* Freelancer card refined glow */
.freelancer-card .card-glow-container::before {
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.02) 0%,
    rgba(59, 130, 246, 0.08) 40%,
    rgba(16, 185, 129, 0.08) 60%,
    rgba(59, 130, 246, 0.02) 100%
  );
}

/* Agency card refined glow */
.agency-card .card-glow-container::before {
  background: linear-gradient(135deg,
    rgba(139, 92, 246, 0.02) 0%,
    rgba(139, 92, 246, 0.08) 40%,
    rgba(59, 130, 246, 0.08) 60%,
    rgba(139, 92, 246, 0.02) 100%
  );
}

/* Hover effect - mais sutil e elegante */
.group:hover .card-glow-container {
  transform: translateY(-4px); /* Movimento mais sutil */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.group:hover .card-glow-container::before {
  opacity: 1;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 4px 20px rgba(0, 0, 0, 0.2);
}

@keyframes subtleBorderGlow {
  0% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 5px 22px rgba(0, 0, 0, 0.15);
  }
  100% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.group:hover .card-glow-container::before {
  opacity: 1;
  animation: subtleBorderGlow 3s ease-in-out infinite;
}

/* Technology tags hover effects - more professional */
.group:hover .px-2 {
  transform: scale(1.02);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Responsive grid adjustments */
@media (max-width: 1024px) {
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Ensure equal height cards */
.h-full {
  display: flex;
  flex-direction: column;
}

/* Transições suaves para elementos internos em hover */
.card-glow-container h3,
.card-glow-container h5,
.card-glow-container p {
  transition: color 0.3s ease;
}

/* Efeito de hover nas bordas internas dos elementos dos cards */
.group:hover .bg-gray-700\/30 {
  border-left-width: 4px;
  transition: all 0.3s ease;
}

/* Adiciona um sutil destaque nos indicadores de métricas */
.group:hover .text-center {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>
