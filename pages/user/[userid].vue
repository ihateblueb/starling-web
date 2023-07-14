<script setup>
</script>

<script>
export default {
    data: () => ({
        page: {
            ready: false,
        },
        userinfo: "",
        user: {
            id: 0,
            name: "user",
            servers: [{}],
        }
    }),
    mounted() {
        // load from top of page to bottom of page visually
        console.log(this.$route.params);
        this.user.id = this.$route.params.userid

        const { status, data } = useAuth()
        if (status.value === "authenticated") {
            this.userinfo = data.value.user
            this.user.name = this.userinfo.name
            this.user.email = this.userinfo.email

            this.getUserInfo()
            this.page.ready = true
        }
    },
    methods: {
        async getUserInfo() {
            const apiurl = '/api/user/'+this.user.id
            var response = await (await fetch(apiurl)).json()
            console.log(response)
            if (response.statusCode === 200) {
                
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
                <p class="loadingText">Loading Your Data...</p>
                <p class="loadingSubtext">Please refresh if this is taking too long</p>
            </div>
        </div>

        <div class="mainContent serverContent" v-if="page.ready">
            <div class="serverInfoPanel serverInfoPanelFlex">
                <div class="serverInfoArea">
                    <h1 class="serverName">{{ user.name }}</h1>
                    <span>
                        <span class="serverStats">Email: </span>
                        <span class="serverStats userEmail">{{ user.email }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.userEmail {
    filter: blur(6px);
    transition: 0.1s;
}
.userEmail:hover {
    filter: blur(0px);
}
</style>