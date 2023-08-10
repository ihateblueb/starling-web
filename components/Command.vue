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
        if (this.content.name) { // this will ensure that the content is loaded
            console.log("Loaded comamnd " + this.content.name)
            this.getName()
            this.getDisplayName()
            this.handlePlaceholders()
        } else {
            const unwatch = this.$watch('content.name', () => {
                console.log("Loaded comamnd " + this.content.name)
                this.getName()
                this.getDisplayName()
                this.handlePlaceholders()
                unwatch()
            })
        }
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
                var inputArray = Object.values(this.content.input);
                if (inputArray.find((element) => element = item).type === "text") {
                    return true;
                } else if (inputArray.find((element) => element = item).type === "toggle") {
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        isTogglePlaceholder(item) {
            if (item.startsWith('%') && item.endsWith('%')) {
                var inputArray = Object.values(this.content.input);
                if (inputArray.find((element) => element = item).type === "text") {
                    return false;
                } else if (inputArray.find((element) => element = item).type === "toggle") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        isJustText(item) {
            var inputArray = Object.values(this.content.input);
            if (item.startsWith('%') && item.endsWith('%')) {
                return false;
            } else if (inputArray.find((element) => element = item).type === "") {
                return true;
            } else {
                return true;
            }
        },
        executeCommand(name) {
            console.log("Command " + name + " executed.")
        }

    }
}

</script>

<template>
    <div :id="name" class="commandContainer">
        <p class="commandLabel">{{ displayname }} <span style="margin-left: 5px; margin-right: 5px;"></span></p>
        <div>
            <template v-for="(item, index) in this.command">
                <template v-if="isTextPlaceholder(item)">
                    <Input type="noleft noright" :key="index" :placeholder="item.replace(/%/g, '')" />
                </template>
                <template v-if="isTogglePlaceholder(item)">
                    <Toggle type="noleft noright" :key="index" :id="'toggle-'+item.replace(/%/g, '')" />
                </template>
                <template v-if="isJustText(item)">
                    <span :key="index" class="comamndText">{{ item }}</span>
                </template>
            </template>
            <br>
            <Button type="noleft" @click="executeCommand(name)">Submit</Button>
        </div>
    </div>
</template>

<style></style>