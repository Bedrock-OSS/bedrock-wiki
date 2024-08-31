<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import useData from "../composables/data";

import Tag from "./content/Tag.vue";

import Contributors from "./content/Contributors.vue";
import EditLink from "./content/EditLink.vue";
import Outline from "./content/Outline.vue";
import Spoiler from "./content/Spoiler.vue";

const { frontmatter } = useData();

const isMobileOutline = useMediaQuery("(max-width: 1300px)");
</script>

<template>
  <article>
    <h1>{{ frontmatter.title }}</h1>

    <div v-if="frontmatter.tags !== undefined" style="margin-block: 1em">
      <Tag v-for="name in frontmatter.tags" :key="name" :name />
    </div>

    <div v-if="frontmatter.show_outline ?? true">
      <Spoiler v-if="isMobileOutline" title="Contents" open>
        <Outline />
      </Spoiler>

      <Outline v-else />
    </div>

    <Content />

    <ClientOnly>
      <Suspense>
        <Contributors v-if="frontmatter.show_contributors ?? true" />
      </Suspense>
    </ClientOnly>

    <EditLink v-if="frontmatter.show_edit_link ?? true" />
  </article>
</template>
