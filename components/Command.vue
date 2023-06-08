<script>
export default {
    props: {
        name: String,
        displayname: String,
        command: String,
    },
    data: () => ({
        buttonclasses: "btn",
    }),
    created() {
        this.getButtonType()
        this.getWidth()
    },
    methods: {
        async getWidth() {
            this.widthstyle = "width: " + this.width + "!important;"
        },
        async getButtonType() {
            this.buttonclasses = "btn " + this.type
        }
    }
}

</script>

<template>
    <div>
        <span class="commandLabel">{{ displayname }}</span>
        <slot></slot>
    </div>
</template>

<style>

</style>