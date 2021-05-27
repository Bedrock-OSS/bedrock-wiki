<template>
	<NavBar />
	<Sidebar />

	<main
		:class="{
			'm-8': true,
			'md:ml-80': isVisible,
			'mt-0': true,
			'min-h-screen': true,
		}"
	>
		<Content />
		<Suspense>
			<template #default>
				<Contributors />
			</template>
			<template #fallback>
				<div>
					<h1>Contributors</h1>
					<span> Loading contributors... </span>
				</div>
			</template>
		</Suspense>
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
