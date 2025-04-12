<script setup lang="ts">
import ExternalIcon from "../icons/ExternalIcon.vue";

import { watchEffect } from "vue";
import useNavLink from "../../composables/navLink";
import useIsMobile from "../../composables/isMobile";
import useSidebarVisibility from "../../composables/sidebarVisibility";

const emit = defineEmits<{
  change: [isActive: boolean];
}>();

const props = defineProps<{
  class?: string;
  link: string;
  activeMatch?: string;
}>();

const { props: linkProps, isExternal } = useNavLink(props);

const isMobile = useIsMobile();
const isSidebarVisible = useSidebarVisibility();
function onNavigation() {
  if (isMobile.value) isSidebarVisible.value = false;
}

watchEffect(() => {
  emit("change", linkProps.value.class.active);
});
</script>

<template>
  <a :class="props.class" v-bind="linkProps" @click="onNavigation">
    <slot />
    <ExternalIcon v-if="isExternal" />
  </a>
</template>
