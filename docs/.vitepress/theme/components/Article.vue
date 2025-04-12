<script setup lang="ts">
import { computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
import useData from "../composables/data";

import Tag from "./content/Tag.vue";

import Contributors from "./content/Contributors.vue";
import ExternalIcon from "./icons/ExternalIcon.vue";
import EditLink from "./content/EditLink.vue";
import Outline from "./content/Outline.vue";
import Spoiler from "./content/Spoiler.vue";
import License from "./content/License.vue";
import Button from "./content/Button.vue";

const { frontmatter, page } = useData();

const isMobileOutline = useMediaQuery("(max-width: 1300px)");

const isLicensePage = computed(() => page.value.relativePath.startsWith("licenses/"));
</script>

<template>
  <article>
    <h1>{{ frontmatter.title }}</h1>

    <div v-if="frontmatter.tags !== undefined" style="margin-block: 1em">
      <Tag v-for="name in frontmatter.tags" :key="name" :name />
    </div>

    <Button v-if="isLicensePage" :link="frontmatter.source">View Source <ExternalIcon /></Button>

    <div v-if="frontmatter.show_outline ?? true">
      <Spoiler v-if="isMobileOutline" title="Contents" open>
        <Outline />
      </Spoiler>

      <Outline v-else />
    </div>

    <Content />

    <Contributors v-if="frontmatter.show_contributors ?? !isLicensePage" />

    <EditLink v-if="frontmatter.show_edit_link ?? !isLicensePage" />

    <License v-if="frontmatter.license" />
  </article>
</template>
