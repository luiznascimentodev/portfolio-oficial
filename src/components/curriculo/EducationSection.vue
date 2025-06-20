<template>
  <section class="py-8 sm:py-10 lg:py-12 relative overflow-hidden" style="background: rgba(17, 24, 39, 0.95); backdrop-filter: blur(10px);">
    <!-- Common Background Component -->
    <CommonBackground />

    <div class="max-w-5xl mx-auto px-8 sm:px-10 lg:px-16 relative z-20">
      <!-- Header da seção -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          <span class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Educação &
          </span>
          <br>
          <span class="bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Formação
          </span>
        </h2>
        <p class="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          Minha jornada de <span class="text-blue-400 font-semibold">aprendizado contínuo</span> e
          <span class="text-emerald-400 font-semibold">qualificação profissional</span>
        </p>
      </div>

      <!-- Formação Acadêmica -->
      <div class="mb-16">
        <div class="flex items-center justify-center mb-12">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <h3 class="px-6 text-base sm:text-lg font-bold text-white flex items-center">
            <div class="mr-3 p-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            Formação Acadêmica
          </h3>
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div class="lg:col-span-2 space-y-6">
                <!-- Header do curso -->
                <div class="flex items-center space-x-3 mb-6">
                  <div class="p-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-base sm:text-lg font-bold text-white mb-1">
                      Análise e Desenvolvimento de Sistemas
                    </h4>
                    <p class="text-sm text-blue-400 font-semibold mb-1">Universidade Positivo</p>
                    <div class="flex items-center space-x-3 text-xs text-gray-400">
                      <span class="flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        Tecnológico
                      </span>
                      <span class="flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Presencial
                      </span>
                      <span class="flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        ENADE 3
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Informações principais -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center space-x-3">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z"/>
                    </svg>
                    <span class="text-sm text-gray-300"><span class="font-semibold text-white">Duração:</span> 2 anos (4 semestres)</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm text-gray-300"><span class="font-semibold text-white">Período:</span> 2024 - 2026</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm text-gray-300"><span class="font-semibold text-white">Status:</span> Em andamento</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                    <span class="text-sm text-gray-300"><span class="font-semibold text-white">Conclusão:</span> Julho 2026</span>
                  </div>
                </div>

                <!-- Disciplinas Essenciais -->
                <div class="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 mb-6">
                  <h5 class="text-lg font-bold text-blue-400 mb-4 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
                    Disciplinas Essenciais
                  </h5>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-sm text-white">Lógica de Programação</span>
                    </div>
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span class="text-sm text-white">Algoritmos</span>
                    </div>
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span class="text-sm text-white">Estruturas de Dados</span>
                    </div>
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span class="text-sm text-white">Banco de Dados</span>
                    </div>
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span class="text-sm text-white">Engenharia de Software</span>
                    </div>
                    <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                      <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span class="text-sm text-white">Redes de Computadores</span>
                    </div>
                  </div>
                </div>

                <!-- Competências Avançadas -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <h6 class="text-base font-bold text-white flex items-center">
                      <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      Linguagens & Metodologias
                    </h6>
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Programação Orientada a Objetos</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Desenvolvimento Web Mobile</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Gestão de Projetos</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Metodologias Ágeis</span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <h6 class="text-base font-bold text-white flex items-center">
                      <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                      </svg>
                      Habilidades Desenvolvidas
                    </h6>
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Raciocínio lógico avançado</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Capacidade de análise crítica</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Resolução de problemas complexos</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span class="text-sm text-gray-300">Administração de soluções</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Infraestrutura e Diferenciais -->
                <div class="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h6 class="text-base font-bold text-blue-400 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    Infraestrutura e Oportunidades
                  </h6>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p class="text-sm text-gray-300">
                        <span class="font-semibold text-white">Laboratórios modernos</span> equipados com tecnologias e softwares de mercado para atividades práticas
                      </p>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p class="text-sm text-gray-300">
                        <span class="font-semibold text-white">Parcerias estratégicas</span> com grandes empresas e associações do setor
                      </p>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p class="text-sm text-gray-300">
                        <span class="font-semibold text-white">Oportunidades de estágio</span> e networking para inserção no mercado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Status visual -->
              <div class="lg:col-span-1 flex flex-col items-center space-y-6">
                <div class="text-center">
                  <div class="relative mb-4 flex justify-center">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center border-4 border-blue-500/30">
                      <div class="text-center">
                        <div class="text-3xl font-bold text-blue-400 mb-1">75%</div>
                        <div class="text-xs text-gray-400 font-medium">Progresso</div>
                      </div>
                    </div>
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-transparent" style="background: conic-gradient(from 0deg, #3b82f6 0deg, #3b82f6 270deg, transparent 270deg); mask: radial-gradient(circle, transparent 60px, black 62px);"></div>
                  </div>

                  <div class="space-y-2">
                    <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-700/30">
                      <div class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      Em Andamento
                    </span>
                    <div class="text-sm text-gray-400">Semestre 3/4</div>
                  </div>
                </div>

                <!-- Indicadores de qualidade -->
                <div class="w-full space-y-4">
                  <div class="text-center">
                  <div class="text-sm font-medium text-gray-300 mb-2">Avaliação MEC</div>
                  <div class="flex justify-center space-x-1">
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div class="text-xs text-gray-400 mt-1">Nota 4</div>
                  </div>

                  <div class="text-center">
                    <div class="text-sm font-medium text-gray-300 mb-2">Modalidade</div>
                    <div class="flex justify-center items-center space-x-2">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <span class="text-sm text-blue-400 font-medium">Presencial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador visual -->
      <div class="relative mb-24">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-700/50"></div>
        </div>
        <div class="relative flex justify-center">
          <div class="px-6 bg-gray-900/80 backdrop-blur-sm">
            <div class="flex items-center space-x-4">
              <div class="w-3 h-3 bg-blue-500/60 rounded-full animate-pulse"></div>
              <div class="w-3 h-3 bg-emerald-500/60 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
              <div class="w-3 h-3 bg-purple-500/60 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cursos Complementares -->
      <div>
        <div class="flex items-center justify-center mb-12">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          <h3 class="px-8 text-2xl sm:text-3xl font-bold text-white flex items-center">
            <div class="mr-4 p-3 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border border-emerald-500/30">
              <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            Qualificações Complementares
          </h3>
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        </div>

        <div class="grid gap-8">          <!-- Curso de Inglês WiseUp Teens -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-emerald-600/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500">
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div class="lg:col-span-3 space-y-6">
                  <!-- Header do curso -->
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border border-emerald-500/30">
                      <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-xl sm:text-2xl font-bold text-white">WiseUp Teens - Inglês Avançado</h4>
                      <p class="text-emerald-400 font-semibold text-lg">Metodologia Imersiva Internacional</p>
                    </div>
                  </div>

                  <!-- Informações básicas -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Duração:</span> 4 anos intensivos</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Concluído:</span> 2015</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Nível:</span> Avançado/Fluente</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Modalidade:</span> Híbrida</span>
                    </div>
                  </div>

                  <!-- Metodologia Diferenciada -->
                  <div class="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                    <h5 class="text-lg font-bold text-emerald-400 mb-4 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                      </svg>
                      Metodologia Imersiva Internacional
                    </h5>
                    <div class="space-y-3">
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p class="text-sm text-gray-300">
                          <span class="font-semibold text-white">Ambiente Cultural Imersivo:</span> Simulação de experiência em país anglófono, desenvolvendo fluência natural através de interação dinâmica e contextualizada
                        </p>
                      </div>
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p class="text-sm text-gray-300">
                          <span class="font-semibold text-white">Comunicação Real:</span> Foco em frases-chave e elementos linguísticos para comunicação eficaz em contextos profissionais e cotidianos
                        </p>
                      </div>
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p class="text-sm text-gray-300">
                          <span class="font-semibold text-white">Conteúdo Estratégico:</span> Temas relevantes incluindo empreendedorismo, tecnologia, cultura pop e business communication
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Competências Desenvolvidas -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-3">
                      <h6 class="text-base font-bold text-white flex items-center">
                        <svg class="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Competências Profissionais
                      </h6>
                      <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Business English avançado</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Comunicação técnica</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Apresentações corporativas</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Redação profissional</span>
                        </div>
                      </div>
                    </div>
                    <div class="space-y-3">
                      <h6 class="text-base font-bold text-white flex items-center">
                        <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                        </svg>
                        Recursos Digitais
                      </h6>
                      <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Plataforma online interativa</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Dicionário personalizado</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Vídeos explicativos</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span class="text-sm text-gray-300">Exercícios complementares</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Impacto Profissional -->
                  <div class="bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-xl p-6 border border-emerald-600/30">
                    <h6 class="text-base font-bold text-emerald-400 mb-3 flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                      Valor Agregado ao Perfil Profissional
                    </h6>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      Capacitação em <span class="font-semibold text-emerald-400">inglês técnico e corporativo</span> essencial para
                      <span class="font-semibold text-white">comunicação internacional</span>,
                      <span class="font-semibold text-white">documentação técnica</span> e
                      <span class="font-semibold text-white">colaboração em equipes globais</span> na área de tecnologia.
                    </p>
                  </div>
                </div>

                <!-- Status e Certificação -->
                <div class="lg:col-span-1 flex flex-col items-center space-y-4">
                  <div class="text-center">
                    <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-900/30 text-emerald-300 border border-emerald-700/30 mb-3">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Certificado
                    </span>
                    <div class="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                    <div class="text-sm text-gray-400 mb-4">Concluído</div>
                  </div>

                  <!-- Indicadores de fluência -->
                  <div class="w-full max-w-32 space-y-3">
                    <div class="text-center">
                      <div class="text-sm font-medium text-gray-300 mb-2">Nível de Fluência</div>
                      <div class="relative">
                        <div class="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-600/20 to-green-600/20 flex items-center justify-center border-4 border-emerald-500/30 mx-auto">
                          <span class="text-lg font-bold text-emerald-400">C1</span>
                        </div>
                        <div class="absolute inset-0 rounded-full border-4 border-transparent mx-auto" style="background: conic-gradient(from 0deg, #10b981 0deg, #10b981 320deg, transparent 320deg); border-radius: 50%; mask: radial-gradient(circle, transparent 44px, black 46px); width: 96px; height: 96px;"></div>
                      </div>
                      <div class="text-xs text-gray-400 mt-2">Avançado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DevClub - Formação Full Stack -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div class="lg:col-span-3 space-y-6">
                  <!-- Header do curso -->
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                      <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4L3 8l4 4M17 4l4 4-4 4M14 2l-4 20"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-xl sm:text-2xl font-bold text-white">DevClub - Formação Full Stack</h4>
                      <p class="text-blue-400 font-semibold text-lg">Desenvolvimento Completo Zero to Hero</p>
                    </div>
                  </div>

                  <!-- Informações básicas -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Modalidade:</span> Intensivo Prático</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Status:</span> Em Andamento</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Foco:</span> Full Stack Developer</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      <span class="text-gray-300"><span class="font-semibold text-white">Objetivo:</span> Market Ready</span>
                    </div>
                  </div>

                  <!-- Stack Tecnológico -->
                  <div class="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                    <h5 class="text-lg font-bold text-blue-400 mb-4 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      Stack Tecnológico Moderno
                    </h5>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                        <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span class="text-sm font-medium text-white">JavaScript</span>
                      </div>
                      <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                        <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span class="text-sm font-medium text-white">React</span>
                      </div>
                      <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                        <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span class="text-sm font-medium text-white">TypeScript</span>
                      </div>
                      <div class="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-3">
                        <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span class="text-sm font-medium text-white">Node.js</span>
                      </div>
                    </div>
                  </div>

                  <!-- Abordagem e Diferenciais -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="space-y-4">
                      <h6 class="text-base font-bold text-white flex items-center">
                        <svg class="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        Metodologia Prática
                      </h6>
                      <div class="space-y-2">
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Aprendizado 100% prático e orientado a resultados</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Projetos reais desde o primeiro dia</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Foco em aplicação prática do conhecimento</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Preparação completa para o mercado</span>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-4">
                      <h6 class="text-base font-bold text-white flex items-center">
                        <svg class="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857A7.029 7.029 0 007 18M15 9a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Desenvolvimento Profissional
                      </h6>
                      <div class="space-y-2">
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Mentoria semanal personalizada</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Desenvolvimento de carreira e LinkedIn</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Preparação para entrevistas técnicas</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span class="text-sm text-gray-300">Comunidade exclusiva de desenvolvedores</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Impacto e Proposta de Valor -->
                  <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-600/30">
                    <h6 class="text-base font-bold text-blue-400 mb-3 flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                      Transformação Profissional Comprovada
                    </h6>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      Formação intensiva que me capacita como <span class="font-semibold text-blue-400">desenvolvedor full stack market-ready</span>,
                      dominando tecnologias modernas e práticas de mercado para
                      <span class="font-semibold text-white">entrega de soluções completas</span> e
                      <span class="font-semibold text-white">geração de valor real</span> para empresas.
                    </p>
                  </div>
                </div>

                <!-- Status e Progresso -->
                <div class="lg:col-span-1 flex flex-col items-center space-y-4">
                  <div class="text-center">
                    <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-700/30 mb-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      Em Andamento
                    </span>
                    <div class="text-3xl font-bold text-blue-400 mb-1">85%</div>
                    <div class="text-sm text-gray-400 mb-4">Progresso</div>
                  </div>

                  <!-- Indicador de progresso -->
                  <div class="w-full max-w-32 space-y-3">
                    <div class="text-center">
                      <div class="text-sm font-medium text-gray-300 mb-2">Nível Atual</div>
                      <div class="relative">
                        <div class="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center border-4 border-blue-500/30 mx-auto">
                          <span class="text-sm font-bold text-blue-400">Full Stack</span>
                        </div>
                        <div class="absolute inset-0 rounded-full border-4 border-transparent mx-auto" style="background: conic-gradient(from 0deg, #3b82f6 0deg, #3b82f6 306deg, transparent 306deg); border-radius: 50%; mask: radial-gradient(circle, transparent 44px, black 46px); width: 96px; height: 96px;"></div>
                      </div>
                      <div class="text-xs text-gray-400 mt-2">Desenvolvedor</div>
                    </div>
                  </div>

                  <!-- Stack Visual -->
                  <div class="w-full space-y-2">
                    <div class="text-xs font-medium text-gray-400 text-center mb-2">Stack Dominado</div>
                    <div class="flex justify-center space-x-1">
                      <div class="w-2 h-2 bg-yellow-400 rounded-full" title="JavaScript"></div>
                      <div class="w-2 h-2 bg-blue-400 rounded-full" title="React"></div>
                      <div class="w-2 h-2 bg-blue-600 rounded-full" title="TypeScript"></div>
                      <div class="w-2 h-2 bg-green-400 rounded-full" title="Node.js"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card para futuros cursos -->
          <div class="relative group">
            <div class="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 border-dashed hover:border-gray-600/50 transition-all duration-500">
              <div class="text-center space-y-4">
                <div class="mx-auto w-16 h-16 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-300 mb-2">Aprendizado Contínuo</h4>
                  <p class="text-gray-400">
                    Sempre buscando novas <span class="text-blue-400">certificações</span> e
                    <span class="text-emerald-400">qualificações</span> para me manter atualizado
                  </p>
                </div>
              </div>
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
  name: 'EducationSection',
  components: {
    CommonBackground
  },
  data() {
    return {
      academicEducation: {
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Positivo',
        startYear: 2024,
        endYear: 2026,
        status: 'Em andamento',
        progress: 75,
        details: {
          type: 'Graduação Tecnológica',
          duration: '2 anos (4 semestres)',
          modality: 'Presencial',
          enade: 3,
          focus: 'Desenvolvimento de software, análise de sistemas e gestão de projetos de TI',
          coreSubjects: [
            'Lógica de Programação',
            'Algoritmos',
            'Estruturas de Dados',
            'Banco de Dados',
            'Engenharia de Software',
            'Redes de Computadores'
          ],
          advancedSkills: [
            'Programação Orientada a Objetos',
            'Desenvolvimento Web Mobile',
            'Gestão de Projetos',
            'Metodologias Ágeis'
          ],
          developedAbilities: [
            'Raciocínio lógico avançado',
            'Capacidade de análise crítica',
            'Resolução de problemas complexos',
            'Administração de soluções'
          ],
          infrastructure: {
            modernLabs: true,
            latestTechnology: true,
            practicalActivities: true,
            industryPartnerships: true,
            internshipOpportunities: true,
            networkingEvents: true
          },
          currentSemester: 3,
          totalSemesters: 4
        }
      },
      complementaryCourses: [
        {
          id: 1,
          name: 'WiseUp Teens - Inglês Avançado',
          institution: 'WiseUp',
          duration: '4 anos intensivos',
          completionYear: 2015,
          status: 'Concluído',
          level: 'C1 - Avançado/Fluente',
          methodology: 'Metodologia Imersiva Internacional',
          details: {
            focus: 'Ambiente cultural imersivo simulando experiência em país anglófono',
            methodology: {
              immersiveEnvironment: true,
              realCommunication: true,
              strategicContent: true,
              hybridModality: true
            },
            professionalSkills: [
              'Business English avançado',
              'Comunicação técnica',
              'Apresentações corporativas',
              'Redação profissional'
            ],
            digitalResources: [
              'Plataforma online interativa',
              'Dicionário personalizado',
              'Vídeos explicativos',
              'Exercícios complementares'
            ],
            strategicTopics: [
              'Empreendedorismo',
              'Tecnologia',
              'Cultura pop',
              'Business communication'
            ],
            professionalImpact: 'Capacitação essencial para comunicação internacional, documentação técnica e colaboração em equipes globais na área de tecnologia',
            certificate: true,
            fluencyLevel: 'C1',
            completionRate: 100
          }
        },
        {
          id: 2,
          name: 'DevClub - Formação Full Stack',
          institution: 'DevClub',
          duration: 'Formação Intensiva',
          startYear: 2024,
          status: 'Em Andamento',
          level: 'Full Stack Developer',
          methodology: 'Desenvolvimento Completo Zero to Hero',
          details: {
            focus: 'Formação completa em programação com abordagem prática e orientada a resultados',
            approach: {
              practicalLearning: true,
              realProjects: true,
              marketReady: true,
              mentoring: true
            },
            technicalStack: [
              'JavaScript',
              'React',
              'TypeScript',
              'Node.js'
            ],
            methodology: [
              'Aprendizado 100% prático e orientado a resultados',
              'Projetos reais desde o primeiro dia',
              'Foco em aplicação prática do conhecimento',
              'Preparação completa para o mercado'
            ],
            professionalDevelopment: [
              'Mentoria semanal personalizada',
              'Desenvolvimento de carreira e LinkedIn',
              'Preparação para entrevistas técnicas',
              'Comunidade exclusiva de desenvolvedores'
            ],
            differentials: [
              'Abordagem prática com foco em resultados',
              'Formação completa do zero ao profissional',
              'Comunidade e suporte contínuo',
              'Desenvolvimento de carreira integrado',
              'Preparação para mercado de trabalho',
              'Aprendizado acelerado e eficiente'
            ],
            professionalImpact: 'Formação intensiva que me capacita como desenvolvedor full stack market-ready, dominando tecnologias modernas e práticas de mercado para entrega de soluções completas',
            currentProgress: 85,
            skills: {
              frontend: ['JavaScript', 'React', 'TypeScript'],
              backend: ['Node.js'],
              fullstack: true
            }
          }
        }
      ]
    }
  },
  computed: {
    progressPercentage() {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      const startYear = this.academicEducation.startYear
      const endYear = this.academicEducation.endYear

      const totalMonths = (endYear - startYear) * 12
      const elapsedMonths = (currentYear - startYear) * 12 + currentMonth

      return Math.min(Math.round((elapsedMonths / totalMonths) * 100), 100)
    }
  },
  mounted() {
    // Animação de entrada dos elementos
    this.animateElements()
  },
  methods: {
    animateElements() {
      // Implementar animações de entrada se necessário
      const elements = this.$el.querySelectorAll('.animate-fade-in-up')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, index * 100)
      })
    }
  }
}
</script>

<style scoped>
/* Animações personalizadas */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Transições suaves */
.transition-all {
  transition: all 0.3s ease;
}

/* Hover effects para cards */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Gradientes personalizados */
.bg-gradient-conic {
  background: conic-gradient(from 0deg, #3b82f6 0deg, #3b82f6 270deg, transparent 270deg);
}

/* Blur backdrop customizado */
.backdrop-blur-custom {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Estilização para elementos de progresso */
.progress-circle {
  position: relative;
  display: inline-block;
}

.progress-circle::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #3b82f6 0deg, #3b82f6 270deg, transparent 270deg);
  mask: radial-gradient(circle, transparent 50px, black 52px);
}

/* Animações de hover para links e botões */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Media queries para responsividade */
@media (max-width: 768px) {
  .animate-float {
    animation-duration: 4s;
  }

  .text-responsive {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
}

/* Suporte para modo de impressão */
@media print {
  .animate-float,
  .animate-fade-in-up,
  .animate-pulse-glow {
    animation: none;
  }

  .backdrop-blur-sm,
  .backdrop-blur-custom {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
</style>