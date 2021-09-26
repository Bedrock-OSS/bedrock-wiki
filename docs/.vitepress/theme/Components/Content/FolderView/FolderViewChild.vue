<template>
	<div>
		<div class="flex">
			<div
				@click="toggleChildren"
				:style="indent"
				:class="{ collapsed: collapsed }"
			>
				{{ getDisplay() }}
			</div>
		</div>

		<div :class="{ hidden: collapsed }">
			<FolderViewChild
				v-for="node in getNodes()"
				:depth="depth + 1"
				:nodes="node"
				:name="node.name"
			>
			</FolderViewChild>
		</div>
	</div>
</template>

<style>
.collapsed {
	opacity: 0.5;
	font-style: italic;
}
.hidden {
	display: none;
}
</style>

<script lang="js">

export default {
	name: 'FolderViewChild',
	props: {
		nodes: {
			default: () => {},
		},
		depth: {
			default: () => 0
		},
		name : {
			default: () => '???',
		}
	},
	data() {
		return { collapsed: false };
	},
	components: {
	},
	computed: {
		indent() {
			return { transform: `translate(${this.depth * 30}px)` }
		}
	},
	methods: {

		toggleChildren() {
			if (this.isFolder()) {
				this.collapsed = !this.collapsed;
			}
		},
		getDisplay() {
			if (this.depth === -1) {
				return ""
			}

			return this.getIcon(this.name) + this.getName(this.name)
		},
		isFolder() {
			return Object.keys(this.nodes.children).length > 0
		},
		getNodes() {
      return Object.values(this.nodes.children);
		},
		getIcon(path) {
			if (this.isFolder())
			{
				return '📁'
			}

			let type = path.split(".").pop()

			if (type === 'js' || type === 'json' || type === 'mcfunction') {
				return '📝'
			} else if (type === 'mcstructure') {
				return '💾'
			} else if (type === 'png' || type === 'jpg' || type === 'jpeg') {
				return '🖼️'
			} else if (type === 'ogg' || type === 'wav' || type === 'mp4' || type === 'fsb') {
				return '🔊'
			} else if (type === 'lang') {
				return '🈵'
			} else {
				return '📁'
			}
		},
		getName(path) {
			return path.split('/')[0];
		}
	},
};
</script>
