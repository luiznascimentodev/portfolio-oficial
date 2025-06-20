import "../assets/main.css";

import { createApp } from "vue";
import App from "../App.vue";
import { forceLoadingComplete } from "../utils/loadingMetrics.js";

function hideInitialSpinner() {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) {
    spinner.style.transition = "opacity 0.3s ease";
    spinner.style.opacity = "0";
    spinner.style.pointerEvents = "none";
    setTimeout(() => spinner.remove(), 300);
  }
}

function mountApp() {
  const appElement = document.getElementById("app");
  if (!appElement) {
    console.error("Elemento #app não encontrado");
    return;
  }

  createApp(App).mount(appElement);
  hideInitialSpinner();
  // Garante que qualquer sistema de loading interno seja finalizado
  forceLoadingComplete();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
