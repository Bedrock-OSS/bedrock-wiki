<template>
	<div class="card">
        <div class="flex justify-start items-center flex-row flex-nowrap mb-2">
            <img :src="imgLink" style="object-fit: contain;  max-height: 48px; margin: 0 20px 0 0; image-rendering: crisp-edges;">
            <h2 style="margin: 0 !important;">
                <a :href="props.link">{{ title }}</a>
            </h2>
        </div>
        <p><slot/></p>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	imgsrc: URL,
	link: URL,
    title: string
}>();
const imgLink = import.meta.env.BASE_URL + props.imgsrc;
</script>
