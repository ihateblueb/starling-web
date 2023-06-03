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
                    Register for Starling
                </h2>
                <p class="loginDescription">
                    Already have an account? <a class="loginDescriptionLink" href="/login">Login</a>.
                </p>
                <div class="loginInputs">
                    <Button @click="signIn('discord')" width="250px" type="discord">
                        <div class="loginButtonInner">
                            <DiscordIcon />
                            Login with Discord
                        </div>
                    </Button>
                    <Button @click="signIn('github')" width="250px" type="github">
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