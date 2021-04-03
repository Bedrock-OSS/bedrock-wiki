<template>
	<NavBar />
	<Sidebar />
	<Content
		:class="{
			'ml-80': isVisible,
			'ml-8': !isVisible,
			'mr-14': true,
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
