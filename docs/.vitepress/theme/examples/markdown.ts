import { extname } from "path";
import { PNG } from "pngjs";
import TGA from "tga";

const imageTypes = ["jpg", "jpeg", "png", "tga"];
const unsupportedTypes = ["mcstructure"];

const viewFileTooltip = "View File";

export function renderExampleFile(path: string, buffer: Buffer, link?: string) {
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

  return renderCodeFile(path, type, buffer.toString(), link);
}

function renderCodeFile(path: string, lang: string, code: string, link?: string) {
  if (link) path = `<a href="${link}" title="${viewFileTooltip}">${path}</a>`;

  if (lang === "mcfunction") lang = ""; // No syntax highlighting

  return [
    //
    "<CodeHeader>" + path + "</CodeHeader>",
    "",
    "```" + lang,
    code,
    "```",
  ].join("\n");
}

function renderImageFile(path: string, url: string, link?: string) {
  return `<WikiImage src="${url}" alt="" caption="${path}"${link ? ` link="${link}" title="${viewFileTooltip}"` : ""} pixelated />`;
}

function tgaToPng(buffer: Buffer) {
  const tga = new TGA(buffer);

  const png = new PNG({
    width: tga.width,
    height: tga.height,
  });

  png.data = tga.pixels;

  return PNG.sync.write(png);
}
