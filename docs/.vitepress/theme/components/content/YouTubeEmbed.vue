<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();

const src = `https://www.youtube-nocookie.com/embed/${props.id}`;
</script>

<template>
  <div class="youtube-embed">
    <iframe
      :src
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style lang="scss">
.youtube-embed {
  max-width: 700px;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
