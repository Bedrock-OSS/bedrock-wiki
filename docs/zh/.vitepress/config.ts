import { defineWikiConfig } from "../.vitepress/theme/node/config";

export default defineWikiConfig({
  title: "Bedrock Wiki",
  longTitle: "基岩版 Wiki",
  description: "一个分享 Minecraft 基岩版技术知识的网站。",

  url: "https://wiki.bedrock.dev",

  repository: "https://github.com/Bedrock-OSS/bedrock-wiki",
  branch: "wiki",

  examples: {
    repository: "https://github.com/Bedrock-OSS/bedrock-examples",
    branch: "main",
  },

  algolia: {
    appId: "N9ZHAYJQII",
    apiKey: "a664f5a5da631810a08e1a48554fe523",
    indexName: "wiki-bedrock",
    placeholder: "搜索基岩版 Wiki…",
  },

  navigation: [
    {
      text: "Discord",
      link: "/zh/discord",
    },
    {
      text: "贡献",
      link: "/zh/contribute",
    },
    {
      text: "bedrock.dev",
      link: "https://bedrock.dev",
    },
    {
      text: "MS Learn",
      link: "https://learn.microsoft.com/minecraft/creator/",
    },
  ],
});
