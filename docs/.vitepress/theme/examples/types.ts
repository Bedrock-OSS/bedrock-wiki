export interface FilePageParams {
  /** Route path of the file page. */
  file: string;
  /** Name of the file. */
  name: string;
  /** Path of the file. */
  path: string;
  /** Source path of the file in the examples repository. */
  sourcePath: string;
  example: {
    id: string;
    type: string;
    files: string[];
  };
  root: {
    title: string;
    path: string;
    type: "section" | "page";
  };
}

export interface FilePage {
  params: FilePageParams;
  content: string;
}
