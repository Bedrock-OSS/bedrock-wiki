<script setup lang="ts">
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <details class="spoiler">
    <summary>
      <div>{{ title }}</div>
      <ChevronRightIcon />
    </summary>
    <div class="spoiler__content">
      <slot />
    </div>
  </details>
</template>

<style lang="scss">
.spoiler {
  & > summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    padding: 0.8em 1.2em;
    border: var(--border);
    border-radius: var(--border-radius);
    background-color: var(--light-bg-color);
    transition: background-color 0.1s;

    &:hover {
      background-color: var(--bg-color);
    }

    div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      margin-left: auto;
      transition: transform 0.1s;
    }
  }

  &__content {
    display: none;
    margin-top: 0.5em;
  }

  &[open] {
    & > summary {
      background-color: var(--bg-color);
      font-weight: 600;

      svg {
        transform: rotate(90deg);
      }
    }

    & > .spoiler__content {
      display: block;
    }
  }
}
</style>
