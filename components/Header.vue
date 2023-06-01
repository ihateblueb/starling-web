<script setup>
import Button from '../components/Button.vue'
</script>

<template>
    <div class="header">
        <div class="headerContent">
            <div class="wordmark">
                <div class="smallLogo">
                    <img class="smallLogoImage" src="https://assets.orchidmc.me/starling/logo.png">
                </div>
                <span class="brandName">Starling</span>
            </div>
            <div class="headerLinksArea">
                <a class="headerLink" href="https://discord.gg/">Support</a>
                <a class="headerLink" href="https://github.com/livelaughlemon/starling">Contribute</a>
                <a class="headerLink" href="https://modrinth.com">Download</a>
            </div>
            <div class="accountArea">
                <Button type="accent" href="/login">Login</Button>
            </div>
        </div>
    </div>
</template>
  
<style>
.header {
    width: 100%;
    display: flex;
    justify-content: center;

    background-color: var(--bg-secondary-50);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    position: fixed;
    top: 0;
    z-index: 1;
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
    color: #f87ac3!important;
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
</style>