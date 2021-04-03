<template>
	<!-- Volar complains here but everything is working fine -->
	<a
		:class="{
			item: true,
			flex: true,
			'flex-nowrap': true,
			'items-center': true,
			'space-x-2': true,
			'px-2': true,
			'rounded-lg': true,
		}"
		v-bind="linkProps"
	>
		<div :class="{ 'flex-1': true }">{{ props.item.text }}</div>
		<ExternalIcon v-if="isExternal" />
		<span v-if="props.item.badge" :class="[badgeClass, badgeColorClass]">{{ props.item.badge.text }}</span>
	</a>
</template>

<script setup lang="ts">
import ExternalIcon from '../Icons/ExternalIcon.vue'
import { computed, defineEmit, defineProps, toRefs, watchEffect } from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'
import type { Badge } from '../Sidebar/Structure'

const badgeClass = {
	"text-xs": true,
	"pl-2": true,
	"pr-2": true,
	"rounded-sm": true,
	"flex-initial": true,
	"py-1": true,
}

const emit = defineEmit(['change'])

const props = defineProps<{
	item: {
		text: string
		link: string
		badge?: Badge
	}
}>()
const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)

const badgeColorClass = computed(() => {
	if (props.item.badge == null ) {
		return {}
	} else {
		switch(props.item.badge.color) {
			case "red":
				return {
					"bg-red-500": true,
					"text-white": true,
				}
			case "blue":
				return {
					"bg-blue-300": true,
					"text-white": true,
				}
			case "yellow":
				return {
					"bg-yellow-300": true,
					"text-black": true,
				}
			case "green":
				return {
					"bg-green-300": true,
					"text-black": true,
				}
			case "guide":
				return {
					"bg-gray-900": true,
					"text-white": true,
				}
			default:
				return {
					"bg-blue-300": true,
					"text-black": true,
				}
		}
	}
})

watchEffect(() => {
	emit('change', linkProps.value.class.active)
})
</script>

<style scoped>
.item .icon {
	width: 16px;
	margin-left: 4px;
}
.item {
	@apply transition-colors px-2 py-1 m-1;
}
.item:hover,
.item.active {
	@apply bg-true-gray-200;
}

.item.active {
	@apply text-purple-800;
}
.dark .item.active {
	@apply text-purple-300;
}

.dark .item:hover,
.dark .item.active {
	@apply bg-true-gray-700;
}
</style>
