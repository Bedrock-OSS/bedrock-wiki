<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <h2 id="contributors">Contributors</h2>
  <div class="contributors">
    <a
      v-for="login in frontmatter.mentions"
      :key="login"
      :title="login"
      :href="'https://github.com/' + login"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="'https://github.com/' + login + '.png?size=32'" alt="" />
    </a>
  </div>
</template>

<style lang="scss">
.contributors {
  a {
    display: inline-block;
    background-color: var(--bg-color);
    border: var(--border);
    border-radius: 50%;
    overflow: hidden;
    line-height: 1;

    margin-inline: 0.2em -0.6em;
    transition-delay: 0.1s;
    transition:
      margin 0.2s,
      transform 0.2s;

    img {
      width: 2em;
      height: 2em;
      vertical-align: middle;
    }

    &:hover {
      transform: translateY(-0.3em);
    }
  }

  &:hover,
  &:focus-within {
    a {
      margin-right: 0.2em;
    }
  }
}
</style>
