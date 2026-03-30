import { readFileSync } from "fs";
import { Example } from "../types";

import { exampleMapFilePath } from "./data";

let exampleMap: Record<string, Example> | undefined;

export function getExampleForPage(relativePath: string) {
  if (!exampleMap) {
    exampleMap = JSON.parse(readFileSync(exampleMapFilePath, "utf-8")) as Record<string, Example>;
  }

  // Path that requested the example, can either be a section ("blocks") or a page ("blocks/blocks-intro")
  let rootPath: string = relativePath.replace(/\.md$/, "");
  if (!exampleMap[rootPath]) rootPath = rootPath.substring(0, rootPath.indexOf("/"));

  const example = exampleMap[rootPath];

  if (!example) {
    throw new Error(
      `No example files are available for page "${relativePath}".` +
        ' Note that updating the "example" frontmatter field requires the development server to be restarted.'
    );
  }

  return example;
}
