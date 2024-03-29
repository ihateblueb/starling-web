// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    pages: true,
    modules: ['@sidebase/nuxt-auth'],
    auth: {
      origin: process.env.AUTH_ORIGIN,
      enableGlobalAppMiddleware: true
    }
})