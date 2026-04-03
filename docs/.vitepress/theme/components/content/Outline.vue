<script setup lang="ts">
import { useRoute } from "vitepress";

import filePageLink from "../../utils/filePageLink";

import useFilePage from "../../composables/filePage";
import useData from "../../composables/data";

import OutlineLevel from "./OutlineLevel.vue";
import RelatedPages from "./RelatedPages.vue";
import FolderView from "./FolderView.vue";
import Downloads from "./Downloads.vue";

const { frontmatter, page, params } = useData();
const filePage = useFilePage();

const route = useRoute();
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
      :asset="'/' + filePage.root.path + '.zip'"
      :types="
        filePage.example.archive.type === 'zip' ? ['zip'] : ['zip', filePage.example.archive.type]
      "
    />
  </div>
  <div v-else class="outline">
    <a class="outline__title" href="#">{{ page.title }}</a>
    <OutlineLevel v-if="page.headers.length > 0" :headers="page.headers" />
    <template v-if="params?.example">
      <div class="outline__title">Download Example</div>
      <Downloads
        v-if="params?.example"
        :title="page.title"
        :asset="route.path + '.zip'"
        :types="
          params.example.archive.type === 'zip' ? ['zip'] : ['zip', params.example.archive.type]
        "
      />
    </template>
    <RelatedPages v-if="frontmatter.related !== undefined" />
  </div>
</template>

<style lang="scss">
.outline {
  &__title {
    font-weight: 700;

    &:not(:first-child) {
      margin-top: 0.5em;
    }
  }

  & > .button {
    text-align: center;
    display: block;
    margin-block: 0.5em;
  }

  a.active {
    font-weight: 600;
  }

  li {
    margin-block: 0.4em;
  }
}

@media (max-width: 1300px) {
  .outline {
    &__title:first-child {
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
