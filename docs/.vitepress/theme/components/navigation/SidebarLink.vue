<script setup lang="ts">
import { ref } from "vue";
import { SidebarLink } from "../../types";

import NavLink from "./NavLink.vue";
import Tag from "../content/Tag.vue";

defineProps<SidebarLink>();

const element = ref<HTMLLIElement>();

function activate() {
  setTimeout(() => {
    element.value?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}
</script>

<template>
  <li ref="element" class="sidebar__link">
    <NavLink :link :active-match="`^${link}($|\\.)`" @change="(isActive) => isActive && activate()">
      <div>
        <strong v-if="prefix !== undefined">{{ prefix }}</strong>
        <span>{{ title }}</span>
      </div>
      <div v-if="tags !== undefined" class="sidebar__link__tags">
        <Tag v-for="name in tags" :key="name" :name sidebar />
      </div>
    </NavLink>
  </li>
</template>

<style lang="scss">
.sidebar__link {
  margin-block: 0.3rem;

  a {
    display: flex;
    align-items: center;
    color: inherit;
    padding-block: 5px;
    gap: 5px;
    padding-inline: 0.5rem 5px;
    font-size: 0.9rem;
    line-height: 1.2;
    border-radius: 6px;
    position: relative;
    transition: background-color 0.1s;

    &:hover,
    &.active {
      background-color: var(--bg-color);
      text-decoration: none;
    }

    &.active {
      font-weight: 600;
    }
  }

  &__tags {
    margin-left: auto;
  }
}
</style>
