import { basename, dirname, join, relative, sep } from "path";
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { globIterate } from "glob";
import matter from "gray-matter";
import { Archiver } from "archiver";

import { createExampleArchive } from "./archive";
import { renderExampleFile } from "./markdown";
import { FilePage } from "./types";
import {
  archivesCacheDirectory,
  examplesCacheDirectory,
  getFilePaths,
  rootMapFilePath,
  transformFilePath,
} from "./filePaths";

const metaFileName = "meta.json";

const isProduction = process.env.NODE_ENV === "production";

export async function paths() {
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

    const filesDirectory = join("examples/resources", exampleId);

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

    const isRootSection = /[\\/]index\.md$/.test(path);

    const rootPath = relative("docs", path)
      .replace(sep, "/")
      .replace(/.md$/, "")
      .replace(/(^|\/)index$/, "");

    rootMap[rootPath] = exampleId;

    const filePaths = getFilePaths(filesDirectory, {
      ignored: metaFileName,
      sort: true,
    });

    // Set up archive (download links will not work in development builds)
    let archive: Archiver | undefined;

    if (isProduction) {
      archive = createExampleArchive(rootPath);
    }

    // Iterate over each file in the example
    for (const filePath of filePaths) {
      const fullPath = join(filesDirectory, filePath);

      const transformedFilePath = transformFilePath(filePath);
      const buffer = readFileSync(fullPath);

      const cachePath = join(examplesCacheDirectory, exampleId, transformedFilePath);

      mkdirSync(dirname(cachePath), { recursive: true });
      copyFileSync(fullPath, cachePath);

      archive?.append(buffer, { name: transformedFilePath });

      const content = `---
title: ${transformedFilePath} | ${frontmatter.data.title}
show_contributors: false
---

${renderExampleFile(transformedFilePath, buffer)}
`;

      pages.push({
        content,
        params: {
          file: `${rootPath}/files/${transformedFilePath}`,
          name: basename(transformedFilePath),
          path: transformedFilePath,
          sourcePath: filePath,
          example: {
            id: exampleId,
            files: filePaths.map(transformFilePath),
            type: metadata.type,
          },
          root: {
            title: frontmatter.data.title,
            path: rootPath.replaceAll(sep, "/"),
            type: isRootSection ? "section" : "page",
          },
        },
      });
    }

    archive?.finalize();
  }

  writeFileSync(rootMapFilePath, JSON.stringify(rootMap));

  return pages;
}
