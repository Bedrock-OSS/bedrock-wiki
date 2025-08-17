import { inlineHighlightPlugin } from "./inlineHighlight";
import taskListsPlugin from "markdown-it-task-lists";
import { exampleFilePlugin } from "./exampleFile";

export default [exampleFilePlugin, inlineHighlightPlugin, taskListsPlugin];
