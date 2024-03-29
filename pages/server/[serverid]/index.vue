<script setup>
import AutofillPlayer from '../../../components/AutofillPlayer.vue';
import Input from '../../../components/Input.vue';
import Toggle from '../../../components/Toggle.vue';
import Command from '../../../components/Command.vue';
import Icon from '../../../components/Icon.vue';
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
        this.refreshPlayers()
        this.getServerCommands()
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
        },
        async getServerCommands() {
            const apiurl = '/api/server/commands/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.commands = response.commands
            } else if (response.statusCode === 500) {
                throw showError({ statusCode: 500, statusMessage: 'On getServerCommands() '+response.statusMessage })
            } else if (response.statusCode === 404) {
                throw showError({ statusCode: 404, statusMessage: 'On getServerCommands() '+response.statusMessage })
            } else if (response.statusCode === 400) {
                throw showError({ statusCode: 400, statusMessage: 'On getServerCommands() '+response.statusMessage })
            }
        },
        async getServerStatus() {
            const apiurl = '/api/server/status/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.playerCount = response.players.length
                this.server.players = response.players
            } else if (response.statusCode === 500) {
                throw showError({ statusCode: 500, statusMessage: 'On getServerStatus() '+response.statusMessage })
            } else if (response.statusCode === 404) {
                throw showError({ statusCode: 404, statusMessage: 'On getServerStatus() '+response.statusMessage })
            } else if (response.statusCode === 400) {
                throw showError({ statusCode: 400, statusMessage: 'On getServerStatus() '+response.statusMessage })
            }
        },
        async refreshPlayers() {
            this.getServerStatus() // gets the players & the status of the server again
        },
        async refreshCommands() {
            this.getServerCommands()
        }
    }
}
</script>

<template>
    <div>
        <div class="loadingBar">
            <div class="loadingIndicator" v-bind:class="{ liActive: !page.ready }"></div>
        </div>
        <div class="mainContent serverContent" v-if="!page.ready">
            <div class="serverInfoPanel">
                <p class="loadingText">Loading Server...</p>
                <p class="loadingSubtext">Please refresh if this is taking too long</p>
            </div>
        </div>

        <div class="mainContent serverContent" v-if="page.ready">
            <div class="serverInfoPanel serverInfoPanelFlex">
                <div class="serverInfoArea">
                    <h1 class="serverName">{{ server.name }}</h1>
                    <span class="serverStats">{{ server.playerCount }} player(s) online</span>
                </div>
                <div class="settingsArea">
                    <Button :href="'/server/'+server.id+'/settings'">Open Settings</Button>
                </div>
            </div>
            <div class="playerList">
                <div class="playerListInner">
                    <AutofillPlayer :name="player.name" v-for="player in server.players" />
                </div>
            </div>
            <Button type="danger">Clear Inputs</Button>
            <div class="serverCommands">
                <Command :content="command" v-for="command in server.commands" />
            </div>
        </div>
    </div>
</template>