<template>
    <div class="notfound max-w-screen-md mx-auto">
        <div class="flex flex-col mx-auto items-center">
            <h1 class="!block">404 - Page not found!</h1>
            <p>Don't type <code>/spawnpoint</code> here.</p>
            <img src="/assets/images/misc/dead_bush.png">
            <p>You want to create a page for the wiki? Feel free to contribute! <a :href="site.base + 'contribute'">Here's how.</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useData} from "vitepress";

const { site } = useData()
const URL_MAP:any = {
  "documentation/biome-tags": "world-generation/biome-tags"
};

let path = document.location.pathname.substr(site.value.base.length).replace('.html', '');

if (URL_MAP[path]) {
  document.location.pathname = site.value.base + URL_MAP[path];
}

</script>