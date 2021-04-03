<template>
	<select name="theme" v-model="themeId">
		<option value="light">Light</option>
		<option value="dark">Dark</option>
		<option value="system">System</option>
	</select>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { themeId } from '../../Composables/theme'
</script>
