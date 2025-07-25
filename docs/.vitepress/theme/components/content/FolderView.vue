<script setup lang="ts">
import { computed } from "vue";
import FolderViewEntry from "./FolderViewEntry.vue";

const props = defineProps<{
  paths: string[];
  links?(path: string): string;
  collapsed?: boolean;
}>();

export interface Entry {
  name: string;
  path: string;
  children: Record<string, Entry>;
}

const entries = computed(() => {
  const entries: Record<string, Entry> = {};

  props.paths.forEach((path) => {
    fillEntries(entries, path);
  });

  return entries;
});

function fillEntries(entries: Record<string, Entry>, path: string, parentPath?: string) {
  let name = path.split("/")[0];

  const entryPath = parentPath ? parentPath + "/" + name : name;

  // Create if needed
  entries[name] ??= {
    path: entryPath,
    name,
    children: {},
  };

  // If there are more paths, recurse
  if (path.length > name.length) {
    fillEntries(entries[name].children, path.substring(name.length + 1), entryPath);
  }
}
</script>

<template>
  <div class="folder-view">
    <ul>
      <FolderViewEntry v-for="entry in entries" :key="entry.name" :entry :collapsed :links />
    </ul>
  </div>
</template>

<style lang="scss">
.folder-view {
  width: max-content;
  background-color: var(--light-bg-color);
  padding-block: 0.5em;
  padding-inline: 1em;
  border: var(--border);
  border-radius: var(--border-radius);
  white-space: nowrap;
  overflow: auto;

  ul {
    margin: 0;
    padding-left: 1.4em;

    button {
      cursor: pointer;
    }
  }

  li {
    & > div,
    & > a,
    & > button {
      text-align: left;
      display: block;
      width: 100%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &::marker {
      content: attr(data-icon);
    }

    &:has(.active) {
      & > button {
        font-weight: 600;
        pointer-events: none;
      }
    }

    &[data-collapsed]:not(:has(.active)) {
      opacity: 0.8;

      &::marker {
        content: "📁";
      }

      & > ul {
        display: none;
      }
    }
  }
}
</style>
