<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { withBase } from "vitepress";

const props = defineProps<{
  alt?: string;
  caption?: string;
  src: string | { dark: string; light: string };
  pixelated?: boolean;
  width?: string;
  height?: string;
}>();

const style = computed<StyleValue>(() => ({
  imageRendering: props.pixelated ? "pixelated" : undefined,
  objectFit: "contain",
}));
</script>

<template>
  <div class="wiki-image" :data-captioned="caption ? '' : undefined">
    <img v-if="typeof src === 'string'" :src="withBase(src)" :alt :width :height :style />
    <template v-else>
      <img :src="withBase(src.dark)" :alt :width :height :style data-theme="dark" />
      <img :src="withBase(src.light)" :alt :width :height :style data-theme="light" />
    </template>
    <div v-if="caption" class="caption">{{ caption }}</div>
  </div>
</template>

<style lang="scss" scoped>
.wiki-image {
  display: inline-block;
  vertical-align: top;
  width: max-content;
}

img {
  display: block;
  min-width: 100%;
}

[data-captioned] img {
  background-color: var(--light-bg-color);
  box-shadow: inset 0 0 0 1px var(--border-color);
}

.caption {
  background-color: var(--light-bg-color);
  padding: 0.5em 0.8em;
  width: 100%;

  border: var(--border);
  border-top: none;

  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

img[data-theme="dark"] {
  display: none;
}

.dark {
  img[data-theme="light"] {
    display: none;
  }
  img[data-theme="dark"] {
    display: block;
  }
}
</style>
