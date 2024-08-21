<script setup lang="ts">
import { computed, ref } from "vue";
import { Entry } from "./FolderView.vue";

const props = defineProps<{
  entry: Entry;
}>();

const collapsed = ref(false);

function toggleChildren() {
  collapsed.value = !collapsed.value;
}

const isFolder = computed(() => Object.keys(props.entry.children).length > 0);

const icon = computed(() => {
  if (isFolder.value) {
    return collapsed.value ? "📁" : "📂";
  }

  let type = props.entry.name.split(".").pop();

  switch (type) {
    case "jpeg":
    case "jpg":
    case "png":
    case "tga":
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
</script>

<template>
  <li :data-collapsed="collapsed || undefined">
    <button v-if="isFolder" type="button" @click="toggleChildren">{{ icon + name }}</button>
    <div v-else>{{ icon + name }}</div>

    <ul>
      <FolderViewEntry v-for="(child, i) in entry.children" :key="i" :entry="child" />
    </ul>
  </li>
</template>
