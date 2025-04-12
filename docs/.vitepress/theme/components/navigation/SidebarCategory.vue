<script setup lang="ts">
import { SidebarCategory } from "../../types";
import SidebarLink from "./SidebarLink.vue";

defineProps<SidebarCategory>();
</script>

<template>
  <li class="sidebar__category" :data-accent-color="color">
    <header>{{ title }}</header>
    <ul>
      <SidebarLink v-for="link in links" :key="link.link" v-bind="link" />
    </ul>
  </li>
</template>

<style lang="scss">
.sidebar__category {
  margin-left: 0.5em;
  header {
    line-height: 1.2;
    font-weight: 600;
    padding-bottom: 0.2em;
    border-bottom: 2px solid var(--accent-color);
  }
}
</style>
