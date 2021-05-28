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
			class="title p-5 rounded-md font-bold"
		>
			<div v-if="!expanded">
				<div v-if="title">{{ getTitleText }}</div>
				<slot v-else name="title"></slot>
			</div>

			<div v-else>
				<div v-if="title || titleExpanded">{{ getTitleText }}</div>
				<slot v-else name="titleExpanded"></slot>
			</div>

			<ChevronLeftIcon />
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
<script lang="ts">
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'

export default {
	name: 'VueSpoiler',
	data: () => {
		return {
			expanded: false,
			no_title: true,
		}
	},
	props: {
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
		background-color: #ddfbdd;
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
		width: 25px;
		height: 25px;
		padding: 10px 0;
		flex-shrink: 0;
		background-image: url('data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjM1cHgiIGhlaWdodD0iNzBweCIgdmlld0JveD0iMCAwIDM1IDcwIj4KPGRlZnM+CjxwYXRoIGlkPSJMYXllcjBfMF9NRU1CRVJfMF9NRU1CRVJfMF8xX1NUUk9LRVMiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgZmlsbD0ibm9uZSIgZD0iCk0gOC4wNSAxNS43CkwgMTcuMzUgMjQuMTUKUSAxOC4xNSAyNC41NSAxOC42IDI0LjE1CkwgMjcuOTUgMTUuNyIvPgoKPHBhdGggaWQ9IkxheWVyMF8xX01FTUJFUl8wX01FTUJFUl8wXzFfU1RST0tFUyIgc3Ryb2tlPSIjMjAyMDIwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBmaWxsPSJub25lIiBkPSIKTSAyNy44NSA1OS4zCkwgMTguNiA1MC45NQpRIDE3LjggNTAuNSAxNy4zNSA1MC45NQpMIDguMDUgNTkuMyIvPgo8L2RlZnM+Cgo8ZyB0cmFuc2Zvcm09Im1hdHJpeCggMSwgMCwgMCwgMSwgMCwzMS45KSAiPgo8dXNlIHhsaW5rOmhyZWY9IiNMYXllcjBfMF9NRU1CRVJfMF9NRU1CRVJfMF8xX1NUUk9LRVMiLz4KPC9nPgoKPGcgdHJhbnNmb3JtPSJtYXRyaXgoIDEsIDAsIDAsIDEsIDAuMSwtMzguMSkgIj4KPHVzZSB4bGluazpocmVmPSIjTGF5ZXIwXzFfTUVNQkVSXzBfTUVNQkVSXzBfMV9TVFJPS0VTIi8+CjwvZz4KPC9zdmc+Cg==');
		/* background-image: url('arrow.svg'); */
		/* background-image: url('arrow-close.svg'); */
		background-position: 50% 100%;
		background-repeat: no-repeat;
		background-size: 100%;
		transition: background-position 0.2s cubic-bezier(0.49, 0.265, 0.45, 1);
	}
}
.vue-spoiler.expanded .arrow {
	background-position: 50% 0;
}

/* Expand animation */
.opacity-enter-active {
	transition: opacity 0.2s ease-out;
}
.opacity-leave-active {
	transition: 0;
}
.opacity-enter,
.opacity-leave-to {
	opacity: 0;
}
</style>
