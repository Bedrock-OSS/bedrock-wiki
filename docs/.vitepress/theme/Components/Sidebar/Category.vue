<template>
	<details
		class="navigation-category p-2 pl-4 cursor-pointer border-b-1 border-true-gray-200 dark:border-true-gray-600"
		:open="isOpen"
	>
		<summary
			@click.prevent.exact="isOpen = !isOpen"
			:class="{ 'list-none outline-none': true }"
		>
			<span>{{ props.item.text }}</span>

			<ChevronLeftIcon />
		</summary>

		<div>
			<NavLink
				v-for="item in props.item.children"
				@change="(val) => (val ? (isOpen = true) : undefined)"
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
import { defineProps, ref } from 'vue'

const props = defineProps<{
	item: INavCategory
}>()

const isOpen = ref(false)
</script>

<style scoped>
.navigation-category summary svg {
	@apply transition-transform;
	float: right;
}
.navigation-category[open] summary svg {
	transform: rotate(-90deg);
}
</style>
