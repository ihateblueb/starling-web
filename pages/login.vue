<script setup>
import Header from '../components/Header.vue'
import ActionButton from '../components/ActionButton.vue'
import DiscordIcon from '../components/icons/DiscordIcon.vue'
import GithubIcon from '../components/icons/GithubIcon.vue'
</script>

<script>
export default {
    created() {
        // Check for cached credentials, if they exist login.
    }
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
                    <ActionButton action="login" width="250px" type="discord">
                        <div class="loginButtonInner">
                            <DiscordIcon />
                            Login with Discord
                        </div>
                    </ActionButton>
                    <ActionButton action="login" width="250px" type="github">
                        <div class="loginButtonInner">
                            <GithubIcon />
                            Login with GitHub
                        </div>
                    </ActionButton>
                </div>
            </div>
        </div>
    </div>
</template>