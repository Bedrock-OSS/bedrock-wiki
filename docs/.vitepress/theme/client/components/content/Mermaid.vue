<script setup lang="ts">
import { computed, onMounted, ref, useId, watch } from "vue";
import type { MermaidConfig } from "mermaid";

import useData from "../../composables/data";

const props = defineProps<{
  /** URI-encoded Mermaid diagram source (see the `mermaid` markdown plugin). */
  code: string;
}>();

const { isDark } = useData();

const source = computed(() => decodeURIComponent(props.code));

// Mermaid requires a unique, CSS-selector-safe ID per diagram.
const id = "mermaid-" + useId().replace(/[^\w-]/g, "-");

const state = ref<"pending" | "rendered" | "error">("pending");
const error = ref<string>();

/**
 * Mermaid renders (and measures text) inside this element, so the diagram is measured with
 * exactly the styles it is displayed with. It must stay visible while rendering.
 */
const container = ref<HTMLElement>();

type MermaidModule = typeof import("mermaid").default;

let mermaidModule: Promise<MermaidModule> | undefined;
// Mermaid mutates global state while rendering, so diagrams are rendered one at a time.
let renderQueue: Promise<unknown> = Promise.resolve();

function loadMermaid() {
  mermaidModule ??= import("mermaid").then((module) => module.default);
  return mermaidModule;
}

function getConfig(dark: boolean): MermaidConfig {
  return {
    startOnLoad: false,
    securityLevel: "strict",
    suppressErrorRendering: true,
    theme: dark ? "dark" : "default",
    fontFamily: "inherit",
  };
}

async function render() {
  const dark = isDark.value;
  const diagram = source.value;

  renderQueue = renderQueue.then(async () => {
    const target = container.value;
    if (!target) return;

    try {
      const mermaid = await loadMermaid();

      mermaid.initialize(getConfig(dark));

      const result = await mermaid.render(id, diagram, target);

      target.innerHTML = result.svg;
      error.value = undefined;
      state.value = "rendered";
    } catch (e) {
      target.innerHTML = "";
      error.value = e instanceof Error ? e.message : String(e);
      state.value = "error";
    }
  });

  await renderQueue;
}

onMounted(render);
watch([isDark, source], render);
</script>

<template>
  <figure class="mermaid" :class="{ 'mermaid--error': state === 'error' }">
    <div ref="container" class="mermaid__diagram" />
    <template v-if="state === 'error'">
      <p class="mermaid__error">Failed to render diagram:</p>
      <pre class="mermaid__error">{{ error }}</pre>
    </template>
    <pre v-if="state !== 'rendered'" class="mermaid__source">{{ source }}</pre>
  </figure>
</template>

<style lang="scss">
.mermaid {
  margin-block: 0.5em;
  padding: 1em;

  background-color: var(--light-bg-color);
  border: var(--border);
  border-radius: var(--border-radius);

  overflow-x: auto;

  &__diagram {
    display: flex;
    justify-content: center;

    & > svg {
      display: block;
      max-width: 100%;
      height: auto;
    }

    // Mermaid marks node and edge labels with `class="label"`, which collides with the wiki's
    // global `.label` styling from the <Label> component. Neutralise it (and other article
    // styles) so labels keep the size Mermaid measured them at. Mermaid's own rules are
    // scoped by diagram ID and therefore still take precedence over these.
    .label {
      display: revert;
      background-color: transparent;
      border-radius: 0;
      padding: 0;
      text-transform: none;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      vertical-align: baseline;

      & + .label {
        margin-left: 0;
      }
    }

    p {
      margin: 0;
    }
  }

  &__source {
    margin: 0;
    font-family: monospace;
    white-space: pre-wrap;
    color: var(--secondary-text-color);
  }

  &--error {
    border-color: #e5484d;
  }

  &__error {
    margin: 0 0 0.5em;
    font-family: monospace;
    white-space: pre-wrap;
    color: #e5484d;
  }
}
</style>
