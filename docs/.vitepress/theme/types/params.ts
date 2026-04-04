import { Example } from "./misc";
import { Table } from "./table";

export interface PageParams {
  example?: Example;
  tables?: Record<string, Table>;
  [param: string]: any;
}

export interface FilePageParams extends PageParams {
  example: Example;
  /** Route path of the file page. */
  file: string;
  /** Name of the file. */
  name: string;
  /** Path of the file. */
  path: string;
  /** Source path of the file in the examples repository. */
  sourcePath: string;
  root: {
    title: string;
    path: string;
    type: "section" | "page";
  };
}
