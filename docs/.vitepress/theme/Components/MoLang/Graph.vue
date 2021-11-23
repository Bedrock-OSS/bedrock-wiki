<script setup lang="ts">
import { toRefs, computed, ref, watch, ComponentInternalInstance } from 'vue'
import { MoLang } from 'molang'
import { useWindowSize } from '@vueuse/core'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight } from 'prismjs'
import 'molangjs/syntax/molang-prism-syntax'

const props = withDefaults(
	defineProps<{
		code: string
		range?: number
		stepSize?: number
		height?: number
		useCenteredOrigin?: boolean
		hideCode?: boolean
	}>(),
	{
		range: 100,
		stepSize: 0.5,
		height: 300,
		useCenteredOrigin: true,
	}
)
const { code, range, stepSize, height, useCenteredOrigin } = toRefs(props)

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

const axes = computed(() =>
	useCenteredOrigin.value
		? `M0 ${height.value / 2} L${width.value} ${height.value / 2} M${
				width.value / 2
		  } 0 L${width.value / 2} ${height.value}`
		: ''
)

const graphData = computed(() => {
	let x = 0
	molang.updateConfig({
		variableHandler: (varName) =>
			xVariables.includes(varName)
				? useCenteredOrigin.value
					? x - range.value
					: x
				: undefined,
	})

	const widthFactor = width.value / (range.value * 2)
	if (widthFactor === 0) return ''
	const heightFactor = height.value / (range.value * 2)
	console.log(widthFactor, heightFactor)

	let valueBefore = NaN
	let path = ''

	while (x <= range.value * 2) {
		let value = <number>molang.executeAndCatch(userCode.value)
		if (typeof value !== 'number') value = NaN

		path += `${isNaN(value) || isNaN(valueBefore) ? 'M' : ' L'}${
			x * widthFactor
		} ${
			(value + (useCenteredOrigin.value ? range.value : 0)) * heightFactor
		}`

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
		class="
			editor
			px-4
			py-2
			rounded-md
			border border-true-gray-200
			dark:border-true-gray-600
		"
		:highlight="molangHighlight"
	/>
	<svg
		ref="svgElement"
		class="
			rounded-md
			border border-true-gray-200
			dark:border-true-gray-600
			my-2
		"
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
