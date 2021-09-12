<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const navList = [
  { name: '🎨Designs', link: 'designs' },
  { name: '🤓About', link: 'about' }
]

const router = useRouter()
const go = (name: string) => {
  router.push(`/${name}`)
}
</script>

<template lang="pug">
nav.main-nav.nav
  .container
    .nav-left
      a(@click="go('')")
        | Sricor's portfolio
    .nav-right.nav-menu
      a(@click="go('')")
        svg.feather.feather-home(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
          path(d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z")
          polyline(points="9 22 9 12 15 12 15 22")
        | {{ t('button.home') }}
      a(v-for="nav in navList" :key="nav.name" @click="go(nav.link)")
        | {{ nav.name }}
      a(href="https://blog.sricor.work", target="_blank")
        | 📝Blog
      a()
        carbon-sun
      a(@click="toggleLocales")
        | EN
</template>

<style scoped>
.main-nav {
    margin-top: 3rem;
}

.nav-menu {
  flex: 1 1 auto
}
.nav a {
  cursor: pointer;
}
.logo svg {
  width: 5rem;
  fill: var(--primary-color)
}

@media screen and (max-width:480px) {
  .nav-menu {
    margin-top: 2rem
  }

  .nav a {
    padding: 1rem
  }
}
</style>
