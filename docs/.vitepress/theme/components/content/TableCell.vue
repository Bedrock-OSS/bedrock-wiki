<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { TableValue, TableColumn } from "../../types";

const props = defineProps<{
  column: TableColumn;
  value: TableValue;
}>();

const shortListLength = 10;

const showMore = ref(false);

const content = ref<HTMLElement | null>(null);
const isOverflowing = ref(false);

const canShowMore = computed(() => {
  if (Array.isArray(props.value)) return props.value.length > shortListLength;

  if (typeof props.value === "string") return isOverflowing.value;

  return false;
});

const checkOverflow = () => {
  if (content.value === null) return;

  isOverflowing.value = content.value.scrollHeight > content.value.clientHeight;
};

onMounted(() => {
  checkOverflow();
  window.addEventListener("resize", checkOverflow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkOverflow);
});
</script>

<template>
  <td :style="{ textAlign: column.textAlign }">
    <ul v-if="Array.isArray(value)" class="content">
      <li
        v-for="(item, itemIndex) in showMore ? value : value.slice(0, shortListLength)"
        :key="itemIndex"
        v-html="item"
      />
    </ul>

    <div
      v-else-if="typeof value === 'string'"
      ref="content"
      class="content"
      :data-show-more="showMore"
      v-html="value"
    />

    <div v-else-if="typeof value === 'boolean'" class="content">{{ value ? "✔️" : "❌" }}</div>

    <div v-else class="content">{{ value }}</div>

    <template v-if="canShowMore">
      <button
        v-if="showMore"
        type="button"
        class="show-less-button"
        @click="() => (showMore = false)"
      >
        Show Less
      </button>
      <button v-else type="button" class="show-more-button" @click="() => (showMore = true)">
        …Show More
      </button>
    </template>
  </td>
</template>

<style lang="scss" scoped>
.content[data-show-more="false"] {
  max-height: 5lh;
  overflow: hidden;
}

td {
  position: relative;
}

.show-more-button,
.show-less-button {
  color: var(--accent-color);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.show-more-button {
  position: absolute;
  right: 1em;
  bottom: 0.5em;

  background-color: var(--cell-bg-color);

  &::before {
    content: "";
    position: absolute;

    left: -1.5em;
    width: 1.5em;
    height: 1lh;

    background: linear-gradient(90deg, transparent, var(--cell-bg-color) 80%);
  }
}
</style>
