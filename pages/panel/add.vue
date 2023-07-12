<script>
export default {
    data: () => ({
        step: "start",
        serverLinked: false
    })
}
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>

        <div class="mainContent loginContent" v-if="step === 'start'">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    Are you a moderator or an admin?
                </h2>
                <div class="loginInputs">
                    <Button @click="this.step = 'mod1'" width="250px">
                        <div class="loginButtonInner">
                            I'm a Moderator
                        </div>
                    </Button>
                    <Button @click="this.step = 'admin1'" width="250px">
                        <div class="loginButtonInner">
                            I'm an Admin
                        </div>
                    </Button>
                </div>
            </div>
        </div>


        <div class="mainContent loginContent" v-if="step === 'mod1'">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    Please contact your admin
                </h2>
                <p class="loginDescription">
                    Your User ID is 0. Your admin has to add you from the settings menu of their server.
                </p>
                <div class="loginInputs">
                    <Button @click="this.step = 'start'" width="250px" type="transparent">
                        <div class="loginButtonInner">
                            ← Go Back
                        </div>
                    </Button>
                </div>
            </div>
        </div>

        <div class="mainContent loginContent" v-if="step === 'admin1'">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    Please run <code>/starling setup MasTGbm3zi7x181XdtcC</code> on your server and wait.
                </h2>
                <p class="loginDescription">
                    After this you'll be able to configure your server.
                </p>

                <div class="loadingBar lbSetupPage">
                    <div class="loadingIndicator" v-bind:class="{ liActive: !serverLinked }"></div>
                </div>

                <div class="loginInputs">
                    <Button @click="this.step = 'admin2'" width="250px" type="danger">
                        <div class="loginButtonInner">
                            Cancel
                        </div>
                    </Button>
                </div>
            </div>
        </div>

        <div class="mainContent loginContent" v-if="step === 'admin2'">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    What's the name of your server?
                </h2>
                <p class="loginDescription">
                    This can be changed this later in Settings.
                </p>
                <div class="loginInputs">
                    <Input placeholder="Server Name" width="250px" />
                    <Button @click="this.step = 'admin3'" width="250px">
                        <div class="loginButtonInner">
                            Continue
                        </div>
                    </Button>
                </div>
            </div>
        </div>

        <div class="mainContent loginContent" v-if="step === 'admin3'">
            <div class="loginContainer">
                <h2 class="loginHeader">
                    You're all setup!
                </h2>
                <p class="loginDescription">
                    You can now configure the plugin on your server, add admins, and add moderators.
                </p>
                <div class="loginInputs">
                    <Button href="/server/0" width="250px" type="trans[aremt]">
                        <div class="loginButtonInner">
                            Go to Server
                        </div>
                    </Button>
                </div>
            </div>
        </div>

    </div>
</template>