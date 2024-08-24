<script setup lang="ts">
import { AccentColor } from "../../types";

const { link, color } = defineProps<{
  link: string;
  color?: AccentColor;
}>();
</script>

<template>
  <a class="button" :href="link" :data-accent-color="color">
    <slot />
  </a>
</template>

<style lang="scss">
.button {
  display: inline-block;
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 0.5em 1em;
  font-weight: 600;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  color: var(--accent-color);
  background-color: var(--light-bg-color);

  &:hover {
    background-color: var(--bg-color);
    border-color: var(--accent-color);
    text-decoration: none;
  }
}

.button[data-accent-color] {
  --accent-color: var(--dark-accent-color);
}

.dark .button[data-accent-color] {
  --accent-color: var(--light-accent-color);
}
</style>
