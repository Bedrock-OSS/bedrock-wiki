<template>
	<template v-for="item in props.items">
		<NavLink
			class="block"
			v-if="item.link !== undefined"
			:key="item.link"
			:item="item"
		/>

		<details
			v-else
			class="navigation-category cursor-pointer p-2 pl-4 border-b-1 border-true-gray-200 dark:border-true-gray-600"
		>
			<summary class="list-none">
				{{ item.text }}
				<ChevronLeftIcon />
			</summary>
			<Navigation :items="item.children" />
		</details>
	</template>
</template>

<script setup lang="ts">
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'
import NavLink from '../Navigation/NavLink.vue'
import { defineProps } from 'vue'

interface INavElement {
	text: string
	link: string
	children?: INavElement[]
}

const props = defineProps<{
	items: INavElement[]
}>()
</script>

<style scoped>
.navigation-category summary svg {
	float: right;
	transition: all 0.1s ease-in-out;
}
.navigation-category[open] summary svg {
	transform: rotate(-90deg);
}
</style>
