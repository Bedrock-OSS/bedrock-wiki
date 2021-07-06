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
			@click.prevent.exact="emit('click')"
			class="list-none outline-none"
		>
			<span>{{ props.item.text }}</span>

			<ChevronLeftIcon />
		</summary>

		<div>
			<NavLink
				v-for="item in props.item.children"
				@change="(val) => (val ? (emit('active')) : undefined)"
				class="block"
				:key="item.link"
				:item="item"
			/>
		</div>
	</details>
</template>

<script setup lang="ts">
import type { INavCategory } from './Structure'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
import NavLink from '../Navigation/NavLink.vue'
import { defineEmit, defineProps, ref } from 'vue'

const props = defineProps<{
	item: INavCategory
	open: boolean
}>()

const emit = defineEmit(['click', 'active'])
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
