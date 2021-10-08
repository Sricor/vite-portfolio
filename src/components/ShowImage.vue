<!--
 * @Author: joSricor
 * @Date: 2021-10-07 21:21:49
-->

<script setup>
import config from '/web.config.js'
// Tencent cos webp images
const url = config.image.url
const params = config.image.params

// Props images: Array
defineProps({images: Array})
</script>

<template>
<div>
  <img v-for="image in images" :key="image" :src="url + image + params"/>
</div>
</template>

<style scoped>
div{
  line-height: 0;
}
</style>