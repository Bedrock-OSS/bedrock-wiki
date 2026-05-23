import { findNodeAtLocation, parseTree } from "jsonc-parser";

interface CodeSnippet {
  breadcrumbs: string;
  code: string;
}

export function getCodeSnippet(code: string, location: string): CodeSnippet {
  const tree = parseTree(code);
  if (!tree) throw new Error("Cannot take snippets from non-JSON files.");

  const segments = location
    .split("/")
    .map((segment) => (isIndexSegment(segment) ? parseInt(segment) : segment));

  const node = findNodeAtLocation(tree, segments);
  if (!node) throw new Error(`Failed to find value at "${location}" in example file.`);

  const isArrayItem = node.parent?.type === "array";
  if (!isArrayItem) segments.pop();

  const start = isArrayItem ? node.offset : node.parent!.offset;
  const end = node.offset + node.length;

  return {
    breadcrumbs: segments.join("/"),
    code: removeIndentation(code.substring(start, end)),
  };
}

const indexPattern = /^\d+$/;

function isIndexSegment(segment: string) {
  return indexPattern.test(segment);
}

function removeIndentation(code: string) {
  const l = code.lastIndexOf("\n");
  if (l === -1) return code;

  let i = 0;
  for (const c of code.substring(l + 1)) {
    if (c !== " ") break;
    i++;
  }

  return code.replaceAll("\n" + " ".repeat(i), "\n");
}
