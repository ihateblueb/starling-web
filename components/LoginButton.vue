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
        <span class="btnIconCtn">
            <slot></slot>
        </span>
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

    box-shadow: inset 0px -2px 3px -1px var(--button-shadow);
}

.btnIconCtn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.noleft {
    margin-left: 0px !important;
}

.noright {
    margin-right: 0px !important;
}

.btn:active {
    transform: scale(90%);
}

.transparent {
    padding-left: 0em;
    padding-right: 0em;
    background-color: transparent;
    box-shadow: none;
}


.btn.transparent:hover {
    background-color: transparent;
}

.btn:hover,
.btn:hover.undefined {
    background-color: var(--bg-secondary-alt);
}

.btn.undefined {
    background-color: var(--bg-secondary);
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
    background-color: #1f1f21;
}

.btn:hover.github {
    background-color: rgb(27, 27, 29);
}
</style>