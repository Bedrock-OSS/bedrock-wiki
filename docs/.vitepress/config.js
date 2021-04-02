const fs = require("fs");
const path = require("path");

let formatLinkSync = function (path) {
  return path.split("\\").join("/").replace(".md", "");
};

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

let generateSidebar = function (base, dir, data) {
  let files = fs.readdirSync(dir);
  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      data.push({
        text: file.toString().replace(".md", "").toProperCase(),
        children: generateSidebar(base, path.join(dir, file), []),
      });
    } else {
      data.push({
        text: file.toString().replace(".md", "").toProperCase(),
        link: formatLinkSync(path.join(dir, file).toString().replace(base, "")),
      });
    }
  });
  return data;
};

let getSidebar = function () {
  let docsPath = path.join(process.cwd(), "docs");
  return generateSidebar(docsPath, docsPath, [])
}

module.exports = {
  lang: "en-US",
  title: "VitePress",
  description: "Vite & Vue powered static site generator.",
  base: "/bedrock-wiki-vite/",

  themeConfig: {
    repo: "vuejs/vitepress",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    algolia: {
      apiKey: "c57105e511faa5558547599f120ceeba",
      indexName: "vitepress",
    },

    carbonAds: {
      carbon: "CEBDT27Y",
      custom: "CKYD62QM",
      placement: "vuejsorg",
    },

    nav: [
      {text: "Guide", link: "/", activeMatch: "^/$|^/guide/"},
      {
        text: "Config Reference",
        link: "/config/basics",
        activeMatch: "^/config/",
      },
      {
        text: "Release Notes",
        link: "https://github.com/vuejs/vitepress/releases",
      },
    ],

    sidebar: {
      "/": getSidebar()
    }
  }
};

console.log(JSON.stringify(getSidebar(), null, 1))
