<!--Volar complains here but everything is working fine-->
<template>
	<a
		class="item flex flex-nowrap items-center space-x-2 px-2 rounded-md"
		v-bind="linkProps"
		@click="onNavigation"
	>
		<span v-if="props.item.prefix != null" class="font-bold">{{
			props.item.prefix
		}}</span>

		<div class="flex-1 text-sm">{{ props.item.text }}</div>
		<ExternalIcon v-if="isExternal" />

		<span v-for="tag in props.item.tags">
			<p v-if="tag == 'guide'" class="green label">GUIDE</p>
			<p
				v-if="tag == 'exp' || tag == 'experimental'"
				class="orange label"
			>
				EXP
			</p>
			<p v-if="tag == 'beta'" class="red label">BETA</p>
			<p v-if="tag == 'help'" class="blue label">HELP</p>
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
import { useIsMobile } from '../../Composables/isMobile'
import { useSidebarState } from '../../Composables/sidebar'

const emit = defineEmit(['change'])

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
.label {
	@apply rounded-lg flex-initial px-1;
	font-size: 0.66rem;
	line-height: 1rem;
	font-weight: 650;
}

.dark .green {
	@apply bg-green-800;
}

.green {
	@apply bg-green-300;
}

.dark .orange {
	@apply bg-orange-800;
}

.orange {
	@apply bg-yellow-300;
}

.dark .red {
	@apply bg-red-900;
}

.red {
	@apply bg-red-300;
}

.dark .blue {
	@apply bg-blue-900;
}

.blue {
	@apply bg-blue-300;
}

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
