<template>
	<div class="notfound max-w-screen-md mx-auto">
		<div class="flex flex-col mx-auto items-center">
			<h1 class="!block">404 - Page not found!</h1>
			<p>Don't type <code>/spawnpoint</code> here.</p>
			<img src="/assets/images/misc/dead_bush.png" />
			<p>
				You want to create a page for the wiki? Feel free to contribute!
				<a :href="site.base + 'contribute'">Here's how.</a>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
const URL_MAP: any = {
	'documentation/biome-tags': 'world-generation/biome-tags',
	'concepts/mcfunction': 'commands/mcfunction',
	'concepts/animation-controllers':
		'animation-controllers/animation-controllers-intro',
	'concepts/biomes': 'world-generation/biomes',
	'concepts/blocks': 'blocks/blocks-intro',
	'concepts/components-events-groups': 'entities/entities-intro',
	'concepts/entity-properties': 'entities/entity-properties',
	'concepts/items': 'items/items-16',
	'concepts/json-ui': 'json-ui/json-ui-intro',
	'documentation/block-model-materials': 'blocks/block-materials',
	'documentation/block-shapes': 'blocks/block-shapes',
	'documentation/block-tags': 'blocks/block-tags',
	'documentation/dummy-components': 'entity/dummy-components',
	'documentation/emojis': 'concepts/emojis',
	'documentation/item-groups': 'items/item-groups',
	'documentation/json-ui': 'json-ui/json-ui-documentation',
	'documentation/runtime-identifier': 'entities/runtime-identifier',
	'documentation/subpacks': 'concepts/subpacks',
	'documentation/tellraw': 'commands/tellraw',
	'knowledge/bedrock-modeling': 'visuals/bedrock-modeling',
	'knowledge/jq': 'meta/jq',
	'knowledge/addon-programming': 'meta/addon-programming',
	'knowledge/entity-movement': 'entities/entity-movement',
	'knowledge/nbt_commands': 'commands/nbt-commands',
	'knowledge/addon-performance': 'meta/addon-performance',
	'knowledge/style-guide': 'meta/style-guide',
	'knowledge/useful-links': 'meta/useful-links',
	'knowledge/using-schemas': 'meta/using-schemas',
	'knowledge/version-control': 'meta/version-control',
}

let path = document.location.pathname
	.substr(site.value.base.length)
	.replace('.html', '')

if (URL_MAP[path]) {
	document.location.pathname = site.value.base + URL_MAP[path]
}
</script>
