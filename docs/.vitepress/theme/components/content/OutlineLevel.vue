<script setup lang="ts">
import { computed } from "vue";
import { Header } from "vitepress";
import useData from "../../composables/data";

const { headers } = defineProps<{
  headers: Header[];
}>();

const { frontmatter, hash } = useData();

const maxLevel = computed(() => frontmatter.value.outline_depth ?? 3);
</script>

<template>
  <ul>
    <li v-for="header in headers" :key="header.slug">
      <a :href="header.link" :class="{ active: hash === header.link }">{{ header.title }}</a>
      <OutlineLevel
        v-if="header.level < maxLevel && header.children.length > 0"
        :headers="header.children"
      />
    </li>
  </ul>
</template>

<style lang="scss">
.outline ul {
  list-style: none;
  margin: 0;
  padding-left: 1em;
}
</style>
