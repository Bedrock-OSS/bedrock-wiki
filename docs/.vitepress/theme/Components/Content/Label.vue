<template>
	<p :class="style" id="slot">
		{{ name }}
	</p>
</template>

<script lang="js">
import { colorFromTag } from '../../Composables/colorFromTag'

export default {
	name: 'Label',
	props: {
		name: {
			default: () => '',
		},
		color: {
			default: () => null,
		}
	},
	data() {
		return {};
	},
	computed: {
		style () {
			let color = this.color ? this.color : colorFromTag(this.name);
			return 'label rounded-lg mb-2 mt-4 py-1 px-2 inline-block uppercase ' + color;
		}
	},
	methods: {},
};
</script>
