<script setup lang="ts">
import { SidebarSection } from "../../types";
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import SidebarLink from "./SidebarLink.vue";
import SidebarCategory from "./SidebarCategory.vue";

const emit = defineEmits(["click"]);

defineProps<SidebarSection & { open: boolean }>();
</script>

<template>
  <details class="sidebar__section" :open>
    <summary @click.prevent.exact="emit('click')">
      {{ title }}
      <ChevronRightIcon />
    </summary>
    <ul>
      <SidebarLink v-for="link in links" :key="link.link" v-bind="link" />
      <SidebarCategory v-for="category in categories" :key="category.title" v-bind="category" />
    </ul>
  </details>
</template>

<style lang="scss">
.sidebar__section {
  summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 6px 12px;
    transition: background-color 0.1s;

    svg {
      margin-left: auto;
      transition: transform 0.1s;
    }

    &:hover {
      background-color: var(--bg-color);
    }
  }

  & > ul {
    display: none;
  }

  &[open] {
    & > summary {
      background-color: var(--bg-color);
      font-weight: 600;
      svg {
        transform: rotate(90deg);
      }
    }
    & > ul {
      display: block;
    }
  }
}
</style>
