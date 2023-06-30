<script setup>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
</script>

<template>
    <div class="homepage">
        <div class="pageHeader">
            <Header />
            <div class="pageHeaderContent homepageGrid">
                <div class="pageHeaderTextContainer">
                    <h2 class="pageHeaderText">
                        Keep your server safe,<br>
                        even when you're offline.
                    </h2>
                    <h3 class="pageHeaderSubtext">
                        With Starling, you and your team can always be prepared for anything.
                    </h3>
                    <Button href="/register" type="dark noleft">Register</Button>
                </div>
            </div>
        </div>
        <div class="mainContent">
            <div class="featureContainer homepageGrid">
                <div class="featureImages">
                    <img class="featureImage featureImageLeft" src="/assets/featurecard1b.webp">
                    <img class="featureImage featureImageRight" src="/assets/featurecard1a.webp">
                </div>
                <div class="feature">
                    <h2 class="featureTitle">
                        Allow your moderators to run commands that you define.
                    </h2>
                    <p class="featureDescription">
                        All in an easy yet advanced configuration, you choose what commands you'd like your moderators to have access to with palceholders and more.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>