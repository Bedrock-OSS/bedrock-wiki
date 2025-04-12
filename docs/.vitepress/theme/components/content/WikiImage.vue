<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import useData from "../../composables/data";

const { isDark } = useData();

const props = defineProps<{
  alt?: string;
  caption?: string;
  src?: string | { dark: string; light: string };
  pixelated?: boolean;
  width?: string;
  height?: string;
}>();

const src = computed(() => {
  let source = props.src;
  if (source === undefined) return;

  if (typeof source === "object") {
    if (isDark.value) source = source.dark;
    else source = source.light;
  }

  return withBase(source);
});

const { alt, width, height } = props;
</script>

<template>
  <div class="wiki-image">
    <img
      :src
      :alt
      :width
      :height
      :style="{
        imageRendering: pixelated ? 'pixelated' : undefined,
        objectFit: 'contain',
      }"
    />
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

.caption {
  background-color: var(--light-bg-color);
  padding: 0.5em 0.8em;
  width: 100%;

  border: var(--border);
  border-top: none;

  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}
</style>
