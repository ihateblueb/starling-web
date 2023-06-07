<script setup>
import AutofillPlayer from '../../components/AutofillPlayer.vue';
</script>

<script>
export default {
    data: () => ({
        server: {
            id: 0,
            name: "Your Server",
            playerCount: 0,
            players: [{

            }]
        }
    }),
    mounted() {
        console.log(this.$route.params);
        this.server.id = this.$route.params.serverid
        this.getServerInfo()
        this.getServerStatus()
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
        async getServerStatus() {
            const apiurl = '/api/server/status/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.playerCount = response.playerCount
                this.server.players = response.players
            }
        },
        async populatePlayers() {
            this.getServerStatus() // gets the players & the status of the server again
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
                <h1 class="serverName">{{ server.name }} ({{ server.id }})</h1>
                <span class="serverStats">{{ server.playerCount }} player(s) online</span>
            </div>
            <div class="playerList">
                <div class="playerListInner">
                    <AutofillPlayer :name="player.name" v-for="player in server.players" />
                </div>
            </div>
            <Button type="danger">Clear Inputs</Button>
            <Button @click="populatePlayers">Refresh Players</Button>
            <div class="serverCommands">

            </div>
        </div>
    </div>
</template>