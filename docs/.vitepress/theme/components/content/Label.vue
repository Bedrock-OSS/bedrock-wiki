<script setup lang="ts">
const { color } = defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="label" :data-accent-color="color">
    <slot />
  </div>
</template>

<style lang="scss">
.label {
  display: inline-block;
  background-color: var(--accent-color);
  border-radius: 0.2em;
  padding: 0.3em 0.3em;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1;
  vertical-align: top;

  & + .label {
    margin-left: 0.5em;
  }
}

.label[data-accent-color="yellow"] {
  color: #252525;
}
</style>
