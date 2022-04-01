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
				<h1 class="mt-0">Bugrock Wiki</h1>
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
					title="Click!"
					imgsrc="assets/april/minecoin.png"
					link="april/fool-4"
				>
					Claim your Minecoins Airdop!
				</CardLink>
				<CardLink
					title="Discord"
					imgsrc="assets/images/homepage/discord.png"
					link="/discord"
				>
					Join the discord to learn about addons, and seek help from
					other addon creators.
				</CardLink>
				<CardLink
					title="Learn More!"
					imgsrc="assets/april/gear.webp"
					link="https://old-wiki.bedrock.dev//scripting/hello-world-tutorial"
				>
					New, powerful and fast engine. Learn more about M-scripting!
				</CardLink>
				<CardLink
					title="???"
					imgsrc="assets/april/what.png"
					link="/april/fool-1"
				>
					???
				</CardLink>
				<CardLink
					title="Shaders 2.0"
					imgsrc="assets/april/render_dragon.webp"
					link="/april/fool-6"
				>
					New era of shaders has came. No one believed.
				</CardLink>
				<CardLink
					title="Quintuple Ultimate Add-On v.2"
					imgsrc="assets/april/ultimate_addon.png"
					link="/april/fool-5"
				>
					⚠ You must try this addon...
				</CardLink>
				<CardLink
					title="Make a Chair"
					imgsrc="assets/april/chair.png"
					link="/april/fool-3"
				>
					What to do when you buy a chair?
				</CardLink>
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
