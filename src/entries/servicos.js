import { createApp } from "vue";
import ServicosApp from "../ServicosApp.vue";
import "../assets/main.css";

// Aguardar o DOM estar pronto antes de montar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById("app");
    if (appElement) {
      createApp(ServicosApp).mount("#app");
    } else {
      console.error("Elemento #app não encontrado");
    }
  });
} else {
  // DOM já está pronto
  const appElement = document.getElementById("app");
  if (appElement) {
    createApp(ServicosApp).mount("#app");
  } else {
    console.error("Elemento #app não encontrado");
  }
}
