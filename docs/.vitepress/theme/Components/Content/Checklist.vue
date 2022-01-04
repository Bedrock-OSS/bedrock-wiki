<template>
    <div v-show="false" ref="content">
        <slot> </slot>
    </div>

    <label v-for="i in elementsObjects" class="checklist-label">
        <input type="checkbox" :checked="i.checked === true" disabled />
        <span
            class="checkbox"
            :class="{ 'checkbox-checked': i.checked }"
        ></span>
        <!-- <div v-if="i.checked" class="tickmark-checked"></div> -->
        <div v-if="i.checked" class="tickmark-checked"><img src="/public/assets/images/icons/tick.png" /></div>
        <div v-else class="tickmark-unchecked"></div>
        {{ i.content }}
    </label>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    interface IElement {
        checked: Boolean;
        content: String;
    }

    const content = ref<any>(null);

    let elements = ref<String[]>([]);

    let elementsObjects = ref<IElement[]>([]);

    onMounted(() => {
        if (content.value) {
            // split ul (content of slot) and put each element into an Array
            elements.value = content.value.innerHTML.split('</li><li>');
            if (elements.value) {
                elements.value[0] = elements.value[0].replace('<ul><li>', '');
                elements.value[elements.value.length - 1] = elements.value[
                    elements.value.length - 1
                ].replace('</li></ul>', '');

                // create object for each element with its own content and checked boolean
                elements.value.forEach((element) => {
                    if (elementsObjects.value) {
                        elementsObjects.value.push({
                            content: element.startsWith('[x]')
                                ? element.replace('[x]', '')
                                : element.replace('[ ]', ''),
                            checked: element.startsWith('[x]'),
                        });
                    }
                });
            }
        }
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
