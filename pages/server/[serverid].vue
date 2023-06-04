<script setup>
import AutofillPlayer from '../../components/AutofillPlayer.vue';
</script>

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
                <h1 class="serverName">{{ server.name }}</h1>
                <span class="serverStats">{{ server.players.count }} player(s) online</span>
            </div>
            <div class="playerList">
                <div class="playerListInner">
                    <AutofillPlayer name="Gooop00" />
                    <AutofillPlayer name="blueb" />
                    <AutofillPlayer name="kurbiis" />
                    <AutofillPlayer name="Gooop00" />
                    <AutofillPlayer name="blueb" />
                    <AutofillPlayer name="kurbiis" />
                    <AutofillPlayer name="Gooop00" />
                    <AutofillPlayer name="blueb" />
                    <AutofillPlayer name="kurbiis" />
                    <AutofillPlayer name="Gooop00" />
                    <AutofillPlayer name="blueb" />
                    <AutofillPlayer name="kurbiis" />
                    <AutofillPlayer name="Gooop00" />
                    <AutofillPlayer name="blueb" />
                    <AutofillPlayer name="kurbiis" />
                </div>
            </div>
                <Button type="danger">Clear Inputs</Button>
            <div class="serverCommands">
                
            </div>
        </div>
    </div>
</template>