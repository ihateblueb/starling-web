<script setup>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
</script>

<template>
    <div class="homepage">
        <div class="pageHeader">
            <Header />
            <div class="pageHeaderContent">
                <div class="pageHeaderTextContainer">
                    <h2 class="pageHeaderText">
                        Keep your server safe,<br>
                        even when you're offline.
                    </h2>
                    <h3 class="pageHeaderSubtext">
                        With Starling, you and your team can always be connected.
                    </h3>
                </div>
            </div>
        </div>
        <div class="mainContent">
            <div class="featureContainer">
                <div class="feature">
                    <h2 class="featureTitle">
                        Allow your moderators to run commands you define.
                    </h2>
                    <p class="featureDescription">
                        All in an easy yet advanced configuration, you can define what commands you'd like your moderators to have access to with palceholders and more.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>