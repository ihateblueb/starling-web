<script>
export default {
    props: {
        type: String,
        href: String,
        width: String,
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
    <a :class="buttonclasses" :style="widthstyle" :href="href">
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

.btn:active {
    transform: scale(90%);
}

.noleft {
    margin-left: 0px!important;
}

.btn:hover.undefined {
    background-color: var(--bg-secondary-alt);
}

.btn.info {
    background-color: var(--bg-info1);
}

.btn:hover.info {
    background-color: var(--bg-info2);
}

.btn.success {
    background-color: var(--bg-success1);
}

.btn:hover.success {
    background-color: var(--bg-success2);
}

.btn.warning {
    background-color: var(--bg-warning1);
}

.btn:hover.warning {
    background-color: var(--bg-warning2);
}

.btn.danger {
    background-color: var(--bg-danger1);
}

.btn:hover.danger {
    background-color: var(--bg-danger2);
}

.btn.accent {
    background-color: var(--accent1);
}

.btn:hover.accent {
    background-color: var(--accent2);
}

.btn.dark {
   background-color: var(--bg-secondary-alt); 
}

.btn:hover.dark {
   background-color: var(--bg-tertiary); 
}

/* Service Types */

.btn.discord {
    background-color: #5865F2;
}

.btn:hover.discord {
    background-color: #4650b9;
}

.btn.github {
    background-color: #0d0d0e;
}

.btn:hover.github {
    background-color: #060607;
}

</style>