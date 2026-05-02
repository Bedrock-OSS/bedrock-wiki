import { join, resolve } from "path";

export const examplesSourceDirectory = resolve("examples/resources");

const cacheDirectory = resolve("docs/.vitepress/cache");
export const examplesCacheDirectory = join(cacheDirectory, "examples");
export const archivesCacheDirectory = join(cacheDirectory, "archives");

export const exampleMapFilePath = join(examplesCacheDirectory, "map.json");
