<template>
	<div class="homepage max-w-screen-md xl:max-w-screen-lg mx-auto">
		<div
			class="hidden md:flex justify-start flex-row flex-nowrap my-10 py-0 w-full"
		>
			<div class="flex justify-center flex-col flex-nowrap">
				<img
					src="/assets/images/homepage/wikilogo.png"
					class="object-contain"
					style="max-height: 116px; min-width: 72px"
				>
			</div>
			<div class="ml-4 flex justify-center flex-col flex-nowrap">
				<h1 class="mt-0">
					Bedrock Wiki
				</h1>
				<p>
					This wiki is a knowledge-sharing website for Technical
					Bedrock, containing documentation, tutorials, and general
					how-to information.
				</p>
			</div>
		</div>
		<div
			class="flex md:hidden justify-start flex-col flex-nowrap my-6 py-0 w-full"
		>
			<div class="flex justify-start items-center flex-row flex-nowrap">
				<img
					src="/assets/images/homepage/wikilogo.png"
					class="object-contain"
					style="height: 64px"
				>
				<h1 class="!my-0 ml-4">
					Bedrock Wiki
				</h1>
			</div>
			<div class="mt-4 flex justify-center flex-col flex-nowrap">
				<p>
					This wiki is a knowledge-sharing website for Technical
					Bedrock, containing documentation, tutorials, and general
					how-to information.
				</p>
			</div>
		</div>
		<div class="m-0 p-0 pb-4 w-full">
			<div
				class="pb-5">
				<CardLink
					title="Hacktoberfest!"
					imgsrc-light="assets/images/homepage/hfest_light.png"
					imgsrc-dark="assets/images/homepage/hfest_dark.png"
					link="hacktoberfest.html"
				>
					Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute to open source throughout October.<br>
					The Bedrock Community stands strong behind Open Source, and we need your help!<br>
					Check out <a href="hacktoberfest.html">how to contribute</a> and make the difference becoming a part of our community.
				</CardLink>
			</div>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-0 p-0"
			>
				<CardLink
					title="Beginner's Guide"
					imgsrc-light="assets/images/homepage/crafting_table_0.png"
					link="guide/introduction"
				>
					Step-by-step tutorials, intended as your first-contact with
					addons.
				</CardLink>
				<CardLink
					title="Discord"
					imgsrc-light="assets/images/homepage/discord.png"
					link="/discord"
				>
					Join the discord to learn about addons, and seek help from
					other addon creators.
				</CardLink>
				<CardLink
					title="Commands"
					imgsrc-light="assets/images/homepage/commands.png"
					link="/commands/intro-to-command-blocks"
				>
					<a href="commands/intro-to-command-blocks">Beginner's Guide</a>: Learn about command block basics.<br><br>
					<a href="commands/mcfunctions">Functions</a>: Get started with Function Packs, a faster more powerful way to code commands!
				</CardLink>
				<CardLink
					title="Entities"
					imgsrc-light="assets/images/homepage/spawn_egg_30.png"
					link="entities/entity-intro-bp"
				>
					<a href="entities/entity-intro-bp">Beginner's Guide</a>:
					Learn about the structure of Behavior Pack Entity files.<br><br>
					<a href="entities/troubleshooting-entities">Troubleshooting</a>: Learn to troubleshoot common issues when creating
					entities, such as invisible textures.
				</CardLink>
				<CardLink
					title="Items"
					imgsrc-light="assets/images/homepage/iron_pickaxe_0.png"
					link="items/items-intro"
				>
					<a href="items/items-intro">Beginner's Guide</a>: A "Hello
					world" guide in creating your first item.<br><br>
					<a href="items/items-16">Items 1.16+</a>: Learn about the
					new experimental items.
				</CardLink>
				<CardLink
					title="Blocks"
					imgsrc-light="assets/images/homepage/diamond_ore_0.png"
					link="blocks/blocks-intro"
				>
					<a href="blocks/blocks-intro">Beginner's Guide</a>: A "Hello
					world" guide in making blocks.<br><br>
					<a href="blocks/blocks-stable">Block Features</a>: Learn about the
					capabilities of custom blocks.
				</CardLink>
				<CardLink
					title="Scripting"
					imgsrc-light="assets/images/homepage/scripting.png"
					link="scripting/starting-scripts"
				>
					<a href="scripting/starting-scripts">Beginner's Guide</a>: Learn the basics of the experimental scripting-API<br><br>
					<a href="scripting/custom-command">Custom commands</a>:
					Learn how to make your own custom commands!
				</CardLink>
				<CardLink
					title="World Generation"
					imgsrc-light="assets/images/homepage/buildplate.png"
					link="world-generation/world-generation-intro"
				>
					<a href="world-generation/world-generation-intro">Beginner's Guide</a>: Learn about creation of custom biomes, structures, ores
					and more.<br><br>
				</CardLink>
				<CardLink
					title="Contribute"
					imgsrc-light="assets/images/homepage/writable_book_0.png"
					link="contribute"
				>
					This wiki is built and maintained by a community! If you
					feel you can improve the wiki, or have questions or
					feedback, please get in touch.
				</CardLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.dark .homepage * {
	border-color: rgb(93, 95, 97);
}
</style>
