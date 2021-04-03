<template>
	<template v-for="item in items">
		<NavLink
			class="block"
			v-if="item.link !== undefined"
			:key="item.link"
			:item="item"
		/>

		<details v-else class="cursor-pointer pl-4">
			<summary>{{ item.text }}</summary>
			<Navigation :items="item.children" />
		</details>
	</template>
</template>

<script setup lang="ts">
import NavLink from '../Navigation/NavLink.vue'
import { defineProps } from 'vue'

interface INavElement {
	text: string
	link?: string
	children: INavElement[]
}

const props = defineProps<{
	items: INavElement[]
}>()
</script>
