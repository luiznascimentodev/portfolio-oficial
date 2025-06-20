<template>
  <!-- Loading Spinner -->
  <LoadingSpinner
    :show="isLoading"
    :message="'Carregando projetos...'"
  />

  <div id="projetos-app" class="min-h-screen bg-gray-900 relative">
    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- Hero Section -->
    <ProjetosHero class="relative z-20" />

    <!-- Projects Section -->
    <ProjectsSection :projects="projects" class="relative z-20" />

    <!-- Technologies Section -->
    <TechnologiesSection :technologies="technologies" class="relative z-20" />

    <!-- Contact CTA -->
    <ContactCTA class="relative z-20" />

    <!-- Footer -->
    <GlobalFooter class="relative z-20" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
// Componentes críticos e leves carregados imediatamente
import BackToTopButton from './components/shared/BackToTopButton.vue'
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import ProjetosHero from './components/projetos/ProjetosHero.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'

// Utilidades para métricas de carregamento
import { reportLoadingMetrics } from './utils/loadingMetrics'

// Componentes secundários carregados assincronamente
const ProjectsSection = defineAsyncComponent({
  loader: () => import('./components/projetos/ProjectsSection.vue'),
  delay: 200
})
const TechnologiesSection = defineAsyncComponent({
  loader: () => import('./components/projetos/TechnologiesSection.vue'),
  delay: 200
})
const ContactCTA = defineAsyncComponent({
  loader: () => import('./components/projetos/ContactCTA.vue'),
  delay: 200
})

export default {
  name: 'ProjetosApp',
  components: {
    BackToTopButton,
    Navigation,
    ProjetosHero,
    ProjectsSection,
    TechnologiesSection,
    ContactCTA,
    GlobalFooter,
    LoadingSpinner
  },
  setup() {
    // Estado do carregamento simplificado
    const isLoading = ref(true)
    const showBackToTop = ref(false)
    const mobileMenuOpen = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: true },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    const projects = reactive([
      {
        id: 1,
        title: 'Sistema de Gerenciamento',
        description: 'Plataforma completa para gestão empresarial com dashboard interativo, relatórios em tempo real e sistema de usuários. Desenvolvido com Vue.js 3 e Node.js, utilizando MySQL para persistência de dados.',
        image: '@assets/preview-gerenciador.png',
        technologies: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'JWT', 'Chart.js'],
        demo: 'https://demo-gerenciador.vercel.app',
        github: 'https://github.com/luiznascimentodev/gerenciador',
        status: 'Concluído',
        category: 'Full Stack',
        features: [
          'Dashboard com métricas em tempo real',
          'Sistema de autenticação JWT',
          'Relatórios exportáveis em PDF',
          'Interface responsiva e intuitiva',
          'API RESTful documentada'
        ]
      },
      {
        id: 2,
        title: 'Site Obelico',
        description: 'Website moderno e responsivo para empresa de tecnologia, com design clean e performance otimizada. Foco em SEO e experiência do usuário, resultando em 40% mais conversões.',
        image: '@assets/preview-obelico.webp',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'Webpack', 'SEO'],
        demo: 'https://obelico.com.br',
        github: null,
        status: 'Concluído',
        category: 'Frontend',
        features: [
          'Design responsivo e moderno',
          'Otimização SEO avançada',
          'Performance score 95+ no Lighthouse',
          'Animações CSS customizadas',
          'Formulários de contato integrados'
        ]
      },
      {
        id: 3,
        title: 'E-commerce Moderno',
        description: 'Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo. Integração com APIs de pagamento e gestão completa de produtos.',
        image: '/src/assets/portfolio.png',
        technologies: ['React', 'Stripe', 'Firebase', 'Redux', 'Material-UI', 'PWA'],
        demo: null,
        github: 'https://github.com/luiznascimentodev/ecommerce',
        status: 'Em Desenvolvimento',
        category: 'Full Stack',
        features: [
          'Carrinho de compras persistente',
          'Integração com Stripe para pagamentos',
          'Painel administrativo completo',
          'Sistema de avaliações de produtos',
          'PWA com funcionamento offline'
        ]
      }
    ])

    const technologies = reactive([
      { name: 'Vue.js', icon: '💚', count: 2 },
      { name: 'React', icon: '⚛️', count: 1 },
      { name: 'Node.js', icon: '🟢', count: 2 },
      { name: 'JavaScript', icon: '🟨', count: 3 },
      { name: 'HTML/CSS', icon: '🎨', count: 3 },
      { name: 'MySQL', icon: '🗄️', count: 2 },
      { name: 'Firebase', icon: '🔥', count: 1 },
      { name: 'Stripe', icon: '💳', count: 1 }
    ])

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    // Handler para o final do carregamento
    const onLoadingComplete = () => {
      initialLoadComplete.value = true
      document.body.classList.remove('loading')
      document.body.classList.add('loaded')

      // Reportar métricas de carregamento
      reportLoadingMetrics({
        appLoadTime: Date.now() - window.performance.timeOrigin,
        componentsLoaded: componentsReady.value,
        initialRender: initialLoadComplete.value,
        page: 'projetos'
      })
    }

    // Simular o carregamento completo de componentes assíncronos
    const checkAllComponentsLoaded = () => {
      componentsReady.value++
      // console.log(`Componente carregado: ${componentsReady.value}/${totalComponents}`)
      if (componentsReady.value >= totalComponents) {
        // Adicione um pequeno delay para permitir que os componentes sejam renderizados
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }

    onMounted(() => {
      // Adicionar o listener de scroll
      window.addEventListener('scroll', handleScroll)

      // Simular carregamento simples
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    return {
      mobileMenuOpen,
      navigation,
      showBackToTop,
      projects,
      technologies,
      toggleMobileMenu,
      scrollToTop,
      isLoading
    }
  }
}
</script>
