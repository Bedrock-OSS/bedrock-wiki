<script setup lang="ts">
import { computed } from "vue";
import { TableColumn } from "../../types";

import { TableSorting } from "../../data/tables/sortTableRows";
import SortIcon from "../icons/SortIcon.vue";

const props = defineProps<{
  columnId: string;
  column: TableColumn;
  sorting: TableSorting | null;
}>();

const emit = defineEmits(["toggleSorting"]);

const sortOrder = computed(() => {
  if (props.sorting?.column === props.columnId) return props.sorting.order;

  return undefined;
});

const sortButtonTitle = computed(() => {
  if (sortOrder.value === "ascending") return "Sort Descending";
  if (sortOrder.value === "descending") return "Sort Initial";
  return "Sort Ascending";
});
</script>

<template>
  <th :key="columnId" :style="{ textAlign: column.textAlign }">
    <div>
      <span v-html="column.name" />
      <button
        v-if="column.sortable"
        class="sort-button"
        type="button"
        :title="sortButtonTitle"
        @click="emit('toggleSorting')"
      >
        <SortIcon :order="sortOrder" />
      </button>
    </div>
  </th>
</template>

<style lang="scss" scoped>
th > div {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
}

.sort-button {
  cursor: pointer;

  border-radius: 6px;
  border: var(--border);
  background-color: var(--light-bg-color);
  transition: background-color 0.1s;

  padding: 6px;
  margin-left: 1em;
  margin-right: -0.5em;

  &:hover {
    background-color: var(--bg-color);
  }
}
</style>
