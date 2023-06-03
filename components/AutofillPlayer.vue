<script setup>
import Player from './Player.vue';
</script>

<script>
export default {
    props: {
        name: String,
    }
}
</script>

<template>
    <div class="playerContainer">
        <div class="playerContent">
            <Player :name="name" />
            <Button type="dark">Autofill</Button>
        </div>
    </div>
</template>