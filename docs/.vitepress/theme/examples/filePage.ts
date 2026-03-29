import { readFileSync, mkdirSync, copyFileSync } from "fs";
import { join, dirname, basename, relative } from "path";
import { Archiver } from "archiver";

import filePageLink from "../utils/filePageLink";

import { createExampleArchive } from "./archive";
import { examplesCacheDirectory } from "./data";
import { transformFilePath } from "./filePaths";
import { renderExampleFile } from "./markdown";

export interface FilePage {
  content: string;
  params: FilePageParams;
}

export interface FilePageParams {
  /** Route path of the file page. */
  file: string;
  /** Name of the file. */
  name: string;
  /** Path of the file. */
  path: string;
  /** Source path of the file in the examples repository. */
  sourcePath: string;
  example: {
    id: string;
    type: string;
    files: string[];
    archiveRoot: string;
  };
  root: {
    title: string;
    path: string;
    type: "section" | "page";
  };
}

const isProduction = process.env.NODE_ENV === "production";

export function* getFilePageIterator({
  filesDirectory,
  filePaths,
  example,
  root,
}: {
  filesDirectory: string;
  filePaths: string[];
  example: FilePageParams["example"];
  root: FilePageParams["root"];
}) {
  // Set up archive (download links will not work in development builds)
  let archive: Archiver | undefined;

  if (isProduction) {
    archive = createExampleArchive(root.path);
  }

  // Iterate over each file in the example
  for (const filePath of filePaths) {
    const fullPath = join(filesDirectory, filePath);

    const transformedFilePath = transformFilePath(filePath);
    const buffer = readFileSync(fullPath);

    const cachePath = join(examplesCacheDirectory, example.id, transformedFilePath);

    mkdirSync(dirname(cachePath), { recursive: true });
    copyFileSync(fullPath, cachePath);

    const archiveFilePath = transformFilePath(relative(example.archiveRoot, transformedFilePath));

    if (!archiveFilePath.startsWith("../")) {
      archive?.append(buffer, { name: archiveFilePath });
    }

    const frontmatter = {
      title: `${transformedFilePath} | ${root.title}`,
      show_contributors: false,
      license: { code: "MIT" },
    };

    const content = [
      "---",
      JSON.stringify(frontmatter),
      "---",
      renderExampleFile(transformedFilePath, buffer),
    ].join("\n");

    const params: FilePageParams = {
      file: filePageLink(root.path, transformedFilePath).substring(1),
      name: basename(transformedFilePath),
      path: transformedFilePath,
      sourcePath: filePath,
      example,
      root,
    };

    const page: FilePage = {
      content,
      params,
    };

    yield page;
  }

  archive?.finalize();
}
