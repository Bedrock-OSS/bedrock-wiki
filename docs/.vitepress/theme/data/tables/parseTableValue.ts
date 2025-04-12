import { TableValue } from "../../types";

import markdown from "../markdown";

export default function parseTableValue(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return markdown.renderInline(value);
  }

  if (typeof value === "number") {
    return value;
  }

  if (Array.isArray(value)) {
    const list: TableValue = [];

    for (const item of value) {
      if (typeof item !== "string") {
        throw new TypeError(`Table list items must be strings.`);
      }

      list.push(markdown.renderInline(item));
    }

    return list;
  }

  throw new TypeError("Table value must be a boolean, number, string or array of strings.");
}
