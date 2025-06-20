export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    // Otimizações básicas para CSS em produção
    cssnano:
      process.env.NODE_ENV === "production"
        ? {
            preset: "default",
          }
        : false,
  },
};
