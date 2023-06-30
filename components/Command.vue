<script>
export default {
    props: {
        content: Object,
    },
    data: () => ({
        name: null,
        displayname: null,
        placeholders: null,
        command: null,
    }),
    mounted() {
        this.getName()
        this.getDisplayName()
        this.handlePlaceholders()
    },
    methods: {
        async getName() {
            this.name = "cmd-" + this.content.name
        },
        async getDisplayName() {
            this.displayname = this.content.displayname
        },
        async handlePlaceholders() {
            const regex = /%.*?%/g;
            var rawcmd = this.content.command
            const matches = rawcmd.match(regex) || [];
            const splitCommand = rawcmd.split(regex);
            const result = splitCommand.reduce((accumulator, value, index) => {
                if (value) {
                    accumulator.push(value);
                }
                if (index < matches.length) {
                    accumulator.push(matches[index]);
                }
                return accumulator;
            }, []);
            this.command = result;
            console.log(result);
        },
        isTextPlaceholder(item) {
            if (item.startsWith('%') && item.endsWith('%')) {
                if (this.content.commands  === "text") { // figure out how to search for items type
                    return true;
                } else {
                    return false;
                }
            } else {
                    return false;
            }
        },
        checkPlaceholder(placeholder) {

        }

    }
}

</script>

<template>
    <div :id="name">
        <p class="commandLabel">{{ displayname }} <span style="margin-left: 5px; margin-right: 5px;">&bull;</span> <span
                style="color: var(--text3);">{{ content.command }}</span></p>
        <div>
            <template v-for="(item, index) in this.command">
                <template v-if="isTextPlaceholder(item)">
                    <Input :key="index" :placeholder="item.replace(/%/g, '')" />
                </template>
                <template v-else>
                    <span :key="index">{{ item }}</span>
                </template>
            </template>
        </div>
    </div>
</template>

<style></style>