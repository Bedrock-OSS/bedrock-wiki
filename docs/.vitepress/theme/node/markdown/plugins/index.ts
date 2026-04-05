import { exampleFilePlugin } from "./exampleFile";
import { imagePlugin } from "./image";
import { inlineHighlightPlugin } from "./inlineHighlight";
import { dataDrivenTablePlugin } from "./table";
import taskListsPlugin from "markdown-it-task-lists";

export default [
  exampleFilePlugin,
  imagePlugin,
  inlineHighlightPlugin,
  dataDrivenTablePlugin,
  taskListsPlugin,
];
