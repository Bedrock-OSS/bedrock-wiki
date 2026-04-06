<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useData } from "vitepress";

import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import LanguageIcon from "../icons/LanguageIcon.vue";

const { site, localeIndex } = useData();

interface LocaleConfig {
  label: string;
  lang?: string;
  link?: string;
}

const locales = computed(() => {
  const localesConfig = site.value.locales || {};
  return Object.entries(localesConfig).map(([key, value]) => ({
    key,
    ...(value as LocaleConfig),
  }));
});

const currentLocaleKey = ref(localeIndex.value);

watch(
  () => localeIndex.value,
  (newVal) => {
    currentLocaleKey.value = newVal;
  }
);

function switchLocale(localeKey: string, localeLink?: string) {
  if (localeKey === localeIndex.value) return;

  const currentPath = window.location.pathname;
  let newPath: string;

  if (localeKey === "root") {
    // Switching to root (English): remove /zh/ prefix
    newPath = currentPath.replace(/^\/zh\//, "/");
  } else {
    // Switching to a locale
    if (localeIndex.value === "root") {
      // From root to locale: add prefix
      newPath = `/${localeKey}${currentPath}`;
    } else {
      // From one locale to another: replace prefix
      newPath = currentPath.replace(/^\/[^/]+\//, `/${localeKey}/`);
    }
  }

  // Ensure path starts with /
  if (!newPath.startsWith("/")) {
    newPath = "/" + newPath;
  }

  window.location.href = localeLink || newPath;
}
</script>

<template>
  <div class="language-switcher">
    <LanguageIcon />
    <select v-model="currentLocaleKey" name="language" title="Switch Language"
      @change="(e) => switchLocale((e.target as HTMLSelectElement).value)">
      <option v-for="locale in locales" :key="locale.key" :value="locale.key">
        {{ locale.label }}
      </option>
    </select>
    <ChevronRightIcon />
  </div>
</template>

<style lang="scss">
.language-switcher {
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

  &>svg {
    position: absolute;
    pointer-events: none;
  }

  &> :first-child {
    left: 0.5rem;
    font-size: 1.3rem;
  }

  &> :last-child {
    transform: rotate(90deg);
    right: 0.5rem;
  }
}
</style>
