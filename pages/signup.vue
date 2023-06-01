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
                    Sign Up for Starling
                </h2>
                <p class="loginDescription">
                    Already have an account? <a class="loginDescriptionLink" href="/login">Login</a>.
                </p>
                <div class="loginInputs">
                    <Input width="250px" placeholder="Email" />
                    <Input itype="password" width="250px" placeholder="Password" />
                    <Input itype="password" width="250px" placeholder="Server Token" />
                </div>
                <div>
                    <ActionButton action="signup">Sign Up</ActionButton>
                </div>
            </div>
        </div>
    </div>
</template>