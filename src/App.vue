<template>
  <div class="app" :class="{ 'with-padding-top': navScrolled }">
    <!-- Header com navegação fixa -->
    <Navigation
      :mobile-menu-open="mobileMenuOpen"
      :navigation="navigation"
      :is-scrolled="navScrolled"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @scroll-state-change="handleNavScrollChange"
      @mounted="handleNavMounted"
    />

    <!-- Conteúdo principal -->
    <main>
      <!-- Seção Hero -->
      <HeroSection />

      <!-- Seção Projetos -->
      <ProjectsWrapper
        ref="projectsSectionRef"
        :projects="featuredProjects"
        :expanded-project-id="expandedProjectId"
        :current-page="currentPage"
        :total-pages="totalPages"
        @toggle-details="toggleProjectDetails"
        @change-page="changePage"
        @next-page="nextPage"
        @prev-page="prevPage"
        class="relative z-20"
      />

      <!-- Seção Sobre Mim -->
      <AboutSection :about-content="aboutContent" :skills="skills" />
    </main>

    <!-- Footer global -->
    <GlobalFooter />

    <!-- Botão de voltar ao topo -->
    <BackToTopButton :show="showBackToTopButton" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Componentes compartilhados
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'

// Componentes da home
import HeroSection from './components/home/HeroSection.vue'
import AboutSection from './components/home/AboutSection.vue'
import ProjectsWrapper from './components/home/ProjectsWrapper.vue'

// Importar a imagem do projeto OBelico
import obelicoImage from './assets/projetos/obelico/pagina-inicial-card.webp'

