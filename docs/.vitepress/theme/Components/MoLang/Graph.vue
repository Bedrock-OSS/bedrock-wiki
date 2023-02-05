<script setup lang="ts">
import { toRefs, computed, ref, watch } from 'vue'
import { MoLang } from 'molang'
import { useWindowSize } from '@vueuse/core'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight } from 'prismjs'
import 'molangjs/syntax/molang-prism-syntax'

const props = withDefaults(
	defineProps<{
		code: string
		fromX?: number
		fromY?: number
		toX?: number
		toY?: number
		stepSize?: number
		height?: number
		useCenteredOrigin?: boolean
		hideCode?: boolean
	}>(),
	{
		fromX: 0,
		toX: 1,
		stepSize: 0.5,
		height: 300,
		fromY: 0,
		toY: 1,
	}
)
const { code, fromX, fromY, toX, toY, stepSize, height } = toRefs(props)

//  Caluculate range between fromX to toX
const range = computed(() => Math.abs(toX.value - fromX.value))

const molang = new MoLang({})

const xVariables = [
	'query.anim_time',
	'query.life_time',
	'query.modified_distance_moved',
	'variable.particle_age',
	'variable.emitter_age',
]

const cssHeight = computed(() => `${height.value}px`)

// Calculate current SVG width
const width = ref(0)
const svgElement = ref<Element | null>(null)
const { width: windowWidth } = useWindowSize()
watch([windowWidth, svgElement], () => {
	if (svgElement.value) {
		const { width: svgWidth } = svgElement.value.getBoundingClientRect()
		width.value = svgWidth
	}
})

const getXRange = () => Math.abs(toX.value - fromX.value)
const getYRange = () => Math.abs(toY.value - fromY.value)
const getXRoot = () => Math.abs(fromX.value / getXRange()) * width.value
const getYRoot = () => Math.abs(fromY.value / getYRange()) * height.value
// Functions that translate a number into the corresponding pixel coordinate
const toPixelX = (x: number) => {
	const xScale = width.value / getXRange()
	return x * xScale + getXRoot()
}
const toPixelY = (y: number) => {
	const yScale = height.value / getYRange()
	return y * yScale + getYRoot()
}

const axes = computed(
	() =>
		`M0 ${height.value - getYRoot()} L${width.value} ${
			height.value - getYRoot()
		} M${getXRoot()} 0 L${getXRoot()} ${height.value}`
)

const graphData = computed(() => {
	let x = fromX.value
	molang.updateConfig({
		variableHandler: (varName) =>
			xVariables.includes(varName) ? x : undefined,
	})

	let valueBefore = NaN
	let path = ''

	while (x <= toX.value) {
		let value = <number>molang.executeAndCatch(userCode.value)
		if (typeof value !== 'number') value = NaN

		path += `${isNaN(value) || isNaN(valueBefore) ? 'M' : ' L'}${toPixelX(
			x
		)} ${toPixelY(value)}`

		x += stepSize.value
		valueBefore = value
	}

	return path
})

const userCode = ref(code.value)

const molangHighlight = (code: string) =>
	// @ts-ignore
	highlight(code, Prism.languages.molang, 'molang')
</script>

<template>
	<PrismEditor
		v-if="!hideCode"
		v-model="userCode"
		class="editor px-4 py-2 rounded-md border border-true-gray-200 dark:border-true-gray-600"
		:highlight="molangHighlight"
	/>
	<svg
		ref="svgElement"
		class="rounded-md border border-true-gray-200 dark:border-true-gray-600 my-2"
	>
		<path
			class="axes stroke-true-gray-200 dark:stroke-true-gray-600"
			:d="axes"
		/>

		<path
			class="graph"
			transform="scale(1, -1)"
			transform-origin="center"
			:d="graphData"
		/>
	</svg>
</template>

<style scoped>
.editor {
	font-size: 14px;
	line-height: 1.5;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace;
	background-color: rgba(23, 23, 23, var(--tw-bg-opacity));
	color: white;
}

svg {
	width: 100%;
	height: v-bind(cssHeight);
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
