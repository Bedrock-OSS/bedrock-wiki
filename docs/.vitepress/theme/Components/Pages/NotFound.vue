<template>
	<div class="notfound max-w-screen-md mx-auto">
		<div class="flex flex-col mx-auto items-center">
			<h1 class="!block">404 - Page not found!</h1>
			<p>Don't type <code>/spawnpoint</code> here.</p>
			<img src="/assets/images/misc/dead_bush.png" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { onMounted } from 'vue'

const { site } = useData()
const router = useRouter()

const URL_MAP: Record<string, string> = {
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
	'concepts/render-controller': 'visuals/render-controller',
	'concepts/math-based-animations': 'visuals/math-based-animations',

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

	'scripting/saving_loading': 'scripting/saving-loading',

	'troubleshooting/entities': 'entities/troubleshooting-entities',
	'troubleshooting/items': 'items/troubleshooting-items',

	'tutorials/beginner-commands': 'commands/commands-intro',
	'tutorials/block-texture-variation': 'blocks/block-texture-variation',
	'tutorials/boat-entities': 'entities/boat-entities',
	'tutorials/cancelling-death-animation':
		'entities/cancelling-death-animation',
	'tutorials/controlling-flying-entities': 'entities/flying-entities',
	'tutorials/craftable-spawneggs': 'loot/craftable-spawneggs',
	'tutorials/custom-armor': 'entities/custom-armor',
	'tutorials/item-models': 'items/3d-items',
	'tutorials/disabling-particles': 'visuals/disabling-particles',
	'tutorials/disabling-team-damage': 'entities/disabling-team-damage',
	'tutorials/egg-drops': 'loot/egg-drops',
	'tutorials/entity-commands': 'commands/animation-controllers',
	'tutorials/entity-events': 'entities/entity-events',
	'tutorials/entity-holds-item': 'entities/entity-holds-item',
	'tutorials/fake_blocks': 'blocks/fake-blocks',
	'tutorials/invulnerable-entities': 'entities/invulnerable-entities',
	'tutorials/npc-dialogs': 'entities/npc-dialogs',
	'tutorials/pathfinding-entities': 'entities/pathfinding-entities',
	'tutorials/player-geometry': 'visuals/player-geometry',
	'tutorials/remove-shadows': 'visuals/remove-shadows',
	'tutorials/respawn-commands': 'commands/respawn-commands',
	'tutorials/retexturing-spawn-eggs': 'visuals/retexturing-spawn-eggs',
	'tutorials/solid-entities': 'entities/solid-entities',
	'tutorials/spawning-items': 'items/spawning-items',
	'tutorials/text-localization': 'concepts/text-localization',
	'tutorials/timers': 'entities/timers',

	'vanilla-usage/items': 'items/vanilla-usage-items',
	'vanilla-usage/components': 'entities/vanilla-usage-components',
	'vanilla-usage/spawn-rules': 'entities/vanilla-usage-spawn-rules',

	'world-generation/randomized-structure-loot':
		'loot/randomized-structure-loot',
	'visuals/render-controllers': 'visuals/entity-visuals-intro',
	'items/item-categories': 'items/creative-categories',
}
onMounted(() => {
	let path = document.location.pathname
		.substr(site.value.base.length)
		.replace('.html', '')

	if (URL_MAP[path]) {
		router.go(URL_MAP[path])
	}
})
</script>
