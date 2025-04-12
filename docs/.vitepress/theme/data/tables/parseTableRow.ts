import isObject from "../../utils/isObject";
import { Table, TableRow } from "../../types";

import parseTableValue from "./parseTableValue";

export default function parseTableRow(index: number, data: unknown, columns: Table["columns"]) {
  const row: TableRow = {};

  if (!isObject(data)) {
    throw new TypeError(`Table row ${index} must be an object.`);
  }

  for (const columnId in data) {
    const column = columns[columnId];

    if (!column) {
      throw new TypeError(
        `Table row ${index} contains a value for the non-existent column "${columnId}".`
      );
    }

    const value = parseTableValue(data[columnId]);

    if (column.sortable && Array.isArray(value)) {
      throw new TypeError(
        `Table row ${index} contains an array value for the column "${columnId}" which is not supported as that column is sortable.`
      );
    }

    row[columnId] = value;
  }

  return row;
}
