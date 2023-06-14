<script setup>
import AutofillPlayer from '../../components/AutofillPlayer.vue';
import Input from '../../components/Input.vue';
import Command from '../../components/Command.vue';
</script>

<script>
export default {
    data: () => ({
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
    },
    methods: {
        async getServerInfo() {
            const apiurl = '/api/server/info/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.name = response.name
            }
        },
        async getServerCommands() {
            const apiurl = '/api/server/commands/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.commands = response.commands
            }
        },
        async getServerStatus() {
            const apiurl = '/api/server/status/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.playerCount = response.players.length
                this.server.players = response.players
            }
        },
        async refreshPlayers() {
            this.getServerStatus() // gets the players & the status of the server again
        },
        async refreshCommands() {
            this.getServerCommands() // gets the commands from the latest push from server
        }
    }
}
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent serverContent">
            <div class="serverInfoPanel">
                <h1 class="serverName">{{ server.name }}</h1>
                <span class="serverStats">{{ server.playerCount }} player(s) online</span>
            </div>
            <div class="playerList">
                <div class="playerListInner">
                    <AutofillPlayer :name="player.name" v-for="player in server.players" />
                </div>
            </div>
            <Button type="danger">Clear Inputs</Button>
            <Button @click="refreshPlayers">Refresh Players</Button>
            <Button @click="refreshCommands">Refresh Commands</Button>
            <div class="serverCommands">
                {{ server.commands }}
                <Command :content="command" v-for="command in server.commands" />
            </div>
        </div>
    </div>
</template>