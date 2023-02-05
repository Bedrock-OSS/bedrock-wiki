<template>
	<details
		class="
			navigation-category
			p-2
			pl-4
			cursor-pointer
			border-b-1 border-true-gray-200
			dark:border-true-gray-600
		"
		:open="open"
	>
		<summary
			class="list-none outline-none"
			@click.prevent.exact="emit('click')"
		>
			<span>{{ props.item.text }}</span>

			<ChevronLeftIcon />
		</summary>

		<div>
			<NavLink
				v-for="i in props.item.children"
				:key="i.link"
				class="block"
				:item="i"
				@change="(val) => (val ? emit('active') : undefined)"
			/>
		</div>
	</details>
</template>

<script setup lang="ts">
import type { INavCategory } from './Structure'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
import NavLink from '../Navigation/NavLink.vue'

const props = defineProps<{
	item: INavCategory
	open: boolean
}>()

const emit = defineEmits(['click', 'active'])
</script>

<style scoped>
.navigation-category summary {
	list-style: none;
}
.navigation-category summary::-webkit-details-marker {
	display: none;
}
.navigation-category summary svg {
	@apply transition-transform;
	float: right;
}
.navigation-category[open] summary svg {
	transform: rotate(-90deg);
}
</style>