export default {
  name: 'App',
  components: {
    Navigation,
    GlobalFooter,
    BackToTopButton,
    HeroSection,
    AboutSection,
    ProjectsWrapper
  },
  setup() {
    // Estado da navegação
    const mobileMenuOpen = ref(false)
    const navScrolled = ref(false)
    const navHeight = ref(64) // Altura padrão da navegação

    // Estado do botão de voltar ao topo
    const showBackToTopButton = ref(false)

    // Configuração das páginas de navegação
    const navigation = ref([
      { name: 'Início', href: '/', current: true },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    // Dados para a seção Sobre Mim
    const aboutContent = ref([
      {
        icon: 'user',
        title: 'Desenvolvedor Full Stack Expert',
        description: 'Transformo requisitos de negócio em soluções completas e impactantes. Ofereço o conjunto perfeito de habilidades técnicas para desenvolver seu projeto do conceito ao produto final, com foco em resultados mensuráveis.'
      },
      {
        icon: 'rocket',
        title: 'Acelerador de Resultados Digitais',
        description: 'Desenvolvo soluções que escalam com seu negócio e geram ROI real. Meus sistemas são projetados para suportar crescimento, adaptando-se às novas demandas do mercado sem necessidade de reconstruções custosas.'
      },
      {
        icon: 'lightbulb',
        title: 'Resolução Criativa de Problemas',
        description: 'Transformo desafios técnicos complexos em oportunidades de inovação. Minha abordagem única combina pensamento analítico com criatividade para entregar soluções que superam expectativas e destacam sua marca no mercado.'
      }
    ])

    // Dados para a seção de habilidades
    const skills = ref([
      {
        icon: 'code',
        name: 'Frontend Impactante',
        description: 'Transformo conceitos em interfaces interativas que encantam usuários e impulsionam conversões. Especialista em Vue.js, React e Tailwind CSS.',
        bgColor: 'bg-blue-600/30',
        textColor: 'text-blue-400'
      },
      {
        icon: 'server',
        name: 'Backend Escalável',
        description: 'Arquitetura robusta que cresce com seu negócio. Desenvolvo APIs de alto desempenho com Node.js e bancos de dados otimizados para suas necessidades específicas.',
        bgColor: 'bg-emerald-600/30',
        textColor: 'text-emerald-400'
      },
      {
        icon: 'palette',
        name: 'UI/UX Estratégico',
        description: 'Interfaces que convertem visitantes em clientes. Design centrado no usuário que combina estética moderna com estratégias de conversão comprovadas.',
        bgColor: 'bg-purple-600/30',
        textColor: 'text-purple-400'
      },
      {
        icon: 'zap',
        name: 'Performance Otimizada',
        description: 'Sites ultrarrápidos que retêm usuários e melhoram SEO. Técnicas avançadas de otimização que garantem carregamento instantâneo e experiência fluida em qualquer dispositivo.',
        bgColor: 'bg-amber-600/30',
        textColor: 'text-amber-400'
      }
    ])

    // Dados completos de projetos
    const allProjects = ref([
      {
        id: 1,
        title: 'Agência OBelico - Transformação Digital',
        description: 'Revolucionei a presença online da Agência OBelico, especializada em serviços de despachante de armas, com uma plataforma que converteu visitantes em clientes fiéis.',
        image: obelicoImage, // Usando a imagem importada diretamente
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO Avançado', 'UI/UX Estratégico'],
        demo: 'https://obelico.com.br/',
        github: 'https://github.com/luiznascimentodev/Obelico',
        featured: true,
        features: [
          'Interface com foco em conversão',
          'Estratégia SEO que garantiu primeiras posições no Google',
          'Experiência de usuário que reduziu taxa de rejeição em 70%',
          'Arquitetura que superou concorrentes em velocidade e performance'
        ],
        detailedDescription: 'A Agência OBelico precisava se destacar num mercado altamente regulamentado e competitivo. Minha abordagem foi criar uma plataforma que não apenas transmitisse confiança e profissionalismo, mas também convertesse visitantes em leads qualificados. Através de uma análise profunda do comportamento do usuário-alvo, implementei uma jornada de conversão que se provou extremamente eficaz desde o primeiro dia.',
        technicalDetails: 'Implementei uma arquitetura frontend de última geração com foco em velocidade e acessibilidade. Utilizei HTML5 semântico seguindo as melhores práticas de SEO técnico, CSS3 com Grid e Flexbox para layouts responsivos adaptados a todos os dispositivos, e JavaScript otimizado para interações fluidas. O site alcançou impressionantes 98 pontos no Google PageSpeed Insights, superando todos os concorrentes do setor.',
        challenges: 'O principal desafio foi criar uma plataforma que se destacasse em um mercado altamente regulamentado, onde a confiança é fundamental. Desenvolvi uma estratégia de UX que equilibra profissionalismo e inovação, implementando técnicas avançadas de microcopy e design persuasivo para estabelecer credibilidade instantânea e guiar os usuários para a conversão.',
        results: 'Os resultados superaram todas as expectativas: aumento de 65% no tráfego orgânico, crescimento de 40% na taxa de conversão e redução de 70% no custo de aquisição de clientes em apenas três meses. A Agência OBelico relata que 83% dos novos clientes agora mencionam o site como fator decisivo na escolha da empresa, consolidando o projeto como um caso de sucesso absoluto em transformação digital.'
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

    // Estado para controlar a paginação dos projetos
    const currentPage = ref(1)
    const projectsPerPage = 3

    // Projetos destacados para a página inicial, com paginação
    const featuredProjects = computed(() => {
      const filteredProjects = allProjects.value.filter(project => project.featured)
      const startIndex = (currentPage.value - 1) * projectsPerPage
      const endIndex = startIndex + projectsPerPage
      return filteredProjects.slice(startIndex, endIndex)
    })

    // Total de páginas disponíveis
    const totalPages = computed(() => {
      const filteredProjects = allProjects.value.filter(project => project.featured)
      return Math.ceil(filteredProjects.length / projectsPerPage)
    })

    // Função para mudar de página
    const changePage = (page) => {
      currentPage.value = page
    }

    // Função para ir para the próxima página
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    }

    // Função para ir para a página anterior
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    // Estado para controlar qual projeto está mostrando detalhes
    const expandedProjectId = ref(null)

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

    // Criar uma referência para o componente ProjectsSection
    const projectsSectionRef = ref(null)

    // Métodos para manipulação do menu mobile
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    // Callback para mudanças de estado da navegação
    const handleNavScrollChange = ({ scrolled, height }) => {
      navScrolled.value = scrolled
      navHeight.value = height || 64
    }

    const handleNavMounted = () => {
      // Inicialização após montagem do componente de navegação
      checkScrollPosition()
    }

    // Verificar a posição de rolagem para mostrar/ocultar o botão de voltar ao topo
    const checkScrollPosition = () => {
      // Mostrar botão quando rolar mais de 500px
      showBackToTopButton.value = window.scrollY > 500
    }

    // Implementação de throttle para limitar chamadas durante o scroll
    const throttle = (callback, delay) => {
      let last = 0
      return (...args) => {
        const now = Date.now()
        if (now - last < delay) return
        last = now
        return callback(...args)
      }
    }

    // Ouvinte de evento de rolagem com throttle
    const throttledCheckScroll = throttle(checkScrollPosition, 200)

    // Configuração de eventos ao montar o componente
    onMounted(() => {
      window.addEventListener('scroll', throttledCheckScroll, { passive: true })
      checkScrollPosition() // Verificar posição inicial
    })

    // Limpeza de eventos ao desmontar
    onUnmounted(() => {
      window.removeEventListener('scroll', throttledCheckScroll)
    })

    return {
      mobileMenuOpen,
      navScrolled,
      navHeight,
      showBackToTopButton,
      navigation,
      aboutContent,
      skills,
      allProjects,
      featuredProjects,
      expandedProjectId,
      toggleProjectDetails,
      projectsSectionRef,
      toggleMobileMenu,
      closeMobileMenu,
      handleNavScrollChange,
      handleNavMounted,
      // Paginação
      currentPage,
      totalPages,
      changePage,
      nextPage,
      prevPage
    }
  }
}
</script>

<style>
/* Estilos globais */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Estilo para quando a navegação está fixa */
.with-padding-top {
  --nav-height: 4rem;
  /* Ajuste dinâmico baseado na propriedade CSS var */
  padding-top: var(--nav-height);
}

/* Assegure que o conteúdo principal ocupe todo o espaço disponível */
main {
  flex: 1 0 auto;
}

/* Estilos para animações e transições */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo para quando o scroll está bloqueado (modal aberto) */
body.overflow-hidden {
  overflow: hidden;
  padding-right: var(--scrollbar-width, 0px); /* Evita saltos na interface */
}

/* Efeitos de hover para elementos dentro de grupos */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group-btn:hover .group-btn-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group-btn:hover .group-btn-hover\:w-full {
  width: 100%;
}

/* Melhor suporte para dispositivos móveis */
@media (max-width: 640px) {
  .with-padding-top {
    --nav-height: 3.5rem;
  }
}

/* Media queries para telas maiores */
@media (min-width: 1024px) {
  .with-padding-top {
    --nav-height: 4.5rem;
  }
}

/* Animação de elementos aparecendo */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
}

/* Animação de flutuação sutil */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
