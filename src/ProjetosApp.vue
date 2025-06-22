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
    <ProjectsWrapper
      :projects="currentPageProjects"
      :expanded-project-id="expandedProjectId"
      :current-page="currentPage"
      :total-pages="totalPages"
      @toggle-details="toggleProjectDetails"
      @change-page="changePage"
      @next-page="nextPage"
      @prev-page="prevPage"
      @transition-complete="scrollToProjects"
      class="relative z-20"
    />

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
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent, computed } from 'vue'
// Componentes críticos e leves carregados imediatamente
import BackToTopButton from './components/shared/BackToTopButton.vue'
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import ProjetosHero from './components/projetos/ProjetosHero.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'

// Utilidades para métricas de carregamento
import { reportLoadingMetrics } from './utils/loadingMetrics'

// Componentes secundários carregados assincronamente
const ProjectsWrapper = defineAsyncComponent({
  loader: () => import('./components/projetos/ProjectsWrapper.vue'),
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
    ProjectsWrapper,
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

    // Estado para controle de componentes carregados
    const componentsReady = ref(0)
    const totalComponents = 3
    const initialLoadComplete = ref(false)

    // Estado para controlar a paginação dos projetos
    const currentPage = ref(1)
    const projectsPerPage = 3

    // Estado para controlar qual projeto está mostrando detalhes
    const expandedProjectId = ref(null)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: true },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

     const allProjects = ref([
      {
        id: 1,
        title: 'Agência OBelico',
        description: 'Desenvolvi um projeto para a Agência OBelico, especializada em serviços de despachante de armas, com foco em uma interface moderna, intuitiva e otimizada para SEO.',
        image: '/src/assets/projetos/obelico/pagina-inicial-card.webp',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
        demo: 'https://obelico.com.br/',
        github: 'https://github.com/luiznascimentodev/Obelico',
        featured: true,
        features: [
          'Interface moderna e profissional',
          'Otimização avançada para SEO',
          'Design responsivo e funcional',
          'Performance otimizada'
        ],
        detailedDescription: 'Este projeto para a Agência OBelico foi desenvolvido com foco na experiência do usuário e otimização para mecanismos de busca. Através de uma análise detalhada das necessidades do cliente, consegui criar uma solução que combina design moderno com alta performance.',
        technicalDetails: 'O desenvolvimento foi realizado utilizando HTML semântico para melhorar o SEO, CSS3 com técnicas modernas de layout como Grid e Flexbox, além de JavaScript para interações dinâmicas. A otimização de imagens e implementação de lazy loading resultou em um desempenho excepcional, com pontuação acima de 90 no Google PageSpeed.',
        challenges: 'Um dos principais desafios foi equilibrar um design visualmente atraente com os requisitos de performance. Implementei técnicas de compressão de recursos e otimização de cachê para garantir que o site carregasse rapidamente mesmo em conexões lentas.',
        results: 'O projeto resultou em um aumento de 65% no tráfego orgânico e 40% na taxa de conversão nos primeiros três meses após o lançamento, comprovando a eficácia das estratégias de SEO e UX implementadas.'
      },
      {
        id: 2,
        title: 'Dashboard Analytics',
        description: 'Painel de análise de dados em tempo real com visualizações interativas, relatórios personalizados e integrações com múltiplas fontes de dados.',
        image: 'https://via.placeholder.com/800x400?text=Dashboard+Analytics',
        demo: '#',
        github: '#',
        featured: true,
        technologies: ['React', 'D3.js', 'Express', 'Firebase'],
        features: [
          'Visualização de dados em tempo real',
          'Painéis personalizáveis',
          'Relatórios automatizados',
          'Integrações com APIs externas'
        ],
        detailedDescription: 'O Dashboard Analytics foi desenvolvido para uma empresa de marketing digital que precisava visualizar e analisar grandes volumes de dados de campanhas publicitárias em tempo real. O sistema centraliza informações de múltiplas plataformas e permite análises avançadas com interface intuitiva.',
        technicalDetails: 'Implementado com React para a interface do usuário, utilizando Hooks e Context API para gerenciamento de estado. A visualização de dados é construída com D3.js, permitindo gráficos interativos e personalizáveis. O backend foi desenvolvido com Node.js e Express, com banco de dados Firebase Realtime Database para atualizações em tempo real.',
        challenges: 'O principal desafio foi garantir a performance ao processar e renderizar grandes volumes de dados em tempo real. Implementei técnicas de virtualização e paginação para garantir que o carregamento e a interação permanecessem fluidos mesmo com milhares de registros.',
        results: 'O dashboard reduziu o tempo de análise de dados em aproximadamente 70%, permitindo que a equipe de marketing tomasse decisões mais rápidas e precisas, resultando em um aumento de 25% na eficiência das campanhas.'
      },
      {
        id: 3,
        title: 'App Delivery',
        description: 'Aplicativo móvel para serviço de entrega com rastreamento em tempo real, integração de pagamentos e sistema de rotas otimizadas.',
        image: 'https://via.placeholder.com/800x400?text=App+Delivery',
        demo: '#',
        github: '#',
        featured: true,
        technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
        features: [
          'Rastreamento em tempo real',
          'Pagamentos integrados',
          'Rotas otimizadas',
          'Notificações push'
        ],
        detailedDescription: 'O App Delivery foi desenvolvido para uma rede local de restaurantes que buscava uma solução personalizada para gerenciar suas entregas. O aplicativo permite aos clientes fazer pedidos, acompanhar o status em tempo real e aos entregadores otimizar suas rotas para entregas mais rápidas.',
        technicalDetails: 'Desenvolvido com React Native para garantir compatibilidade com Android e iOS a partir de uma única base de código. Utiliza Firebase para autenticação, Firestore para banco de dados em tempo real, e Cloud Functions para processamento em background. A integração com Google Maps API permite o cálculo de rotas otimizadas e rastreamento em tempo real.',
        challenges: 'Um dos maiores desafios foi implementar o sistema de rastreamento em tempo real mantendo o consumo de bateria em níveis aceitáveis. Desenvolvi um algoritmo personalizado que ajusta a frequência de atualização da localização com base no movimento do dispositivo e na proximidade do destino.',
        results: 'O aplicativo resultou em uma redução de 30% no tempo médio de entrega e um aumento de 45% na satisfação dos clientes, conforme medido por pesquisas pós-entrega.'
      },
      {
        id: 4,
        title: 'E-commerce Vue Shop',
        description: 'Plataforma de e-commerce moderna desenvolvida com Vue.js e Nuxt, com sistema de carrinho inteligente, pagamentos integrados e painel administrativo completo.',
        image: 'https://via.placeholder.com/800x400?text=Vue+E-commerce',
        demo: '#',
        github: '#',
        featured: true,
        technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Strapi', 'Stripe'],
        features: [
          'Carrinho de compras em tempo real',
          'Checkout seguro com Stripe',
          'Painel administrativo responsivo',
          'SEO otimizado com SSR'
        ],
        detailedDescription: 'O Vue Shop é uma plataforma completa de e-commerce desenvolvida para oferecer uma experiência de compra fluida e moderna. Implementei recursos avançados como carrinho persistente, sistema de recomendações baseado em compras anteriores e um painel administrativo intuitivo para gerenciamento de produtos e pedidos.',
        technicalDetails: 'O frontend foi construído com Vue.js e Nuxt.js para garantir renderização do lado do servidor (SSR), melhorando significativamente o SEO e a performance inicial. Utilizei Tailwind CSS para uma interface consistente e responsiva. O backend foi desenvolvido com Strapi, um CMS headless, que oferece uma API flexível para gerenciamento de conteúdo. A integração com Stripe garante pagamentos seguros e compatíveis com múltiplas moedas.',
        challenges: 'O maior desafio foi implementar um sistema de carrinho que funcionasse perfeitamente entre diferentes sessões e dispositivos. Desenvolvi uma solução utilizando Vuex para gerenciamento de estado local e sincronização com o armazenamento no servidor, permitindo que os usuários continuem suas compras de qualquer dispositivo.',
        results: 'A plataforma aumentou a taxa de conversão em 35% comparado à solução anterior, com uma redução de 60% na taxa de abandono do carrinho. O tempo de carregamento das páginas foi reduzido em 40%, melhorando significativamente a experiência do usuário e o posicionamento nos mecanismos de busca.'
      },
      {
        id: 5,
        title: 'Sistema de Gestão Financeira',
        description: 'Aplicação web completa para controle financeiro pessoal e empresarial com dashboards interativos, relatórios customizáveis e planejamento orçamentário.',
        image: 'https://via.placeholder.com/800x400?text=Sistema+Financeiro',
        demo: '#',
        github: '#',
        featured: true,
        technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js'],
        features: [
          'Dashboards financeiros personalizáveis',
          'Controle de receitas e despesas',
          'Planejamento orçamentário inteligente',
          'Relatórios e gráficos interativos'
        ],
        detailedDescription: 'O Sistema de Gestão Financeira foi desenvolvido para atender tanto pessoas físicas quanto empresas que precisam de uma visão clara e organizada de suas finanças. O sistema permite categorização automática de transações, criação de orçamentos, análise de tendências e geração de relatórios detalhados para tomada de decisões financeiras.',
        technicalDetails: 'Desenvolvido com Angular e TypeScript para garantir robustez e tipagem segura no frontend. O backend utiliza Node.js com Express e MongoDB para armazenamento flexível de dados financeiros. Implementei Chart.js para visualizações gráficas interativas e responsivas. A arquitetura segue princípios de Clean Architecture, separando claramente as regras de negócio da infraestrutura.',
        challenges: 'O principal desafio foi criar um algoritmo de categorização automática de transações que fosse preciso e adaptável às necessidades individuais dos usuários. Utilizei técnicas de machine learning para analisar padrões de gastos e sugerir categorizações, melhorando a precisão ao longo do tempo com feedback do usuário.',
        results: 'Os usuários relataram uma economia média de 20% em seus gastos mensais após três meses de uso do sistema, graças às insights fornecidos pelos relatórios e alertas inteligentes. A satisfação dos usuários atingiu 92%, com destaque para a facilidade de uso e a clareza das informações apresentadas.'
      },
      {
        id: 6,
        title: 'Plataforma EAD Interativa',
        description: 'Sistema completo de ensino à distância com aulas interativas, exercícios automatizados, fóruns de discussão e certificação digital para alunos e instituições.',
        image: 'https://via.placeholder.com/800x400?text=EAD+Plataforma',
        demo: '#',
        github: '#',
        featured: true,
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Socket.io'],
        features: [
          'Aulas ao vivo e gravadas',
          'Sistema de avaliação automatizado',
          'Fóruns de discussão em tempo real',
          'Emissão de certificados digitais'
        ],
        detailedDescription: 'A Plataforma EAD Interativa foi desenvolvida para instituições de ensino que buscavam uma solução completa para oferecer cursos online. O sistema permite a criação e gerenciamento de cursos, transmissão de aulas ao vivo, disponibilização de materiais didáticos, aplicação de testes automatizados e emissão de certificados digitais verificáveis.',
        technicalDetails: 'Utilizei Next.js para criar uma aplicação performática com SSR (Server-Side Rendering) e SSG (Static Site Generation) para conteúdos estáticos. O backend foi implementado com GraphQL para consultas eficientes e flexíveis aos dados. PostgreSQL foi escolhido como banco de dados principal por sua robustez em operações complexas. A infraestrutura é hospedada na AWS, aproveitando serviços como S3 para armazenamento de vídeos e CloudFront para distribuição de conteúdo. Socket.io foi implementado para comunicação em tempo real nos fóruns e aulas ao vivo.',
        challenges: 'O maior desafio foi desenvolver um sistema de streaming ao vivo que funcionasse bem mesmo em conexões instáveis, mantendo a qualidade da experiência educacional. Implementei um algoritmo adaptativo que ajusta a qualidade do vídeo baseado na conexão do usuário e um sistema de recuperação que permite continuar de onde parou em caso de desconexão.',
        results: 'A plataforma permitiu que as instituições clientes aumentassem seu alcance em 300%, atingindo estudantes de diferentes regiões. A taxa de conclusão dos cursos aumentou em 70% comparado às soluções anteriores, graças às ferramentas interativas e ao acompanhamento personalizado do progresso dos alunos.'
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

    // Projetos da página atual, com paginação
    const currentPageProjects = computed(() => {
      const startIndex = (currentPage.value - 1) * projectsPerPage
      const endIndex = startIndex + projectsPerPage
      return allProjects.value.slice(startIndex, endIndex)
    })

    // Total de páginas disponíveis
    const totalPages = computed(() => {
      return Math.ceil(allProjects.value.length / projectsPerPage)
    })

    // Função para mudar de página
    const changePage = (page) => {
      currentPage.value = page

      // Usando setTimeout para garantir que o DOM atualizou antes de tentar rolar
      setTimeout(() => {
        const projetosElement = document.getElementById('projetos')
        if (projetosElement) {
          const yOffset = projetosElement.getBoundingClientRect().top + window.pageYOffset - 80
          window.scrollTo({ top: yOffset, behavior: 'smooth' })
        }
      }, 50)
    }

    // Função para ir para a próxima página
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++

        // Usando setTimeout para garantir que o DOM atualizou antes de tentar rolar
        setTimeout(() => {
          const projetosElement = document.getElementById('projetos')
          if (projetosElement) {
            const yOffset = projetosElement.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({ top: yOffset, behavior: 'smooth' })
          }
        }, 50)
      }
    }

    // Função para ir para a página anterior
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--

        // Usando setTimeout para garantir que o DOM atualizou antes de tentar rolar
        setTimeout(() => {
          const projetosElement = document.getElementById('projetos')
          if (projetosElement) {
            const yOffset = projetosElement.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({ top: yOffset, behavior: 'smooth' })
          }
        }, 50)
      }
    }

    // Função para alternar a visibilidade dos detalhes de um projeto
    const toggleProjectDetails = (projectId) => {
      if (expandedProjectId.value === projectId) {
        // Fechando o modal
        expandedProjectId.value = null
        // Restaurar scroll
        document.body.classList.remove('overflow-hidden')
      } else {
        // Abrindo o modal
        expandedProjectId.value = projectId
        // Bloquear scroll quando modal está aberto
        if (projectId !== null) {
          document.body.classList.add('overflow-hidden')
        }
      }
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
      allProjects,
      technologies,
      toggleMobileMenu,
      scrollToTop,
      isLoading,
      currentPageProjects,
      totalPages,
      currentPage,
      expandedProjectId,
      changePage,
      nextPage,
      prevPage,
      toggleProjectDetails
    }
  }
}
</script>
