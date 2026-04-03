import { inlineHighlightPlugin } from "./inlineHighlight";
import taskListsPlugin from "markdown-it-task-lists";
import { dataDrivenTablePlugin } from "./table";
import { exampleFilePlugin } from "./exampleFile";

export default [exampleFilePlugin, inlineHighlightPlugin, dataDrivenTablePlugin, taskListsPlugin];
