<template>
	<!-- Volar complains here but everything is working fine -->
	<a class="item flex px-2" v-bind="linkProps">
		{{ props.item.text }}
		<ExternalIcon v-if="isExternal" />
	</a>
</template>

<script setup lang="ts">
import ExternalIcon from '../Icons/ExternalIcon.vue'
import { computed, defineProps, toRefs } from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'

const props = defineProps<{
	item: {
		text: string
		link: string
	}
}>()
const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
console.log(props.item.text, linkProps.value.class.active)
</script>

<style scoped>
.item .icon {
	width: 16px;
	margin-left: 4px;
}
.item {
	@apply transition-colors;
}
.item:hover,
.item.active {
	@apply text-purple-600;
	@apply underline;
}
.item.external:hover {
	@apply underline;
}
</style>
