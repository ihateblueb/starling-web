<script setup>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import DiscordIcon from '../components/icons/DiscordIcon.vue'
import GitHubIcon from '../components/icons/GithubIcon.vue'

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/panel',
    }
})

const { signIn } = useAuth()
</script>

<script>
export default {
}
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
                    <LoginButton @click="signIn('discord')" width="250px" type="discord">
                        <div class="loginButtonInner">
                            <DiscordIcon />
                            Login with Discord
                        </div>
                    </LoginButton>
                    <LoginButton @click="signIn('github')" width="250px" type="github">
                        <div class="loginButtonInner">
                            <GitHubIcon />
                            Login with GitHub
                        </div>
                    </LoginButton>
                </div>
            </div>
        </div>
    </div>
</template>