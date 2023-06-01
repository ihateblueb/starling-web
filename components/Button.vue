<script>
export default {
    props: {
        type: String,
        href: String,
    },
    data: () => ({
        buttonclasses: "btn",
    }),
    created() {
        this.getButtonType()
    },
    methods: {
        async getButtonType() {
            this.buttonclasses = "btn " + this.type
        }
    }
}
</script>

<template>
    <a :class="buttonclasses" :href="href">
        <slot></slot>
    </a>
</template>

<style>
.btn {
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

    display: inline-block;

    border-radius: 0.75em;
    border-width: 0px;
    border-style: solid;
    
    border-top-width: 0.1em;
    border-top-color: var(--button-border-top);
    border-bottom-width: 0.1em;
    border-bottom-color: var(--button-border-btm);
}

.btn.info {
    background-color: var(--bg-info);
}

.btn.success {
    background-color: var(--bg-success);
}

.btn.warning {
    background-color: var(--bg-warning);
}

.btn.danger {
    background-color: var(--bg-danger);
}

.btn.accent {
    background-color: var(--accent1);
}
</style>