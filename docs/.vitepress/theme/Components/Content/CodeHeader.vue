<template>
	<div ref="codeHeader" class="tile flex items-center mt-8 p-2 pb-1.5 overflow-auto break-all">
		<span class="flex">
			<FileIcon class="mr-2" />
			<span class="opacity-50"><slot /></span>
		</span>

		<span @click="copyCodeSnippet" class="
			flex items-center cursor-pointer ml-auto py-px px-1
			rounded-md opacity-50 bg-true-gray-400 bg-opacity-0
			hover:opacity-75 focus:opacity-75 hover:bg-opacity-40 focus:bg-opacity-40
			active:opacity-90 active:bg-opacity-80
			">
			<span style="width: max-content;" class="pl-1 mr-1.5" v-if="!isMobile">Copy</span>

			<CopyIcon style="display: inline-block" title="Copy Snippet" />
			<CheckIcon style="display: none"/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileIcon from '../Icons/FileIcon.vue'
import CopyIcon from '../Icons/CopyIcon.vue'
import CheckIcon from '../Icons/CheckIcon.vue'
import { useIsMobile } from '../../Composables/isMobile'

const codeHeader = ref<HTMLDivElement | null>(null)
const { isMobile } = useIsMobile()

function copyCodeSnippet(event: Event) {
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

	var btnSpan = (event.currentTarget as HTMLElement).getElementsByTagName('span')[0]
	var oldText = btnSpan?.textContent
	if (oldText != null) btnSpan.textContent = 'Copied'
	var btnIcon = (event.currentTarget as HTMLElement).getElementsByTagName('svg')[0]
	btnIcon.style.setProperty('display', 'none', 'important')
	var successIcon = (event.currentTarget as HTMLElement).getElementsByTagName('svg')[1]
	successIcon.style.setProperty('display', 'inline-block', 'important')
	setTimeout(() => {
		if (oldText != null) btnSpan.textContent = oldText
		btnIcon.style.setProperty('display', 'inline-block')
		successIcon.style.setProperty('display', 'none')
	}, 2000)
}
</script>
<style scoped>
.icon {
	fill: white;
}
</style>
