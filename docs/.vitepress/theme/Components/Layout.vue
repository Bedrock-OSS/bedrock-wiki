<template>
	<NavBar />
	<Sidebar />
	<Content
		:class="{
			'm-8': true,
			'ml-80': isVisible,
			'min-h-screen': true,
		}"
	/>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'

const { isVisible } = useSidebarState()
</script>
