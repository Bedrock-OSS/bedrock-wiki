<template>
	<aside
		ref="sidebarElement"
		class="
			sidebar
			float-left
			fixed
			mt-14
			pb-14
			z-10
			top-0
			w-72
			border-r-1 border-gray-200
			dark:border-true-gray-600
			select-none
			overflow-auto
			transform
			transition
			md:transition-none
			transition-transform
			duration-150
			ease-in-out
		"
		:style="{ height: 'calc(100% - 57px)' }"
		:class="{
			'-translate-x-full': !isVisible,
			'translate-x-0': isVisible,
		}"
	>
		<Navigation :items="navLinks" />
	</aside>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { useSidebarState } from '../../Composables/sidebar'

const sidebarElement = ref<HTMLElement | null>(null)
const { isVisible } = useSidebarState()
const { site } = useData()
const navLinks = computed(() => site.value.themeConfig.sidebar['/'])
</script>
