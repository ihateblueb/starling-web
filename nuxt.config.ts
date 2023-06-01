// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Starling',
            meta: [
                { name: "Starling", content: "Keep your Minecraft server safe while you're offline." }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    pages: true
})
