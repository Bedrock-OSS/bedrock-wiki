<!--Volar complains here but everything is working fine-->
<template>
	<a
		class="item flex flex-nowrap items-center px-2 rounded-md"
		v-bind="linkProps"
		@click="onNavigation"
	>
		<span v-if="props.item.prefix != null" class="font-bold">{{
			props.item.prefix
		}}</span>

		<div class="text-sm">{{ props.item.text }}</div>
		<ExternalIcon v-if="isExternal" />

		<span class="ml-auto space-x-2" v-if="!!props.item.tags?.length">
			<NavLinkTag v-for="tag in props.item.tags" :tag="tag" />
		</span>
	</a>
</template>

<script setup lang="ts">
import NavLinkTag from './NavLinkTag.vue'

import ExternalIcon from '../Icons/ExternalIcon.vue'
import GuideIcon from '../Icons/GuideIcon.vue'
import WarningIcon from '../Icons/WarningIcon.vue'
import RecipeIcon from '../Icons/RecipeIcon.vue'
import ChemIcon from '../Icons/ChemIcon.vue'

import { toRefs, watchEffect } from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'
import { useIsMobile } from '../../Composables/isMobile'
import { useSidebarState } from '../../Composables/sidebar'

const emit = defineEmits(['change'])

const props = defineProps<{
	item: {
		text: string
		link: string
		tags?: Array<string>
		prefix?: string
	}
}>()
const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)

const { isMobile } = useIsMobile()
const { toggle } = useSidebarState()
function onNavigation() {
	if (isMobile.value) {
		toggle()
	}
}

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
