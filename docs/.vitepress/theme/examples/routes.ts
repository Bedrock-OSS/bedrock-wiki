import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { basename, join, relative } from "path";
import { globIterate } from "glob";
import matter from "gray-matter";

import { getFilePaths, transformFilePath } from "./filePaths";
import { FilePage, getFilePageIterator } from "./filePage";
import { Example, FilePageParams } from "../types";
import {
  examplesSourceDirectory,
  archivesCacheDirectory,
  examplesCacheDirectory,
  exampleMapFilePath,
} from "./data";
import { load } from "js-yaml";

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

  const exampleMap: Record<string, Example> = {};

  const pages: FilePage[] = [];

  const pathIterator = globIterate(["docs/**/*.md", "docs/*/section.yaml"], {
    ignore: ["docs/**/*[*.md", "docs/public/*"],
  });

  for await (const path of pathIterator) {
    const fileContent = readFileSync(path, "utf-8");

    let title: string;
    let exampleId: string;

    const isSection = basename(path) === "section.yaml";

    if (isSection) {
      const section: any = load(fileContent);

      title = section.title;
      exampleId = section.example;
    } else {
      const frontmatter = matter(fileContent);

      title = frontmatter.data.title;
      exampleId = frontmatter.data.example;
    }

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
      .replace(/\/section\.yaml$/, "");

    const filePaths = getFilePaths(filesDirectory, {
      ignored: metaFileName,
      sort: true,
    });

    const example: Example = {
      id: exampleId,
      files: filePaths.map(transformFilePath),
      archive: {
        root: transformFilePath(metadata.archive_root ?? ""),
        type: metadata.type,
      },
    };

    exampleMap[rootPath] = example;

    const root: FilePageParams["root"] = {
      title,
      path: rootPath,
      type: isSection ? "section" : "page",
    };

    const pageIterator = getFilePageIterator({
      filesDirectory,
      filePaths,
      example,
      root,
    });

    pages.push(...pageIterator);
  }

  writeFileSync(exampleMapFilePath, JSON.stringify(exampleMap, null, 2));

  return pages;
}
