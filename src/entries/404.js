import { createApp } from "vue";
import "../assets/main.css";
import NotFound404App from "../NotFound404App.vue";

// Função simples e direta para montar a aplicação
function initApp() {
  const appElement = document.getElementById("not-found-app");

  if (appElement) {
    console.log("Montando aplicação 404");
    try {
      createApp(NotFound404App).mount("#not-found-app");
    } catch (error) {
      console.error("Erro ao montar aplicação 404:", error);
      // Fallback manual em caso de erro
      appElement.innerHTML = `
        <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div class="text-center max-w-2xl mx-auto">
            <h1 class="text-8xl font-bold text-red-400 mb-4">404</h1>
            <h2 class="text-3xl font-bold text-white mb-4">Página Não Encontrada</h2>
            <p class="text-xl text-gray-400 mb-8">A página que você está procurando não existe.</p>
            <a href="/" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Voltar ao Início
            </a>
          </div>
        </div>
      `;
    }
  } else {
    console.error("Elemento #not-found-app não encontrado");
  }
}

// Aguardar o DOM estar pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  // DOM já está pronto
  initApp();
}
