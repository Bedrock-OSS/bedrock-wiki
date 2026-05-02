<script setup lang="ts">
import { computed } from "vue";
import useData from "../../composables/data";

import NavLink from "../navigation/NavLink.vue";
import useFilePage from "../../composables/filePage";

const { site, page } = useData();
const filePage = useFilePage();

const link = computed(() => {
  const { repository, branch, examples } = site.value.themeConfig;

  if (filePage.value) {
    if (examples === undefined) return;

    const { repository, branch } = examples;
    const { example, sourcePath } = filePage.value;

    return `${repository}/edit/${branch}/resources/${example.id}/${sourcePath}`;
  }

  return `${repository}/edit/${branch}/docs/${page.value.relativePath}`;
});
</script>

<template>
  <NavLink v-if="link !== undefined" :link>
    Edit {{ filePage ? filePage.name : page.title }} on GitHub
  </NavLink>
</template>
