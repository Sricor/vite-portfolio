<script setup>
import config from '../../web.config'
import { useRouter } from 'vue-router'
const router = useRouter()
const go = (path) => {
  router.push(`/${path}`)
}
</script>

<template lang="pug">
nav.main-nav.nav
  .container
    .nav-left
      a.nuxt-link-active(@click="go('')")
        .logo 💖  {{ config.name }}
    .nav-right.nav-menu
      a(@click="go('')")
        | 😘  Home
      a(@click="go('')")
        | 🎨  Artboards
      a(href="https://blog.sricor.work" target="_blank")
        | 📝  Blog
      a(@click="go('about')")
        | 📥  About
</template>

<style>
.nav-menu {
  flex: 1 1 auto
}

@media screen and (max-width:480px) {
  .nav-menu {
    margin-top: 2rem
  }

  .nav a {
    padding: 1rem
  }
}

.logo svg {
  width: 5rem;
  fill: var(--primary-color)
}

.main-nav {
  margin-top: 3rem
}
</style>