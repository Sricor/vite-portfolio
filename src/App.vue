<script setup>
/*import { ref } from 'vue'

defineProps({
  msg: String
})

<HelloWorld msg="Hello Vue 3 + Vite" />

*/
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

//路由回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
</script>
<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
</style>
