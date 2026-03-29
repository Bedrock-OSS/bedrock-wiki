<script setup lang="ts">
import filePageLink from "../../utils/filePageLink";

import useFilePage from "../../composables/filePage";
import useData from "../../composables/data";

import OutlineLevel from "./OutlineLevel.vue";
import FolderView from "./FolderView.vue";
import Downloads from "./Downloads.vue";

const { page } = useData();
const filePage = useFilePage();
</script>

<template>
  <div v-if="filePage !== undefined" class="outline">
    <a v-if="filePage.root.type === 'page'" class="outline__title" :href="'/' + filePage.root.path">
      {{ filePage.root.title }}
    </a>
    <div v-else class="outline__title">{{ filePage.root.title }}</div>
    <FolderView
      :paths="filePage.example.files"
      :links="(path) => filePageLink(filePage!.root.path, path)"
      collapsed
    />
    <Downloads
      :title="filePage.root.title"
      :asset="filePage.root.path + '.zip'"
      :types="filePage.example.type === 'zip' ? ['zip'] : ['zip', filePage.example.type]"
    />
  </div>
  <div v-else class="outline">
    <a class="outline__title" href="#">{{ page.title }}</a>
    <OutlineLevel v-if="page.headers.length > 0" :headers="page.headers" />
  </div>
</template>

<style lang="scss">
.outline {
  & > .button {
    text-align: center;
    display: block;
    margin-block: 0.5em;
  }

  a.active {
    font-weight: 600;
  }
}

@media (max-width: 1300px) {
  .outline {
    &__title {
      display: none;
    }

    & > ul {
      padding-left: 0.25em;
    }

    .folder-view {
      padding: 0;
      border: none;
      margin-top: 0;
    }
  }
}

@media not (max-width: 1300px) {
  .outline {
    position: fixed;
    top: 0;
    right: 0;
    overflow: auto;
    width: var(--outline-width);
    padding-inline: 2em;
    padding-top: calc(var(--header-height) + 2em);
    scrollbar-width: none;

    max-height: 100%;

    backdrop-filter: var(--nav-bg-blur);
    mask: linear-gradient(to right, transparent 2em, black 2em);

    a:not(.button) {
      display: block;
      transition: color 0.05s;
      color: inherit;

      &:hover {
        color: var(--accent-color);
        text-decoration: none;
      }
    }

    &__title {
      font-weight: 700;
    }

    & > ul {
      border-left: var(--border);
    }

    & > .folder-view {
      width: auto;
    }
  }

  .example-file .outline {
    mask: linear-gradient(to right, transparent, black 1em);
    padding-bottom: 1.5em;
  }
}
</style>
