import { copyFileSync, createWriteStream, mkdirSync } from "fs";
import { dirname, join } from "path";
import { globIterate } from "glob";
import archiver from "archiver";

import { archivesCacheDirectory } from "./filePaths";

export function createExampleArchive(path: string) {
  const archivePath = join(archivesCacheDirectory, path + ".zip");

  mkdirSync(dirname(archivePath), { recursive: true });

  const archiveStream = createWriteStream(archivePath);
  const archive = archiver("zip");

  archive.pipe(archiveStream);

  return archive;
}

export async function copyExampleArchives(outputDirectory: string) {
  const archivePathIterator = globIterate("**/*.zip", { cwd: archivesCacheDirectory });

  for await (const relativePath of archivePathIterator) {
    const absolutePath = join(archivesCacheDirectory, relativePath);
    const outputPath = join(outputDirectory, relativePath);

    copyFileSync(absolutePath, outputPath);
  }
}
