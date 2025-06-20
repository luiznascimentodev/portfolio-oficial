<template>
  <div id="app" class="min-h-screen bg-gray-900 relative">
    <!-- Navigation -->
    <Navigation
      :mobileMenuOpen="mobileMenuOpen"
      :navigation="navigation"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="mobileMenuOpen = false"
    />

    <!-- Hero Section -->
    <ContatoHero class="relative z-10" />

    <!-- Contact Information Section -->
    <ContactInfoSection
      class="relative z-10"
      :contactInfo="contactInfo"
      :socialLinks="socialLinks"
    />

    <!-- Footer -->
    <GlobalFooter class="relative z-10" />

    <!-- Back to Top Button -->
    <BackToTopButton v-show="showBackToTop" @click="scrollToTop" class="relative z-30" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Navigation from './components/shared/Navigation.vue'
import ContatoHero from './components/contato/ContatoHero.vue'
import ContactInfoSection from './components/contato/ContactInfoSection.vue'
import GlobalFooter from './components/shared/GlobalFooter.vue'
import BackToTopButton from './components/shared/BackToTopButton.vue'

export default {
  name: 'ContatoApp',
  components: {
    Navigation,
    ContatoHero,
    ContactInfoSection,
    GlobalFooter,
    BackToTopButton
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const showBackToTop = ref(false)

    const navigation = reactive([
      { name: 'Início', href: '/', current: false },
      { name: 'Serviços', href: '/servicos.html', current: false },
      { name: 'Projetos', href: '/projetos.html', current: false },
      { name: 'Currículo', href: '/curriculo.html', current: false },
      { name: 'Contato', href: '/contato.html', current: true },
    ])

    const contactInfo = reactive({
      email: 'luiznascdev@gmail.com',
      phone: '+55 (41) 98482-1206',
      location: 'Brasil - Atendimento remoto',
      availability: 'Disponível para novos projetos',
      responseTime: 'Resposta em até 6 horas'
    })

    const socialLinks = reactive([
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/luiz-felippe-nascimento',
        icon: 'linkedin',
        description: 'Conecte-se comigo no LinkedIn'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/luiznascdev',
        icon: 'github',
        description: 'Veja meus projetos no GitHub'
      },
      {
        name: 'WhatsApp',
        href: 'https://wa.me/+5541984821206?text=Olá!%20Vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
        icon: 'whatsapp',
        description: 'Conversar no WhatsApp'
      },
      {
        name: 'Email',
        href: 'mailto:luiznascdev@gmail.com?subject=Interesse%20em%20Projeto&body=Olá%20Luiz,%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto...',
        icon: 'email',
        description: 'Enviar email'
      }
    ])



    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      // Add scroll listener
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      mobileMenuOpen,
      showBackToTop,
      navigation,
      contactInfo,
      socialLinks,
      toggleMobileMenu,
      scrollToTop
    }
  }
}
</script>
