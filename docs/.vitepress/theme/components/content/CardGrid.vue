<template>
  <div class="card-grid">
    <slot />
  </div>
</template>

<style lang="scss">
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));

  gap: 1em;
}
</style>
