<template>
  <section id="inicio" class="hero-section relative min-h-screen flex items-center justify-center py-16">
    <!-- Background Comum -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left space-y-8 animate-fade-in-up">
          <!-- Status Badges -->


          <!-- Main Title -->
          <div class="space-y-4">
            <p class="text-lg text-gray-400 font-medium">Olá, eu sou</p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Luiz
              </span>
              <br>
              <span class="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Nascimento
              </span>
            </h1>
            <div class="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light min-h-[3rem] flex items-center justify-center lg:justify-start">
              <TypingEffect />
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Transformo ideias em <span class="text-blue-400 font-semibold">soluções digitais modernas</span>,
            criando experiências web únicas com foco em performance, usabilidade e design responsivo.
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
            <div v-for="stat in stats" :key="stat.label"
                 class="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div class="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-400 font-medium">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/servicos.html"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              Ver Serviços
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>

            <a href="#projetos"
               class="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 border-2 border-gray-700 hover:border-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Ver Projetos
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Social Links -->
          <ul class="flex justify-center lg:justify-start space-x-4" aria-label="Links para redes sociais">
            <li v-for="social in socialLinks" :key="social.name">
              <a :href="social.href"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="group w-14 h-14 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                 :class="getSocialHoverClass(social.icon)"
                 :aria-label="`Visite meu perfil no ${social.name}`">
                <component :is="getSocialIcon(social.icon)" class="w-6 h-6" aria-hidden="true" />
                <span class="sr-only">{{ social.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Profile Image -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Main Avatar Container -->
            <div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">

              <!-- Outer Glow Background -->
              <div class="absolute -inset-8 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>

              <!-- Rotating Border Animation -->
              <div class="absolute inset-0 rounded-full animate-spin" style="animation-duration: 4s;">
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-transparent to-emerald-500 p-0.5">
                  <div class="w-full h-full rounded-full bg-gray-900"></div>
                </div>
              </div>

              <!-- Counter-rotating Inner Border -->
              <div class="absolute inset-1 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 6s;">
                <div class="absolute inset-0 rounded-full bg-gradient-to-l from-emerald-400 via-transparent to-blue-400 p-0.5">
                  <div class="w-full h-full rounded-full bg-gray-900"></div>
                </div>
              </div>

              <!-- Static Decorative Ring -->
              <div class="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600/30 via-gray-800 to-emerald-600/30 p-1">
                <div class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"></div>
              </div>

              <!-- Avatar Image Container with Better Masking -->
              <div class="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-900/50 via-gray-800 to-emerald-900/50 shadow-2xl group">
                <!-- Subtle Inner Shadow for Depth -->
                <div class="absolute inset-0 rounded-full shadow-inner" style="box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>

                <!-- Gradient Overlay to Blend Edges -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10"></div>

                <!-- Avatar Image -->
                <img
                  :src="avatarMainSrc"
                  alt="Foto de perfil de Luiz Nascimento"
                  width="420"
                  height="420"
                  class="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 will-change-transform relative z-10"
                  style="image-rendering: high-quality;"
                />

                <!-- Simple Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>

                <!-- Edge Fade Effect -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 z-30"></div>
                <div class="absolute inset-0 rounded-full bg-gradient-to-b from-gray-800/20 via-transparent to-gray-800/20 z-30"></div>
              </div>

              <!-- Animated Particles -->
              <div class="absolute top-8 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style="animation-delay: 0s; animation-duration: 2s;"></div>
              <div class="absolute top-16 -right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce opacity-70" style="animation-delay: 0.5s; animation-duration: 2.5s;"></div>
              <div class="absolute bottom-12 -left-8 w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce opacity-50" style="animation-delay: 1s; animation-duration: 3s;"></div>
              <div class="absolute bottom-20 -right-6 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce opacity-80" style="animation-delay: 1.5s; animation-duration: 2.2s;"></div>

              <!-- Floating Tech Icons -->
              <TechIcons />

              <!-- Subtle Background Glow -->
              <div class="absolute -inset-12 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import TypingEffect from '../ui/TypingEffect.vue'
import TechIcons from '../ui/TechIcons.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import WhatsappIcon from '../icons/WhatsappIcon.vue'
import CommonBackground from '../ui/CommonBackground.vue'
import OptimizedImage from '../ui/OptimizedImage.vue'

// Importar as imagens corretamente para que o Vite as processe
import avatarMain from '@/assets/avatar/avatar-img-original-640.webp'
import avatarLcp from '@/assets/avatar/avatar-img-original-lcp.webp'
import avatar150 from '@/assets/avatar/avatar-img-original-150.webp'
import avatar300 from '@/assets/avatar/avatar-img-original-300.webp'
import avatar420 from '@/assets/avatar/avatar-img-original-420.webp'
import avatar640 from '@/assets/avatar/avatar-img-original-640.webp'
import avatar800 from '@/assets/avatar/avatar-img-original-800.webp'
import avatarFallback from '@/assets/avatar/avatar-img-original-compressed.png'

const props = defineProps({
  stats: Array,
  socialLinks: Array
})

const emit = defineEmits(['mounted'])

const getSocialIcon = (iconName) => {
  const icons = {
    linkedin: 'LinkedinIcon',
    github: 'GithubIcon',
    whatsapp: 'WhatsappIcon'
  }
  return icons[iconName] || 'div'
}

const getSocialHoverClass = (iconName) => {
  const hoverClasses = {
    linkedin: 'hover:bg-blue-600',
    github: 'hover:bg-gray-700',
    whatsapp: 'hover:bg-green-500'
  }
  return hoverClasses[iconName] || ''
}

// Fontes de imagem processadas pelo Vite - usar imagem de alta qualidade
const avatarMainSrc = avatarMain // Usar a imagem de 640px importada
const avatarFallbackSrc = avatarFallback

// Avatar Image Sizes com importações corretas
const avatarSrcSet = `
  ${avatar150} 150w,
  ${avatar300} 300w,
  ${avatar420} 420w,
  ${avatar640} 640w,
  ${avatar800} 800w
`.trim()

const avatarSizes = `
  (max-width: 640px) 300px,
  (max-width: 768px) 420px,
  (max-width: 1024px) 640px,
  800px
`.trim()

onMounted(() => {
  emit('mounted')
})
</script>