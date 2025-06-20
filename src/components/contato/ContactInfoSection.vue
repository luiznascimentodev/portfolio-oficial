<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Common Background -->
    <CommonBackground class="absolute inset-0 z-0" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-700/30 text-emerald-400 text-sm font-medium mb-6">
          <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span>Atendimento Profissional</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Como Funciona Nosso
          </span>
          <br>
          <span class="bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Atendimento
          </span>
        </h2>

        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Informações importantes sobre nosso <span class="text-blue-400 font-semibold">processo de trabalho</span> e disponibilidade
          <br class="hidden sm:block">
          para garantir que você saiba <span class="text-emerald-400 font-semibold">o que esperar</span> durante toda nossa parceria.
        </p>
      </div>

      <!-- Business Hours & Process Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Business Hours Card -->
        <div class="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/25">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors">Horário de Atendimento</h3>
            <div class="space-y-2 text-sm text-center">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Segunda a Sexta</span>
                <span class="text-blue-400 font-medium">08:00 - 18:00</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Sábados</span>
                <span class="text-blue-400 font-medium">09:00 - 14:00</span>
              </div>
              <div class="text-center pt-2">
                <span class="text-gray-500 text-xs">Domingos: Emergências</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Response Time Card -->
        <div class="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-green-500/25">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 text-center group-hover:text-green-300 transition-colors">Tempo de Resposta</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">WhatsApp</span>
                <span class="text-green-400 font-medium">Até 30 min</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Email</span>
                <span class="text-green-400 font-medium">Até 6 horas</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Orçamentos</span>
                <span class="text-green-400 font-medium">24-48 horas</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Card -->
        <div class="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/25">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 text-center group-hover:text-purple-300 transition-colors">Processo Simples</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">1. Conversa inicial</span>
                <span class="text-purple-400 font-medium">Grátis</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">2. Proposta detalhada</span>
                <span class="text-purple-400 font-medium">24-48h</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">3. Desenvolvimento</span>
                <span class="text-purple-400 font-medium">Acompanhamento</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Support Card -->
        <div class="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-emerald-500/25">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 text-center group-hover:text-emerald-300 transition-colors">Suporte Pós-Entrega</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">30 dias grátis</span>
                <span class="text-emerald-400 font-medium">Incluído</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Manutenção</span>
                <span class="text-emerald-400 font-medium">Disponível</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">Atualizações</span>
                <span class="text-emerald-400 font-medium">Negociável</span>
              </div>
            </div>
          </div>
        </div>
      </div>      <!-- Call to Action Section -->
      <div class="text-center mb-16">
        <div class="relative overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:bg-gray-800/80">
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-blue-600/5 to-emerald-600/10 opacity-80"></div>

          <div class="relative">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm font-medium mb-6">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Vamos Começar</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold leading-tight mb-4">
              <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Pronto para Começar
              </span>
              <br>
              <span class="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                seu Projeto?
              </span>
            </h3>

            <p class="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Não deixe sua <span class="text-emerald-400 font-semibold">ideia parada</span>. Vamos transformar sua visão em realidade
              <br class="hidden sm:block">
              com <span class="text-blue-400 font-semibold">desenvolvimento profissional</span> e suporte completo.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/+5541984821206?text=Olá!%20Vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                <span>Conversar no WhatsApp</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>

              <a
                href="mailto:luiznascdev@gmail.com?subject=Interesse%20em%20Projeto&body=Olá%20Luiz,%0A%0AGostaria%20de%20conversar%20sobre%20um%20projeto..."
                class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 hover:border-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg class="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Enviar Email</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-8">
          Perguntas Frequentes
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-left">
            <h4 class="text-lg font-semibold text-white mb-3">Quanto tempo leva um projeto?</h4>
            <p class="text-gray-400 text-sm">Depende da complexidade. Sites simples: 1-2 semanas. Sistemas complexos: 1-3 meses. Definimos prazos na proposta.</p>
          </div>

          <div class="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-left">
            <h4 class="text-lg font-semibold text-white mb-3">Como funciona o pagamento?</h4>
            <p class="text-gray-400 text-sm">Geralmente 50% para iniciar e 50% na entrega. Projetos maiores podem ter parcelas mensais. Sempre negociável.</p>
          </div>

          <div class="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-left">
            <h4 class="text-lg font-semibold text-white mb-3">Oferece suporte após a entrega?</h4>
            <p class="text-gray-400 text-sm">Sim! 30 dias de suporte gratuito incluído. Após isso, oferecemos planos de manutenção mensais.</p>
          </div>          <div class="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 text-left">
            <h4 class="text-lg font-semibold text-white mb-3">Trabalha com que tecnologias?</h4>
            <p class="text-gray-400 text-sm">Vue.js, React, Node.js, Python, PHP, WordPress e mais. Escolhemos a melhor tecnologia para cada projeto.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommonBackground from '../ui/CommonBackground.vue'

export default {
  name: 'ContactInfoSection',
  components: {
    CommonBackground
  }
}
</script>
