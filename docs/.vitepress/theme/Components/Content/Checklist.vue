<template>
    <label v-for="i in elementsObjects" class="checklist-label">
        <input type="checkbox" :checked="i.checked === true" disabled />
        <span
            class="checkbox"
            :class="{ 'checkbox-checked': i.checked }"
        ></span>
        <div v-if="i.checked" class="tickmark-checked"><img src="/assets/images/icons/tick.png" /></div>
        <div v-else class="tickmark-unchecked"></div>
        {{ i.content }}
    </label>
</template>

<script setup lang="ts">
    import { useSlots, ref } from 'vue';

    interface IElement {
        checked: Boolean;
        content: String;
    }

    const slots = useSlots();

    let elementsObjects = ref<IElement[]>([]);

    // get content of slots
    // @ts-ignore
    slots.default()[0].children.forEach(element => {
        element = element.children
        elementsObjects.value.push({
            content: element.startsWith('[x]') ? element.replace('[x]', '') : element.replace('[ ]', ''),
            checked: element.startsWith('[x]')
        })
    });
</script>

<style scoped>
    :root {
        --tickmark-color: rgb(83, 146, 224);
    }
    .checklist-label {
        display: flex;
        align-items: center;
    }
    .checklist-label input[type='checkbox'] {
        visibility: hidden;
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
</style>
