export interface Table {
  columns: {
    [id: string]: TableColumn;
  };
  rows: TableRow[];
}

export interface TableColumn {
  name: string;
  default?: TableValue;
  sortable?: boolean;
  textAlign?: "left" | "center" | "right";
}

export interface TableRow {
  [column: string]: TableValue;
}

export type TableValue = undefined | boolean | number | string | string[];
