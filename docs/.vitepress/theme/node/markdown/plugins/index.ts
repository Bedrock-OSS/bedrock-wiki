import { exampleFilePlugin } from "./exampleFile";
import { imagePlugin } from "./image";
import { inlineHighlightPlugin } from "./inlineHighlight";
import { mermaidPlugin } from "./mermaid";
import { dataDrivenTablePlugin } from "./table";
import taskListsPlugin from "markdown-it-task-lists";

export default [
  exampleFilePlugin,
  imagePlugin,
  inlineHighlightPlugin,
  mermaidPlugin,
  dataDrivenTablePlugin,
  taskListsPlugin,
];
