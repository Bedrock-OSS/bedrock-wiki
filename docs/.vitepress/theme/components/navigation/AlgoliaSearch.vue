<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vitepress";
import { onMounted, watch } from "vue";

import docsearch from "@docsearch/js";
import "@docsearch/css/dist/style.css";
import useData from "../../composables/data";

const { theme } = useData();

const options = theme.value.algolia;

const route = useRoute();
const router = useRouter();

watch(
  () => options,
  (value) => {
    update(value);
  }
);

onMounted(() => {
  initialize(options);
});

function isSpecialClick(event: MouseEvent) {
  return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl);

  return pathname + hash;
}

function update(options: any) {
  initialize(options);
}

function initialize(userOptions: any) {
  docsearch(
    Object.assign({}, userOptions, {
      container: "#docsearch",

      navigator: {
        navigate: ({ itemUrl }: { itemUrl: string }) => {
          const { pathname: hitPathname } = new URL(window.location.origin + itemUrl);
          // Router doesn't handle same-page navigation so we use the native
          // browser location API for anchor navigation
          if (route.path === hitPathname) {
            window.location.assign(window.location.origin + itemUrl);
          } else {
            router.go(itemUrl);
          }
        },
      },
      transformItems: (items: any) => {
        return items.map((item: any) => {
          return Object.assign({}, item, {
            url: getRelativePath(item.url),
          });
        });
      },
      hitComponent: ({ hit, children }: { hit: any; children: any }) => {
        const relativeHit = hit.url.startsWith("http")
          ? getRelativePath(hit.url as string)
          : hit.url;
        return {
          type: "a",
          ref: undefined,
          constructor: undefined,
          key: undefined,
          props: {
            href: hit.url,
            onClick: (event: MouseEvent) => {
              if (isSpecialClick(event)) {
                return;
              }
              // we rely on the native link scrolling when user is already on
              // the right anchor because Router doesn't support duplicated
              // history entries
              if (route.path === relativeHit) {
                return;
              }
              // if the hits goes to another page, we prevent the native link
              // behavior to leverage the Router loading feature
              if (route.path !== relativeHit) {
                event.preventDefault();
              }
              router.go(relativeHit);
            },
            children,
          },
          __v: null,
        };
      },
    })
  );
}
</script>

<style lang="scss">
.DocSearch {
  --docsearch-primary-color: var(--accent-color);
  --docsearch-text-color: #252525;
  --docsearch-spacing: 1em;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: rgb(150, 159, 175);
  --docsearch-container-background: rgba(0, 0, 0, 0.8);
  --docsearch-logo-color: var(--docsearch-primary-color);

  /* modal */
  --docsearch-modal-width: 600px;
  --docsearch-modal-height: 600px;
  --docsearch-modal-background: var(--bg-color);
  --docsearch-modal-shadow: none;

  /* searchbox */
  --docsearch-searchbox-height: 50px;
  --docsearch-searchbox-background: var(--bg-color);
  --docsearch-searchbox-focus-background: var(--light-bg-color);
  --docsearch-searchbox-shadow: none;

  /* hit */
  --docsearch-hit-height: 50px;
  --docsearch-hit-shadow: none;
  --docsearch-hit-background: var(--light-bg-color);
  --docsearch-hit-color: currentColor;

  /* key */
  --docsearch-key-gradient: none;
  --docsearch-key-shadow: none;

  /* footer */
  --docsearch-footer-background: var(--light-bg-color);
  --docsearch-footer-shadow: inset 0 1px 0 var(--border-color);
}

/* Darkmode */
.dark .DocSearch {
  --docsearch-text-color: rgb(245, 246, 247);
  --docsearch-logo-color: rgb(255, 255, 255);
}
.DocSearch-Modal {
  border-radius: var(--border-radius);
  border: var(--border);
}
.DocSearch-Form {
  border-radius: var(--border-radius);
  border: var(--border);
}
.DocSearch-Button {
  border-radius: var(--border-radius);
  border: var(--border);
  margin: 0;

  .DocSearch-Button-Keys {
    display: none;
  }
}
.DocSearch-Button-Placeholder {
  &::after {
    content: "...";
  }
}
.DocSearch-Button-Key {
  padding: 0;
  margin: 0;
}
</style>
