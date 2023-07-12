<script>
export default {
    data: () => ({
    })
}
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent serverListContent">
            <div class="serverInfoPanel serverInfoPanelFlex">
                <div class="serverInfoArea">
                    <h1 class="serverName">Your Servers</h1>
                </div>
                <div class="settingsArea">
                    <Button :href="'/panel/add'">Add Server</Button>
                </div>
            </div>
            
        </div>
    </div>
</template>