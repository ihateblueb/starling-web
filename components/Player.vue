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
            if (this.name === "") {
                this.url = "/assets/unknown-user.webp"
            } else {
            this.url = "https://mc-heads.net/avatar/" + this.name
            }
        }
    }
}
</script>

<template>
    <img class="playerHead" :src="url" aria-hidden="true">
    <span class="playerName">{{ name }}</span>
</template>