import { readdirSync, statSync, readFileSync } from "fs";
import { defineLoader } from "vitepress";
import matter from "gray-matter";
import { join } from "path";

import { License } from "../../types";
import config from "../config";

import validateLicense from "./validateLicense";

export interface Licenses {
  [id: string]: License;
}

declare const data: Licenses;
export { data };

const licensesDirectory = join(config.srcDir, "licenses");

export default defineLoader({
  watch: join(licensesDirectory, "*.md"),
  load() {
    const licenses: Licenses = {};

    const entries = readdirSync(licensesDirectory);

    for (const entry of entries) {
      const joinedPath = join(licensesDirectory, entry);
      const stats = statSync(joinedPath);

      // Don't include non-markdown files, or the section index page
      if (!stats.isFile() || !entry.endsWith(".md") || entry === "index.md") continue;

      const licenseId = entry.replace(/\.md$/, "");

      const licenseMarkdown = readFileSync(joinedPath, "utf-8");
      const frontMatter = matter(licenseMarkdown);

      validateLicense(licenseId, frontMatter);

      const { data } = frontMatter;

      licenses[licenseId] = {
        link: "/licenses/" + licenseId,
        title: data.title,
      };
    }

    return licenses;
  },
});
