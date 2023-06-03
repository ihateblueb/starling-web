// file: ~/server/api/auth/[...].ts
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  providers: [
    GithubProvider.default({
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret'
    })
  ]
})