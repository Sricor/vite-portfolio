<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template lang="pug">
main.text-center
  div
    p.text-4xl
      carbon-warning.inline-block
  router-view
  div
    button.btn.m-3.text-sm.mt-8(@click="router.back()")
      | {{ t('button.back') }}
</template>
