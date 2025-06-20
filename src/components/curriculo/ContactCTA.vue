<template>
  <section class="py-16 sm:py-20 lg:py-24 print:hidden relative overflow-hidden" style="background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
        <!-- Content Container with Gradient Overlay -->
        <div class="relative">
          <!-- Gradient Border Effect -->
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 opacity-50"></div>
          </div>

          <!-- Content -->
          <div class="p-8 sm:p-10 md:p-12 relative">
            <!-- Header Section -->
            <div class="text-center mb-10 sm:mb-12">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Pronto para formar um
                </span>
                <span class="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent ml-2">
                  time vencedor?
                </span>
              </h2>
              <div class="max-w-3xl mx-auto">
                <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                  Estou em busca de <span class="text-blue-400 font-semibold">desafios que demandam soluções inovadoras</span>.
                  Com minha experiência em desenvolvimento full-stack e comprometimento em entregar resultados excepcionais,
                  posso agregar valor significativo à sua equipe.
                </p>
                <p class="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Combinando habilidades técnicas avançadas com soft skills fundamentais para o trabalho em equipe, estou pronto
                  para <span class="text-emerald-400 font-medium">impulsionar o sucesso de projetos desafiadores</span> em seu ambiente.
                </p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12">
              <a href="mailto:luiznascimentodev@gmail.com"
                 class="group inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium sm:font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 w-full sm:w-auto">
                <svg class="flex-shrink-0 w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Agendar Entrevista
                <svg class="flex-shrink-0 w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>

              <a href="https://wa.me/+5541984821206" target="_blank"
                 class="group inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium sm:font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 w-full sm:w-auto">
                <svg class="flex-shrink-0 w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                </svg>
                Contato Rápido
                <svg class="flex-shrink-0 w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
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
  name: 'ContactCTA',
  components: {
    CommonBackground
  }
}
</script>

<style scoped>
/* Animated Fade-in-up Effect */
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

/* Hover scale for buttons */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Subtle card glow on hover */
.bg-gray-800\/50:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}
</style>
