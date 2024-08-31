<script setup lang="ts">
import FileIcon from "../icons/FileIcon.vue";
</script>

<template>
  <header class="code-header">
    <FileIcon />
    <div class="code-header__content">
      <slot />
    </div>
  </header>
</template>

<style lang="scss">
.code-header {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  border: var(--border);
  border-bottom: none;
  margin-top: 0.5em;
  padding: 0.5em;
  padding-right: 6em;
  gap: 0.4em;

  display: flex;
  align-items: center;

  * {
    flex-shrink: 0;
  }

  svg {
    font-size: 1.5em;
  }

  &__content {
    overflow: auto;
    white-space: nowrap;
  }
}

.code-header + [class*="language-"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;

  & > .copy {
    display: inline-block;
    position: absolute;
    top: -2em;
    right: 0.5em;
    height: 1.5em;
    text-transform: uppercase;
    font-weight: 600;
    padding-inline: 0.5em;
    line-height: 1;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background-color: var(--border-color);
    }

    &::after {
      content: "Copy";
    }
    &.copied::after {
      content: "Copied!";
    }
  }
}
</style>
