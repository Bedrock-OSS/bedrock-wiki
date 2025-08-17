import { join, resolve } from "path";

export const examplesSourceDirectory = resolve("examples/resources");

export const examplesCacheDirectory = resolve("docs/.vitepress/cache/examples");
export const archivesCacheDirectory = resolve("docs/.vitepress/cache/archives");

export const rootMapFilePath = join(examplesCacheDirectory, "map.json");
