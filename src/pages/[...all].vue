<script setup lang="ts">
const { t } = useI18n()
</script>

<template lang="pug">
div {{ t('not-found') }}
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
