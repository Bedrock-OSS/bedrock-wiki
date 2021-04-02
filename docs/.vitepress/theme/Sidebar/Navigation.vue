<template>
	<template v-for="item in items">
		<NavLink
			class="block"
			v-if="item.link !== undefined"
			:key="item.link"
			:item="item"
		/>

		<div v-else class="pl-4">
			{{ item.text }}
			<Navigation :items="item.children" />
		</div>
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
