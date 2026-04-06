import { exampleFilePlugin } from "./exampleFile";
import { imagePlugin } from "./image";
import { inlineHighlightPlugin } from "./inlineHighlight";
import { dataDrivenTablePlugin } from "./table";
import { rewriteZhLinksPlugin } from "./rewrite-links";
import taskListsPlugin from "markdown-it-task-lists";

export default [
  rewriteZhLinksPlugin,
  exampleFilePlugin,
  imagePlugin,
  inlineHighlightPlugin,
  dataDrivenTablePlugin,
  taskListsPlugin,
];
