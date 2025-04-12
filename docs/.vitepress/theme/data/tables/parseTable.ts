import isObject from "../../utils/isObject";
import { Table } from "../../types";

import parseTableColumn from "./parseTableColumn";
import parseTableRow from "./parseTableRow";

export default function parseTable(data: unknown) {
  const table: Table = {
    columns: {},
    rows: [],
  };

  if (!isObject(data)) {
    throw new TypeError("Tables must be an object.");
  }

  // Columns
  if (!("columns" in data)) {
    throw new TypeError('Tables must include a "columns" field.');
  } else if (!isObject(data.columns)) {
    throw new TypeError('Table "columns" field must be an object.');
  } else {
    for (const columnId in data.columns) {
      const column = data.columns[columnId];

      table.columns[columnId] = parseTableColumn(columnId, column);
    }
  }

  // Rows
  if (!("rows" in data)) {
    throw new TypeError('Tables must include a "rows" field.');
  } else if (!Array.isArray(data.rows)) {
    throw new TypeError('Table "rows" field must be an array.');
  } else {
    for (let index = 0; index < data.rows.length; index++) {
      const row = data.rows[index];

      table.rows.push(parseTableRow(index, row, table.columns));
    }
  }

  return table;
}
