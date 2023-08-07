<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="pageHeader">
        <Header class="homepage" />
    </div>
    <slot></slot>
    <div class="pageFooter">
        <Footer />
    </div>
</template>