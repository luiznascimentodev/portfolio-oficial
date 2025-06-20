<template>
  <!-- Loading Spinner -->
  <LoadingSpinner
    :show="isLoading"
    :message="'Carregando serviços...'"
  />

  <div id="servicos-app" class="min-h-screen bg-gray-900 relative">
    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
      @scroll-state-change="handleNavigationScroll"
    />

    <!-- Hero Section -->
    <ServicosHero />

    <!-- Services Section -->
    <ServicesSection :services="services" />

    <!-- Process Section -->
    <ProcessSection :process="processSteps" />

    <!-- FAQ Section -->
    <FAQSection :faqs="faqs" class="relative z-10" />

    <!-- Footer -->
    <GlobalFooter />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import Navigation from './components/shared/Navigation.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'

// Utilidades para métricas de carregamento
import { reportLoadingMetrics } from './utils/loadingMetrics'

// Importação dos componentes específicos da página
import ServicosHero from './components/servicos/ServicosHero.vue'

// Componentes pesados carregados de forma assíncrona
const ServicesSection = defineAsyncComponent({
  loader: () => import('./components/servicos/ServicesSection.vue'),
  delay: 200
})
const ProcessSection = defineAsyncComponent({
  loader: () => import('./components/servicos/ProcessSection.vue'),
  delay: 200
})
const FAQSection = defineAsyncComponent({
  loader: () => import('./components/servicos/FAQSection.vue'),
  delay: 200
})

