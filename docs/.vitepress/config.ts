import { defineWikiConfig } from "./theme/config";

import redirects from "./redirects";
import tags from "./tags";

export default defineWikiConfig({
  title: "Bedrock Wiki",
  longTitle: "The Bedrock Wiki",
  description: "A knowledge-sharing website for technical features of Minecraft Bedrock.",

  url: "https://wiki.bedrock.dev",
  repository: "https://github.com/Bedrock-OSS/bedrock-wiki",

  algolia: {
    appId: "N9ZHAYJQII",
    apiKey: "a664f5a5da631810a08e1a48554fe523",
    indexName: "wiki-bedrock",
  },

  navigation: [
    {
      text: "Discord",
      link: "/discord",
    },
    {
      text: "Contribute",
      link: "/contribute",
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

  fastBuild: {
    excludedPages: [
      "/entities/vanilla-usage-components",
      "/entities/vanilla-usage-spawn-rules",
      "/entities/vuc-full",
      "/entities/vusr-full",
    ],
  },

  redirects,
  tags,
});
