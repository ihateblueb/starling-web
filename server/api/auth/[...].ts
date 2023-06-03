import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
    secret: process.env.NUXT_SECRET,
    pages: {
        signIn: '/login'
    },
    providers: [
        DiscordProvider.default({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_TOKEN
        }),
        GitHubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_TOKEN
        })
    ]
})
