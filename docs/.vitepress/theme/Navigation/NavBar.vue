<template>
	<header class="flex sticky top-0 p-4 bg-gray-50 border-b-1 border-gray-200">
		<a :href="site.base">Bedrock Wiki</a>
		<span class="flex-grow"></span>
		<NavLink v-for="item in navLinks" :item="item" :key="item.link" />
	</header>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.nav)
</script>
