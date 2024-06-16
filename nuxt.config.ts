export default defineNuxtConfig({
  modules: ["@nuxt/fonts"],
  css: ["modern-normalize"],
  routeRules: {
    "/": { prerender: true },
  },
});
