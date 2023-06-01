<script setup>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
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
                    Don't have an account? <a class="loginDescriptionLink" href="/signup">Sign up</a>.
                </p>
                <div class="loginInputs">
                    <Input width="250px" placeholder="Email" />
                    <Input width="250px" placeholder="Password" />
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    </div>
</template>