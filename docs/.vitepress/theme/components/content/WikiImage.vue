<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import useData from "../../composables/data";

const { isDark } = useData();

const props = defineProps<{
  alt?: string;
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
</template>
