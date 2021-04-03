<template>
	<div>
		<template v-for="item in props.items">
			<Category :item="item" />
		</template>
	</div>
</template>

<script setup lang="ts">
import type { INavCategory } from './Structure'
import Category from './Category.vue'
import { defineProps, ref } from 'vue'

const props = defineProps<{
	items: INavCategory[]
}>()
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
