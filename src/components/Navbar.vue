<!--
 * @Author: joSricor
 * @Date: 2021-10-07 21:21:49
-->

<script setup>
</script>

<template>
<nav class="main-nav nav">
  <div class="container">
    <div class="nav-left">
      <a href="/">
        <div class="logo">💖 Sricor</div>
      </a>
    </div>
    <div class="nav-right nav-menu">
      <a href="/">😘 Home</a>
      <a href="/">🎨 Onedrive</a>
      <a href="/">📝 Blog</a>
      <a href="/">📥  About</a>
    </div>
  </div>
</nav>
</template>

<style scoped>
.logo svg {
  width: 5rem;
  fill: var(--primary-color)
}

.main-nav {
  margin-top: 6.5rem;
}

.nav-menu {
  flex: 1 1 auto;
}

a {
  font-size: 1.2em;
  color: currentColor;
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