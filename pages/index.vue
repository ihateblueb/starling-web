<script setup>
import Button from '../components/Button.vue'
</script>

<script>
export default {
    data: () => ({
        loggedin: false,
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
    <div class="homepage">
        <div class="pageHeader">
            <div class="pageHeaderContent homepageGrid">
                <div class="pageHeaderTextContainer">
                    <h2 class="pageHeaderText">
                        Keep your server safe,<br>
                        even when you're offline.
                    </h2>
                    <h3 class="pageHeaderSubtext">
                        With Starling, you and your team can always be prepared to respond to anything.
                    </h3>
                    <Button href="/register" type="dark noleft" v-if="!loggedin">Register</Button>
                    <Button href="/panel" type="dark noleft" v-if="loggedin">Open Panel</Button>
                </div>
            </div>
        </div>
        <div class="mainContent">
            <div class="featureContainer homepageGrid">
                <div class="featureImages">
                </div>
                <div class="feature">
                    <h2 class="featureTitle">
                        Allow your moderators to run commands that you define
                    </h2>
                    <p class="featureDescription">
                        All in an easy yet advanced configuration, you choose what commands you'd like your moderators to
                        have access to with palceholders and more.
                    </p>
                </div>
            </div>

            <div class="featureContainer homepageGrid">
                <div class="featureImages">
                </div>
                <div class="feature">
                    <h2 class="featureTitle">
                        It's not just text inputs
                    </h2>
                    <p class="featureDescription">
                        Typing too slow? You can also configure checkboxes and dropdowns to speed up mobile moderation.
                    </p>
                </div>
            </div>

            <div class="featureContainer homepageGrid">
                <div class="featureImages">
                </div>
                <div class="feature">
                    <h2 class="featureTitle">
                        Privacy respecting software
                    </h2>
                    <p class="featureDescription">
                        We only ask for what we need to operate, have no trackers or ads, and allow you to request all your
                        data to be removed any time. Don't beleive me? We're <a
                            href="https://github.com/ihateblueb/starling-web">open source</a>, so you can check if youd
                        like.
                    </p>
                </div>
            </div>

            <div class="featureContainer homepageGrid">
                <div class="featureImages">
                </div>
                <div class="feature">
                    <h2 class="featureTitle">
                        Mobile & PWA Friendly
                    </h2>
                    <p class="featureDescription">
                        Starling was built with the mobile browser in mind, and tested on real devices. Not a fan of your browser? You can access Starling as a PWA.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>