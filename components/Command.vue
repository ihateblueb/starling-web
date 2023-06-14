<script>
export default {
    props: {
        content: Object,
    },
    data: () => ({
        name: null,
        displayname: null,
    }),
    created() {
        this.getName()
        this.getDisplayName()
    },
    methods: {
        async getName() {
            this.name = "cmd-"+this.content.name
        },
        async getDisplayName() {
            this.displayname = this.content.displayname
        }
    }
}

</script>

<template>
    <div :id="name">
        <p class="commandLabel">{{ displayname }}</p>
        <div>
            {{ content.command }}
        </div>
    </div>
</template>

<style>

</style>