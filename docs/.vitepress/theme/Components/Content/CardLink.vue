<template>
	<div class="card">
        <div style="display: flex; justify-content: flex-start; align-items: center; flex-flow: row nowrap; margin-bottom: 10px;">
            <img :src="props.imgsrc" style="object-fit: contain;  max-height: 48px; margin: 0 20px 0 0; image-rendering: crisp-edges;">
            <h2 style="margin: 0 !important;"><a :href="props.link">{{ title }}</a></h2>
        </div>
        <p><slot/></p>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	imgsrc: URL,
	link: string,
    title: string
}>()
</script>