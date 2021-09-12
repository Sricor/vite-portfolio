<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
const title = ref("Sricor's Portfolio")
const router = useRouter()

// 路由回到顶部
router.afterEach((to,from,next) => {
 window.scrollTo(0,0);
})

useHead({
  title: title.value,
  meta: [
    { name: 'description', content: 'Sricor Portfolio' },
  ],
})
</script>

<template lang="pug">
router-view
</template>