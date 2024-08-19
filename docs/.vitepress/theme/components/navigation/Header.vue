<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

import useSidebarVisibility from "../../composables/sidebarVisibility";
import useIsMobile from "../../composables/isMobile";
import useData from "../../composables/data";

import MenuIcon from "../icons/MenuIcon.vue";
import MenuOpenIcon from "../icons/MenuOpenIcon.vue";

import NavLink from "./NavLink.vue";
import AppearanceDropdown from "./AppearanceDropdown.vue";
import AlgoliaSearch from "./AlgoliaSearch.vue";

const { site, theme } = useData();

const isAppearanceDropdownVisible = useMediaQuery("(min-width: 330px)");
const isShortTitle = useMediaQuery("(max-width: 400px)");
const isSidebarVisible = useSidebarVisibility();
const isMobile = useIsMobile();

function toggleSidebarVisibility() {
  isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
  <header class="header">
    <button
      type="button"
      class="header__menu-button"
      aria-label="Toggle Sidebar Visibility"
      @click="toggleSidebarVisibility"
    >
      <MenuOpenIcon v-if="isSidebarVisible" />
      <MenuIcon v-else />
    </button>
    <img src="/favicon.ico" alt="" />
    <a class="header__title" href="/">
      <span>{{ isShortTitle ? "Wiki" : site.title }}</span>
    </a>
    <div class="header__content">
      <ul v-if="!isMobile" class="header__links">
        <li v-for="(item, i) in theme.navigation" :key="i">
          <NavLink :link="item.link" :active-match="item.activeMatch">{{ item.text }}</NavLink>
        </li>
      </ul>
      <ClientOnly>
        <AppearanceDropdown v-if="isAppearanceDropdownVisible" />
        <AlgoliaSearch />
      </ClientOnly>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 150;

  display: flex;
  align-items: center;
  gap: 0.5em;

  padding: 0.5em;
  padding-left: 1em;

  height: var(--header-height);

  background-color: var(--nav-bg-color);
  backdrop-filter: var(--nav-bg-blur);

  &__menu-button {
    cursor: pointer;
    margin-right: 0.3em;
    svg {
      font-size: 1.5em;
      vertical-align: middle;
    }
  }

  & > img {
    width: 30px;
  }

  &__title {
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 600;
  }

  &__content {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 0.5em;
  }

  &__links {
    display: flex;
    gap: 0.5em;

    li {
      display: block;
      a {
        display: flex;
        align-items: center;
        color: inherit;
        padding: 0.5em 0.5em;
        gap: 0.1em;
        border-radius: 6px;
        line-height: 1.3;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: var(--bg-color);
        }

        &.active {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
