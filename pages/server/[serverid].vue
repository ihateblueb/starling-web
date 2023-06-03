<script>
export default {
    data: () => ({
        server: {
            name: "Your Server",
            players: {
                count: 0
            }
        }
    })
}
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent serverContent">
            <div class="serverInfoPanel">
                <h1>{{ server.name }}</h1>
                <span>{{ server.players.count }} player(s) online</span>
            </div>
            <div class="playerList">

            </div>
            <div class="serverCommands">

            </div>
        </div>
    </div>
</template>