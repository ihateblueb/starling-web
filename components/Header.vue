<script setup>
import Button from '../components/Button.vue'
</script>

<script>
export default {
    data: () => ({
        loggedin: false,
        userinfo: null,
    }),
    mounted() {
        const { status, data } = useAuth()
        if (status.value === "authenticated") {
            this.userinfo = data.value.user
            this.loggedin = true
        } else {
            this.loggedin = false
        }
    }
}
</script>

<template>
    <div class="header">
        <div class="headerContent">
            <NuxtLink to="/" style="text-decoration: none;">
                <div class="wordmark">
                    <div class="smallLogo">
                        <img class="smallLogoImage" src="/assets/logo.webp">
                    </div>
                    <span class="brandName">Starling</span>
                </div>
            </NuxtLink>
            <div class="headerLinksArea">
                <a class="headerLink" href="https://discord.gg/">Support</a>
                <a class="headerLink" href="https://github.com/ihateblueb/starling">Contribute</a>
                <a class="headerLink" href="https://modrinth.com">Download</a>
            </div>
            <div class="accountArea" v-if="loggedin">
                <a class="username" href="/user">{{ userinfo.name }}</a>
                <img class="avatar" :src="userinfo.image" />
                <span style="margin-left: 5px;">
                    <Button type="transparent" href="/api/auth/signout" icon="log-out" />
                </span>
            </div>
            <div class="accountArea" v-else>
                <Button type="accent" href="/login" icon="log-in">Login</Button>
            </div>
        </div>
    </div>
</template>
  
<style>
.betaTag {
    font-size: 13px;
    font-family: var(--font2);
    border-radius: 0.5em;
}

.header {
    width: 100%;
    display: flex;
    justify-content: center;

    background-color: var(--bg-primary-50);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    position: fixed;
    top: 0;
    z-index: 100;
}

.homepage {
    background-color: var(--bg-secondary-50);
}

.headerContent {
    width: 100%;
    max-width: 1024px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    align-items: center;

    text-shadow: 0px 0px 20px #000000;
}


.headerLinksArea {
    margin-left: 10px;
    margin-right: 10px;
    flex-grow: 5;
}

.donateLink {
    color: #f87ac3 !important;
}

.headerLink {
    margin-left: 5px;
    margin-right: 5px;

    color: var(--text1);
    font-family: var(--font1);
    font-weight: 400;
    font-size: 16px;

    text-decoration: none;
    transition: 0.1s;
}

.headerLink:hover {
    color: var(--text3);
    transition: 0.1s;
}

.wordmark {
    display: flex;
    align-items: center;

    flex-grow: 0;
    cursor: pointer;
}

.brandName {
    color: var(--text1);
    font-family: var(--font2);
    font-size: 20px;
    font-weight: 700;

    margin-left: 15px;
    margin-right: 15px;
}

.smallLogo {
    display: flex;
    align-items: center;
}

.smallLogoImage {
    height: 35px;
    width: 35px;
}

.accountArea {
    display: flex;
    align-items: center;
    flex-grow: 0;
    cursor: pointer;
}

.username {
    margin-right: 10px;
    margin-left: 10px;

    color: var(--text1);
    font-family: var(--font1);
    font-weight: 400;
    font-size: 16px;

    text-decoration: none;
    transition: 0.1s;
}

.username:hover {
    color: var(--text3);
    transition: 0.1s;
}

.avatar {
    height: 35px;
    width: 35px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>