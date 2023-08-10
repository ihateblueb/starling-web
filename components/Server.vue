<script>
export default {
    props: {
        content: Object,
    },
    data: () => ({
        server: {
            name: "Orchid",
            id: 0,
            playerCount: "",
        }
    }),

    mounted() {
        this.syncContent()
    },

    methods: {
        async syncContent() {
            this.server.id = content.id
            this.getServerInfo()
            this.getServerStatus()
        },
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
        async getServerStatus() {
            const apiurl = '/api/server/status/'+this.server.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                this.server.playerCount = response.players.length
            } else if (response.statusCode === 500) {
                throw showError({ statusCode: 500, statusMessage: 'On getServerStatus() '+response.statusMessage })
            } else if (response.statusCode === 404) {
                throw showError({ statusCode: 404, statusMessage: 'On getServerStatus() '+response.statusMessage })
            } else if (response.statusCode === 400) {
                throw showError({ statusCode: 400, statusMessage: 'On getServerStatus() '+response.statusMessage })
            }
        }
    }
}
</script>

<template>
    <div class="server">
        <span class="serverItemInfoBox">
            <span class="serverItemName">{{ server.serverName }}</span>
            <span class="serverItemInfo">{{ server.onlinePlayers }} online</span>
        </span>
        <span class="serverItemButtonBox">
            <Button type="dark" :href="'/server/' + server.server.id">Open</Button>
            <Button type="dark" :href="'/server/' + server.server.id + '/settings'">Settings</Button>
        </span>
    </div>
</template>

<style>
.server {
    margin-top: 20px;
    margin-bottom: 20px;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    border-radius: 10px;

    background-color: var(--bg-secondary);

    display: flex;
    align-items: center;
}

.serverItemName {
    font-family: var(--font1);
    color: var(--text1);
    font-size: 20px;
    font-weight: 600;
}

.serverItemInfo {
    font-family: var(--font1);
    color: var(--text2);
    font-size: 16px;
    font-weight: 400;

    margin-left: 10px;
}

.serverItemInfoBox {
    flex-grow: 3;
}

.serverItemButtonBox {
    display: flex;
}
</style>