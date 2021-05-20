<template>
	<NavBar />
	<Sidebar />

	<main>
		<Content
			:class="{
				'm-8': true,
				'md:ml-80': isVisible,
				'mt-0': true,
				'min-h-screen': true,
			}"
		/>
		<!--    <Contributors/>-->
	</main>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'
import Contributors from './Content/Contributors.vue'
const { isVisible } = useSidebarState()
</script>

<style>
details summary::-webkit-details-marker {
	display: none;
}
</style>
