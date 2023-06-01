<script>
export default {
    props: {
        type: String,
        href: String,
        action: String,
        width: String,
    },
    data: () => ({
        buttonclasses: "btn",
        widthstyle: "width: 500px;",
    }),
    created() {
        this.getButtonType()
        this.getWidth()
    },
    methods: {
        async getButtonType() {
            this.buttonclasses = "btn " + this.type
        },
        async getWidth() {
            this.widthstyle = "width: " + this.width + "!important;"
        },
        async buttonAction() {
            if(this.action === "login") {
                // login
            } else if(this.action === "logout") {
                // logout
            } else if(this.action === "register") {
                // register
            } 
        }
    }
}

</script>

<template>
    <a :class="buttonclasses" @click="buttonAction()" :style="widthstyle" :href="href">
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

/* Service Types -- ActionButton exclusive */

.btn.discord {
    background-color: #5865F2;
}

</style>