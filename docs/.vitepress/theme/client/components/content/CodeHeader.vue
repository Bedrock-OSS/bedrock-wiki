<script setup lang="ts">
import { computed, onMounted } from "vue";
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";

import displayError from "../../utils/displayError";
import getFileIcon from "../../utils/getFileIcon";

const props = defineProps<{
  link?: string;
  path?: string;
  breadcrumbs?: string;
}>();

const breadcrumbsPattern = /^[^ ]+(\/[^ ]+)*$/i;

const breadcrumbs = computed(() => {
  if (props.breadcrumbs === undefined) return;

  if (!breadcrumbsPattern.test(props.breadcrumbs)) {
    displayError(new TypeError(`Code header has invalid breadcrumbs: "${props.breadcrumbs}".`));
  }

  return props.breadcrumbs?.split("/");
});

onMounted(() => {
  if (!props.path && !breadcrumbs.value) {
    displayError(
      new TypeError(`Code headers must have at least one of "path" or "breadcrumbs" defined.`)
    );
  }

  if (props.link && !props.path) {
    displayError(new TypeError(`Code headers with a "link" defined must also have a "path".`));
  }
});
</script>

<template>
  <header
    class="code-header"
    :data-path="path !== undefined || undefined"
    :data-breadcrumbs="breadcrumbs !== undefined || undefined"
  >
    <component
      :is="link ? 'a' : 'div'"
      v-if="path != undefined"
      :href="link"
      class="code-header__path"
    >
      <span>{{ getFileIcon(path) }}&nbsp;</span>
      <span>{{ path }}</span>
    </component>
    <div v-if="breadcrumbs != undefined" class="code-header__breadcrumbs">
      <template v-for="(segment, i) in breadcrumbs" :key="i">
        <ChevronRightIcon v-if="i !== 0" />
        <span>{{ segment }}</span>
      </template>
    </div>
  </header>
</template>

<style lang="scss">
.code-header {
  margin-top: 0.5em;
  background-color: var(--light-bg-color);

  border: var(--border);
  border-bottom: none;

  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  overflow: hidden;

  &__path,
  &__breadcrumbs {
    display: block;
    overflow: auto;
    scrollbar-width: none;
    white-space: nowrap;
  }

  &__path {
    padding: 0.4em;
    border-bottom: var(--border);
    text-decoration: none !important;

    background-color: var(--bg-color);

    &:is(a) {
      &:hover > :last-child {
        text-decoration: underline;
      }
    }
  }

  &__breadcrumbs {
    user-select: none;

    padding-top: 0.15em;
    padding-left: 0.9em;
    margin-right: 3.5rem;

    color: var(--secondary-text-color);

    & > span {
      font-size: 0.9rem;
    }

    & > svg {
      vertical-align: -3px;
    }
  }
}

.code-header + [class*="language-"] {
  margin-top: 0;
  border-top: none;

  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.code-header[data-breadcrumbs] + [class*="language-"] {
  padding-top: 0.5em;
  min-height: 2.5em;

  & > .copy {
    top: -1.4rem;
  }
}
</style>
