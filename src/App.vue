<!--
 * @Author: joSricor
 * @Date: 2021-10-07 21:21:49
-->

<script setup>
// Setup Lifecycle Hooks
// https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html
// import { onMounted, onBeforeMount } from 'vue'
// onMounted(() => { console.log('mounted!') })
import config from '/web.config.js'
import { useRouter } from 'vue-router'

// https://github.com/jenil/chota
import 'chota'

// https://github.com/rstacruz/nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// components
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const router = useRouter()
router.beforeEach((to, from, next) => {
  NProgress.start()  // NProgress load start
  document.title = config.author + ' - ' +to.name  // change title
  next()  // router next
})
router.afterEach(() => {
  document.body.style.backgroundImage = null  // clean bg
  window.scrollTo(0,0)  // backTop
  NProgress.done()  // NProgress load end
})
</script>

<template>
  <Navbar />
  <transition name="fade">
    <router-view />
  </transition>
  <Footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root {
  --primary-color: #28a386;
  --font-family: sans-serif, system-ui
}

body {
  color: #333;
  background-color: #fff;
  background-attachment: fixed;
  letter-spacing: -.1px;
  font-weight: 400;
  font-kerning: normal;
  -moz-font-feature-settings: "kern"1;
  -webkit-font-feature-settings: "kern"1;
  font-feature-settings: "kern"1
}

body::-webkit-scrollbar {
  width:10px;
  height:10px;
}

body::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius:2px;
}

body::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius:10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #333;
}

body::-webkit-scrollbar-corner {
  background: #179a16;
}

#nprogress .bar {
  background-color: var(--color-primary);
}

.container {
  width: 90%
}
</style>