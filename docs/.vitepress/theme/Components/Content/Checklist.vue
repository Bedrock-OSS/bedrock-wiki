<template>
	<label
		v-for="el, i in elementsObjects"
		:key="i"
		class="checklist-label"
	>
		<input
			type="checkbox"
			:checked="el.checked === true"
			disabled
		>
		<span
			class="checkbox"
			:class="{ 'checkbox-checked': el.checked }"
		/>
		<div
			v-if="el.checked"
			class="tickmark-checked"
		><img src="/assets/images/icons/tick.png"></div>
		<div
			v-else
			class="tickmark-unchecked"
		/>
		<span
			class="checklist-content"
		>
			{{ el.content }}
		</span>
	</label>
</template>

<script setup lang="ts">
import { useSlots, ref } from 'vue'

    interface IElement {
        checked: boolean;
        content: string;
    }

const slots = useSlots()

let elementsObjects = ref<IElement[]>([])

// get content of slots
// @ts-ignore
slots.default()[0].children.forEach(element => {
	element = element.children
	if (typeof element === 'object') {
		let new_element = ''
		// @ts-ignore
		element.forEach( e => {
			// if element uses some markdown formatting, the formatting will be added manually
			if (typeof e.type === 'symbol') {
				new_element += e.children
			}
			else {
				// if element uses exactly TWO formattings, they both will be added.
				// currently, its not possible to add more than two. I dont know if its even necessary two add this, as the only use of two formattings i am aware of is ***text***.
				if (typeof e.children === 'object') {
					new_element += `<${e.type}><${e.children[0].type}>` + e.children[0].children + `</${e.children[0].type}></${e.type}>`
				}
				else {
					new_element +=  `<${e.type}>` + e.children + `</${e.type}>`
				}
			}
		})
		element = new_element
	}
	elementsObjects.value.push({
		content: element.startsWith('[x]') ? element.replace('[x]', '') : element.replace('[ ]', ''),
		checked: element.startsWith('[x]')
	})
})
</script>

<style scoped>
    :root {
        --tickmark-color: rgb(83, 146, 224);
    }
    .checklist-label {
        display: flex;
        align-items: center;
        word-break: break-all;
    }
    .checklist-label input[type='checkbox'] {
        visibility: hidden;
    }

    .checklist-content {
        width: 100%;
    }

    .checkbox {
        width: 14px;
        height: 14px;
        margin-right: 0;
        background: rgba(39, 38, 38, 0.719);
        border: 1px solid rgb(22, 21, 21);
        border-radius: 4px;
    }

    .checkbox-checked {
        background: rgb(204, 225, 250);
    }

    .tickmark-unchecked {
        position: relative;
        display: inline-block;
        width: 1.1rem;
        height: 1rem;
        left: -1.08rem;
        bottom: 0.27rem;
    }

    .tickmark-checked {
        position: relative;
        display: inline-block;
        width: 1.1rem;
        height: 1rem;
        left: -0.9rem;
        bottom: 0.52rem;
    }

    @media screen and (max-width: 768px){
        .checklist-content {
            width: 80%;
        }
    }
</style>
