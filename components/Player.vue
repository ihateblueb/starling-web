<script>
export default {
    props: {
        name: String,
    },
    data: () => ({
        url: "https://mc-heads.net/avatar/",
    }),

    mounted() {
        this.getHead()
    },

    methods: {
        async getHead() {
            this.url = "https://mc-heads.net/avatar/" + this.name
        }
    }
}
</script>

<template>
    <img class="playerHead" :src="url">
    <span class="playerName">{{ name }}</span>
</template>