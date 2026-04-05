<script setup lang="ts">
import useData from "../../composables/data";

import { data as titles } from "../../../node/data/pages/titles.data";

const { frontmatter } = useData();
</script>

<template>
  <div class="outline__title">Related Pages</div>
  <ul>
    <li v-for="link in frontmatter.related" :key="link">
      <a :href="link">{{ titles[link] }}</a>
    </li>
  </ul>
</template>
