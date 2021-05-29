<!-- https://github.com/tpkn/vue-spolier -->
<!-- MIT -->

<template>
	<div
		:class="['vue-spoiler shadow rounded-md', { expanded: expanded }]"
		:style="{ width }"
	>
		<div
			@click="toggleExpand"
			v-if="showTitle"
			class="title p-5 rounded-md"
		>
			<div v-if="!expanded">
				<div v-if="title">{{ getTitleText }}</div>
				<slot v-else name="title"></slot>
			</div>

			<div v-else>
				<div v-if="title || titleExpanded">{{ getTitleText }}</div>
				<slot v-else name="titleExpanded"></slot>
			</div>

			<ChevronLeftIcon class="arrow" />
		</div>

		<transition name="opacity" mode="out-in" appear>
			<div
				v-if="expanded"
				class="content"
				:style="{ 'max-height': height }"
			>
				<slot></slot>
			</div>
		</transition>
	</div>
</template>
<script lang="js">
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'

export default {
	name: 'VueSpoiler',
	data: () => {
		return {
			expanded: false,
			no_title: true,
		}
	},
    components: {
        ChevronLeftIcon
    },
	props: {
        color: {

        },
		expand: {
			default: () => false,
		},
		width: {
			default: () => '100%',
		},
		height: {
			default: () => 'none',
		},
		title: {
			default: () => '',
		},
		titleExpanded: {
			default: () => '',
		},
		uncollapsable: {
			default: () => false,
		},
		arrow: {
			default: () => true,
		},
	},
	computed: {
		showTitle() {
			return !this.uncollapsable || (this.uncollapsable && !this.expanded)
		},
		getTitleText() {
			let title
			if (this.expanded && this.titleExpanded) {
				title = this.titleExpanded
			} else {
				title = this.title
			}
			return title
		},
	},
	methods: {
		toggleExpand() {
			this.expanded = !this.expanded
			this.$emit('expanded', this.expanded)
		},
	},
	beforeMount() {
		this.expanded = this.expand
	},
	watch: {
		expand() {
			if (this.uncollapsable) {
				this.expanded = true
			} else {
				this.expanded = this.expand
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.vue-spoiler {
	position: relative;
	.title {
		background-color: #8bc9e2;
		position: relative;
		display: flex;
		align-items: center;

		word-break: break-word;
		cursor: pointer;
		user-select: none;
	}
	.content {
		position: relative;
		overflow-y: auto;
		word-break: break-word;
	}
	.arrow {
		@apply transition-transform;
		float: right;
	}
}
.vue-spoiler.expanded .arrow {
	transform: rotate(-90deg);
}
</style>
