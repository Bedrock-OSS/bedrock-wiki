import { extname } from "path";
import { PNG } from "pngjs";
import TGA from "tga";

import { getCodeSnippet } from "./snippet";

const fenceChar = "`";

const imageTypes = ["jpg", "jpeg", "png", "tga"];
const unsupportedTypes = ["mcstructure"];

const viewFileTooltip = "View File";

export function renderExampleFile(
  path: string,
  buffer: Buffer,
  link?: string,
  snippetLocation?: string
) {
  let type = extname(path).substring(1);

  if (imageTypes.includes(type)) {
    if (type === "jpg") {
      type = "jpeg";
    } else if (type === "tga") {
      buffer = tgaToPng(buffer);
      type = "png";
    }

    const url = `data:image/${type};base64,${buffer.toString("base64")}`;

    return renderImageFile(path, url, link);
  }

  if (unsupportedTypes.includes(type)) {
    return renderCodeFile(path, "", "Cannot display this file type.", link);
  }

  let code = buffer.toString();

  const snippet = snippetLocation ? getCodeSnippet(code, snippetLocation) : undefined;
  if (snippet?.code) code = snippet.code;

  return renderCodeFile(path, type, code, link, snippet?.breadcrumbs);
}

function renderCodeFile(
  path: string,
  lang: string,
  code: string,
  link?: string,
  breadcrumbs?: string
) {
  let header = `<CodeHeader path="${path}" `;
  if (link) header += `link="${link}" `;
  if (breadcrumbs) header += `breadcrumbs="${breadcrumbs}" `;
  header += "/>";

  const fence = getCodeFence(code);

  if (lang === "material") lang = "json";
  else if (lang === "mcfunction") lang = ""; // No syntax highlighting

  return [
    //
    header,
    "",
    fence + lang,
    code,
    fence,
  ].join("\n");
}

function getCodeFence(code: string) {
  let maxCount = 0;
  let currentCount = 0;

  for (const char of code) {
    if (char === fenceChar) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  const fenceLength = Math.max(3, maxCount + 1);

  return fenceChar.repeat(fenceLength);
}

function renderImageFile(path: string, url: string, link?: string) {
  return `<WikiImage src="${url}" alt="" caption="${path}"${link ? ` link="${link}" title="${viewFileTooltip}"` : ""} pixelated />`;
}

function tgaToPng(buffer: Buffer) {
  const tga = new TGA(buffer, { dontFixAlpha: true });

  const png = new PNG({
    width: tga.width,
    height: tga.height,
  });

  png.data = tga.pixels;

  return PNG.sync.write(png);
}
