<script setup lang="ts">
import { computed } from "vue";

import useSidebarVisibility from "../composables/sidebarVisibility";
import useIsMobile from "../composables/isMobile";
import useRedirect from "../composables/redirect";
import useData from "../composables/data";

import Header from "./navigation/Header.vue";
import Sidebar from "./navigation/Sidebar.vue";
import FrameCorner from "./icons/FrameCorner.vue";

import NotFound from "./NotFound.vue";
import Article from "./Article.vue";
import Footer from "./Footer.vue";

const { page, frontmatter } = useData();

const isMobile = useIsMobile();
const isSidebarVisible = useSidebarVisibility();
const isOutlineVisible = computed(() => frontmatter.value?.show_outline ?? !page.value.isNotFound);

useRedirect();
</script>

<template>
  <div
    :class="{
      'sidebar-visible': isSidebarVisible,
      'outline-visible': isOutlineVisible,
    }"
  >
    <Header />
    <Sidebar />
    <main @pointerdown="() => isMobile && (isSidebarVisible = false)">
      <FrameCorner />
      <NotFound v-if="page.isNotFound" />
      <Article v-else />
      <Footer />
    </main>
  </div>
</template>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: var(--header-height);
  margin-left: 0;
  min-height: 100vh;
  gap: 2em;

  .label {
    font-size: 1em;
  }
}

@media not (max-width: 900px) {
  .sidebar-visible {
    main {
      margin-left: var(--sidebar-width);
    }
  }
}
</style>
