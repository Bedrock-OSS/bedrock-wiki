<template>
	<div class="card">
        <div class="flex justify-start items-center flex-row flex-nowrap mb-4">
            <img :src="imgLink" class="object-contain mr-5" style="max-height: 48px; image-rendering: crisp-edges;">
            <h2 style="margin: 0 !important;">{{ title }}</h2>
        </div>
        <p><slot/></p>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	imgsrc: string,
    title: string
}>();
const imgLink = import.meta.env.BASE_URL + props.imgsrc;
</script>