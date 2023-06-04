<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent errorContent gridContainer">
            <div class="errorHeader">
                <h1 class="errorCode">{{ error.statusCode }}</h1>
                <h1 class="errorTitle">It looks like you took a wrong turn! Let's get you back on track.</h1>
                <br><br>
                <Button @click="handleError()" type="noleft">Return Home</Button>
                <Button href="https://twitter.com/starlingmod">Check Server Status</Button>
                <Button href="https://twitter.com/starlingmod">Get Help</Button>
            </div>
        </div>
    </div>
</template>