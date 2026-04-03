<script setup lang="ts">
import { computed } from "vue";

import displayError from "../../utils/displayError";
import { data as tags } from "../../data/tags.data";

import Label from "./Label.vue";

const { name, sidebar } = defineProps<{
  name: string;
  sidebar?: boolean;
}>();

const tag = computed(() => {
  const tag = tags[name];

  if (!tag) {
    displayError(
      new TypeError(
        `No tag with the name "${name}" exists. If you would like to add a tag, you can do so in "docs/tags.yaml".`
      )
    );
  }

  let { text = name, color, sidebar: sidebarOptions } = tag;

  if (sidebar) {
    if (!sidebarOptions) return;

    if (typeof sidebarOptions === "object") text = sidebarOptions.text;
  }

  return { text, color };
});
</script>

<template>
  <Label v-if="tag !== undefined" :color="tag.color">{{ tag.text }}</Label>
</template>