export default {
  name: 'ServicosApp',
  components: {
    Navigation,
    GlobalFooter,
    BackToTopButton,
    LoadingSpinner,
    ServicosHero,
    ServicesSection,
    ProcessSection,
    FAQSection
  },
  setup() {
    // Estado do carregamento simplificado
    const isLoading = ref(true)
    const showBackToTop = ref(false)
    const mobileMenuOpen = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: true },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: false },
    ])

    const services = reactive([
      {
        id: 1,
        title: 'Landing Pages',
        subtitle: 'Converta Visitantes em Clientes',
        description: 'Landing pages poderosas que transformam visitantes em leads e clientes. Aumente sua taxa de conversão em até 300% com páginas otimizadas e estrategicamente desenhadas para gerar resultados imediatos.',
        icon: 'layout',
        features: [
          'Design responsivo que converte em qualquer dispositivo',
          'Otimização SEO avançada para atrair tráfego qualificado',
          'Performance ultrarrápida (90+ no Google PageSpeed)',
          'Formulários inteligentes com alta taxa de captura',
          'Copywriting persuasivo focado em conversão',
          'Analytics detalhado com relatórios de ROI'
        ],
        timeframe: '3-7 dias',
        starting_price: 'A partir de R$ 600,00',
        popular: false,
        color: 'blue',
        whatsappLink: 'https://wa.me/5541984821206?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20uma%20Landing%20Page%20de%20alta%20convers%C3%A3o%20para%20meu%20neg%C3%B3cio'
      },
      {
        id: 2,
        title: 'Consultoria Estratégica',
        subtitle: '30 Minutos que Transformam Negócios',
        description: 'Reserve sua sessão GRATUITA de consultoria exclusiva e descubra como aumentar seu faturamento digital em até 200%. Um investimento de 30 minutos que pode revolucionar seu negócio para sempre.',
        icon: 'support',
        features: [
          'Diagnóstico completo do seu projeto digital',
          'Identificação de gargalos de conversão',
          'Estratégia personalizada de crescimento',
          'Plano de ação imediato sem custos',
          'Insights exclusivos de mercado para seu nicho',
          'Soluções práticas implementáveis em 7 dias'
        ],
        timeframe: '30 minutos',
        starting_price: 'TOTALMENTE GRÁTIS',
        popular: true,
        color: 'emerald',
        whatsappLink: 'https://wa.me/5541984821206?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20consultoria%20estrat%C3%A9gica%20gratuita%20para%20transformar%20meu%20neg%C3%B3cio%20digital!'
      },
      {
        id: 3,
        title: 'Projeto Exclusivo',
        subtitle: 'Soluções que Geram Resultados',
        description: 'Transforme sua visão em realidade com um projeto digital exclusivo que impulsiona vendas, automatiza processos e supera a concorrência. De websites premium a sistemas empresariais completos.',
        icon: 'code',
        features: [
          'Desenvolvimento 100% personalizado para seu negócio',
          'Dashboard com métricas de resultados em tempo real',
          'Automação de processos que economizam até 30h/semana',
          'Experiência do usuário que converte visitantes em clientes',
          'Integrações avançadas com suas ferramentas atuais',
          'Suporte VIP e atualizações prioritárias garantidas'
        ],
        timeframe: '14-42 dias',
        starting_price: 'Investimento a partir de R$ 3.500',
        popular: false,
        color: 'purple',
        whatsappLink: 'https://wa.me/5541984821206?text=Ol%C3%A1%2C%20quero%20criar%20um%20projeto%20digital%20exclusivo%20que%20traga%20resultados%20reais%20para%20meu%20neg%C3%B3cio!'
      }
    ])

    const processSteps = reactive([
      {
        id: 1,
        title: 'Descoberta & Planejamento',
        description: 'Entendemos suas necessidades, objetivos e público-alvo para criar a estratégia perfeita.',
        icon: 'discovery',
        duration: '1-2 dias'
      },
      {
        id: 2,
        title: 'Design & Prototipagem',
        description: 'Criamos wireframes e protótipos para validar a experiência do usuário antes do desenvolvimento.',
        icon: 'design',
        duration: '3-5 dias'
      },
      {
        id: 3,
        title: 'Desenvolvimento',
        description: 'Codificamos sua solução usando as melhores práticas e tecnologias mais modernas.',
        icon: 'development',
        duration: '3-15 dias'
      },
      {
        id: 4,
        title: 'Testes & Otimização',
        description: 'Testamos tudo minuciosamente e otimizamos performance antes da entrega.',
        icon: 'testing',
        duration: '2-3 dias'
      },
      {
        id: 5,
        title: 'Entrega & Suporte',
        description: 'Entregamos seu projeto e oferecemos suporte para garantir que tudo funcione perfeitamente.',
        icon: 'delivery',
        duration: 'Contínuo'
      }
    ])

    const faqs = reactive([
      {
        id: 1,
        question: 'Qual é o prazo médio para desenvolvimento dos serviços?',
        answer: 'O prazo varia conforme o serviço escolhido: <strong class="text-blue-400">Landing Pages</strong> levam de 3-7 dias, <strong class="text-emerald-400">Sites Completos</strong> de 2-4 semanas, e <strong class="text-purple-400">Sistemas Complexos</strong> de 1-3 meses. Sempre estabeleço prazos realistas e mantenho você informado sobre o progresso.'
      },
      {
        id: 2,
        question: 'Como funciona o processo de desenvolvimento?',
        answer: 'Meu processo é <strong class="text-blue-400">transparente e colaborativo</strong>: <br>1️⃣ <strong>Descoberta</strong> das suas necessidades <br>2️⃣ <strong>Design e prototipagem</strong> aprovados por você <br>3️⃣ <strong>Desenvolvimento</strong> com atualizações regulares <br>4️⃣ <strong>Testes rigorosos</strong> e otimizações <br>5️⃣ <strong>Entrega</strong> com treinamento e suporte'
      },
      {
        id: 3,
        question: 'Todos os sites são responsivos e otimizados?',
        answer: 'Sim! <strong class="text-emerald-400">Todos os meus projetos são 100% responsivos</strong> e otimizados para dispositivos móveis. Garanto <strong class="text-blue-400">performance de 90+ no Google PageSpeed</strong>, <strong class="text-purple-400">SEO otimizado</strong> e excelente experiência do usuário em qualquer dispositivo.'
      },
      {
        id: 4,
        question: 'Você oferece suporte após a entrega?',
        answer: 'Sim! Ofereço <strong class="text-emerald-400">30 dias de suporte gratuito</strong> após a entrega para qualquer ajuste ou dúvida. Também disponibilizo <strong class="text-blue-400">planos de manutenção mensais</strong> que incluem atualizações, backups, monitoramento de segurança e melhorias contínuas.'
      },
      {
        id: 5,
        question: 'Como são definidos os valores dos serviços?',
        answer: 'Os valores são baseados na <strong class="text-blue-400">complexidade, funcionalidades e tecnologias</strong> necessárias. Landing pages começam em <strong class="text-emerald-400">R$ 600</strong>, sites completos em <strong class="text-purple-400">R$ 1.500</strong>. Sempre forneço orçamento detalhado e aceito <strong class="text-blue-400">pagamento parcelado</strong>.'
      },
      {
        id: 6,
        question: 'Você trabalha com projetos de qualquer tamanho?',
        answer: 'Sim! Atendo desde <strong class="text-blue-400">pequenas landing pages</strong> até <strong class="text-emerald-400">sistemas complexos e e-commerces</strong>. Cada projeto recebe a mesma dedicação e qualidade profissional. Se você tem uma ideia, vamos conversar sobre como torná-la realidade!'
      },
      {
        id: 7,
        question: 'Você ajuda com hospedagem e domínio?',
        answer: 'Absolutamente! Posso ajudar você a escolher e configurar a <strong class="text-blue-400">melhor hospedagem</strong> para seu projeto, registrar domínio e fazer toda a configuração técnica. Também oriento sobre <strong class="text-emerald-400">SSL, backup automático</strong> e questões de segurança.'
      },
      {
        id: 8,
        question: 'Posso ver exemplos dos seus trabalhos?',
        answer: 'Claro! Você pode ver meus <strong class="text-blue-400">projetos em destaque na seção Projetos</strong> do meu portfólio. Lá você encontrará casos de sucesso com diferentes tipos de sites e sistemas, incluindo <strong class="text-emerald-400">antes e depois</strong> dos resultados obtidos.'
      }
    ])

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const handleNavigationScroll = (event) => {
      // Gerenciar o estado de scroll da navegação
      const { scrolled, height } = event

      // Ajustar padding do conteúdo baseado no estado de scroll da navegação
      if (scrolled) {
        // Navegação está em modo fixo
        document.body.style.paddingTop = `${height}px`
      } else {
        // Navegação está em modo normal
        document.body.style.paddingTop = '0px'
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
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

    return {
      isLoading,
      mobileMenuOpen,
      navigation,
      showBackToTop,
      services,
      processSteps,
      faqs,
      toggleMobileMenu,
      scrollToTop,
      handleNavigationScroll
    }
  }
}
</script>