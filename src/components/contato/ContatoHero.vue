<template>
  <section class="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
    <!-- Common Background -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="text-center space-y-8 animate-fade-in-up">
        <!-- Badge Premium -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-700/30 text-emerald-400 text-sm font-medium">
          <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span>Disponível para Novos Projetos</span>
        </div>

        <!-- Título Principal Impactante -->
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Vamos Criar Algo
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Extraordinário Juntos
            </span>
          </h1>

          <p class="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Transforme sua <span class="text-blue-400 font-semibold">visão digital</span> em realidade.
            <br class="hidden sm:block">
            Entre em contato e vamos <span class="text-emerald-400 font-semibold">começar seu projeto dos sonhos</span> hoje mesmo.
          </p>
        </div>

        <!-- Estatísticas de Impacto -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div class="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="flex items-center justify-center mb-3">
              <div class="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">< 6h</div>
            <div class="text-sm text-gray-400">Resposta Garantida</div>
          </div>

          <div class="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="flex items-center justify-center mb-3">
              <div class="p-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30">
                <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-bold text-emerald-400 mb-1 group-hover:text-emerald-300 transition-colors">100%</div>
            <div class="text-sm text-gray-400">Consultoria Gratuita</div>
          </div>

          <div class="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div class="flex items-center justify-center mb-3">
              <div class="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30">
                <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div class="text-2xl font-bold text-purple-400 mb-1 group-hover:text-purple-300 transition-colors">Online</div>
            <div class="text-sm text-gray-400">Status Atual</div>
          </div>
        </div>

        <!-- Métodos de Contato Premium -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-8">
          <!-- WhatsApp - Destaque Principal -->
          <div class="relative">
            <a href="https://wa.me/+5541984821206?text=Olá!%20Vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
               target="_blank"
               class="group relative block overflow-visible">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:bg-gray-800/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-green-500/30">
                <!-- Badge de Recomendado -->
                <div class="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold rounded-full shadow-lg z-10">
                  MAIS RÁPIDO
                </div>

                <div class="flex flex-col items-center text-center space-y-4">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                  </div>

                  <div class="space-y-3">
                    <h3 class="text-xl font-bold text-white group-hover:text-green-300 transition-colors">WhatsApp Direto</h3>
                    <div class="space-y-2">
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                          Resposta imediata
                        </span>
                      </p>
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                          </svg>
                          Conversas dinâmicas
                        </span>
                      </p>
                    </div>
                    <div class="px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p class="text-green-400 font-medium text-sm">+55 (41) 98482-1206</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Email Profissional -->
          <div class="relative">
            <a href="mailto:luiznascdev@gmail.com?subject=Interesse%20em%20Projeto&body=Olá%20Luiz,%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto..."
               class="group relative block overflow-visible">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:bg-gray-800/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-blue-500/30">
                <div class="flex flex-col items-center text-center space-y-4">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>

                  <div class="space-y-3">
                    <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">Email Profissional</h3>
                    <div class="space-y-2">
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                          </svg>
                          Ideal para orçamentos detalhados
                        </span>
                      </p>
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Resposta em até 6 horas
                        </span>
                      </p>
                    </div>
                    <div class="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p class="text-blue-400 font-medium text-sm">luiznascdev@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="relative">
            <a href="https://linkedin.com/in/luiz-felippe-nascimento"
               target="_blank"
               class="group relative block overflow-visible">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:bg-gray-800/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-indigo-500/30">
                <div class="flex flex-col items-center text-center space-y-4">
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 group-hover:from-indigo-500 group-hover:to-indigo-600 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/25">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>

                  <div class="space-y-3">
                    <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">LinkedIn</h3>
                    <div class="space-y-2">
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z"/>
                          </svg>
                          Conexões profissionais
                        </span>
                      </p>
                      <p class="text-gray-400 text-sm">
                        <span class="inline-flex items-center gap-2">
                          <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          Ver portfólio completo
                        </span>
                      </p>
                    </div>
                    <div class="px-4 py-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <p class="text-indigo-400 font-medium text-sm">Conectar-se</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Call-to-Action Final -->
        <div class="pt-12 space-y-6">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact-form"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>Enviar Mensagem</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>

            <a href="/curriculo.html"
               class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800 border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span>Ver Experiência</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Status Badge Final -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-300 text-sm font-medium">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Online agora</span>
            <span class="text-emerald-400">•</span>
            <span class="text-gray-400">Pronto para começar seu projeto</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CommonBackground from '../ui/CommonBackground.vue'
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

