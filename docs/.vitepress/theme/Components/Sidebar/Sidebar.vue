<template>
	<div
		class="float-left fixed mt-14 pb-14 pt-1 top-0 h-screen w-72 border-r-1 border-gray-200 select-none overflow-scroll"
	>
		<Navigation :items="navLinks" />
	</div>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import { computed, watch } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.sidebar['/'])
</script>
