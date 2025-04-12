<script setup lang="ts">
import useData from "../../composables/data";
import OutlineLevel from "./OutlineLevel.vue";

const { page } = useData();
</script>

<template>
  <div class="outline">
    <a href="#">{{ page.title }}</a>
    <OutlineLevel v-if="page.headers.length > 0" :headers="page.headers" />
  </div>
</template>

<style lang="scss">
@media not (max-width: 1300px) {
  .outline {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    width: var(--outline-width);
    padding-bottom: 2em;
    padding-top: calc(var(--header-height) + 2em);
    scrollbar-width: none;

    a {
      display: block;
      transition: color 0.05s;
      color: inherit;

      &:hover {
        color: var(--accent-color);
        text-decoration: none;
      }

      &.active {
        font-weight: 600;
      }
    }

    & > a {
      font-weight: 700;
    }

    & > ul {
      border-left: var(--border);
    }
  }
}
</style>
