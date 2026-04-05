<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { withBase } from "vitepress";

import assetPath from "../../../shared/assetPath";
import useData from "../../composables/data";

const props = defineProps<{
  alt?: string;
  caption?: string;
  src: string | { dark: string; light: string };
  pixelated?: boolean;
  width?: string;
  height?: string;
  link?: string;
}>();

const { page } = useData();

const imageSource = (src: string) => withBase(assetPath("images", page.value.relativePath, src));

const style = computed<StyleValue>(() => ({
  imageRendering: props.pixelated ? "pixelated" : undefined,
  objectFit: "contain",
}));

const T = computed(() => (props.link ? "a" : "div"));
</script>

<template>
  <T class="wiki-image" :data-captioned="caption ? '' : undefined" :href="link">
    <img v-if="typeof src === 'string'" :src="imageSource(src)" :alt :width :height :style />
    <template v-else>
      <img :src="imageSource(src.dark)" :alt :width :height :style data-theme="dark" />
      <img :src="imageSource(src.light)" :alt :width :height :style data-theme="light" />
    </template>
    <div v-if="caption" class="caption">{{ caption }}</div>
  </T>
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

  width: 100%;
  height: 2.7em;

  padding-top: 0.5em;
  padding-inline: 0.8em;

  white-space: nowrap;
  overflow: auto;
  scrollbar-width: thin;

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

.example-file main .wiki-image {
  display: block;
  margin-block: 4em;
  margin-inline: auto;
  width: 512px;
}
</style>
