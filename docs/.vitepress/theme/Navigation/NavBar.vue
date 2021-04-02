<template>
	<div class="m-4">
		<NavLink v-for="item in navLinks" :item="item" :key="item.link" />
	</div>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()
const navLinks = computed(() => site.value.themeConfig.nav)
</script>
