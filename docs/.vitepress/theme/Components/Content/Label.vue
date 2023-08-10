<template>
	<p
		id="slot"
		:class="style"
	>
		{{ name }}
	</p>
</template>

<script lang="js">
import { colorFromTag } from '../../Composables/colorFromTag'

export default {
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Label',
	props: {
		name: {
			type: String,
			default: () => '',
		},
		color: {
			type: undefined,
			default: () => null,
		}
	},
	data() {
		return {}
	},
	computed: {
		style () {
			let color = this.color ? this.color : colorFromTag(this.name)
			return 'label rounded-lg mb-2 mt-4 py-1 mr-2 px-2 inline-block uppercase ' + color
		}
	},
	methods: {},
}
</script>
