<template>
	<div class="border-2 p-2 m-2 rounded-md border-gray">
		<FolderViewChild
			:depth="-1"
			:name="'.'"
			:nodes="getData()"
		/>
	</div>
</template>

<script lang="js">
import FolderViewChild from './FolderViewChild.vue'

export default {
	name: 'FolderView',
	components: {
		FolderViewChild
	},
	props: {
		paths: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		fillDict(data, path) {
			let first = path.shift()

			// Create if needed
			if (!(first in data)) {
				data[first] = {
					name: first,
					children: {},
				}
			}

			// If there are more paths, recurse
			if (path.length > 0) {
				this.fillDict(data[first]['children'], path)
			}
		},
		getData() {
			let data = {
				name: 'root',
				children: {},
			}

			this.paths.forEach(path => {
				path = path.split('/')
				this.fillDict(data['children'], path)
			})

			return data
		}
	},
}
</script>
