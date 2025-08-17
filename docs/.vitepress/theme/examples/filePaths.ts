import { Dirent, readdirSync } from "fs";
import { minimatch } from "minimatch";
import { join } from "path";

/**
 * - Replaces `\` with `/`
 * - Replaces `bp` with `BP`
 * - Replaces `rp` with `RP`
 */
export function transformFilePath(path: string) {
  return path.replaceAll("\\", "/").replace(/^rp\//, "RP/").replace(/^bp\//, "BP/");
}

/**
 * Sorts a {@link Dirent} array, placing entries in alphabetical order with directories before files.
 *
 * @returns The mutated `entries` array.
 */
export function sortDirectoryEntries(entries: Dirent[]) {
  return entries.sort((entryA, entryB) => {
    const isEntryADirectory = entryA.isDirectory();
    const isEntryBDirectory = entryB.isDirectory();

    if (isEntryADirectory && !isEntryBDirectory) return -1;
    else if (!isEntryADirectory && isEntryBDirectory) return 1;

    return entryA.name.localeCompare(entryB.name);
  });
}

interface FilePathOptions {
  ignored?: string;
  sort?: boolean;
}

/**
 * @returns A sorted array of file paths relative to `directory`.
 */
export function getFilePaths(directory: string, options: FilePathOptions = {}) {
  const paths: string[] = [];

  resolvePaths();
  return paths;

  function resolvePaths(relativePath: string = ".") {
    const absolutePath = join(directory, relativePath);
    const entries = readdirSync(absolutePath, { withFileTypes: true });

    if (options.sort) sortDirectoryEntries(entries);

    for (const entry of entries) {
      const entryPath = join(relativePath, entry.name);

      if (entry.isDirectory()) {
        resolvePaths(entryPath);
        continue;
      }

      if (options.ignored && minimatch(entryPath, options.ignored)) continue;

      paths.push(entryPath);
    }
  }
}
