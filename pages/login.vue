<script setup lang="ts">
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import DiscordIcon from '../components/icons/DiscordIcon.vue'
import GitHubIcon from '../components/icons/GithubIcon.vue'

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
})
const { signIn } = useAuth()
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent loginContent">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    Login to Starling
                </h2>
                <p class="loginDescription">
                    Don't have an account? <a class="loginDescriptionLink" href="/register">Register</a>.
                </p>
                <div class="loginInputs">
                    <Button href="https://discord.com/oauth2/authorize?client_id=1114353512210509945&scope=identify%20email&response_type=code" width="250px" type="discord">
                        <div class="loginButtonInner">
                            <DiscordIcon />
                            Login with Discord
                        </div>
                    </Button>
                    <Button @click="signIn()" width="250px" type="github">
                        <div class="loginButtonInner">
                            <GitHubIcon />
                            Login with GitHub
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>