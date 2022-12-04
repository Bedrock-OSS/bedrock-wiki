<template>
	<details>
		<summary>{{ title }}</summary>
		<div class="p-4">
			<slot />
		</div>
	</details>
</template>

<script lang="js">
import ChevronLeftIcon from '../Icons/ChevronLeftIcon.vue'

export default {
	name: 'VueSpoiler',
	components: {
		ChevronLeftIcon
	},
	props: {
		title: {
			type: String,
			default: () => '',
		}
	},
	data: () => {
		return {
			expanded: false,
			no_title: true,
		}
	}
}
</script>
<style lang="scss" scoped>
details {
	@apply rounded m-1 bg-true-gray-100 border-2 border-gray-300;
	word-break:break-all;
}

summary {
	@apply rounded p-4 bg-true-gray-200;

}

.dark details {
	@apply bg-true-gray-800  border-gray-700;
}

.dark summary {
	@apply bg-true-gray-900;
}
</style>
