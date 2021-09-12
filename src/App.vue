<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
const title = ref('Sricor')

useHead({
  title: title.value,
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>

<style>
  :root {
    --primary-color: #28a386;
    --font-family: "Inter UI", system-ui, sans-serif
  }

  body {
    color: #333;
    background-color: #fff;
    letter-spacing: -.1px;
    font-weight: 400;
    font-kerning: normal;
    -moz-font-feature-settings: "kern"1;
    -webkit-font-feature-settings: "kern"1;
    font-feature-settings: "kern"1
  }
</style>
