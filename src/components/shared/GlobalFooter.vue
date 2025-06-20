<template>
  <footer class="border-t border-gray-800/50 bg-gray-950/90 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <!-- Conteúdo principal -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

        <!-- Call-to-action para conversão -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <p class="text-gray-300 text-xs sm:text-sm mt-1 max-w-xs">
            <span class="font-semibold text-white">Transforme sua ideia em realidade.</span>
            Agende uma consultoria gratuita e descubra como posso ajudar seu negócio a crescer online.
          </p>
          <a href="https://wa.me/+5541984821206?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria"
             target="_blank"
             class="mt-2 sm:mt-3 inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium sm:font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
            </svg>
            Agendar consultoria grátis
          </a>
        </div>


        <!-- Redes sociais com destaque -->
        <div class="flex flex-col items-center">
          <h3 class="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">Conecte-se</h3>
          <ul class="flex items-center gap-2 sm:gap-3" aria-label="Links de redes sociais">
            <li>
              <a href="https://www.linkedin.com/in/luiz-felippe-nascimento"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Visite meu perfil no LinkedIn"
                 class="w-8 h-8 sm:w-9 sm:h-9 bg-[#0A66C2] hover:brightness-110 rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <LinkedinIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/luiznascimentodev"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Veja meus projetos no GitHub"
                 class="w-8 h-8 sm:w-9 sm:h-9 bg-[#171515] hover:bg-[#333333] rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <GithubIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                <span class="sr-only">GitHub</span>
              </a>
            </li>

            <li>
              <a href="https://wa.me/+5541984821206"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Entre em contato via WhatsApp"
                 class="w-8 h-8 sm:w-9 sm:h-9 bg-[#25D366] hover:brightness-110 rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <WhatsappIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                <span class="sr-only">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright com social proof -->
      <div class="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800/30 text-center">
        <div class="mb-1 sm:mb-2">
          <p class="text-gray-200 text-[10px] sm:text-xs inline-flex items-center">
            <span class="text-emerald-400">★★★★★</span>
            <span class="ml-1">Avaliado por clientes satisfeitos</span>
          </p>
        </div>
        <p class="text-gray-300 text-[10px] sm:text-xs">
          © {{ currentYear }} Luiz Nascimento • Soluções Digitais de Alto Impacto •
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import WhatsappIcon from '../icons/WhatsappIcon.vue'

const props = defineProps({
  // Add any necessary props here
})

const emit = defineEmits(['mounted'])

const currentYear = new Date().getFullYear()

onMounted(() => {
  emit('mounted')
})
</script>

<style scoped>
/* Transições suaves e minimalistas */
.transition-all {
  transition: all 0.2s ease;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
