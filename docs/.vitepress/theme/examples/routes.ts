import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { minimatch } from "minimatch";
import { join, relative } from "path";
import { globIterate } from "glob";
import matter from "gray-matter";

import { FilePage, FilePageParams, getFilePageIterator } from "./filePage";
import { getFilePaths, transformFilePath } from "./filePaths";
import {
  examplesSourceDirectory,
  archivesCacheDirectory,
  examplesCacheDirectory,
  rootMapFilePath,
} from "./data";

const metaFileName = "meta.json";

export async function paths() {
  if (!existsSync(examplesSourceDirectory)) {
    throw new Error(
      'The examples repository is missing. You may need to run "git submodule update --init".'
    );
  }

  rmSync(archivesCacheDirectory, { force: true, recursive: true });
  rmSync(examplesCacheDirectory, { force: true, recursive: true });

  mkdirSync(examplesCacheDirectory, { recursive: true });

  const rootMap: Record<string, string> = {};

  const pages: FilePage[] = [];

  const pathIterator = globIterate("docs/**/*.md", {
    ignore: ["docs/**/*[*.md", "docs/public/*"],
  });

  for await (const path of pathIterator) {
    const pageMarkdown = readFileSync(path, "utf-8");
    const frontmatter = matter(pageMarkdown);

    const exampleId = frontmatter.data.example;
    if (!exampleId) continue;

    const filesDirectory = join(examplesSourceDirectory, exampleId);

    if (!existsSync(filesDirectory)) {
      throw new Error(`The examples directory "${exampleId}" does not exist.`);
    }

    const filesDirectoryMetaPath = join(filesDirectory, metaFileName);

    if (!existsSync(filesDirectoryMetaPath)) {
      throw new Error(
        `The examples directory "${exampleId}" does not contain a "${metaFileName}" file.`
      );
    }

    const metadata = JSON.parse(readFileSync(filesDirectoryMetaPath, "utf-8"));

    const rootPath = relative("docs", path)
      .replaceAll("\\", "/")
      .replace(/\.md$/, "")
      .replace(/(^|\/)index$/, "");

    rootMap[rootPath] = exampleId;

    const filePaths = getFilePaths(filesDirectory, {
      ignored: metaFileName,
      sort: true,
    });

    const example: FilePageParams["example"] = {
      id: exampleId,
      files: filePaths.map(transformFilePath),
      type: metadata.type,
      archiveRoot: transformFilePath(metadata.archive_root ?? ""),
    };

    const root: FilePageParams["root"] = {
      title: frontmatter.data.title,
      path: rootPath,
      type: minimatch(path, "docs/*/index.md") ? "section" : "page",
    };

    const pageIterator = getFilePageIterator({
      filesDirectory,
      filePaths,
      example,
      root,
    });

    pages.push(...pageIterator);
  }

  writeFileSync(rootMapFilePath, JSON.stringify(rootMap));

  return pages;
}
