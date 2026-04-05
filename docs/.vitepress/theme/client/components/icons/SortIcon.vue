<script setup lang="ts">
defineProps<{
  order?: "ascending" | "descending";
}>();
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <g :data-active="order === 'ascending'">
      <path d="m 2.3,7.5 5,-4.5 5,4.5" />
      <path d="M 7.3,3 V 19" />
    </g>
    <g :data-active="order === 'descending'">
      <path d="M 16.7,5 V 21" />
      <path d="m 11.7,16.5 5,4.5 5,-4.5" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  display: block;
}

path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
}

[data-active="false"] path {
  filter: brightness(70%);
  stroke-width: 2.5;
}
</style>
