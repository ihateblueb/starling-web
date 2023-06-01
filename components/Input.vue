<script>
export default {
    props: {
        type: String,
        placeholder: String,
        width: String,
    },
    data: () => ({
        inputclasses: "ipt",
        widthstyle: "width: 500px!important;",
    }),
    created() {
        this.getInputType()
        this.getWidth()
    },
    methods: {
        async getInputType() {
            this.inputclasses = "ipt " + this.type
        },
        async getWidth() {
            this.widthstyle = "width: " + this.width + "!important;"
        }
    }
}
</script>

<template>
    <input type="text" :class="inputclasses" :style="widthstyle" :placeholder="placeholder">
</template>

<style>
.ipt {
    margin: 6px;

    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 1.3em;
    padding-right: 1.3em;

    background-color: var(--bg-secondary);
    color: var(--text1);

    user-select: none;
    cursor: pointer;
    transition: .3s;

    font-family: var(--font1);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border-radius: 0.75em;
    border-width: 0px;
    border-style: solid;
    
    border-top-width: 0.1em;
    border-top-color: var(--button-border-top);
    border-bottom-width: 0.1em;
    border-bottom-color: var(--button-border-btm);
}

.ipt.info {
    background-color: var(--bg-info);
}

.ipt.success {
    background-color: var(--bg-success);
}

.ipt.warning {
    background-color: var(--bg-warning);
}

.ipt.danger {
    background-color: var(--bg-danger);
}

.ipt.accent {
    background-color: var(--accent1);
}
</style>