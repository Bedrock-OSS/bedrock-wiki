import { PageData } from "vitepress";
import { getExampleForPage } from "../examples";

export function transformPageData(pageData: PageData) {
  if (pageData.frontmatter.__tables) {
    pageData.params ??= {};
    pageData.params.tables = pageData.frontmatter.__tables;

    delete pageData.frontmatter.__tables;
  }

  if (pageData.frontmatter.example) {
    const example = getExampleForPage(pageData.relativePath);

    pageData.params ??= {};
    pageData.params.example = example;
  }
}
