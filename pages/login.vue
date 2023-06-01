<script setup>
import Header from '../components/Header.vue'
import ActionButton from '../components/ActionButton.vue'
import Input from '../components/Input.vue'
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
                    <Input width="250px" placeholder="Email" />
                    <Input itype="password" width="250px" placeholder="Password" />
                </div>
                <div>
                    <ActionButton action="login">Login</ActionButton>
                </div>
            </div>
        </div>
    </div>
</template>