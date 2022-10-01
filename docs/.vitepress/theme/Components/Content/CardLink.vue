<template>
	<div class="card">
        <div class="flex justify-start items-center flex-row flex-nowrap mb-4">
            <img :src="imgLink" class="object-contain mr-4 filter drop-shadow" style="max-height: 56px;">
            <h2 style="margin: 0 !important;">
                <a :href="props.link">{{ title }}</a>
            </h2>
        </div>
        <p><slot/></p>
    </div>
</template>


<script setup lang="ts">
import { useTheme } from '../../Composables/theme'

const { currentTheme } = useTheme()

const props = defineProps<{
	title: string,
	link: string,
	imgsrcLight: string,
	imgsrcDark?: string

}>();
const imgLink = import.meta.env.BASE_URL + (currentTheme.value === "dark" && props.imgsrcDark ? props.imgsrcDark : props.imgsrcLight);
</script>
