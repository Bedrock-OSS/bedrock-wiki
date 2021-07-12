<template>
	<div class="lg:hidden px-2 mt-3 mb-4">
		<NavLink v-for="item in navLinks" :item="item" :key="item.link" />
	</div>
	<div class="border-t">
		<template v-for="(item, i) in props.items">
			<Category
				:item="item"
				:open="i === active || i === open"
				@active="() => setActive(i)"
				@click="() => setOpen(i)"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import type { INavCategory } from './Structure'
import Category from './Category.vue'
import NavLink from '../Navigation/NavLink.vue'
import { defineProps, ref, computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import { useIsMobile } from '../../Composables/isMobile'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.nav)
const { isMobile } = useIsMobile()

const props = defineProps<{
	items: INavCategory[]
}>()

const active = ref<number>()
const open = ref<number>()

const setActive = (i: number) => {
	active.value = i
}

const setOpen = (i: number) => {
	if (i === open.value) {
		open.value = undefined
	} else if (i !== active.value) {
		open.value = i
	}
}
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
