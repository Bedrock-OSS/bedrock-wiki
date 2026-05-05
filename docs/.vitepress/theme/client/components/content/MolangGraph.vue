<script setup lang="ts">
import { toRefs, computed, ref, watch } from "vue";
import { Molang } from "molang";
import { useWindowSize } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    code: string;
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
    stepSize?: number;
    height?: number;
    useCenteredOrigin?: boolean;
    hideCode?: boolean;
  }>(),
  {
    fromX: 0,
    toX: 1,
    stepSize: 0.5,
    height: 300,
    fromY: 0,
    toY: 1,
  }
);
const { code, fromX, fromY, toX, toY, stepSize, height } = toRefs(props);

const molang = new Molang({});

const xVariables = [
  "query.anim_time",
  "query.life_time",
  "query.modified_distance_moved",
  "variable.particle_age",
  "variable.emitter_age",
];

const cssHeight = computed(() => `${height.value}px`);

// Calculate current SVG width
const width = ref(0);
const svgElement = ref<Element | null>(null);
const { width: windowWidth } = useWindowSize();
watch([windowWidth, svgElement], () => {
  if (svgElement.value) {
    const { width: svgWidth } = svgElement.value.getBoundingClientRect();
    width.value = svgWidth;
  }
});

const getXRange = () => Math.abs(toX.value - fromX.value);
const getYRange = () => Math.abs(toY.value - fromY.value);
const getXRoot = () => Math.abs(fromX.value / getXRange()) * width.value;
const getYRoot = () => Math.abs(fromY.value / getYRange()) * height.value;
// Functions that translate a number into the corresponding pixel coordinate
const toPixelX = (x: number) => {
  const xScale = width.value / getXRange();
  return x * xScale + getXRoot();
};
const toPixelY = (y: number) => {
  const yScale = height.value / getYRange();
  return y * yScale + getYRoot();
};

const axes = computed(
  () =>
    `M0 ${height.value - getYRoot()} L${width.value} ${
      height.value - getYRoot()
    } M${getXRoot()} 0 L${getXRoot()} ${height.value}`
);

const graphData = computed(() => {
  let x = fromX.value;
  molang.updateConfig({
    variableHandler: (varName) => (xVariables.includes(varName) ? x : undefined),
  });

  let valueBefore = NaN;
  let path = "";

  while (x <= toX.value) {
    let value = molang.executeAndCatch(userCode.value) as number;
    if (typeof value !== "number") value = NaN;

    path += `${isNaN(value) || isNaN(valueBefore) ? "M" : " L"}${toPixelX(x)} ${toPixelY(value)}`;

    x += stepSize.value;
    valueBefore = value;
  }

  return path;
});

const userCode = ref(code.value);
</script>

<template>
  <div class="molang-graph">
    <input v-model="userCode" type="text" />
    <svg ref="svgElement" class="rounded-md border border-true-gray-200 dark:border-true-gray-600">
      <path class="axes" :d="axes" />

      <path class="graph" transform="scale(1, -1)" transform-origin="center" :d="graphData" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  line-height: 1.5;
  font-family: monospace;
  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));
  padding: 0.5rem 1rem;
  border: var(--border);
  border-radius: var(--border-radius);
}

.axes {
  stroke: var(--border-color);
}

svg {
  display: block;
  width: 100%;
  height: v-bind(cssHeight);
  margin-top: 0.5em;
  border: var(--border);
  border-radius: var(--border-radius);
}

path {
  stroke-width: 2px;
  pointer-events: none;
  fill: none;
}

path.graph {
  stroke: #3688ff;
}

path.axes {
  stroke-width: 1px;
}
</style>
