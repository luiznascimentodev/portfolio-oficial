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
        features: [
          'Carrinho de compras persistente',
          'Integração com Stripe para pagamentos',
          'Painel administrativo completo',
          'Sistema de avaliações de produtos',
          'PWA com funcionamento offline'
        ]
      },
      {
        id: 4,
        title: "Dashboard Analytics",
        description: "Interface administrativa com visualização de dados em tempo real, gráficos interativos e relatórios customizáveis para análise de métricas.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
        status: "Concluído",
        technologies: ["React", "D3.js", "Chart.js", "Material-UI", "Redux"],
        demo: "https://dashboard-analytics.com",
        github: "https://github.com/luiz/dashboard-analytics",
        features: ["Gráficos interativos", "Tempo real", "Exports customizados"]
      },
      {
        id: 5,
        title: "API REST Completa",
        description: "API robusta com autenticação, documentação automática, cache Redis, rate limiting e monitoramento para aplicações escaláveis.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
        status: "Concluído",
        technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
        demo: "https://api-docs.com",
        github: "https://github.com/luiz/api-completa",
        features: ["Documentação automática", "Cache otimizado", "Rate limiting"]
      },
      {
        id: 6,
        title: "Portfolio Responsivo",
        description: "Site portfolio moderno com animações fluidas, otimização de performance, SEO avançado e integração com CMS headless.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
        status: "Concluído",
        technologies: ["Nuxt.js", "GSAP", "Strapi", "Netlify", "Tailwind"],
        demo: "https://portfolio-moderno.com",
        github: "https://github.com/luiz/portfolio-nuxt",
        features: ["Animações GSAP", "CMS integrado", "Performance 100"]
      },
      {
        id: 7,
        title: "Plataforma E-learning",
        description: "Sistema completo de ensino online com videoaulas, quiz interativo, certificados digitais e painel de progresso para alunos e instrutores.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
        status: "Concluído",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
        demo: "https://elearning-platform.com",
        github: "https://github.com/luiz/elearning-platform",
        features: ["Videoaulas HD", "Quiz interativo", "Certificados digitais"]
      },
      {
        id: 8,
        title: "Sistema de Delivery",
        description: "Aplicação mobile-first para delivery de comida com rastreamento em tempo real, pagamento integrado e sistema de avaliações.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format",
        status: "Em Desenvolvimento",
        technologies: ["React Native", "Firebase", "Google Maps", "Stripe", "Redux"],
        demo: "https://delivery-app-demo.com",
        github: "https://github.com/luiz/delivery-app",
        features: ["Rastreamento GPS", "Pagamento mobile", "Push notifications"]
      },
      {
        id: 9,
        title: "Microserviços em Docker",
        description: "Arquitetura de microserviços containerizada com API Gateway, service discovery, monitoramento e deploy automatizado em Kubernetes.",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=400&fit=crop&auto=format",
        status: "Concluído",
        technologies: ["Docker", "Kubernetes", "Go", "PostgreSQL", "Prometheus"],
        demo: "https://microservices-demo.com",
        github: "https://github.com/luiz/microservices-k8s",
        features: ["Auto-scaling", "Health checks", "Logs centralizados"]
      }
    ])

    const technologies = reactive([
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'Vue.js' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' }
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
