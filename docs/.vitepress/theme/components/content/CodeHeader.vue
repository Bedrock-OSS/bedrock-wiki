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
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  margin-top: 0.5em;
  padding: 0.5em;
  padding-right: 4em;
  gap: 0.4em;

  border: var(--border);
  border-bottom: none;

  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

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
  margin-top: 0;

  border-top-left-radius: 0;
  border-top-right-radius: 0;

  & > .copy {
    display: inline-block;
    position: absolute;
    top: -2.05em;
    right: 0.45em;
    height: 1.5em;
    text-transform: uppercase;
    font-weight: 600;
    padding-inline: 0.4em;
    line-height: 1;
    border-radius: 4px;
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
