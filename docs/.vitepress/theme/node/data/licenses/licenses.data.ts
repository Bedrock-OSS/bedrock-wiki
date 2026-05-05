import { createContentLoader } from "vitepress";
import { basename } from "path";

import { License } from "../../../types";

import validateLicense from "./validateLicense";

export interface Licenses {
  [id: string]: License;
}

declare const data: Licenses;
export { data };

export default createContentLoader("licenses/*.md", {
  transform(data) {
    const licenses: Licenses = {};

    for (const { frontmatter, url } of data) {
      const id = basename(url);

      validateLicense(id, frontmatter);

      licenses[id] = {
        title: frontmatter.title,
        link: url,
      };
    }

    return licenses;
  },
});
