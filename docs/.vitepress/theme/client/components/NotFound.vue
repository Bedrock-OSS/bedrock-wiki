<script setup lang="ts">
import WikiImage from "./content/WikiImage.vue";
</script>

<template>
  <article>
    <h1>Page Not Found</h1>
    <p>We couldn't find the page you were looking for.</p>

    <WikiImage src="/assets/images/misc/dead_bush.png" alt="Dead Bush" />

    <p>Don't type <code>/spawnpoint</code> here!</p>
  </article>
</template>

<style lang="scss" scoped>
article {
  text-align: center;

  h1 {
    margin-inline: auto;
    margin-top: 1em;

    @media not (max-width: 900px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.4rem;
  }
}
</style>
