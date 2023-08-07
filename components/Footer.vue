<script setup>
import Button from '../components/Button.vue'
</script>

<script>
</script>

<template>
    <div class="footer">
        <div class="footerContent">
                <div class="footerColumn1">
                    <p class="footerBrandName">Starling</p>
                    <p class="footerBrandText">&copy; 2022-2023 ihateblueb</p>
                    <br>
                    <p class="footerBrandText">
                        <span>ihateblueb</span>
                        /
                        <span>starling-web</span>    
                    </p>
                    <p class="footerBrandText">
                        <span>main</span>
                        @
                        <span>a96v92</span>
                    </p>
                    <br>
                </div>
                <div class="footerColumn2">
                    <p class="footerBrandText">
                        <a href="">Contribute</a>
                    </p>
                    <p class="footerBrandText">
                        <a href="">Report a Bug</a>
                    </p>
                    <p class="footerBrandText">
                        <a href="">Get Support</a>
                    </p>
                    <br>
                    <p class="footerBrandText">
                        <a href="">Download (Modrinth)</a>
                    </p>
                    <p class="footerBrandText">
                        <a href="">Download (GitHub)</a>
                    </p>
                    <br>
                </div>
                <div class="footerColumn3">
                    <p class="footerBrandText">
                        <a href="/legal/privacy">Privacy Policy</a>
                    </p>
                    <p class="footerBrandText">
                        <a href="/legal/terms">Terms of Service</a>
                    </p>
                    <br>
                    <p class="footerBrandText">
                        <a  href="/">About Starling</a>
                    </p>
                    <p class="footerBrandText">
                        <a href="https://dev.orchidmc.me">About Orchid Development</a>
                    </p>
                    <br>
                    <p class="footerBrandText">
                        <a href="">Service Status</a>
                    </p>
                    <br>
                </div>
        </div>
    </div>
</template>
  
<style>
.footer {
    padding-top: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--bg-primary-50);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 100;
}

.footerContent {
    width: 100%;
    max-width: 1024px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 20px;
}

.footerBrandText, .footerBrandText a {
    color: var(--text2);
    font-family: var(--font1);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
}

.footerBrandName {
    color: var(--text1);
    font-family: var(--font2);
    font-size: 20px;
    font-weight: 700;
}
</style>