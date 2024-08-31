<script setup lang="ts">
import { useData } from "vitepress";
import { ref, watch } from "vue";
import { getGitHubAuthor, GitHubAuthor } from "../../utils/cache";

const { frontmatter } = useData();

const getContributors = async function () {
  if (!Array.isArray(frontmatter.value.mentions)) return [];

  const contributors: GitHubAuthor[] = [];

  for (const login of frontmatter.value.mentions) {
    const user = await getGitHubAuthor(login);
    if (user) contributors.push(user);
  }

  return contributors;
};

let contributors = ref(await getContributors());

watch(frontmatter, async () => {
  contributors.value = await getContributors();
});
</script>

<template>
  <h2 id="contributors">Contributors</h2>
  <div v-if="contributors.length > 0" class="contributors">
    <a
      v-for="contributor in contributors"
      :key="contributor.login"
      :href="contributor.html_url"
      :alt="contributor.login"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="contributor.avatar_url" :alt="contributor.login" :title="contributor.login" />
    </a>
  </div>
</template>

<style lang="scss">
.contributors {
  a {
    display: inline-block;
    background-color: var(--bg-color);
    border: var(--border);
    border-radius: 50%;
    overflow: hidden;
    line-height: 1;

    margin-inline: 0.2em -0.6em;
    transition-delay: 0.1s;
    transition:
      margin 0.2s,
      transform 0.2s;

    img {
      width: 2em;
      height: 2em;
      vertical-align: middle;
    }

    &:hover {
      transform: translateY(-0.3em);
    }
  }

  &:hover,
  &:focus-within {
    a {
      margin-right: 0.2em;
    }
  }
}
</style>
