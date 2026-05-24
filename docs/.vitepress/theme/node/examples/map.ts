import { readFileSync } from "fs";
import { Example } from "../../types";

import { exampleMapFilePath } from "./data";

let exampleMap: Record<string, Example> | undefined;

export function loadExampleMap() {
  exampleMap ??= JSON.parse(readFileSync(exampleMapFilePath, "utf-8")) as Record<string, Example>;
}

export function getExampleRootForPage(relativePath: string) {
  loadExampleMap();

  // Path that requested the example, can either be a section ("blocks") or a page ("blocks/blocks-intro")
  let rootPath: string = relativePath.replace(/\.md$/, "");
  if (!exampleMap![rootPath]) rootPath = rootPath.substring(0, rootPath.indexOf("/"));

  if (!rootPath) {
    throw new Error(
      `No example files are available for page "${relativePath}".` +
        ' Note that updating the "example" frontmatter field requires the development server to be restarted.'
    );
  }

  return rootPath;
}

export function getExampleFromRoot(rootPath: string) {
  loadExampleMap();

  return exampleMap![rootPath];
}

export function getExampleForPage(relativePath: string) {
  return getExampleFromRoot(getExampleRootForPage(relativePath));
}
