<script setup lang="ts">
const { code } = defineProps<{
  code: string;
}>();
</script>

<template>
  <button class="unicodeCopyButton" :onclick="`navigator.clipboard.writeText('\\u{${code}}');`">
    Copy
  </button>
</template>

<style lang="scss">
.unicodeCopyButton {
  cursor: copy;
}
</style>
