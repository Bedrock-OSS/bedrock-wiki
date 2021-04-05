<template>
	<div v-if="contributors">
    <h1>Contributors</h1>
    <a v-for="c in contributors" :key="c.login" :href="c.html_url" :alt="c.login" target="_blank">
      <img :src="c.avatar_url" :alt="c.login"/>
    </a>
  </div>
</template>

<script setup lang="ts">

import {usePageData, useSiteDataByRoute} from "vitepress";
import {reactive, computed} from "vue";
// import {fetch, Headers} from "node-fetch";

const getContributors = async function () {
  // const page = usePageData();
  // const site = useSiteDataByRoute()
  // let url = "https://api.github.com/repos/" + site.value.themeConfig.repo + "/commits?path=" + site.value.themeConfig.docsDir + "/" + page.value.relativePath;
  // const result = await fetch(url, {
  //   // headers: new Headers(process && process.env.GITHUB_TOKEN ? {
  //   //   "Authorization": "Bearer " + process.env.GITHUB_TOKEN
  //   // } : {})
  // })
  // let commits = await result.json();
  // let contributors = [];
  // for (let i = 0; i < commits.length; i++) {
  //   if (commits[i].author && commits[i].author.login && contributors.filter(value => value.login === commits[i].author.login).length === 0) {
  //     contributors.push(commits[i].author);
  //   }
  // }
  // console.log(contributors);
  // return reactive(contributors);
  return reactive([])
}

const contributors = getContributors();
</script>

<style scoped>

</style>
