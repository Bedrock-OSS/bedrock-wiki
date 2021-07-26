<template>
	<div class="homepage max-w-screen-md mx-auto">
		<h1>Contributions are welcome!</h1>

		<div class="my-5 flex sm:justify-around">
			<BButton
				class="max-w-sm"
				color="blue"
				link="https://github.com/Bedrock-OSS/bedrock-wiki"
				>Bedrock Wiki GitHub</BButton
			>
		</div>

		<p>
			If you are familiar with GitHub, the Wiki accepts pull requests.
			Push your changes to the <code>wiki</code> branch.<br />
			If you aren't comfortable with Git, you can submit your article via
			<a href="https://discord.gg/XjV87YN">Discord</a> instead.
		</p>

		<p class="text-xl font-bold">
			All articles must follow the
			<a href="meta/style-guide">Style Guide</a>!
		</p>

		<h2>Guide Rules:</h2>
		<ul>
			<li>
				All articles must be relevant in the currently latest stable
				version. <b>No Beta-relying subguides!</b>
			</li>
			<li>
				Before a new subguide is added, a potentially better place for
				it on the Wiki should be discussed.
			</li>
		</ul>
	</div>
</template>

<style scoped>
.btn {
	@apply text-lg w-full py-4;
}
</style>
