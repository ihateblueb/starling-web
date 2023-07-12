<script>
export default {
    props: {
        type: String,
        placeholder: String,
        width: String,
        itype: String,
    },
    data: () => ({
        inputclasses: "ipt",
        widthstyle: "width: 500px!important;",
        inputtype: "text",
    }),
    created() {
        this.getInputType()
        this.getWidth()
        this.determineIType()
    },
    methods: {
        async getInputType() {
            this.inputclasses = "ipt " + this.type
        },
        async getWidth() {
            this.widthstyle = "width: " + this.width + "!important;"
        },
        async determineIType() {
            if (this.itype === "password") {
                this.inputtype = "password"
            } else {
                this.inputtype = "text"
            }
        }
    }
}
</script>

<template>
    <input :type="inputtype" :class="inputclasses" :style="widthstyle" :placeholder="placeholder">
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
    cursor: text;
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
    
    box-shadow: inset 0px -2px 3px -1px var(--button-shadow);
}

.noleft {
    margin-left: 0px !important;
}

.noright {
    margin-right: 0px !important;
}

.ipt.info {
    background-color: var(--bg-info1);
}

.ipt.success {
    background-color: var(--bg-success1);
}

.ipt.warning {
    background-color: var(--bg-warning1);
}

.ipt.danger {
    background-color: var(--bg-danger1);
}

.ipt.accent {
    background-color: var(--accent1);
}
</style>