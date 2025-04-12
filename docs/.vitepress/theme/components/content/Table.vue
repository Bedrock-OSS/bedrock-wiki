<script setup lang="ts">
import { computed, ref, watch } from "vue";
import TableHeader from "./TableHeader.vue";
import TableCell from "./TableCell.vue";

import sortTableRows, { TableSorting } from "../../data/tables/sortTableRows";
import { data as tables } from "../../data/tables/tables.data";
import displayError from "../../utils/displayError";
import useData from "../../composables/data";

const { page } = useData();

const props = defineProps<{
  data: string;
}>();

const table = computed(() => {
  let path = "public";

  if (props.data[0] !== "/") {
    path += "/assets/tables/" + page.value.relativePath.replace(/\.md$/, "/");
  }

  path += props.data;

  const table = tables[path];

  if (!table) {
    displayError(new TypeError(`No table with the path "${path}" exists.`));
  }

  return table;
});

const sorting = ref<TableSorting | null>(null);
const sortedRows = ref(table.value.rows);

function toggleSorting(column: string) {
  if (sorting.value?.column === column) {
    if (sorting.value.order === "ascending") {
      sorting.value = { column, order: "descending" };
      return;
    }

    sorting.value = null;
    return;
  }

  sorting.value = { column, order: "ascending" };
}

function sortRows() {
  if (sorting.value === null) {
    sortedRows.value = table.value.rows;
    return;
  }

  const rows = table.value.rows.map((row, index) => ({
    ...row,
    __initial_index__: index, // Persist index to prevent unnecessary Vue rerenders
  }));

  sortTableRows(sorting.value, rows);

  sortedRows.value = rows;
}

watch(sorting, sortRows);
</script>

<template>
  <table>
    <thead>
      <tr>
        <TableHeader
          v-for="(column, columnId) in table.columns"
          :key="columnId"
          :column-id="columnId as string"
          :column
          :sorting
          @toggle-sorting="toggleSorting(columnId as string)"
        />
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, index) in sortedRows" :key="(row.__initial_index__ as number) ?? index">
        <TableCell
          v-for="(column, columnId) in table.columns"
          :key="columnId"
          :column
          :value="row[columnId] ?? column.default"
        />
      </tr>
    </tbody>
  </table>
</template>
