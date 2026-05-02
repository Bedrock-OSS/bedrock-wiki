<script setup lang="ts">
import Button from "./Button.vue";

defineProps<{
  title: string;
  types: string[];
  asset: string;
}>();
</script>

<template>
  <Button
    v-for="type in types"
    :key="type"
    :color="type.startsWith('mc') ? 'green' : 'blue'"
    :link="asset"
    :download="title + '.' + type"
  >
    Download as {{ type.toUpperCase() }}
  </Button>
</template>
