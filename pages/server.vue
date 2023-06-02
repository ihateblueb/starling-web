<script>
export default {
    data: () => ({
        server: {
            name: "Orchid"
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
            </div>
        </div>
    </div>
</template>