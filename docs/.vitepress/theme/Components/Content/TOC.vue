<template>
  <div>
    <h1>{{ title }}</h1>
    <ol id="toc">
      <li v-for="header in headers" key="header.title">
        <a :href="'#' + header.slug">{{ header.title }}</a>
        <ol>
          <li v-for="child in header.children" key="child.title">
            <a :href="'#' + child.slug">{{ child.title }}</a>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import {usePageData} from "vitepress";
import {ref, watch} from "vue";

const page = usePageData();

const getHeaders = function () {
  let grouped = [];
  let lastHeader = null;
  for (const header of page.value.headers) {
    if (header.level === 2) {
      lastHeader = header;
      header.children = [];
      grouped.push(header);
    } else if (header.level === 3) {
      if (lastHeader) {
        lastHeader.children.push(header);
      } else {
        grouped.push(header);
      }
    }
  }
  return grouped;
}

let headers = ref(getHeaders());
let title = ref(page.value.title);
watch(page, () => {
  headers.value = getHeaders();
  title.value = page.value.title;
})
</script>

<style scoped>

#toc ol {
  @apply list-none
}

#toc li > ol {
  @apply ml-8
}

#toc a {
  @apply text-black no-underline
}

.dark #toc a {
  @apply text-white no-underline
}

</style>