<template>
	<div>
		<NavBar />
	</div>
	<div class="flex">
		<Sidebar />
		<Content />
	</div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
</script>
