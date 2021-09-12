<script setup>
import config from '../../web.config'
import { useRouter } from 'vue-router'
const router = useRouter()
const go = (path) => {
  router.push(`/${path}`)
}
</script>

<template>
<nav class="main-nav nav">
  <div class="container">
    <div class="nav-left">
      <a class="nuxt-link-active" @click="go('')">
        <div class="logo">💖</div>
      </a>
    </div>
    <div class="nav-right nav-menu">
      <a @click="go('')">😘  Home</a>
        <a @click="go('')">🎨  Artboards</a>
        <a href="https://blog.sricor.work" target="_blank">📝  Blog</a>
        <a @click="go('about')">📥  About</a>
    </div>
  </div>
</nav>
</template>

