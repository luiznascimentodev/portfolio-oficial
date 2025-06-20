import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Configuração de múltiplos entry points para MPA (Multi-Page Application)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contato: resolve(__dirname, "contato.html"),
        curriculo: resolve(__dirname, "curriculo.html"),
        projetos: resolve(__dirname, "projetos.html"),
        servicos: resolve(__dirname, "servicos.html"),
        404: resolve(__dirname, "404.html"),
      },
      output: {
        // Otimização para chunks
        manualChunks: {
          "vue-vendor": ["vue"],
          common: [
            "./src/components/shared/Navigation.vue",
            "./src/components/shared/GlobalFooter.vue",
            "./src/components/shared/BackToTopButton.vue",
          ],
        },
        // Configuração de nomes de arquivos otimizada para cache
        chunkFileNames: "assets/js/[name]-[hash:8].js",
        entryFileNames: "assets/js/[name]-[hash:8].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(css|scss|sass|less|styl|stylus)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash:8].${ext}`;
          }
          // Tratamento otimizado de imagens para manter nomes específicos de arquivos LCP e responsivos
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name)) {
            // Manter os nomes de arquivos para imagens LCP e responsivas para garantir o preload correto
            if (
              assetInfo.name.includes("-lcp.") ||
              assetInfo.name.includes("-150.") ||
              assetInfo.name.includes("-300.") ||
              assetInfo.name.includes("-420.") ||
              assetInfo.name.includes("-640.") ||
              assetInfo.name.includes("-800.") ||
              assetInfo.name.includes("-optimized.") ||
              assetInfo.name.includes("-compressed.") ||
              assetInfo.name.includes("-original.")
            ) {
              return `assets/[name].${ext}`;
            }
            // Para outras imagens, usar hash para invalidação de cache
            return `assets/img/[name]-[hash:8].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash:8].${ext}`;
          }
          return `assets/[name]-[hash:8].${ext}`;
        },
      },
    },
    // Otimizações de build
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Configurações de assets
    assetsDir: "assets",
    assetsInlineLimit: 2048, // Reduzir para evitar inline de imagens grandes
    // Configurações de CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Target para browsers modernos
    target: "esnext",
    // Configurações de sourcemap
    sourcemap: false,
  },

  // Configuração de aliases
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@entries": resolve(__dirname, "./src/entries"),
    },
  },

  // Configuração do servidor de desenvolvimento
  server: {
    port: 3000,
    open: true,
    cors: true,
    // Configuração para desenvolvimento MPA
    middlewareMode: false,
    // HMR otimizado
    hmr: {
      overlay: true,
    },
  },

  // Configuração do preview
  preview: {
    port: 4173,
    open: true,
    cors: true,
  },

  // Configuração de CSS
  css: {
    postcss: "./postcss.config.js",
    devSourcemap: true,
    // Otimizações para Tailwind CSS
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },

  // Configuração de assets - preservar qualidade das imagens
  assetsInclude: [
    "**/*.pdf",
    "**/*.webp",
    "**/*.avif",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
  ],

  // Configuração de otimização de dependências
  optimizeDeps: {
    include: ["vue"],
    exclude: [],
  },

  // Configuração para PWA (caso queira implementar no futuro)
  base: "/",

  // Configuração de logs
  logLevel: "info",

  // Configurações de performance
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },

  // Configuração de cache
  cacheDir: ".vite",
});
