<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

import NavLink from "../navigation/NavLink.vue";

const { site, page } = useData();

const link = computed(
  () => `${site.value.themeConfig.repository}/blob/wiki/docs/${page.value.relativePath}`
);
</script>

<template>
  <NavLink :link>Edit {{ page.title }} on GitHub</NavLink>
</template>
