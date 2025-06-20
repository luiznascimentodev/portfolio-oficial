<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Loading Spinner -->
    <LoadingSpinner :show="isLoading" message="Carregando..." />

    <!-- Navegação -->
    <Navigation
      :is-scrolled="isScrolled"
      :is-mobile-menu-open="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @scroll-state-change="handleScrollStateChange"
    />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Seções de Conteúdo -->
    <main class="container mx-auto px-4 py-12">
      <ProjectsSection :projects="projects" />
      <AboutSection :about-content="aboutContent" :skills="skills" />
    </main>

    <!-- Footer -->
    <GlobalFooter />

    <!-- Botão Voltar ao Topo -->
    <BackToTopButton
      :show="showBackToTop"
      @click="scrollToTop"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { isLoading, forceLoadingComplete } from '@utils/loadingMetrics'

// Componentes
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import HeroSection from './components/home/HeroSection.vue'
import ProjectsSection from './components/pages/ProjectsSection.vue'
import AboutSection from './components/home/AboutSection.vue'

// Importar imagens dos projetos
import previewGerenciador from '@/assets/preview-gerenciador.png'
import previewObelico from '@/assets/preview-obelico.webp'

// Estado da Navegação
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showBackToTop = ref(false)

// Dados de Navegação
const navigation = reactive([
  { name: 'Início', href: '/', current: true },
  { name: 'Serviços', href: '/servicos.html', current: false },
  { name: 'Projetos', href: '/projetos.html', current: false },
  { name: 'Currículo', href: '/curriculo.html', current: false },
  { name: 'Contato', href: '/contato.html', current: false }
])

// Dados dos Projetos
const projects = reactive([
  {
    id: 1,
    title: 'Sistema de Gerenciamento',
    description: 'Plataforma completa para gestão empresarial com dashboard interativo, relatórios em tempo real e sistema de usuários.',
    image: previewGerenciador,
    technologies: ['Vue.js', 'Node.js', 'MySQL'],
    demo: 'https://demo-gerenciador.vercel.app',
    github: 'https://github.com/luiznascimentodev/gerenciador',
    status: 'Concluído'
  },
  {
    id: 2,
    title: 'Site Obelico',
    description: 'Website moderno e responsivo para empresa de tecnologia, com design clean e performance otimizada.',
    image: previewObelico,
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://obelico.com.br',
    github: null,
    status: 'Concluído'
  }
])

// Dados do Sobre Mim
const aboutContent = reactive([
  {
    icon: 'user',
    title: 'Quem sou eu',
    description: 'Desenvolvedor apaixonado por tecnologia com mais de 5 anos criando soluções digitais que transformam negócios. Especialista em desenvolvimento Full Stack, combino conhecimento técnico sólido com visão estratégica para entregar resultados que superam expectativas.'
  },
  {
    icon: 'rocket',
    title: 'Minha Missão',
    description: 'Transformar ideias complexas em soluções digitais elegantes e funcionais. Cada projeto é uma oportunidade única de aplicar as melhores práticas de desenvolvimento, sempre focando na experiência do usuário e performance otimizada.'
  },
  {
    icon: 'lightbulb',
    title: 'Diferencial',
    description: 'Experiência comprovada com mais de 50 projetos entregues e 98% de satisfação dos clientes. Minha abordagem combina metodologias ágeis, comunicação transparente e tecnologias de ponta para garantir entregas excepcionais dentro do prazo.'
  }
])

// Dados das Habilidades
const skills = reactive([
  {
    name: 'Frontend',
    description: 'Interfaces modernas e responsivas com Vue.js, React e tecnologias de ponta',
    icon: 'code',
    bgColor: 'bg-blue-500/30',
    textColor: 'text-blue-400'
  },
  {
    name: 'Backend',
    description: 'APIs robustas e escaláveis com Node.js, PHP e arquiteturas eficientes',
    icon: 'server',
    bgColor: 'bg-emerald-500/30',
    textColor: 'text-emerald-400'
  },
  {
    name: 'Design UI/UX',
    description: 'Experiências visuais impactantes que convertem visitantes em clientes',
    icon: 'palette',
    bgColor: 'bg-purple-500/30',
    textColor: 'text-purple-400'
  },
  {
    name: 'Performance',
    description: 'Otimizações avançadas resultando em 40% mais velocidade e melhor SEO',
    icon: 'zap',
    bgColor: 'bg-yellow-500/30',
    textColor: 'text-yellow-400'
  }
])

// Handlers
const handleScrollStateChange = ({ scrolled }) => {
  isScrolled.value = scrolled
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

// Lifecycle Hooks
onMounted(() => {
  // Verifica o estado inicial do scroll
  checkScroll()

  // Adiciona o event listener com throttle
  window.addEventListener('scroll', checkScroll, { passive: true })

  // Força o término do loading após um pequeno delay
  setTimeout(() => {
    forceLoadingComplete()
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style>
.app-container {
  position: relative;
  overflow-x: hidden;
}

.navigation-wrapper {
  position: relative;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
}

.navigation-wrapper.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.main-content {
  position: relative;
  z-index: 1;
  transition: padding-top 0.3s ease;
}

.main-content.has-fixed-nav {
  padding-top: var(--nav-height, 64px);
}

/* Estilos globais */
:root {
  --nav-height: 64px;

  @media (min-width: 640px) {
    --nav-height: 72px;
  }
}

/* Otimizações de performance */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevenir CLS (Cumulative Layout Shift) */
.main-content {
  min-height: calc(100vh - var(--nav-height));
}
</style>