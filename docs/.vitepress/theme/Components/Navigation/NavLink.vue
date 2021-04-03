<template>
	<!-- Volar complains here but everything is working fine -->
	<a
		:class="{
			item: true,
			flex: true,
			'px-2': true,
			'rounded-lg': true,
		}"
		v-bind="linkProps"
	>
		{{ props.item.text }}
		<ExternalIcon v-if="isExternal" />
	</a>
</template>

<script setup lang="ts">
import ExternalIcon from '../Icons/ExternalIcon.vue'
import { defineEmit, defineProps, toRefs, watchEffect } from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'

const emit = defineEmit(['change'])

const props = defineProps<{
	item: {
		text: string
		link: string
	}
}>()
const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
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
