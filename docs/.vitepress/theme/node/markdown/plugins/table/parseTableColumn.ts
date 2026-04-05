import MarkdownIt from "markdown-it";

import isObject from "../../../../shared/isObject";
import { TableColumn } from "../../../../types";

import parseTableValue from "./parseTableValue";

export default function parseTableColumn(id: string, data: unknown, md: MarkdownIt, env: any) {
  const column: Partial<TableColumn> = {};

  if (!isObject(data)) {
    throw new TypeError(`Table column "${id}" must be an object.`);
  }

  // Column Name
  if (!("name" in data)) {
    throw new TypeError(`Table column "${id}" must include a "name" field.`);
  } else if (typeof data.name !== "string") {
    throw new TypeError(`The "name" field of column "${id}" must be a string.`);
  }

  column.name = md.renderInline(data.name, env);

  // Default Value
  if ("default" in data) {
    column.default = parseTableValue(data.default, md, env);
  }

  // Sortable
  if ("sortable" in data) {
    if (typeof data.sortable !== "boolean") {
      throw new TypeError(`The "sortable" field of column "${id}" must be a boolean.`);
    }

    column.sortable = data.sortable;
  }

  // Text Align
  if ("text_align" in data) {
    if (
      typeof data.text_align !== "string" ||
      (data.text_align !== "left" && data.text_align !== "center" && data.text_align !== "right")
    ) {
      throw new TypeError(
        `The "text_align" field of column "${id}" must be "left", "center" or "right".`
      );
    }

    column.textAlign = data.text_align;
  }

  return column as TableColumn;
}
