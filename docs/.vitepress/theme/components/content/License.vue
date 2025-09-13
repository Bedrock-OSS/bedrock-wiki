<script setup lang="ts">
import { computed } from "vue";
import useData from "../../composables/data";
import NavLink from "../navigation/NavLink.vue";

import { data as licenses } from "../../data/licenses/licenses.data";

const { frontmatter } = useData();

const normalizedLicenses = computed(() => {
  const { license } = frontmatter.value;

  if (license === true) return { main: "CC-BY-4.0", code: "MIT" };
  if (typeof license === "string") return { main: license };
  return license;
});

const mainLicense = computed(() => licenses[normalizedLicenses.value.main]);
const codeLicense = computed(() => licenses[normalizedLicenses.value.code]);
</script>

<template>
  <hr style="margin-block: 1em" />
  <p v-if="mainLicense">
    Text and image content on this page is licensed under the
    <NavLink :link="mainLicense.link">{{ mainLicense.title }}</NavLink>
  </p>
  <p v-if="codeLicense">
    Code samples on this page are licensed under the
    <NavLink :link="codeLicense.link">{{ codeLicense.title }}</NavLink>
  </p>
</template>
