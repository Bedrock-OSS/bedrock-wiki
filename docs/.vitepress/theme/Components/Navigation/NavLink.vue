<!--Volar complains here but everything is working fine-->
<template>
	<a
		class="item flex flex-nowrap items-center space-x-2 px-2 rounded-md"
		v-bind="linkProps"
		@click="onNavigation"
	>
		<span v-if="props.item.number != null" class="font-bold">{{
			props.item.number
		}}</span>

		<div class="flex-1">{{ props.item.text }}</div>
		<ExternalIcon v-if="isExternal" />

		<span v-for="tag in props.item.tags">
			<GuideIcon v-if="tag == 'guide'" />
			<RecipeIcon v-if="tag == 'recipe' || tag == 'short'" />
			<ChemIcon
				v-if="
					tag == 'experimental' ||
					tag == 'beta' ||
					tag == 'warning' ||
					tag == 'exp'
				"
			/>
		</span>
	</a>
</template>

<script setup lang="ts">
import ExternalIcon from '../Icons/ExternalIcon.vue'
import GuideIcon from '../Icons/GuideIcon.vue'
import WarningIcon from '../Icons/WarningIcon.vue'
import RecipeIcon from '../Icons/RecipeIcon.vue'
import ChemIcon from '../Icons/ChemIcon.vue'

import {
	computed,
	defineEmit,
	defineProps,
	reactive,
	toRefs,
	watchEffect,
} from 'vue'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'
import type { Badge } from '../Sidebar/Structure'
import { useBadgeColor } from '../../Composables/useBadgeColor'
import { useIsMobile } from '../../Composables/isMobile'
import { useSidebarState } from '../../Composables/sidebar'

const badgeClass = {
	'text-xs': true,
	'pl-2': true,
	'pr-2': true,
	'rounded-lg': true,
	'flex-initial': true,
	'py-1': true,
}

const emit = defineEmit(['change'])

const props = defineProps<{
	item: {
		text: string
		link: string
		badge?: Badge
		tags?: Array<string>
		number?: string
	}
}>()
const propsRefs = toRefs(props)
const { color } = toRefs(props.item.badge ?? reactive({ color: 'default' }))

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)

const badgeColorClass = computed(() => {
	if (props.item.badge == null) {
		return {}
	} else {
		return useBadgeColor(color).value
	}
})

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
