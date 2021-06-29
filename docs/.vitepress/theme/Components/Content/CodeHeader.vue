<template>
	<div ref="codeHeader" class="tile flex mt-8 p-2 pb-1.5 overflow-auto">
		<span class="flex">
			<FileIcon class="mr-2" />
			<span class="opacity-50"><slot /></span>
		</span>

		<span @click="copyCodeSnippet" class="flex ml-auto cursor-pointer">
			<span class="opacity-50 mr-1" v-if="!isMobile">Copy</span>

			<CopyIcon class="inline-block opacity-60" title="Copy Snippet" />
		</span>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileIcon from '../Icons/FileIcon.vue'
import CopyIcon from '../Icons/CopyIcon.vue'
import { useIsMobile } from '../../Composables/isMobile'

const codeHeader = ref<HTMLDivElement | null>(null)
const { isMobile } = useIsMobile()

function copyCodeSnippet() {
	if (!codeHeader.value || !codeHeader.value.nextSibling) return

	// Find the next code block & get the code from it
	const codeBlock = codeHeader.value.nextSibling
	const preElement = Array.from(codeBlock.childNodes).find(
		(el) => el instanceof HTMLPreElement
	)
	const codeSnippetToCopy = preElement?.textContent

	if (!codeSnippetToCopy) return

	if (navigator.clipboard) {
		navigator.clipboard.writeText(codeSnippetToCopy)
	} else {
		// Browser doesn't support clipboard API
		const textArea = document.createElement('textarea')
		textArea.value = codeSnippetToCopy
		textArea.style.top = '0'
		textArea.style.left = '0'
		textArea.style.position = 'fixed'
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		document.execCommand('copy')
		document.body.removeChild(textArea)
	}
}
</script>
<style scoped>
.icon {
	fill: white;
}
</style>
