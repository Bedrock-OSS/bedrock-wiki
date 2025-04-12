import isObject from "../../utils/isObject";
import { TableColumn } from "../../types";

import markdown from "../markdown";
import parseTableValue from "./parseTableValue";

export default function parseTableColumn(id: string, data: unknown) {
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

  column.name = markdown.renderInline(data.name);

  // Default Value
  if ("default" in data) {
    column.default = parseTableValue(data.default);
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
