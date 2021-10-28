# Bedrock Wiki

Welcome to the Bedrock Wiki!

🔗 [View the Site](https://wiki.bedrock.dev/) 🔗

✉️ [Join the discord](https://discord.gg/XjV87YN) ✉️

This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.

# Contributing

The wiki is fully open-source, and community-maintained. We rely on people like _you_ to keep our content fresh and up to date. If you've spotted something that needs improvement, or have something fresh to contribute, please open a PR or [join the discord](https://discord.gg/XjV87YN)!

You may directly open PRs for the following:

-   Rewriting sections for clarity
-   Fixing spelling or grammar
-   Removing or correcting false information.

For more complex things, like full article rewrites, or new articles, [join the discord](https://discord.gg/XjV87YN)!

## Running Locally

To run locally:

-   `npm install` (once, to install packages)
-   `npm run dev` (to test the site, good for writing markdown)
-   `npm run build` (to fully build, good for testing issues with the live site)

## Markdown

Articles on the wiki are written in markdown. Vue Components provide additional flavor, such as:

-   Spoilers
-   Code Headers
-   Buttons

## Front Matter

We can use front-matter to define the following custom behavior:

| Name        | Required | Default | Note                                                                                                                                                     |
| ----------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`     | Yes      | None    | The title of the page.                                                                                                                                   |
| `nav_order` | No       | None    | The order in which the article will appear in the sidebar. Lower number will be higher. All nav_order pages will appear above pages without a nav_order. |
| `show_toc`  | No       | True    | Whether the table of contents will be generated for this page.                                                                                           |
| `tags`      | No       | []      | A list of tags for the page. Some will be displayed on sidebar, such as 'guide' or 'beta'. All will be displayed in the actual page, at the top.         |
| `mentions`  | No       | []      | Add your GitHub username here so that you will always be in the contributors section if this page is moved.                                              |

## Code and Platform

The wiki uses a custom [VitePress theme](https://vitepress.vuejs.org/), and is statically generated from the `wiki` branch into the `generated` branch.

If you are interested in helping us maintain the core platform, as opposed to the markdown articles, [join the discord](https://discord.gg/XjV87YN)!
