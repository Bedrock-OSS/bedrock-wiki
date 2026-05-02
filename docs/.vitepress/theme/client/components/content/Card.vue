<script setup lang="ts">
import WikiImage from "./WikiImage.vue";

defineProps<{
  title: string;
  link?: string;
  image?: string | { light: string; dark: string };
}>();
</script>

<template>
  <div class="card">
    <header>
      <WikiImage v-if="image !== undefined" :src="image" alt="" width="60" height="60" />
      <h2 v-if="link">
        <a :href="link">{{ title }}</a>
      </h2>
      <h2 v-else>
        {{ title }}
      </h2>
    </header>
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  background-color: var(--light-bg-color);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1em;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  & > header {
    display: flex;
    align-items: center;
    gap: 1em;

    .wiki-image {
      margin: 0;
    }

    h2 {
      line-height: 1;
    }
  }
}
</style>
