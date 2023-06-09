// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Starling',
            meta: [
                { name: "Starling", content: "Keep your Minecraft server safe, even while you're offline." }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    pages: true,
    modules: ['@sidebase/nuxt-auth'],
    auth: {
        isEnabled: true,
        // for some reason, the origin isn't regustering and causing problems in production
        origin: 'https://starling-beta.orchidmc.me', 
        basePath: '/api/auth',
        enableSessionRefreshPeriodically: false,
        enableSessionRefreshOnWindowFocus: true,
        globalAppMiddleware: false,
        defaultProvider: undefined,
        addDefaultCallbackUrl: true,
        globalMiddlewareOptions: {
            allow404WithoutAuth: true,
            addDefaultCallbackUrl: true
        }
    }
})
