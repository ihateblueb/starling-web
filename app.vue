<script setup lang="ts">
useSeoMeta({
  title: 'Starling',
  ogTitle: 'Starling',
  charset: 'UTF-8',
  description: "Keep your Minecraft server safe, even when you're offline.",
  ogDescription: "Keep your Minecraft server safe, even when you're offline.",
  ogImage: '/assets/logo.webp',
  twitterCard: 'summary',
})
</script>


<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
@import url('./public/assets/main.css');
</style>