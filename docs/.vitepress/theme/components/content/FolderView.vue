<script setup lang="ts">
import { computed } from "vue";
import FolderViewEntry from "./FolderViewEntry.vue";

const props = defineProps<{ paths: string[] }>();

export interface Entry {
  name: string;
  children: Record<string, Entry>;
}

const entries = computed(() => {
  const entries = {};

  props.paths.forEach((path) => {
    fillEntries(entries, path.split("/"));
  });

  return entries;
});

function fillEntries(entries: Record<string, Entry>, path: string[]) {
  let first = path.shift()!;

  // Create if needed
  entries[first] ??= {
    name: first,
    children: {},
  };

  // If there are more paths, recurse
  if (path.length > 0) {
    fillEntries(entries[first]["children"], path);
  }
}
</script>

<template>
  <div class="folder-view">
    <ul>
      <FolderViewEntry v-for="(entry, i) in entries" :key="i" :entry />
    </ul>
  </div>
</template>

<style lang="scss">
.folder-view {
  width: max-content;
  background-color: var(--light-bg-color);
  padding-block: 0.5em;
  padding-right: 1em;
  border: var(--border);
  border-radius: var(--border-radius);
  white-space: nowrap;
  overflow: auto;

  ul {
    list-style: none;
    margin: 0;
    padding-left: 1em;

    button {
      cursor: pointer;
    }
  }

  [data-collapsed] {
    opacity: 0.6;

    & > ul {
      display: none;
    }
  }
}
</style>
