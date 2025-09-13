<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { data as sidebar } from "../../data/sidebar/sidebar.data";

import useData from "../../composables/data";
import useIsMobile from "../../composables/isMobile";

import NavLink from "./NavLink.vue";
import SidebarSection from "./SidebarSection.vue";
import SidebarLink from "./SidebarLink.vue";

const { page, theme } = useData();
const { links, sections } = sidebar;

const isMobile = useIsMobile();

const activeSection = computed(() => page.value.relativePath.match(/^[^/]+/)?.[0]);
const openSection = ref<string>();

watch(activeSection, (id) => {
  if (id === openSection.value) openSection.value = undefined;
});

function toggleSection(id: string) {
  if (id === openSection.value) openSection.value = undefined;
  else openSection.value = id;
}
</script>

<template>
  <div class="sidebar">
    <ul v-if="links.length > 0 || (isMobile && theme.navigation.length > 0)">
      <template v-if="isMobile">
        <li v-for="item in theme.navigation" :key="item.link" class="sidebar__link">
          <NavLink :link="item.link" :active-match="item.activeMatch">{{ item.text }}</NavLink>
        </li>
      </template>
      <SidebarLink v-for="link in links" :key="link.link" v-bind="link" />
    </ul>
    <SidebarSection
      v-for="section in sections"
      :key="section.id"
      v-bind="section"
      :open="openSection === section.id || activeSection === section.id"
      @click="() => toggleSection(section.id)"
    />
  </div>
</template>

<style lang="scss">
.sidebar {
  width: var(--sidebar-width);
  position: fixed;
  top: var(--header-height);
  left: calc(var(--sidebar-width) * -1 - var(--border-radius));
  bottom: 0;
  z-index: 150;
  overflow: auto;
  scrollbar-gutter: stable;
  user-select: none;

  transition: left var(--sidebar-visibility-transition-duration);

  background-color: var(--light-bg-color);

  ul {
    list-style: none;
  }

  & > ul,
  &__section > ul {
    margin: 0.3em;
    border-bottom: var(--border);
  }
}

.sidebar-visible {
  .sidebar {
    left: 0;
  }
}
</style>
