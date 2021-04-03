<template>
	<NavBar />
	<Sidebar />
	<Content
		:class="{
			'ml-96': isVisible,
			'ml-8': !isVisible,
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
