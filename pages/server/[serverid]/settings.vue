<script setup>
import Input from '../../../components/Input.vue';
</script>

<script>
export default {
    data: () => ({
        page: {
            ready: false,
        },
        server: {
            id: 0,
            name: "Your Server",
            playerCount: 0,
            players: [{}],
            commands: [{}]
        }
    }),
    mounted() {
        // load from top of page to bottom of page visually
        console.log(this.$route.params);
        this.server.id = this.$route.params.serverid
        this.getServerInfo()
        this.page.ready = true
    },
    methods: {
        async getServerInfo() {
            const apiurl = '/api/server/info/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.name = response.name
            } else if (response.statusCode === 500) {
                throw showError({ statusCode: 500, statusMessage: 'On getServerInfo() '+response.statusMessage })
            } else if (response.statusCode === 404) {
                throw showError({ statusCode: 404, statusMessage: 'On getServerInfo() '+response.statusMessage })
            } else if (response.statusCode === 400) {
                throw showError({ statusCode: 400, statusMessage: 'On getServerInfo() '+response.statusMessage })
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="loadingBar">
            <div class="loadingIndicator" v-bind:class="{ liActive: !page.ready }"></div>
        </div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent serverContent" v-if="!page.ready">
            <div class="serverInfoPanel">
                <p class="loadingText">Loading Server Data...</p>
                <p class="loadingSubtext">Please refresh if this is taking too long</p>
            </div>
        </div>

        <div class="mainContent serverContent" v-if="page.ready">
            <div class="serverInfoPanel">
                <Button type="noleft transparent" :href="'/server/'+server.id">← Return to Server</Button>
                <h1 class="serverName">Settings</h1>
                <span class="serverStats">{{ server.name }} &bull; Server ID: {{ server.id }}</span>
            </div>
            <br>
            <Button type="noleft">Add a Moderator</Button>
            <Button>Add an Admin</Button>
            <Button type="danger">Delete Server</Button>
        </div>
    </div>
</template>