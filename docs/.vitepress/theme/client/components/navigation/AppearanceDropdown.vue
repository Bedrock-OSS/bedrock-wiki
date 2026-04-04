<script setup lang="ts">
import { computed, watchPostEffect } from "vue";

import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import DesktopMacIcon from "../icons/DesktopMacIcon.vue";
import LightThemeIcon from "../icons/LightThemeIcon.vue";
import DarkThemeIcon from "../icons/DarkThemeIcon.vue";
import { useMediaQuery, useStorage } from "@vueuse/core";
import useData from "../../composables/data";

const { isDark } = useData();

const theme = useStorage("vitepress-theme-appearance", "auto");

const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

watchPostEffect(() => {
  isDark.value = theme.value === "auto" ? prefersDark.value : theme.value === "dark";
});

const ThemeIcon = computed(() => {
  switch (theme.value) {
    case "dark":
      return DarkThemeIcon;
    case "light":
      return LightThemeIcon;
    default:
      return DesktopMacIcon;
  }
});
</script>

<template>
  <div class="appearance-control">
    <ThemeIcon />
    <select v-model="theme" name="theme" title="Change Theme">
      <option value="auto">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
    <ChevronRightIcon />
  </div>
</template>

<style lang="scss">
.appearance-control {
  display: flex;

  align-items: center;
  position: relative;

  select {
    display: block;
    appearance: none;
    user-select: none;
    outline: none;
    height: 36px;
    padding-inline: 2em;
    cursor: pointer;
    font-weight: 500;

    background-color: var(--bg-color);
    border: var(--border);
    border-radius: var(--border-radius);

    color: rgb(150, 159, 175);

    &:hover,
    &:focus {
      background-color: var(--light-bg-color);
      color: inherit;
    }
  }

  & > svg {
    position: absolute;
    pointer-events: none;
  }

  & > :first-child {
    left: 0.5rem;
    font-size: 1.3rem;
  }

  & > :last-child {
    transform: rotate(90deg);
    right: 0.5rem;
  }
}
</style>
