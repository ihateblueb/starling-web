<script setup>
import Server from '../../components/Server.vue'
</script>

<script>
export default {
    data: () => ({
        page: {
            ready: false,
        },
        user: {
            servers: [{}]
        }
    }),
    mounted() {
        this.getServers()
        this.page.ready = true
    },
    methods: {
        async getServers() {
            const apiurl = '/api/user/0'
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.user.servers = response.servers
            } else if (response.statusCode === 500) {
                throw showError({ statusCode: 500, statusMessage: 'On getServers() ' + response.statusMessage })
            } else if (response.statusCode === 404) {
                throw showError({ statusCode: 404, statusMessage: 'On getServers() ' + response.statusMessage })
            } else if (response.statusCode === 400) {
                throw showError({ statusCode: 400, statusMessage: 'On getServers() ' + response.statusMessage })
            }
        },
    }
}
</script>

<template>
    <div>
        <div class="loadingBar">
            <div class="loadingIndicator" v-bind:class="{ liActive: !this.page.ready }"></div>
        </div>
        <div class="mainContent serverContent" v-if="!this.page.ready">
            <div class="serverInfoPanel">
                <p class="loadingText">Loading Panel...</p>
                <p class="loadingSubtext">Please refresh if this is taking too long</p>
            </div>
        </div>
        <div class="mainContent serverListContent" v-if="this.page.ready">
            <div class="serverInfoPanel serverInfoPanelFlex">
                <div class="serverInfoArea">
                    <h1 class="serverName">Your Servers</h1>
                </div>
                <div class="settingsArea">
                    <Button :href="'/panel/add'">Add Server</Button>
                </div>
            </div>
            <div class="serverList">
                <Server :content="server" v-for="server in user.servers" />
            </div>
        </div>
    </div>
</template>

<style>
.serverListContent {
    min-height: 400px;
}
</style>