<template>
	<div class="homepage max-w-screen-md xl:max-w-screen-lg mx-auto">
		<div
			class="
				hidden
				md:flex
				justify-start
				flex-row flex-nowrap
				my-10
				py-0
				w-full
			"
		>
			<div class="flex justify-center flex-col flex-nowrap">
				<img
					src="/assets/images/homepage/wikilogo.png"
					class="object-contain"
					style="max-height: 116px; min-width: 72px"
				/>
			</div>
			<div class="ml-4 flex justify-center flex-col flex-nowrap">
				<h1 class="mt-0">Bedrock Wiki</h1>
				<p>
					This wiki is a knowledge-sharing website for Technical
					Bedrock, containing documentation, tutorials, and general
					how-to information.
				</p>
			</div>
		</div>
		<div
			class="
				flex
				md:hidden
				justify-start
				flex-col flex-nowrap
				my-6
				py-0
				w-full
			"
		>
			<div class="flex justify-start items-center flex-row flex-nowrap">
				<img
					src="/assets/images/homepage/wikilogo.png"
					class="object-contain"
					style="height: 64px"
				/>
				<h1 class="!my-0 ml-4">Bedrock Wiki</h1>
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
				class="
					grid grid-cols-1
					lg:grid-cols-2
					xl:grid-cols-3
					gap-5
					m-0
					p-0
				"
			>
				<CardLink
					title="Beginner's Guide"
					imgsrc="assets/images/homepage/crafting_table_0.png"
					link="guide/introduction"
				>
					Step-by-step tutorials, intended as your first-contact with
					addons.
				</CardLink>
				<CardLink
					title="Legacy Wiki"
					imgsrc="assets/images/homepage/bookshelf_0.png"
					link="https://old-wiki.bedrock.dev/"
				>
					Missing something? You can continue to visit the old wiki
					here, but please be warned it will not contain any new or
					updated content.
				</CardLink>
				<CardLink
					title="Discord"
					imgsrc="assets/images/homepage/discord.webp"
					link="/discord"
				>
					Join the discord to learn about addons, and seek help from
					other addon creators.
				</CardLink>
				<Card
					title="Entities"
					imgsrc="assets/images/homepage/spawn_egg_30.png"
				>
					<a href="entities/entities-intro">Beginner's Guide</a>:
					Learn about the structure of Behavior Pack Entity files.<br /><br />
					<a href="entities/troubleshooting-entities"
						>Troubleshooting</a
					>: Learn to troubleshoot common issues when creating
					entities, such as invisible textures.
				</Card>
				<Card
					title="Items"
					imgsrc="assets/images/homepage/iron_pickaxe_0.png"
				>
					<a href="items/items-intro">Beginner's Guide</a>: A "Hello
					world" guide in creating your first item.<br /><br />
					<a href="items/items-16">Items 1.16+</a>: Learn about the
					new experimental items.
				</Card>
				<Card
					title="Blocks"
					imgsrc="assets/images/homepage/diamond_ore_0.png"
				>
					<a href="blocks/blocks-intro">Beginner's Guide</a>: A "Hello
					world" guide in making blocks.<br /><br />
					<a href="blocks/blocks-16">Blocks 1.16+</a>: Learn about the
					new experimental blocks.
				</Card>
				<Card
					title="Scripting"
					imgsrc="assets/images/homepage/lever_0.png"
				>
					<a href="scripting/scripting-intro.html">Beginner's Guide</a
					>: Learn the basics of the legacy scripting-API<br /><br />
					<a href="scripting/game-tests.html">Game Test Framework</a>:
					Learn about the new scripting-API!
				</Card>
				<Card
					title="World Generation"
					imgsrc="assets/images/homepage/buildplate.png"
				>
					<a href="world-generation/world-generation-intro">Beginner's Guide</a>: A "Intro to world generation.<br /><br />
					<a href="blocks/blocks-16">Blocks 1.16+</a>: Learn about the
					world generation.
				</Card>
				<CardLink
					title="Contribute"
					imgsrc="assets/images/homepage/writable_book_0.png"
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
