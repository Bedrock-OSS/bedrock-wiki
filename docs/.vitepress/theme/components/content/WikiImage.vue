<script setup lang="ts">
import useData from "../../composables/data";
import { withBase } from "vitepress";

const { isDark } = useData();

const props = defineProps<{
  alt?: string;
  src?: string | { light: string; dark: string };
  pixelated?: boolean;
  width?: string;
  height?: string;
}>();

const relativeSrc =
  typeof props.src === "object" ? (isDark ? props.src.dark : props.src.light) : props.src;

const source = relativeSrc !== undefined ? withBase(relativeSrc) : undefined;

const { alt, width, height } = props;
</script>

<template>
  <img
    :src="source"
    :alt
    :width
    :height
    :style="{ imageRendering: pixelated ? 'pixelated' : undefined, objectFit: 'contain' }"
  />
</template>
