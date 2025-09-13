<script setup lang="ts">
import { computed } from "vue";
import useData from "../../composables/data";

import NavLink from "../navigation/NavLink.vue";

const { site, page } = useData();

const link = computed(
  () => `${site.value.themeConfig.repository}/edit/wiki/docs/${page.value.relativePath}`
);
</script>

<template>
  <NavLink :link>Edit {{ page.title }} on GitHub</NavLink>
</template>
