<script setup lang="ts">
import { computed, ref } from "vue";
import { Entry } from "./FolderView.vue";
import NavLink from "../navigation/NavLink.vue";

const props = defineProps<{
  entry: Entry;
  links?(path: string): string;
  collapsed?: boolean;
}>();

const isFolder = computed(() => Object.keys(props.entry.children).length > 0);

const isCollapsed = ref(isFolder.value && props.collapsed);

function toggleChildren() {
  isCollapsed.value = !isCollapsed.value;
}

const icon = computed(() => {
  if (isFolder.value) return "📂";

  let type = props.entry.name.split(".").pop();

  switch (type) {
    case "tga":
    case "png":
    case "jpg":
    case "jpeg":
      return "🖼️";
    case "lang":
      return "🈵";
    case "mcstructure":
      return "🏛";
    default:
      return "📝";
  }
});

const name = computed(() => props.entry.name.split("/")[0]);
const link = computed(() => props.links?.(props.entry.path));
</script>

<template>
  <li :data-collapsed="isCollapsed ? '' : undefined" :data-icon="icon">
    <button v-if="isFolder" type="button" @click="toggleChildren">
      {{ name }}
    </button>
    <NavLink v-else-if="link" :link>
      {{ name }}
    </NavLink>
    <div v-else>{{ name }}</div>

    <ul>
      <FolderViewEntry
        v-for="child in entry.children"
        :key="child.name"
        :entry="child"
        :links
        :collapsed
      />
    </ul>
  </li>
</template>
