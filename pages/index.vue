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
            <h2 class="featureTitle">
                Allow your moderators to run commands you define.
            </h2>
            <p class="featureDescription">
                In your <code>config.yml</code>, you define what commands you want, what type of input you want, and more. 
            </p>
        </div>
    </div>
</template>