<template>
	<div>
		<div class="flex">
			<div
				:style="indent"
				:class="{ collapsed: collapsed }"
				@click="toggleChildren"
			>
				{{ getDisplay() }}
			</div>
		</div>

		<div :class="{ hidden: collapsed }">
			<FolderViewChild
				v-for="(node, i) in getNodes()"
				:key="i"
				:depth="depth + 1"
				:nodes="node"
				:name="node.name"
			/>
		</div>
	</div>
</template>

<script lang="js">

export default {
	name: 'FolderViewChild',
	components: {
	},
	props: {
		// eslint-disable-next-line vue/require-prop-types
		nodes: {
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			default: () => {},
		},
		depth: {
			type: Number,
			default: () => 0
		},
		name : {
			type: String,
			default: () => '???',
		}
	},
	data() {
		return { collapsed: false }
	},
	computed: {
		indent() {
			return { transform: `translate(${this.depth * 30}px)` }
		}
	},
	methods: {

		toggleChildren() {
			if (this.isFolder()) {
				this.collapsed = !this.collapsed
			}
		},
		getDisplay() {
			if (this.depth === -1) {
				return ''
			}

			return this.getIcon(this.name) + this.getName(this.name)
		},
		isFolder() {
			return Object.keys(this.nodes.children).length > 0
		},
		getNodes() {
			return Object.values(this.nodes.children)
		},
		getIcon(path) {
			if (this.isFolder())
			{
				return '📁'
			}

			let type = path.split('.').pop()

			if (type === 'js' || type === 'json' || type === 'mcfunction') {
				return '📝'
			} else if (type === 'mcstructure') {
				return '🏛'
			} else if (type === 'png' || type === 'jpg' || type === 'jpeg') {
				return '🖼️'
			} else if (type === 'ogg' || type === 'wav' || type === 'mp3' || type === 'fsb') {
				return '🔊'
			} else if (type === 'lang') {
				return '🈵'
			} else {
				return '📁'
			}
		},
		getName(path) {
			return path.split('/')[0]
		}
	},
}
</script>

<style>
.collapsed {
	opacity: 0.5;
	font-style: italic;
}
.hidden {
	display: none;
}
</style>
