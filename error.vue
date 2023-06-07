<script setup>
const props = defineProps({
    error: Object
})
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent errorContent gridContainer">
            <div class="errorHeader">
                <h1 class="errorCode">{{ error.statusCode }}</h1>
                <h1 class="errorTitle">Uh oh! Something went wrong here.</h1>
                <br><br>
                <Button href="/" type="noleft">Return Home</Button>
                <Button href="https://twitter.com/starlingmod">Check Server Status</Button>
                <Button href="https://twitter.com/starlingmod">Get Help</Button>
            </div>
        </div>
    </div>
</template>