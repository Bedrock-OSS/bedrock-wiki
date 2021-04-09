<template>
    <iframe 
        width="560" 
        height="315" 
        :src="`https://www.youtube.com/embed/${id}`" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        class="my-6"
    />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	id: string
}>()
</script>