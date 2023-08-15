<!--Volar complains here but everything is working fine-->
<template>
	<a
		class="item flex flex-nowrap items-center px-2 rounded-md"
		:class="[{ section: props.item.section }, props.item.color]"
		v-bind="linkProps"
		@click="onNavigation"
	>
		<span
			v-if="props.item.prefix != null"
			class="font-bold pr-2"
		>{{
			props.item.prefix
		}}</span>

		<div class="text-sm">{{ props.item.text }}</div>
		<ExternalIcon v-if="isExternal" />

    <NavLinkTag
      v-if="!!props.item.tags?.length"
      v-for="(tag, i) in props.item.tags"
      :key="i"
      :tag="tag"
    />
	</a>
</template>

<script setup lang="ts">
import NavLinkTag from './NavLinkTag.vue'

import ExternalIcon from '../Icons/ExternalIcon.vue'

import { toRefs, watchEffect } from 'vue'
import { useNavLink } from '../../Composables/navLink'
import { useIsMobile } from '../../Composables/isMobile'
import { useSidebarState } from '../../Composables/sidebar'


const emit = defineEmits(['change'])

const props = defineProps<{
	item: {
		text: string
		link: string
		section: boolean
		color: string
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
	@apply transition-colors pl-2 pr-1 py-1 m-1;
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

.section {
	@apply pointer-events-none font-bold opacity-80 rounded-md p-0 pl-1 m-2;
}
</style>
