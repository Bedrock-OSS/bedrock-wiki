// docs/.vitepress/theme/node/config.ts
import { defineConfigWithTheme } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/theme/node/page/head.ts
var head = [
  [
    "link",
    {
      rel: "icon",
      href: "/favicon.ico"
    }
  ],
  [
    "apple-touch-icon",
    {
      rel: "icon",
      href: "/assets/images/favicons/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  [
    "mask-icon",
    {
      rel: "icon",
      href: "/assets/images/favicons/safari-pinned-tab.svg",
      color: "#60c3fa"
    }
  ],
  [
    "meta",
    {
      name: "theme-color",
      content: "#60c3fa"
    }
  ]
];

// docs/.vitepress/theme/node/page/transformHead.ts
function transformHead({ pageData, siteConfig }) {
  const config = siteConfig.site;
  const site = config.title;
  const { frontmatter, relativePath } = pageData;
  const title = frontmatter.title ?? config.themeConfig.longTitle ?? config.title;
  const description = frontmatter.description ?? config.description;
  const image = `${config.themeConfig.url}/assets/images/icons/logo.png`;
  const path = relativePath.replace(".md", "");
  let url = config.themeConfig.url;
  if (path !== "index") url += `/${path}`;
  const data = {
    // Open Graph (used by Discord)
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "og:site_name": site,
    // Twitter
    "twitter:card": "summary",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site": site
  };
  const out = [];
  Object.entries(data).forEach(([name, content]) => {
    out.push([
      "meta",
      {
        name,
        content
      }
    ]);
  });
  return out;
}

// docs/.vitepress/theme/node/examples/filePaths.ts
import { minimatch } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/minimatch/dist/esm/index.js";

// docs/.vitepress/theme/node/examples/markdown.ts
import { extname } from "path";
import { PNG } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/pngjs/lib/png.js";
import TGA from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/tga/src/index.js";
var fenceChar = "`";
var imageTypes = ["jpg", "jpeg", "png", "tga"];
var unsupportedTypes = ["mcstructure"];
var viewFileTooltip = "View File";
function renderExampleFile(path, buffer, link) {
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
function renderCodeFile(path, lang, code, link) {
  if (link) path = `<a href="${link}" title="${viewFileTooltip}">${path}</a>`;
  if (lang === "material") lang = "json";
  else if (lang === "mcfunction") lang = "";
  const fence = getCodeFence(code);
  return [
    //
    "<CodeHeader>" + path + "</CodeHeader>",
    "",
    fence + lang,
    code,
    fence
  ].join("\n");
}
function getCodeFence(code) {
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
function renderImageFile(path, url, link) {
  return `<WikiImage src="${url}" alt="" caption="${path}"${link ? ` link="${link}" title="${viewFileTooltip}"` : ""} pixelated />`;
}
function tgaToPng(buffer) {
  const tga = new TGA(buffer, { dontFixAlpha: true });
  const png = new PNG({
    width: tga.width,
    height: tga.height
  });
  png.data = tga.pixels;
  return PNG.sync.write(png);
}

// docs/.vitepress/theme/node/examples/archive.ts
import { copyFileSync, createWriteStream, mkdirSync } from "fs";
import { dirname, join as join2 } from "path";
import { globIterate } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/glob/dist/esm/index.min.js";
import archiver from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/archiver/index.js";

// docs/.vitepress/theme/node/examples/data.ts
import { join, resolve } from "path";
var examplesSourceDirectory = resolve("examples/resources");
var cacheDirectory = resolve("docs/.vitepress/cache");
var examplesCacheDirectory = join(cacheDirectory, "examples");
var archivesCacheDirectory = join(cacheDirectory, "archives");
var exampleMapFilePath = join(examplesCacheDirectory, "map.json");

// docs/.vitepress/theme/node/examples/archive.ts
async function copyExampleArchives(outputDirectory) {
  const archivePathIterator = globIterate("**/*.zip", { cwd: archivesCacheDirectory });
  for await (const relativePath of archivePathIterator) {
    const absolutePath = join2(archivesCacheDirectory, relativePath);
    const outputPath = join2(outputDirectory, relativePath);
    copyFileSync(absolutePath, outputPath);
  }
}

// docs/.vitepress/theme/node/examples/routes.ts
import { globIterate as globIterate2 } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/glob/dist/esm/index.min.js";
import matter from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/gray-matter/index.js";

// docs/.vitepress/theme/shared/filePageLink.ts
function filePageLink(root, path) {
  return `/${root}/files/${path}`;
}

// docs/.vitepress/theme/node/examples/filePage.ts
var isProduction = process.env.NODE_ENV === "production";

// docs/.vitepress/theme/node/examples/routes.ts
import { load } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/js-yaml/dist/js-yaml.mjs";

// docs/.vitepress/theme/node/examples/map.ts
import { readFileSync } from "fs";
var exampleMap;
function getExampleForPage(relativePath) {
  if (!exampleMap) {
    exampleMap = JSON.parse(readFileSync(exampleMapFilePath, "utf-8"));
  }
  let rootPath = relativePath.replace(/\.md$/, "");
  if (!exampleMap[rootPath]) rootPath = rootPath.substring(0, rootPath.indexOf("/"));
  const example = exampleMap[rootPath];
  if (!example) {
    throw new Error(
      `No example files are available for page "${relativePath}". Note that updating the "example" frontmatter field requires the development server to be restarted.`
    );
  }
  return example;
}

// docs/.vitepress/theme/node/page/transformPageData.ts
function transformPageData(pageData) {
  if (pageData.frontmatter.__tables) {
    pageData.params ??= {};
    pageData.params.tables = pageData.frontmatter.__tables;
    delete pageData.frontmatter.__tables;
  }
  if (pageData.frontmatter.example) {
    const example = getExampleForPage(pageData.relativePath);
    pageData.params ??= {};
    pageData.params.example = example;
  }
}

// docs/.vitepress/theme/node/markdown/languages/json.ts
var language = {
  scopeName: "source.json",
  displayName: "JSON",
  name: "json",
  patterns: [
    { include: "#objectsnippet" },
    // Syntax highlighting for am object without surrounding curly brackets
    { include: "#value" }
  ],
  repository: {
    array: {
      begin: "\\[",
      beginCaptures: {
        0: {
          name: "punctuation.definition.array.begin.json"
        }
      },
      end: "]",
      endCaptures: {
        0: {
          name: "punctuation.definition.array.end.json"
        }
      },
      name: "meta.structure.array.json",
      patterns: [
        {
          include: "#value"
        },
        {
          match: ",",
          name: "punctuation.separator.array.json"
        },
        {
          match: "[^]\\s]",
          name: "invalid.illegal.expected-array-separator.json"
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: "/\\*\\*(?!/)",
          captures: {
            0: {
              name: "punctuation.definition.comment.json"
            }
          },
          end: "\\*/",
          name: "comment.block.documentation.json"
        },
        {
          begin: "/\\*",
          captures: {
            0: {
              name: "punctuation.definition.comment.json"
            }
          },
          end: "\\*/",
          name: "comment.block.json"
        },
        {
          captures: {
            1: {
              name: "punctuation.definition.comment.json"
            }
          },
          match: "(//).*$\\n?",
          name: "comment.line.double-slash.js"
        }
      ]
    },
    constant: {
      match: "\\b(?:true|false|null)\\b",
      name: "constant.language.json"
    },
    number: {
      match: "-?(?:0|[1-9]\\d*)(?:(?:\\.\\d+)?(?:[Ee][-+]?\\d+)?)?",
      name: "constant.numeric.json"
    },
    object: {
      begin: "\\{",
      beginCaptures: {
        0: {
          name: "punctuation.definition.dictionary.begin.json"
        }
      },
      end: "}",
      endCaptures: {
        0: {
          name: "punctuation.definition.dictionary.end.json"
        }
      },
      name: "meta.structure.dictionary.json",
      patterns: [
        { include: "#objectkey" },
        { include: "#comments" },
        {
          begin: ":",
          beginCaptures: {
            0: {
              name: "punctuation.separator.dictionary.key-value.json"
            }
          },
          end: "(,)|(?=})",
          endCaptures: {
            1: {
              name: "punctuation.separator.dictionary.pair.json"
            }
          },
          name: "meta.structure.dictionary.value.json",
          patterns: [
            { include: "#value" },
            {
              match: "[^,\\s]",
              name: "invalid.illegal.expected-dictionary-separator.json"
            }
          ]
        },
        {
          match: "[^}\\s]",
          name: "invalid.illegal.expected-dictionary-separator.json"
        }
      ]
    },
    objectkey: {
      begin: '"',
      beginCaptures: {
        0: {
          name: "punctuation.support.type.property-name.begin.json"
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: "punctuation.support.type.property-name.end.json"
        }
      },
      name: "string.json support.type.property-name.json",
      patterns: [{ include: "#stringcontent" }]
    },
    objectsnippet: {
      begin: '^("[^"]*")(:)',
      beginCaptures: {
        1: {
          patterns: [{ include: "#objectkey" }]
        },
        2: {
          name: "punctuation.separator.dictionary.key-value.json"
        }
      },
      end: ",",
      endCaptures: {
        0: {
          name: "punctuation.separator.dictionary.pair.json"
        }
      },
      patterns: [{ include: "#value" }],
      name: "meta.structure.dictionary.snippet.json"
    },
    string: {
      begin: '"',
      beginCaptures: {
        0: {
          name: "punctuation.definition.string.begin.json"
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: "punctuation.definition.string.end.json"
        }
      },
      name: "string.quoted.double.json",
      patterns: [{ include: "#stringcontent" }]
    },
    stringcontent: {
      patterns: [
        {
          match: '\\\\(?:["/\\\\bfnrt]|u\\h{4})',
          name: "constant.character.escape.json"
        },
        {
          match: "\\\\.",
          name: "invalid.illegal.unrecognized-string-escape.json"
        }
      ]
    },
    value: {
      patterns: [
        { include: "#constant" },
        { include: "#number" },
        { include: "#string" },
        { include: "#array" },
        { include: "#object" },
        { include: "#comments" }
      ]
    }
  }
};
var json_default = language;

// docs/.vitepress/theme/node/markdown/languages/lang.ts
var language2 = {
  scopeName: "source.lang",
  displayName: "Language",
  name: "lang",
  patterns: [
    { include: "#comment" },
    { include: "#property" },
    {
      match: ".",
      name: "invalid.illegal.lang"
    }
  ],
  repository: {
    comment: {
      begin: "#",
      end: "$",
      name: "comment.line.number-sign.lang"
    },
    property: {
      match: "^([^#=]+)(=)([^\\t#]+)",
      captures: {
        1: {
          name: "support.type.property-name.json.lang"
        },
        2: {
          name: "punctuation.separator.key-value.lang"
        },
        3: {
          patterns: [{ include: "#emoji" }, { include: "#linebreak" }, { include: "#variable" }],
          name: "string.unquoted.lang"
        }
      }
    },
    emoji: {
      match: ":[^:]+:",
      name: "constant.character.escape.lang"
    },
    linebreak: {
      patterns: [
        { match: "~LINEBREAK~", name: "constant.character.escape.lang" },
        { match: "\\n", name: "constant.character.escape.lang" }
      ]
    },
    variable: {
      patterns: [
        { match: "%(0|[1-9]\\d*)(\\$.)?", name: "constant.character.escape.lang" },
        { match: "%.?", name: "constant.character.escape.lang" }
      ]
    }
  }
};
var lang_default = language2;

// docs/.vitepress/theme/node/markdown/languages/molang.ts
var keywords = ["break", "continue", "return"];
var types = {
  array: {
    readonly: true
  },
  context: {
    alias: "c",
    readonly: true
  },
  geometry: {
    readonly: true
  },
  material: {
    readonly: true
  },
  math: {
    readonly: true
  },
  query: {
    alias: "q",
    readonly: true
  },
  temp: {
    alias: "t"
  },
  texture: {
    readonly: true
  },
  variable: {
    alias: "v"
  }
};
var language3 = {
  scopeName: "source.molang",
  displayName: "Molang",
  name: "molang",
  patterns: [
    { include: "#boolean" },
    { include: "#number" },
    { include: "#string" },
    { include: "#this" },
    { include: "#keywords" },
    { include: "#operators" },
    { include: "#function" },
    { include: "#types" },
    { include: "#comma" },
    { include: "#semicolon" }
  ],
  repository: {
    boolean: {
      match: "(?i)\\b(false|true)\\b",
      name: "constant.language.molang"
    },
    comma: {
      match: ",",
      name: "punctuation.separator.comma.molang"
    },
    function: {
      match: "\\b\\w+(?=\\()",
      name: "entity.name.function.molang"
    },
    keywords: {
      match: `(?i)\\b(${keywords.join("|")})\\b`,
      name: "keyword.control.molang"
    },
    number: {
      match: "(?i)(\\b|-)\\d+(\\.\\d+)?(e[+-]?\\d+)?f?\\b",
      name: "constant.numeric.molang"
    },
    operators: {
      match: "[!=<>]=?|[?:*/+-]|&&|\\|\\||\\?\\?|->",
      name: "keyword.operator.molang"
    },
    string: {
      begin: "'",
      beginCaptures: {
        "0": {
          name: "punctuation.definition.string.begin.molang"
        }
      },
      end: "'",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.end.molang"
        }
      },
      name: "string.quoted.single.molang"
    },
    semicolon: {
      match: ";",
      name: "punctuation.terminator.statement.molang"
    },
    this: {
      match: "(?i)\\bthis\\b",
      name: "variable.language.molang"
    },
    types: {
      patterns: [
        {
          match: `(?i)\\b(${getTypeKeywords().join("|")})(?=$|\\.)`,
          name: "storage.type.molang"
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(true).join("|")})\\.)\\w+`,
          name: "variable.other.constant.molang"
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(false).join("|")})\\.)\\w+`,
          name: "variable.other.readwrite.molang"
        }
      ]
    }
  }
};
function getTypeKeywords(readonlyValue) {
  const keywords2 = [];
  for (const type in types) {
    const { alias, readonly = false } = types[type];
    if (readonlyValue !== void 0 && readonlyValue !== readonly) continue;
    keywords2.push(type);
    if (!alias) continue;
    keywords2.push(alias);
  }
  return keywords2;
}
var molang_default = language3;

// docs/.vitepress/theme/node/markdown/languages/index.ts
var languages_default = [json_default, lang_default, molang_default];

// docs/.vitepress/theme/node/markdown/plugins/exampleFile.ts
import { readFileSync as readFileSync2 } from "fs";
import { join as join3 } from "path";
var exampleFilePattern = /^<ExampleFile\s+path="(?<path>[^"]*)"\s*\/>$/;
var exampleFilePlugin = (md) => {
  md.core.ruler.after("block", "example_file", ({ env, tokens, inlineMode }) => {
    if (inlineMode) return;
    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!token.type.startsWith("html_")) continue;
      const match = token.content.trim().match(exampleFilePattern);
      if (!match) continue;
      const props = match.groups;
      const example = getExampleForPage(env.relativePath);
      if (!example.files.includes(props.path)) {
        throw new Error(`Example file "${props.path}" does not exist.`);
      }
      const cacheFilePath = join3(examplesCacheDirectory, example.id, props.path);
      const buffer = readFileSync2(cacheFilePath);
      const link = filePageLink(env.relativePath.replace(/\.md$/, ""), props.path);
      const markdown = renderExampleFile(props.path, buffer, link);
      const newTokens = md.parse(markdown, env);
      tokens.splice(tokenIndex, 1, ...newTokens);
      tokenIndex += newTokens.length - 1;
    }
  });
};

// docs/.vitepress/theme/shared/assetPath.ts
var absolutePathPattern = /^(\/|[a-z]+:)/;
function assetPath(assetsDirectory, relativePath, path) {
  let assetPath2 = "";
  if (!absolutePathPattern.test(path)) {
    assetPath2 += `/assets/${assetsDirectory}/${relativePath.replace(/\.md$/, "/")}`;
  }
  assetPath2 += path;
  return assetPath2;
}

// docs/.vitepress/theme/node/markdown/plugins/image.ts
var imagePlugin = (md) => {
  const image = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    if (src) {
      token.attrSet("src", assetPath("images", env.relativePath, src));
    }
    return image(tokens, idx, options, env, self);
  };
};

// docs/.vitepress/theme/node/markdown/plugins/inlineHighlight.ts
import { bundledLanguages, createHighlighter } from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/shiki/dist/index.mjs";
var themes = {
  dark: "dark-plus",
  light: "light-plus"
};
var highlighter = await createHighlighter({
  themes: Object.values(themes),
  langs: [...Object.keys(bundledLanguages), languages_default]
});
var inlineHighlightPlugin = (md) => {
  md.renderer.rules.code_inline = (tokens, idx) => {
    const token = tokens[idx];
    const lang = token.attrGet("lang") ?? "txt";
    const highlighted = highlighter.codeToHtml(token.content, {
      lang,
      themes,
      structure: "inline",
      defaultColor: false
    });
    return `<code class="shiki">${highlighted}</code>`;
  };
};

// docs/.vitepress/theme/node/markdown/plugins/table/index.ts
import { readFileSync as readFileSync3 } from "fs";
import { join as join4 } from "path";

// docs/.vitepress/theme/shared/isObject.ts
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// docs/.vitepress/theme/node/markdown/plugins/table/parseTableValue.ts
function parseTableValue(value, md, env) {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    return md.renderInline(value, env);
  }
  if (typeof value === "number") {
    return value;
  }
  if (Array.isArray(value)) {
    const list = [];
    for (const item of value) {
      if (typeof item !== "string") {
        throw new TypeError(`Table list items must be strings.`);
      }
      list.push(md.renderInline(item, env));
    }
    return list;
  }
  throw new TypeError("Table value must be a boolean, number, string or array of strings.");
}

// docs/.vitepress/theme/node/markdown/plugins/table/parseTableColumn.ts
function parseTableColumn(id, data, md, env) {
  const column = {};
  if (!isObject(data)) {
    throw new TypeError(`Table column "${id}" must be an object.`);
  }
  if (!("name" in data)) {
    throw new TypeError(`Table column "${id}" must include a "name" field.`);
  } else if (typeof data.name !== "string") {
    throw new TypeError(`The "name" field of column "${id}" must be a string.`);
  }
  column.name = md.renderInline(data.name, env);
  if ("default" in data) {
    column.default = parseTableValue(data.default, md, env);
  }
  if ("sortable" in data) {
    if (typeof data.sortable !== "boolean") {
      throw new TypeError(`The "sortable" field of column "${id}" must be a boolean.`);
    }
    column.sortable = data.sortable;
  }
  if ("text_align" in data) {
    if (typeof data.text_align !== "string" || data.text_align !== "left" && data.text_align !== "center" && data.text_align !== "right") {
      throw new TypeError(
        `The "text_align" field of column "${id}" must be "left", "center" or "right".`
      );
    }
    column.textAlign = data.text_align;
  }
  return column;
}

// docs/.vitepress/theme/node/markdown/plugins/table/parseTableRow.ts
function parseTableRow(index, data, columns, md, env) {
  const row = {};
  if (!isObject(data)) {
    throw new TypeError(`Table row ${index} must be an object.`);
  }
  for (const columnId in data) {
    const column = columns[columnId];
    if (!column) {
      throw new TypeError(
        `Table row ${index} contains a value for the non-existent column "${columnId}".`
      );
    }
    const value = parseTableValue(data[columnId], md, env);
    if (column.sortable && Array.isArray(value)) {
      throw new TypeError(
        `Table row ${index} contains an array value for the column "${columnId}" which is not supported as that column is sortable.`
      );
    }
    row[columnId] = value;
  }
  return row;
}

// docs/.vitepress/theme/node/markdown/plugins/table/parseTable.ts
function parseTable(data, md, env) {
  const table = {
    columns: {},
    rows: []
  };
  if (!isObject(data)) {
    throw new TypeError("Tables must be an object.");
  }
  if (!("columns" in data)) {
    throw new TypeError('Tables must include a "columns" field.');
  } else if (!isObject(data.columns)) {
    throw new TypeError('Table "columns" field must be an object.');
  } else {
    for (const columnId in data.columns) {
      const column = data.columns[columnId];
      table.columns[columnId] = parseTableColumn(columnId, column, md, env);
    }
  }
  if (!("rows" in data)) {
    throw new TypeError('Tables must include a "rows" field.');
  } else if (!Array.isArray(data.rows)) {
    throw new TypeError('Table "rows" field must be an array.');
  } else {
    for (let index = 0; index < data.rows.length; index++) {
      const row = data.rows[index];
      table.rows.push(parseTableRow(index, row, table.columns, md, env));
    }
  }
  return table;
}

// docs/.vitepress/theme/node/markdown/plugins/table/index.ts
var publicDir = "docs/public";
var tablePattern = /^<Table\s+data="(?<data>[^"]*)"\s*\/>$/;
var dataDrivenTablePlugin = (md) => {
  md.core.ruler.after("block", "data_driven_table", ({ env, tokens, inlineMode }) => {
    if (inlineMode) return;
    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!token.type.startsWith("html_")) continue;
      const match = token.content.trim().match(tablePattern);
      if (!match) continue;
      const props = match.groups;
      const path = assetPath("tables", env.relativePath, props.data);
      const table = JSON.parse(readFileSync3(join4(publicDir, path), "utf-8"));
      env.frontmatter.__tables ??= {};
      env.frontmatter.__tables[path] = parseTable(table, md, env);
    }
  });
};

// docs/.vitepress/theme/node/markdown/plugins/index.ts
import taskListsPlugin from "file:///C:/Users/yjx12/Documents/Projects/bedrock-wiki-Chinese-translation/node_modules/markdown-it-task-lists/index.js";
var plugins_default = [
  exampleFilePlugin,
  imagePlugin,
  inlineHighlightPlugin,
  dataDrivenTablePlugin,
  taskListsPlugin
];

// docs/.vitepress/theme/node/markdown/config.ts
var headingLevels = [2, 3, 4, 5, 6];
var markdownConfig = {
  anchor: {
    level: headingLevels
  },
  headers: {
    level: headingLevels
  },
  math: true,
  languages: languages_default,
  lineNumbers: true,
  theme: {
    dark: "dark-plus",
    light: "light-plus"
  },
  config(md) {
    for (const plugin of plugins_default) md.use(plugin);
  }
};

// docs/.vitepress/theme/node/config.ts
var isFastBuild = process.env.FAST_BUILD === "true";
function defineWikiConfig(config) {
  const { title, description, fastBuild, ...themeConfig } = config;
  const srcExclude = ["public/*"];
  if (fastBuild && isFastBuild) {
    console.log(
      "[FAST_BUILD] Excluding the following large pages from this build:",
      fastBuild.excludedPages,
      "\n"
    );
    srcExclude.push(...fastBuild.excludedPages.map((path) => path.substring(1) + ".md"));
  }
  themeConfig.algolia.placeholder ??= `Search ${title}\u2026`;
  return defineConfigWithTheme({
    title,
    description,
    themeConfig,
    markdown: markdownConfig,
    head,
    transformHead,
    transformPageData,
    srcExclude,
    ignoreDeadLinks: isFastBuild ? fastBuild.excludedPages : void 0,
    cleanUrls: true,
    sitemap: {
      hostname: config.url
    },
    async buildEnd({ outDir }) {
      await copyExampleArchives(outDir);
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern"
          }
        }
      }
    }
  });
}

// docs/.vitepress/config.ts
var config_default = defineWikiConfig({
  title: "Bedrock Wiki",
  longTitle: "The Bedrock Wiki",
  description: "A knowledge-sharing website for technical features of Minecraft Bedrock.",
  url: "https://wiki.bedrock.dev",
  repository: "https://github.com/Bedrock-OSS/bedrock-wiki",
  branch: "wiki",
  examples: {
    repository: "https://github.com/Bedrock-OSS/bedrock-examples",
    branch: "main"
  },
  algolia: {
    appId: "N9ZHAYJQII",
    apiKey: "a664f5a5da631810a08e1a48554fe523",
    indexName: "wiki-bedrock"
  },
  navigation: [
    {
      text: "Discord",
      link: "/discord"
    },
    {
      text: "Contribute",
      link: "/contribute"
    },
    {
      text: "bedrock.dev",
      link: "https://bedrock.dev"
    },
    {
      text: "MS Learn",
      link: "https://learn.microsoft.com/minecraft/creator/"
    }
  ],
  fastBuild: {
    excludedPages: [
      "/entities/vanilla-usage-components",
      "/entities/vanilla-usage-spawn-rules",
      "/entities/vuc-full",
      "/entities/vusr-full",
      "/text/fonts"
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvY29uZmlnLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL3BhZ2UvaGVhZC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9wYWdlL3RyYW5zZm9ybUhlYWQudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvZXhhbXBsZXMvZmlsZVBhdGhzLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL2V4YW1wbGVzL21hcmtkb3duLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL2V4YW1wbGVzL2FyY2hpdmUudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvZXhhbXBsZXMvZGF0YS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9yb3V0ZXMudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3NoYXJlZC9maWxlUGFnZUxpbmsudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvZXhhbXBsZXMvZmlsZVBhZ2UudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvZXhhbXBsZXMvbWFwLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL3BhZ2UvdHJhbnNmb3JtUGFnZURhdGEudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vbGFuZ3VhZ2VzL2pzb24udHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vbGFuZ3VhZ2VzL2xhbmcudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vbGFuZ3VhZ2VzL21vbGFuZy50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9sYW5ndWFnZXMvaW5kZXgudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vcGx1Z2lucy9leGFtcGxlRmlsZS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvc2hhcmVkL2Fzc2V0UGF0aC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL2ltYWdlLnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvaW5saW5lSGlnaGxpZ2h0LnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvdGFibGUvaW5kZXgudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3NoYXJlZC9pc09iamVjdC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL3RhYmxlL3BhcnNlVGFibGVWYWx1ZS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL3RhYmxlL3BhcnNlVGFibGVDb2x1bW4udHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vcGx1Z2lucy90YWJsZS9wYXJzZVRhYmxlUm93LnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvdGFibGUvcGFyc2VUYWJsZS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL2luZGV4LnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5cclxuaW1wb3J0IHsgVGhlbWVDb25maWcsIFdpa2lDb25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGhlYWQsIHRyYW5zZm9ybUhlYWQsIHRyYW5zZm9ybVBhZ2VEYXRhIH0gZnJvbSBcIi4vcGFnZVwiO1xyXG5pbXBvcnQgeyBtYXJrZG93bkNvbmZpZyBhcyBtYXJrZG93biB9IGZyb20gXCIuL21hcmtkb3duXCI7XHJcbmltcG9ydCB7IGNvcHlFeGFtcGxlQXJjaGl2ZXMgfSBmcm9tIFwiLi9leGFtcGxlc1wiO1xyXG5cclxuY29uc3QgaXNGYXN0QnVpbGQgPSBwcm9jZXNzLmVudi5GQVNUX0JVSUxEID09PSBcInRydWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVXaWtpQ29uZmlnKGNvbmZpZzogV2lraUNvbmZpZykge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBmYXN0QnVpbGQsIC4uLnRoZW1lQ29uZmlnIH0gPSBjb25maWc7XHJcblxyXG4gIGNvbnN0IHNyY0V4Y2x1ZGUgPSBbXCJwdWJsaWMvKlwiXTtcclxuXHJcbiAgaWYgKGZhc3RCdWlsZCAmJiBpc0Zhc3RCdWlsZCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiW0ZBU1RfQlVJTERdIEV4Y2x1ZGluZyB0aGUgZm9sbG93aW5nIGxhcmdlIHBhZ2VzIGZyb20gdGhpcyBidWlsZDpcIixcclxuICAgICAgZmFzdEJ1aWxkLmV4Y2x1ZGVkUGFnZXMsXHJcbiAgICAgIFwiXFxuXCJcclxuICAgICk7XHJcblxyXG4gICAgc3JjRXhjbHVkZS5wdXNoKC4uLmZhc3RCdWlsZC5leGNsdWRlZFBhZ2VzLm1hcCgocGF0aCkgPT4gcGF0aC5zdWJzdHJpbmcoMSkgKyBcIi5tZFwiKSk7XHJcbiAgfVxyXG5cclxuICB0aGVtZUNvbmZpZy5hbGdvbGlhLnBsYWNlaG9sZGVyID8/PSBgU2VhcmNoICR7dGl0bGV9XHUyMDI2YDtcclxuXHJcbiAgcmV0dXJuIGRlZmluZUNvbmZpZ1dpdGhUaGVtZTxUaGVtZUNvbmZpZz4oe1xyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHRoZW1lQ29uZmlnLFxyXG4gICAgbWFya2Rvd24sXHJcblxyXG4gICAgaGVhZCxcclxuICAgIHRyYW5zZm9ybUhlYWQsXHJcbiAgICB0cmFuc2Zvcm1QYWdlRGF0YSxcclxuXHJcbiAgICBzcmNFeGNsdWRlLFxyXG4gICAgaWdub3JlRGVhZExpbmtzOiBpc0Zhc3RCdWlsZCA/IGZhc3RCdWlsZC5leGNsdWRlZFBhZ2VzIDogdW5kZWZpbmVkLFxyXG5cclxuICAgIGNsZWFuVXJsczogdHJ1ZSxcclxuICAgIHNpdGVtYXA6IHtcclxuICAgICAgaG9zdG5hbWU6IGNvbmZpZy51cmwsXHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGJ1aWxkRW5kKHsgb3V0RGlyIH0pIHtcclxuICAgICAgYXdhaXQgY29weUV4YW1wbGVBcmNoaXZlcyhvdXREaXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICB2aXRlOiB7XHJcbiAgICAgIGNzczoge1xyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgICAgYXBpOiBcIm1vZGVyblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxwYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxccGFnZVxcXFxoZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvcGFnZS9oZWFkLnRzXCI7aW1wb3J0IHsgSGVhZENvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXHJcbiAgW1xyXG4gICAgXCJsaW5rXCIsXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJpY29uXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJhcHBsZS10b3VjaC1pY29uXCIsXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJpY29uXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcclxuICAgICAgc2l6ZXM6IFwiMTgweDE4MFwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIFwibWFzay1pY29uXCIsXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJpY29uXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIsXHJcbiAgICAgIGNvbG9yOiBcIiM2MGMzZmFcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIm1ldGFcIixcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ0aGVtZS1jb2xvclwiLFxyXG4gICAgICBjb250ZW50OiBcIiM2MGMzZmFcIixcclxuICAgIH0sXHJcbiAgXSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxccGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXHBhZ2VcXFxcdHJhbnNmb3JtSGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL3BhZ2UvdHJhbnNmb3JtSGVhZC50c1wiO2ltcG9ydCB7IEhlYWRDb25maWcsIFRyYW5zZm9ybUNvbnRleHQgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSGVhZCh7IHBhZ2VEYXRhLCBzaXRlQ29uZmlnIH06IFRyYW5zZm9ybUNvbnRleHQpIHtcclxuICBjb25zdCBjb25maWcgPSBzaXRlQ29uZmlnLnNpdGU7XHJcbiAgY29uc3Qgc2l0ZSA9IGNvbmZpZy50aXRsZTtcclxuXHJcbiAgY29uc3QgeyBmcm9udG1hdHRlciwgcmVsYXRpdmVQYXRoIH0gPSBwYWdlRGF0YTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBmcm9udG1hdHRlci50aXRsZSA/PyBjb25maWcudGhlbWVDb25maWcubG9uZ1RpdGxlID8/IGNvbmZpZy50aXRsZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZyb250bWF0dGVyLmRlc2NyaXB0aW9uID8/IGNvbmZpZy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBgJHtjb25maWcudGhlbWVDb25maWcudXJsfS9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28ucG5nYDtcclxuXHJcbiAgY29uc3QgcGF0aCA9IHJlbGF0aXZlUGF0aC5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpO1xyXG5cclxuICBsZXQgdXJsID0gY29uZmlnLnRoZW1lQ29uZmlnLnVybDtcclxuICBpZiAocGF0aCAhPT0gXCJpbmRleFwiKSB1cmwgKz0gYC8ke3BhdGh9YDtcclxuXHJcbiAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIC8vIE9wZW4gR3JhcGggKHVzZWQgYnkgRGlzY29yZClcclxuICAgIFwib2c6dHlwZVwiOiBcIndlYnNpdGVcIixcclxuICAgIFwib2c6dGl0bGVcIjogdGl0bGUsXHJcbiAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxyXG4gICAgXCJvZzppbWFnZVwiOiBpbWFnZSxcclxuICAgIFwib2c6dXJsXCI6IHVybCxcclxuICAgIFwib2c6c2l0ZV9uYW1lXCI6IHNpdGUsXHJcbiAgICAvLyBUd2l0dGVyXHJcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlcIixcclxuICAgIFwidHdpdHRlcjp0aXRsZVwiOiB0aXRsZSxcclxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcclxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBpbWFnZSxcclxuICAgIFwidHdpdHRlcjpzaXRlXCI6IHNpdGUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3V0OiBIZWFkQ29uZmlnW10gPSBbXTtcclxuXHJcbiAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW25hbWUsIGNvbnRlbnRdKSA9PiB7XHJcbiAgICBvdXQucHVzaChbXHJcbiAgICAgIFwibWV0YVwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcZXhhbXBsZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxleGFtcGxlc1xcXFxmaWxlUGF0aHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9maWxlUGF0aHMudHNcIjtpbXBvcnQgeyBEaXJlbnQsIHJlYWRkaXJTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IG1pbmltYXRjaCB9IGZyb20gXCJtaW5pbWF0Y2hcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG4vKipcclxuICogLSBSZXBsYWNlcyBgXFxgIHdpdGggYC9gXHJcbiAqIC0gUmVwbGFjZXMgYGJwYCB3aXRoIGBCUGBcclxuICogLSBSZXBsYWNlcyBgcnBgIHdpdGggYFJQYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUZpbGVQYXRoKHBhdGg6IHN0cmluZykge1xyXG4gIHJldHVybiBwYXRoXHJcbiAgICAucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpXHJcbiAgICAucmVwbGFjZSgvXnJwKD89XFwvfCQpLywgXCJSUFwiKVxyXG4gICAgLnJlcGxhY2UoL15icCg/PVxcL3wkKS8sIFwiQlBcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTb3J0cyBhIHtAbGluayBEaXJlbnR9IGFycmF5LCBwbGFjaW5nIGVudHJpZXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHdpdGggZGlyZWN0b3JpZXMgYmVmb3JlIGZpbGVzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgbXV0YXRlZCBgZW50cmllc2AgYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydERpcmVjdG9yeUVudHJpZXMoZW50cmllczogRGlyZW50W10pIHtcclxuICByZXR1cm4gZW50cmllcy5zb3J0KChlbnRyeUEsIGVudHJ5QikgPT4ge1xyXG4gICAgY29uc3QgaXNFbnRyeUFEaXJlY3RvcnkgPSBlbnRyeUEuaXNEaXJlY3RvcnkoKTtcclxuICAgIGNvbnN0IGlzRW50cnlCRGlyZWN0b3J5ID0gZW50cnlCLmlzRGlyZWN0b3J5KCk7XHJcblxyXG4gICAgaWYgKGlzRW50cnlBRGlyZWN0b3J5ICYmICFpc0VudHJ5QkRpcmVjdG9yeSkgcmV0dXJuIC0xO1xyXG4gICAgZWxzZSBpZiAoIWlzRW50cnlBRGlyZWN0b3J5ICYmIGlzRW50cnlCRGlyZWN0b3J5KSByZXR1cm4gMTtcclxuXHJcbiAgICByZXR1cm4gZW50cnlBLm5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUIubmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGaWxlUGF0aE9wdGlvbnMge1xyXG4gIGlnbm9yZWQ/OiBzdHJpbmc7XHJcbiAgc29ydD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyBBIHNvcnRlZCBhcnJheSBvZiBmaWxlIHBhdGhzIHJlbGF0aXZlIHRvIGBkaXJlY3RvcnlgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVQYXRocyhkaXJlY3Rvcnk6IHN0cmluZywgb3B0aW9uczogRmlsZVBhdGhPcHRpb25zID0ge30pIHtcclxuICBjb25zdCBwYXRoczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcmVzb2x2ZVBhdGhzKCk7XHJcbiAgcmV0dXJuIHBhdGhzO1xyXG5cclxuICBmdW5jdGlvbiByZXNvbHZlUGF0aHMocmVsYXRpdmVQYXRoOiBzdHJpbmcgPSBcIi5cIikge1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gam9pbihkaXJlY3RvcnksIHJlbGF0aXZlUGF0aCk7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoYWJzb2x1dGVQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuc29ydCkgc29ydERpcmVjdG9yeUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGpvaW4ocmVsYXRpdmVQYXRoLCBlbnRyeS5uYW1lKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgcmVzb2x2ZVBhdGhzKGVudHJ5UGF0aCk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmlnbm9yZWQgJiYgbWluaW1hdGNoKGVudHJ5UGF0aCwgb3B0aW9ucy5pZ25vcmVkKSkgY29udGludWU7XHJcblxyXG4gICAgICBwYXRocy5wdXNoKGVudHJ5UGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXGV4YW1wbGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcZXhhbXBsZXNcXFxcbWFya2Rvd24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9tYXJrZG93bi50c1wiO2ltcG9ydCB7IGV4dG5hbWUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBQTkcgfSBmcm9tIFwicG5nanNcIjtcclxuaW1wb3J0IFRHQSBmcm9tIFwidGdhXCI7XHJcblxyXG5jb25zdCBmZW5jZUNoYXIgPSBcImBcIjtcclxuXHJcbmNvbnN0IGltYWdlVHlwZXMgPSBbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwidGdhXCJdO1xyXG5jb25zdCB1bnN1cHBvcnRlZFR5cGVzID0gW1wibWNzdHJ1Y3R1cmVcIl07XHJcblxyXG5jb25zdCB2aWV3RmlsZVRvb2x0aXAgPSBcIlZpZXcgRmlsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV4YW1wbGVGaWxlKHBhdGg6IHN0cmluZywgYnVmZmVyOiBCdWZmZXIsIGxpbms/OiBzdHJpbmcpIHtcclxuICBsZXQgdHlwZSA9IGV4dG5hbWUocGF0aCkuc3Vic3RyaW5nKDEpO1xyXG5cclxuICBpZiAoaW1hZ2VUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgaWYgKHR5cGUgPT09IFwianBnXCIpIHtcclxuICAgICAgdHlwZSA9IFwianBlZ1wiO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRnYVwiKSB7XHJcbiAgICAgIGJ1ZmZlciA9IHRnYVRvUG5nKGJ1ZmZlcik7XHJcbiAgICAgIHR5cGUgPSBcInBuZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGBkYXRhOmltYWdlLyR7dHlwZX07YmFzZTY0LCR7YnVmZmVyLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWA7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlckltYWdlRmlsZShwYXRoLCB1cmwsIGxpbmspO1xyXG4gIH1cclxuXHJcbiAgaWYgKHVuc3VwcG9ydGVkVHlwZXMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgIHJldHVybiByZW5kZXJDb2RlRmlsZShwYXRoLCBcIlwiLCBcIkNhbm5vdCBkaXNwbGF5IHRoaXMgZmlsZSB0eXBlLlwiLCBsaW5rKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZW5kZXJDb2RlRmlsZShwYXRoLCB0eXBlLCBidWZmZXIudG9TdHJpbmcoKSwgbGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvZGVGaWxlKHBhdGg6IHN0cmluZywgbGFuZzogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIGxpbms/OiBzdHJpbmcpIHtcclxuICBpZiAobGluaykgcGF0aCA9IGA8YSBocmVmPVwiJHtsaW5rfVwiIHRpdGxlPVwiJHt2aWV3RmlsZVRvb2x0aXB9XCI+JHtwYXRofTwvYT5gO1xyXG5cclxuICBpZiAobGFuZyA9PT0gXCJtYXRlcmlhbFwiKSBsYW5nID0gXCJqc29uXCI7XHJcbiAgZWxzZSBpZiAobGFuZyA9PT0gXCJtY2Z1bmN0aW9uXCIpIGxhbmcgPSBcIlwiOyAvLyBObyBzeW50YXggaGlnaGxpZ2h0aW5nXHJcblxyXG4gIGNvbnN0IGZlbmNlID0gZ2V0Q29kZUZlbmNlKGNvZGUpO1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgLy9cclxuICAgIFwiPENvZGVIZWFkZXI+XCIgKyBwYXRoICsgXCI8L0NvZGVIZWFkZXI+XCIsXHJcbiAgICBcIlwiLFxyXG4gICAgZmVuY2UgKyBsYW5nLFxyXG4gICAgY29kZSxcclxuICAgIGZlbmNlLFxyXG4gIF0uam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29kZUZlbmNlKGNvZGU6IHN0cmluZykge1xyXG4gIGxldCBtYXhDb3VudCA9IDA7XHJcbiAgbGV0IGN1cnJlbnRDb3VudCA9IDA7XHJcblxyXG4gIGZvciAoY29uc3QgY2hhciBvZiBjb2RlKSB7XHJcbiAgICBpZiAoY2hhciA9PT0gZmVuY2VDaGFyKSB7XHJcbiAgICAgIGN1cnJlbnRDb3VudCsrO1xyXG4gICAgICBpZiAoY3VycmVudENvdW50ID4gbWF4Q291bnQpIHtcclxuICAgICAgICBtYXhDb3VudCA9IGN1cnJlbnRDb3VudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudENvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZlbmNlTGVuZ3RoID0gTWF0aC5tYXgoMywgbWF4Q291bnQgKyAxKTtcclxuXHJcbiAgcmV0dXJuIGZlbmNlQ2hhci5yZXBlYXQoZmVuY2VMZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJbWFnZUZpbGUocGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZywgbGluaz86IHN0cmluZykge1xyXG4gIHJldHVybiBgPFdpa2lJbWFnZSBzcmM9XCIke3VybH1cIiBhbHQ9XCJcIiBjYXB0aW9uPVwiJHtwYXRofVwiJHtsaW5rID8gYCBsaW5rPVwiJHtsaW5rfVwiIHRpdGxlPVwiJHt2aWV3RmlsZVRvb2x0aXB9XCJgIDogXCJcIn0gcGl4ZWxhdGVkIC8+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGdhVG9QbmcoYnVmZmVyOiBCdWZmZXIpIHtcclxuICBjb25zdCB0Z2EgPSBuZXcgVEdBKGJ1ZmZlciwgeyBkb250Rml4QWxwaGE6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IHBuZyA9IG5ldyBQTkcoe1xyXG4gICAgd2lkdGg6IHRnYS53aWR0aCxcclxuICAgIGhlaWdodDogdGdhLmhlaWdodCxcclxuICB9KTtcclxuXHJcbiAgcG5nLmRhdGEgPSB0Z2EucGl4ZWxzO1xyXG5cclxuICByZXR1cm4gUE5HLnN5bmMud3JpdGUocG5nKTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxleGFtcGxlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXGV4YW1wbGVzXFxcXGFyY2hpdmUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9hcmNoaXZlLnRzXCI7aW1wb3J0IHsgY29weUZpbGVTeW5jLCBjcmVhdGVXcml0ZVN0cmVhbSwgbWtkaXJTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IGRpcm5hbWUsIGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBnbG9iSXRlcmF0ZSB9IGZyb20gXCJnbG9iXCI7XHJcbmltcG9ydCBhcmNoaXZlciBmcm9tIFwiYXJjaGl2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGFyY2hpdmVzQ2FjaGVEaXJlY3RvcnkgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXhhbXBsZUFyY2hpdmUocGF0aDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXJjaGl2ZVBhdGggPSBqb2luKGFyY2hpdmVzQ2FjaGVEaXJlY3RvcnksIHBhdGggKyBcIi56aXBcIik7XHJcblxyXG4gIG1rZGlyU3luYyhkaXJuYW1lKGFyY2hpdmVQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IGFyY2hpdmVTdHJlYW0gPSBjcmVhdGVXcml0ZVN0cmVhbShhcmNoaXZlUGF0aCk7XHJcbiAgY29uc3QgYXJjaGl2ZSA9IGFyY2hpdmVyKFwiemlwXCIpO1xyXG5cclxuICBhcmNoaXZlLnBpcGUoYXJjaGl2ZVN0cmVhbSk7XHJcblxyXG4gIHJldHVybiBhcmNoaXZlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29weUV4YW1wbGVBcmNoaXZlcyhvdXRwdXREaXJlY3Rvcnk6IHN0cmluZykge1xyXG4gIGNvbnN0IGFyY2hpdmVQYXRoSXRlcmF0b3IgPSBnbG9iSXRlcmF0ZShcIioqLyouemlwXCIsIHsgY3dkOiBhcmNoaXZlc0NhY2hlRGlyZWN0b3J5IH0pO1xyXG5cclxuICBmb3IgYXdhaXQgKGNvbnN0IHJlbGF0aXZlUGF0aCBvZiBhcmNoaXZlUGF0aEl0ZXJhdG9yKSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBqb2luKGFyY2hpdmVzQ2FjaGVEaXJlY3RvcnksIHJlbGF0aXZlUGF0aCk7XHJcbiAgICBjb25zdCBvdXRwdXRQYXRoID0gam9pbihvdXRwdXREaXJlY3RvcnksIHJlbGF0aXZlUGF0aCk7XHJcblxyXG4gICAgY29weUZpbGVTeW5jKGFic29sdXRlUGF0aCwgb3V0cHV0UGF0aCk7XHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXGV4YW1wbGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcZXhhbXBsZXNcXFxcZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL2V4YW1wbGVzL2RhdGEudHNcIjtpbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlc1NvdXJjZURpcmVjdG9yeSA9IHJlc29sdmUoXCJleGFtcGxlcy9yZXNvdXJjZXNcIik7XHJcblxyXG5jb25zdCBjYWNoZURpcmVjdG9yeSA9IHJlc29sdmUoXCJkb2NzLy52aXRlcHJlc3MvY2FjaGVcIik7XHJcbmV4cG9ydCBjb25zdCBleGFtcGxlc0NhY2hlRGlyZWN0b3J5ID0gam9pbihjYWNoZURpcmVjdG9yeSwgXCJleGFtcGxlc1wiKTtcclxuZXhwb3J0IGNvbnN0IGFyY2hpdmVzQ2FjaGVEaXJlY3RvcnkgPSBqb2luKGNhY2hlRGlyZWN0b3J5LCBcImFyY2hpdmVzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4YW1wbGVNYXBGaWxlUGF0aCA9IGpvaW4oZXhhbXBsZXNDYWNoZURpcmVjdG9yeSwgXCJtYXAuanNvblwiKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcZXhhbXBsZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxleGFtcGxlc1xcXFxyb3V0ZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9yb3V0ZXMudHNcIjtpbXBvcnQgeyBleGlzdHNTeW5jLCBta2RpclN5bmMsIHJlYWRGaWxlU3luYywgcm1TeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IGJhc2VuYW1lLCBqb2luLCByZWxhdGl2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGdsb2JJdGVyYXRlIH0gZnJvbSBcImdsb2JcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGdldEZpbGVQYXRocywgdHJhbnNmb3JtRmlsZVBhdGggfSBmcm9tIFwiLi9maWxlUGF0aHNcIjtcclxuaW1wb3J0IHsgRmlsZVBhZ2UsIGdldEZpbGVQYWdlSXRlcmF0b3IgfSBmcm9tIFwiLi9maWxlUGFnZVwiO1xyXG5pbXBvcnQgeyBFeGFtcGxlLCBGaWxlUGFnZVBhcmFtcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGV4YW1wbGVzU291cmNlRGlyZWN0b3J5LFxyXG4gIGFyY2hpdmVzQ2FjaGVEaXJlY3RvcnksXHJcbiAgZXhhbXBsZXNDYWNoZURpcmVjdG9yeSxcclxuICBleGFtcGxlTWFwRmlsZVBhdGgsXHJcbn0gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyBsb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcclxuXHJcbmNvbnN0IG1ldGFGaWxlTmFtZSA9IFwibWV0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0aHMoKSB7XHJcbiAgaWYgKCFleGlzdHNTeW5jKGV4YW1wbGVzU291cmNlRGlyZWN0b3J5KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnVGhlIGV4YW1wbGVzIHJlcG9zaXRvcnkgaXMgbWlzc2luZy4gWW91IG1heSBuZWVkIHRvIHJ1biBcImdpdCBzdWJtb2R1bGUgdXBkYXRlIC0taW5pdFwiLidcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBybVN5bmMoYXJjaGl2ZXNDYWNoZURpcmVjdG9yeSwgeyBmb3JjZTogdHJ1ZSwgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gIHJtU3luYyhleGFtcGxlc0NhY2hlRGlyZWN0b3J5LCB7IGZvcmNlOiB0cnVlLCByZWN1cnNpdmU6IHRydWUgfSk7XHJcblxyXG4gIG1rZGlyU3luYyhleGFtcGxlc0NhY2hlRGlyZWN0b3J5LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgY29uc3QgZXhhbXBsZU1hcDogUmVjb3JkPHN0cmluZywgRXhhbXBsZT4gPSB7fTtcclxuXHJcbiAgY29uc3QgcGFnZXM6IEZpbGVQYWdlW10gPSBbXTtcclxuXHJcbiAgY29uc3QgcGF0aEl0ZXJhdG9yID0gZ2xvYkl0ZXJhdGUoW1wiZG9jcy8qKi8qLm1kXCIsIFwiZG9jcy8qL3NlY3Rpb24ueWFtbFwiXSwge1xyXG4gICAgaWdub3JlOiBbXCJkb2NzLyoqLypbKi5tZFwiLCBcImRvY3MvcHVibGljLypcIl0sXHJcbiAgfSk7XHJcblxyXG4gIGZvciBhd2FpdCAoY29uc3QgcGF0aCBvZiBwYXRoSXRlcmF0b3IpIHtcclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gcmVhZEZpbGVTeW5jKHBhdGgsIFwidXRmLThcIik7XHJcblxyXG4gICAgbGV0IHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsZXQgZXhhbXBsZUlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgaXNTZWN0aW9uID0gYmFzZW5hbWUocGF0aCkgPT09IFwic2VjdGlvbi55YW1sXCI7XHJcblxyXG4gICAgaWYgKGlzU2VjdGlvbikge1xyXG4gICAgICBjb25zdCBzZWN0aW9uOiBhbnkgPSBsb2FkKGZpbGVDb250ZW50KTtcclxuXHJcbiAgICAgIHRpdGxlID0gc2VjdGlvbi50aXRsZTtcclxuICAgICAgZXhhbXBsZUlkID0gc2VjdGlvbi5leGFtcGxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBtYXR0ZXIoZmlsZUNvbnRlbnQpO1xyXG5cclxuICAgICAgdGl0bGUgPSBmcm9udG1hdHRlci5kYXRhLnRpdGxlO1xyXG4gICAgICBleGFtcGxlSWQgPSBmcm9udG1hdHRlci5kYXRhLmV4YW1wbGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFleGFtcGxlSWQpIGNvbnRpbnVlO1xyXG5cclxuICAgIGNvbnN0IGZpbGVzRGlyZWN0b3J5ID0gam9pbihleGFtcGxlc1NvdXJjZURpcmVjdG9yeSwgZXhhbXBsZUlkKTtcclxuXHJcbiAgICBpZiAoIWV4aXN0c1N5bmMoZmlsZXNEaXJlY3RvcnkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGV4YW1wbGVzIGRpcmVjdG9yeSBcIiR7ZXhhbXBsZUlkfVwiIGRvZXMgbm90IGV4aXN0LmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVzRGlyZWN0b3J5TWV0YVBhdGggPSBqb2luKGZpbGVzRGlyZWN0b3J5LCBtZXRhRmlsZU5hbWUpO1xyXG5cclxuICAgIGlmICghZXhpc3RzU3luYyhmaWxlc0RpcmVjdG9yeU1ldGFQYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFRoZSBleGFtcGxlcyBkaXJlY3RvcnkgXCIke2V4YW1wbGVJZH1cIiBkb2VzIG5vdCBjb250YWluIGEgXCIke21ldGFGaWxlTmFtZX1cIiBmaWxlLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKGZpbGVzRGlyZWN0b3J5TWV0YVBhdGgsIFwidXRmLThcIikpO1xyXG5cclxuICAgIGNvbnN0IHJvb3RQYXRoID0gcmVsYXRpdmUoXCJkb2NzXCIsIHBhdGgpXHJcbiAgICAgIC5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIilcclxuICAgICAgLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXC9zZWN0aW9uXFwueWFtbCQvLCBcIlwiKTtcclxuXHJcbiAgICBjb25zdCBmaWxlUGF0aHMgPSBnZXRGaWxlUGF0aHMoZmlsZXNEaXJlY3RvcnksIHtcclxuICAgICAgaWdub3JlZDogbWV0YUZpbGVOYW1lLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXhhbXBsZTogRXhhbXBsZSA9IHtcclxuICAgICAgaWQ6IGV4YW1wbGVJZCxcclxuICAgICAgZmlsZXM6IGZpbGVQYXRocy5tYXAodHJhbnNmb3JtRmlsZVBhdGgpLFxyXG4gICAgICBhcmNoaXZlOiB7XHJcbiAgICAgICAgcm9vdDogdHJhbnNmb3JtRmlsZVBhdGgobWV0YWRhdGEuYXJjaGl2ZV9yb290ID8/IFwiXCIpLFxyXG4gICAgICAgIHR5cGU6IG1ldGFkYXRhLnR5cGUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGV4YW1wbGVNYXBbcm9vdFBhdGhdID0gZXhhbXBsZTtcclxuXHJcbiAgICBjb25zdCByb290OiBGaWxlUGFnZVBhcmFtc1tcInJvb3RcIl0gPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBwYXRoOiByb290UGF0aCxcclxuICAgICAgdHlwZTogaXNTZWN0aW9uID8gXCJzZWN0aW9uXCIgOiBcInBhZ2VcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZUl0ZXJhdG9yID0gZ2V0RmlsZVBhZ2VJdGVyYXRvcih7XHJcbiAgICAgIGZpbGVzRGlyZWN0b3J5LFxyXG4gICAgICBmaWxlUGF0aHMsXHJcbiAgICAgIGV4YW1wbGUsXHJcbiAgICAgIHJvb3QsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwYWdlcy5wdXNoKC4uLnBhZ2VJdGVyYXRvcik7XHJcbiAgfVxyXG5cclxuICB3cml0ZUZpbGVTeW5jKGV4YW1wbGVNYXBGaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZXhhbXBsZU1hcCwgbnVsbCwgMikpO1xyXG5cclxuICByZXR1cm4gcGFnZXM7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHNoYXJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxzaGFyZWRcXFxcZmlsZVBhZ2VMaW5rLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL3NoYXJlZC9maWxlUGFnZUxpbmsudHNcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWxlUGFnZUxpbmsocm9vdDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYC8ke3Jvb3R9L2ZpbGVzLyR7cGF0aH1gO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXGV4YW1wbGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcZXhhbXBsZXNcXFxcZmlsZVBhZ2UudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9leGFtcGxlcy9maWxlUGFnZS50c1wiO2ltcG9ydCB7IHJlYWRGaWxlU3luYywgbWtkaXJTeW5jLCBjb3B5RmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgam9pbiwgZGlybmFtZSwgYmFzZW5hbWUsIHJlbGF0aXZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgQXJjaGl2ZXIgfSBmcm9tIFwiYXJjaGl2ZXJcIjtcclxuXHJcbmltcG9ydCBmaWxlUGFnZUxpbmsgZnJvbSBcIi4uLy4uL3NoYXJlZC9maWxlUGFnZUxpbmtcIjtcclxuaW1wb3J0IHsgRXhhbXBsZSwgRmlsZVBhZ2VQYXJhbXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUV4YW1wbGVBcmNoaXZlIH0gZnJvbSBcIi4vYXJjaGl2ZVwiO1xyXG5pbXBvcnQgeyBleGFtcGxlc0NhY2hlRGlyZWN0b3J5IH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1GaWxlUGF0aCB9IGZyb20gXCIuL2ZpbGVQYXRoc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJFeGFtcGxlRmlsZSB9IGZyb20gXCIuL21hcmtkb3duXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVQYWdlIHtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBGaWxlUGFnZVBhcmFtcztcclxufVxyXG5cclxuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRGaWxlUGFnZUl0ZXJhdG9yKHtcclxuICBmaWxlc0RpcmVjdG9yeSxcclxuICBmaWxlUGF0aHMsXHJcbiAgZXhhbXBsZSxcclxuICByb290LFxyXG59OiB7XHJcbiAgZmlsZXNEaXJlY3Rvcnk6IHN0cmluZztcclxuICBmaWxlUGF0aHM6IHN0cmluZ1tdO1xyXG4gIGV4YW1wbGU6IEV4YW1wbGU7XHJcbiAgcm9vdDogRmlsZVBhZ2VQYXJhbXNbXCJyb290XCJdO1xyXG59KSB7XHJcbiAgLy8gU2V0IHVwIGFyY2hpdmUgKGRvd25sb2FkIGxpbmtzIHdpbGwgbm90IHdvcmsgaW4gZGV2ZWxvcG1lbnQgYnVpbGRzKVxyXG4gIGxldCBhcmNoaXZlOiBBcmNoaXZlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgYXJjaGl2ZSA9IGNyZWF0ZUV4YW1wbGVBcmNoaXZlKHJvb3QucGF0aCk7XHJcbiAgfVxyXG5cclxuICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBmaWxlIGluIHRoZSBleGFtcGxlXHJcbiAgZm9yIChjb25zdCBmaWxlUGF0aCBvZiBmaWxlUGF0aHMpIHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihmaWxlc0RpcmVjdG9yeSwgZmlsZVBhdGgpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybWVkRmlsZVBhdGggPSB0cmFuc2Zvcm1GaWxlUGF0aChmaWxlUGF0aCk7XHJcbiAgICBjb25zdCBidWZmZXIgPSByZWFkRmlsZVN5bmMoZnVsbFBhdGgpO1xyXG5cclxuICAgIGNvbnN0IGNhY2hlUGF0aCA9IGpvaW4oZXhhbXBsZXNDYWNoZURpcmVjdG9yeSwgZXhhbXBsZS5pZCwgdHJhbnNmb3JtZWRGaWxlUGF0aCk7XHJcblxyXG4gICAgbWtkaXJTeW5jKGRpcm5hbWUoY2FjaGVQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICBjb3B5RmlsZVN5bmMoZnVsbFBhdGgsIGNhY2hlUGF0aCk7XHJcblxyXG4gICAgY29uc3QgYXJjaGl2ZUZpbGVQYXRoID0gdHJhbnNmb3JtRmlsZVBhdGgocmVsYXRpdmUoZXhhbXBsZS5hcmNoaXZlLnJvb3QsIHRyYW5zZm9ybWVkRmlsZVBhdGgpKTtcclxuXHJcbiAgICBpZiAoIWFyY2hpdmVGaWxlUGF0aC5zdGFydHNXaXRoKFwiLi4vXCIpKSB7XHJcbiAgICAgIGFyY2hpdmU/LmFwcGVuZChidWZmZXIsIHsgbmFtZTogYXJjaGl2ZUZpbGVQYXRoIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZyb250bWF0dGVyID0ge1xyXG4gICAgICB0aXRsZTogYCR7dHJhbnNmb3JtZWRGaWxlUGF0aH0gfCAke3Jvb3QudGl0bGV9YCxcclxuICAgICAgc2hvd19jb250cmlidXRvcnM6IGZhbHNlLFxyXG4gICAgICBsaWNlbnNlOiB7IGNvZGU6IFwiTUlUXCIgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IFtcclxuICAgICAgXCItLS1cIixcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoZnJvbnRtYXR0ZXIpLFxyXG4gICAgICBcIi0tLVwiLFxyXG4gICAgICByZW5kZXJFeGFtcGxlRmlsZSh0cmFuc2Zvcm1lZEZpbGVQYXRoLCBidWZmZXIpLFxyXG4gICAgXS5qb2luKFwiXFxuXCIpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtczogRmlsZVBhZ2VQYXJhbXMgPSB7XHJcbiAgICAgIGZpbGU6IGZpbGVQYWdlTGluayhyb290LnBhdGgsIHRyYW5zZm9ybWVkRmlsZVBhdGgpLnN1YnN0cmluZygxKSxcclxuICAgICAgbmFtZTogYmFzZW5hbWUodHJhbnNmb3JtZWRGaWxlUGF0aCksXHJcbiAgICAgIHBhdGg6IHRyYW5zZm9ybWVkRmlsZVBhdGgsXHJcbiAgICAgIHNvdXJjZVBhdGg6IGZpbGVQYXRoLFxyXG4gICAgICBleGFtcGxlLFxyXG4gICAgICByb290LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwYWdlOiBGaWxlUGFnZSA9IHtcclxuICAgICAgY29udGVudCxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICB5aWVsZCBwYWdlO1xyXG4gIH1cclxuXHJcbiAgYXJjaGl2ZT8uZmluYWxpemUoKTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxleGFtcGxlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXGV4YW1wbGVzXFxcXG1hcC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL2V4YW1wbGVzL21hcC50c1wiO2ltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBFeGFtcGxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBleGFtcGxlTWFwRmlsZVBhdGggfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5sZXQgZXhhbXBsZU1hcDogUmVjb3JkPHN0cmluZywgRXhhbXBsZT4gfCB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhhbXBsZUZvclBhZ2UocmVsYXRpdmVQYXRoOiBzdHJpbmcpIHtcclxuICBpZiAoIWV4YW1wbGVNYXApIHtcclxuICAgIGV4YW1wbGVNYXAgPSBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhleGFtcGxlTWFwRmlsZVBhdGgsIFwidXRmLThcIikpIGFzIFJlY29yZDxzdHJpbmcsIEV4YW1wbGU+O1xyXG4gIH1cclxuXHJcbiAgLy8gUGF0aCB0aGF0IHJlcXVlc3RlZCB0aGUgZXhhbXBsZSwgY2FuIGVpdGhlciBiZSBhIHNlY3Rpb24gKFwiYmxvY2tzXCIpIG9yIGEgcGFnZSAoXCJibG9ja3MvYmxvY2tzLWludHJvXCIpXHJcbiAgbGV0IHJvb3RQYXRoOiBzdHJpbmcgPSByZWxhdGl2ZVBhdGgucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XHJcbiAgaWYgKCFleGFtcGxlTWFwW3Jvb3RQYXRoXSkgcm9vdFBhdGggPSByb290UGF0aC5zdWJzdHJpbmcoMCwgcm9vdFBhdGguaW5kZXhPZihcIi9cIikpO1xyXG5cclxuICBjb25zdCBleGFtcGxlID0gZXhhbXBsZU1hcFtyb290UGF0aF07XHJcblxyXG4gIGlmICghZXhhbXBsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgTm8gZXhhbXBsZSBmaWxlcyBhcmUgYXZhaWxhYmxlIGZvciBwYWdlIFwiJHtyZWxhdGl2ZVBhdGh9XCIuYCArXHJcbiAgICAgICAgJyBOb3RlIHRoYXQgdXBkYXRpbmcgdGhlIFwiZXhhbXBsZVwiIGZyb250bWF0dGVyIGZpZWxkIHJlcXVpcmVzIHRoZSBkZXZlbG9wbWVudCBzZXJ2ZXIgdG8gYmUgcmVzdGFydGVkLidcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXhhbXBsZTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxwYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxccGFnZVxcXFx0cmFuc2Zvcm1QYWdlRGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL3BhZ2UvdHJhbnNmb3JtUGFnZURhdGEudHNcIjtpbXBvcnQgeyBQYWdlRGF0YSB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuaW1wb3J0IHsgZ2V0RXhhbXBsZUZvclBhZ2UgfSBmcm9tIFwiLi4vZXhhbXBsZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1QYWdlRGF0YShwYWdlRGF0YTogUGFnZURhdGEpIHtcclxuICBpZiAocGFnZURhdGEuZnJvbnRtYXR0ZXIuX190YWJsZXMpIHtcclxuICAgIHBhZ2VEYXRhLnBhcmFtcyA/Pz0ge307XHJcbiAgICBwYWdlRGF0YS5wYXJhbXMudGFibGVzID0gcGFnZURhdGEuZnJvbnRtYXR0ZXIuX190YWJsZXM7XHJcblxyXG4gICAgZGVsZXRlIHBhZ2VEYXRhLmZyb250bWF0dGVyLl9fdGFibGVzO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhZ2VEYXRhLmZyb250bWF0dGVyLmV4YW1wbGUpIHtcclxuICAgIGNvbnN0IGV4YW1wbGUgPSBnZXRFeGFtcGxlRm9yUGFnZShwYWdlRGF0YS5yZWxhdGl2ZVBhdGgpO1xyXG5cclxuICAgIHBhZ2VEYXRhLnBhcmFtcyA/Pz0ge307XHJcbiAgICBwYWdlRGF0YS5wYXJhbXMuZXhhbXBsZSA9IGV4YW1wbGU7XHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXGxhbmd1YWdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXGxhbmd1YWdlc1xcXFxqc29uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vbGFuZ3VhZ2VzL2pzb24udHNcIjtpbXBvcnQgeyBMYW5ndWFnZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCJzaGlraVwiO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2U6IExhbmd1YWdlUmVnaXN0cmF0aW9uID0ge1xyXG4gIHNjb3BlTmFtZTogXCJzb3VyY2UuanNvblwiLFxyXG4gIGRpc3BsYXlOYW1lOiBcIkpTT05cIixcclxuICBuYW1lOiBcImpzb25cIixcclxuICBwYXR0ZXJuczogW1xyXG4gICAgeyBpbmNsdWRlOiBcIiNvYmplY3RzbmlwcGV0XCIgfSwgLy8gU3ludGF4IGhpZ2hsaWdodGluZyBmb3IgYW0gb2JqZWN0IHdpdGhvdXQgc3Vycm91bmRpbmcgY3VybHkgYnJhY2tldHNcclxuICAgIHsgaW5jbHVkZTogXCIjdmFsdWVcIiB9LFxyXG4gIF0sXHJcbiAgcmVwb3NpdG9yeToge1xyXG4gICAgYXJyYXk6IHtcclxuICAgICAgYmVnaW46IFwiXFxcXFtcIixcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5hcnJheS5iZWdpbi5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZW5kOiBcIl1cIixcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uYXJyYXkuZW5kLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiBcIm1ldGEuc3RydWN0dXJlLmFycmF5Lmpzb25cIixcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbmNsdWRlOiBcIiN2YWx1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiLFwiLFxyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuYXJyYXkuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiW15dXFxcXHNdXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC5leHBlY3RlZC1hcnJheS1zZXBhcmF0b3IuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBiZWdpbjogXCIvXFxcXCpcXFxcKig/IS8pXCIsXHJcbiAgICAgICAgICBjYXB0dXJlczoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmNvbW1lbnQuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDogXCJcXFxcKi9cIixcclxuICAgICAgICAgIG5hbWU6IFwiY29tbWVudC5ibG9jay5kb2N1bWVudGF0aW9uLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJlZ2luOiBcIi9cXFxcKlwiLFxyXG4gICAgICAgICAgY2FwdHVyZXM6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50Lmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IFwiXFxcXCovXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbW1lbnQuYmxvY2suanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2FwdHVyZXM6IHtcclxuICAgICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50Lmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYXRjaDogXCIoLy8pLiokXFxcXG4/XCIsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbW1lbnQubGluZS5kb3VibGUtc2xhc2guanNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIGNvbnN0YW50OiB7XHJcbiAgICAgIG1hdGNoOiBcIlxcXFxiKD86dHJ1ZXxmYWxzZXxudWxsKVxcXFxiXCIsXHJcbiAgICAgIG5hbWU6IFwiY29uc3RhbnQubGFuZ3VhZ2UuanNvblwiLFxyXG4gICAgfSxcclxuICAgIG51bWJlcjoge1xyXG4gICAgICBtYXRjaDogXCItPyg/OjB8WzEtOV1cXFxcZCopKD86KD86XFxcXC5cXFxcZCspPyg/OltFZV1bLStdP1xcXFxkKyk/KT9cIixcclxuICAgICAgbmFtZTogXCJjb25zdGFudC5udW1lcmljLmpzb25cIixcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgYmVnaW46IFwiXFxcXHtcIixcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5kaWN0aW9uYXJ5LmJlZ2luLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBlbmQ6IFwifVwiLFxyXG4gICAgICBlbmRDYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5kaWN0aW9uYXJ5LmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJtZXRhLnN0cnVjdHVyZS5kaWN0aW9uYXJ5Lmpzb25cIixcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7IGluY2x1ZGU6IFwiI29iamVjdGtleVwiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNjb21tZW50c1wiIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmVnaW46IFwiOlwiLFxyXG4gICAgICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5rZXktdmFsdWUuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDogXCIoLCl8KD89fSlcIixcclxuICAgICAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLnNlcGFyYXRvci5kaWN0aW9uYXJ5LnBhaXIuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG5hbWU6IFwibWV0YS5zdHJ1Y3R1cmUuZGljdGlvbmFyeS52YWx1ZS5qc29uXCIsXHJcbiAgICAgICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6IFwiI3ZhbHVlXCIgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1hdGNoOiBcIlteLFxcXFxzXVwiLFxyXG4gICAgICAgICAgICAgIG5hbWU6IFwiaW52YWxpZC5pbGxlZ2FsLmV4cGVjdGVkLWRpY3Rpb25hcnktc2VwYXJhdG9yLmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXRjaDogXCJbXn1cXFxcc11cIixcclxuICAgICAgICAgIG5hbWU6IFwiaW52YWxpZC5pbGxlZ2FsLmV4cGVjdGVkLWRpY3Rpb25hcnktc2VwYXJhdG9yLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIG9iamVjdGtleToge1xyXG4gICAgICBiZWdpbjogJ1wiJyxcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uc3VwcG9ydC50eXBlLnByb3BlcnR5LW5hbWUuYmVnaW4uanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogJ1wiJyxcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLnN1cHBvcnQudHlwZS5wcm9wZXJ0eS1uYW1lLmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJzdHJpbmcuanNvbiBzdXBwb3J0LnR5cGUucHJvcGVydHktbmFtZS5qc29uXCIsXHJcbiAgICAgIHBhdHRlcm5zOiBbeyBpbmNsdWRlOiBcIiNzdHJpbmdjb250ZW50XCIgfV0sXHJcbiAgICB9LFxyXG4gICAgb2JqZWN0c25pcHBldDoge1xyXG4gICAgICBiZWdpbjogJ14oXCJbXlwiXSpcIikoOiknLFxyXG4gICAgICBiZWdpbkNhcHR1cmVzOiB7XHJcbiAgICAgICAgMToge1xyXG4gICAgICAgICAgcGF0dGVybnM6IFt7IGluY2x1ZGU6IFwiI29iamVjdGtleVwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5rZXktdmFsdWUuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogXCIsXCIsXHJcbiAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5wYWlyLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBwYXR0ZXJuczogW3sgaW5jbHVkZTogXCIjdmFsdWVcIiB9XSxcclxuICAgICAgbmFtZTogXCJtZXRhLnN0cnVjdHVyZS5kaWN0aW9uYXJ5LnNuaXBwZXQuanNvblwiLFxyXG4gICAgfSxcclxuICAgIHN0cmluZzoge1xyXG4gICAgICBiZWdpbjogJ1wiJyxcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4uanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogJ1wiJyxcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJzdHJpbmcucXVvdGVkLmRvdWJsZS5qc29uXCIsXHJcbiAgICAgIHBhdHRlcm5zOiBbeyBpbmNsdWRlOiBcIiNzdHJpbmdjb250ZW50XCIgfV0sXHJcbiAgICB9LFxyXG4gICAgc3RyaW5nY29udGVudDoge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoOiAnXFxcXFxcXFwoPzpbXCIvXFxcXFxcXFxiZm5ydF18dVxcXFxoezR9KScsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiXFxcXFxcXFwuXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC51bnJlY29nbml6ZWQtc3RyaW5nLWVzY2FwZS5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjY29uc3RhbnRcIiB9LFxyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjbnVtYmVyXCIgfSxcclxuICAgICAgICB7IGluY2x1ZGU6IFwiI3N0cmluZ1wiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNhcnJheVwiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNvYmplY3RcIiB9LFxyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjY29tbWVudHNcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2U7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXGxhbmd1YWdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXGxhbmd1YWdlc1xcXFxsYW5nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vbGFuZ3VhZ2VzL2xhbmcudHNcIjtpbXBvcnQgeyBMYW5ndWFnZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCJzaGlraVwiO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2U6IExhbmd1YWdlUmVnaXN0cmF0aW9uID0ge1xyXG4gIHNjb3BlTmFtZTogXCJzb3VyY2UubGFuZ1wiLFxyXG4gIGRpc3BsYXlOYW1lOiBcIkxhbmd1YWdlXCIsXHJcbiAgbmFtZTogXCJsYW5nXCIsXHJcbiAgcGF0dGVybnM6IFtcclxuICAgIHsgaW5jbHVkZTogXCIjY29tbWVudFwiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI3Byb3BlcnR5XCIgfSxcclxuICAgIHtcclxuICAgICAgbWF0Y2g6IFwiLlwiLFxyXG4gICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC5sYW5nXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcmVwb3NpdG9yeToge1xyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBiZWdpbjogXCIjXCIsXHJcbiAgICAgIGVuZDogXCIkXCIsXHJcbiAgICAgIG5hbWU6IFwiY29tbWVudC5saW5lLm51bWJlci1zaWduLmxhbmdcIixcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0eToge1xyXG4gICAgICBtYXRjaDogXCJeKFteIz1dKykoPSkoW15cXFxcdCNdKylcIixcclxuICAgICAgY2FwdHVyZXM6IHtcclxuICAgICAgICAxOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInN1cHBvcnQudHlwZS5wcm9wZXJ0eS1uYW1lLmpzb24ubGFuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3Iua2V5LXZhbHVlLmxhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6IHtcclxuICAgICAgICAgIHBhdHRlcm5zOiBbeyBpbmNsdWRlOiBcIiNlbW9qaVwiIH0sIHsgaW5jbHVkZTogXCIjbGluZWJyZWFrXCIgfSwgeyBpbmNsdWRlOiBcIiN2YXJpYWJsZVwiIH1dLFxyXG4gICAgICAgICAgbmFtZTogXCJzdHJpbmcudW5xdW90ZWQubGFuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZW1vamk6IHtcclxuICAgICAgbWF0Y2g6IFwiOlteOl0rOlwiLFxyXG4gICAgICBuYW1lOiBcImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUubGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIGxpbmVicmVhazoge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHsgbWF0Y2g6IFwifkxJTkVCUkVBS35cIiwgbmFtZTogXCJjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmxhbmdcIiB9LFxyXG4gICAgICAgIHsgbWF0Y2g6IFwiXFxcXG5cIiwgbmFtZTogXCJjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmxhbmdcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlOiB7XHJcbiAgICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgICAgeyBtYXRjaDogXCIlKDB8WzEtOV1cXFxcZCopKFxcXFwkLik/XCIsIG5hbWU6IFwiY29uc3RhbnQuY2hhcmFjdGVyLmVzY2FwZS5sYW5nXCIgfSxcclxuICAgICAgICB7IG1hdGNoOiBcIiUuP1wiLCBuYW1lOiBcImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUubGFuZ1wiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxcbGFuZ3VhZ2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxcbGFuZ3VhZ2VzXFxcXG1vbGFuZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL2xhbmd1YWdlcy9tb2xhbmcudHNcIjtpbXBvcnQgeyBMYW5ndWFnZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCJzaGlraVwiO1xyXG5cclxuY29uc3Qga2V5d29yZHMgPSBbXCJicmVha1wiLCBcImNvbnRpbnVlXCIsIFwicmV0dXJuXCJdO1xyXG5cclxuY29uc3QgdHlwZXMgPSB7XHJcbiAgYXJyYXk6IHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gIH0sXHJcbiAgY29udGV4dDoge1xyXG4gICAgYWxpYXM6IFwiY1wiLFxyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgfSxcclxuICBnZW9tZXRyeToge1xyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgfSxcclxuICBtYXRlcmlhbDoge1xyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgfSxcclxuICBtYXRoOiB7XHJcbiAgICByZWFkb25seTogdHJ1ZSxcclxuICB9LFxyXG4gIHF1ZXJ5OiB7XHJcbiAgICBhbGlhczogXCJxXCIsXHJcbiAgICByZWFkb25seTogdHJ1ZSxcclxuICB9LFxyXG4gIHRlbXA6IHtcclxuICAgIGFsaWFzOiBcInRcIixcclxuICB9LFxyXG4gIHRleHR1cmU6IHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gIH0sXHJcbiAgdmFyaWFibGU6IHtcclxuICAgIGFsaWFzOiBcInZcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgbGFuZ3VhZ2U6IExhbmd1YWdlUmVnaXN0cmF0aW9uID0ge1xyXG4gIHNjb3BlTmFtZTogXCJzb3VyY2UubW9sYW5nXCIsXHJcbiAgZGlzcGxheU5hbWU6IFwiTW9sYW5nXCIsXHJcbiAgbmFtZTogXCJtb2xhbmdcIixcclxuICBwYXR0ZXJuczogW1xyXG4gICAgeyBpbmNsdWRlOiBcIiNib29sZWFuXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjbnVtYmVyXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjc3RyaW5nXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjdGhpc1wiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI2tleXdvcmRzXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjb3BlcmF0b3JzXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjZnVuY3Rpb25cIiB9LFxyXG4gICAgeyBpbmNsdWRlOiBcIiN0eXBlc1wiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI2NvbW1hXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjc2VtaWNvbG9uXCIgfSxcclxuICBdLFxyXG4gIHJlcG9zaXRvcnk6IHtcclxuICAgIGJvb2xlYW46IHtcclxuICAgICAgbWF0Y2g6IFwiKD9pKVxcXFxiKGZhbHNlfHRydWUpXFxcXGJcIixcclxuICAgICAgbmFtZTogXCJjb25zdGFudC5sYW5ndWFnZS5tb2xhbmdcIixcclxuICAgIH0sXHJcbiAgICBjb21tYToge1xyXG4gICAgICBtYXRjaDogXCIsXCIsXHJcbiAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uc2VwYXJhdG9yLmNvbW1hLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uOiB7XHJcbiAgICAgIG1hdGNoOiBcIlxcXFxiXFxcXHcrKD89XFxcXCgpXCIsXHJcbiAgICAgIG5hbWU6IFwiZW50aXR5Lm5hbWUuZnVuY3Rpb24ubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAga2V5d29yZHM6IHtcclxuICAgICAgbWF0Y2g6IGAoP2kpXFxcXGIoJHtrZXl3b3Jkcy5qb2luKFwifFwiKX0pXFxcXGJgLFxyXG4gICAgICBuYW1lOiBcImtleXdvcmQuY29udHJvbC5tb2xhbmdcIixcclxuICAgIH0sXHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgbWF0Y2g6IFwiKD9pKShcXFxcYnwtKVxcXFxkKyhcXFxcLlxcXFxkKyk/KGVbKy1dP1xcXFxkKyk/Zj9cXFxcYlwiLFxyXG4gICAgICBuYW1lOiBcImNvbnN0YW50Lm51bWVyaWMubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgb3BlcmF0b3JzOiB7XHJcbiAgICAgIG1hdGNoOiBcIlshPTw+XT0/fFs/OiovKy1dfCYmfFxcXFx8XFxcXHx8XFxcXD9cXFxcP3wtPlwiLFxyXG4gICAgICBuYW1lOiBcImtleXdvcmQub3BlcmF0b3IubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgc3RyaW5nOiB7XHJcbiAgICAgIGJlZ2luOiBcIidcIixcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIFwiMFwiOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmJlZ2luLm1vbGFuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogXCInXCIsXHJcbiAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgXCIwXCI6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuZW5kLm1vbGFuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6IFwic3RyaW5nLnF1b3RlZC5zaW5nbGUubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgc2VtaWNvbG9uOiB7XHJcbiAgICAgIG1hdGNoOiBcIjtcIixcclxuICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi50ZXJtaW5hdG9yLnN0YXRlbWVudC5tb2xhbmdcIixcclxuICAgIH0sXHJcbiAgICB0aGlzOiB7XHJcbiAgICAgIG1hdGNoOiBcIig/aSlcXFxcYnRoaXNcXFxcYlwiLFxyXG4gICAgICBuYW1lOiBcInZhcmlhYmxlLmxhbmd1YWdlLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IGAoP2kpXFxcXGIoJHtnZXRUeXBlS2V5d29yZHMoKS5qb2luKFwifFwiKX0pKD89JHxcXFxcLilgLFxyXG4gICAgICAgICAgbmFtZTogXCJzdG9yYWdlLnR5cGUubW9sYW5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXRjaDogYCg/aSkoPzw9KCR7Z2V0VHlwZUtleXdvcmRzKHRydWUpLmpvaW4oXCJ8XCIpfSlcXFxcLilcXFxcdytgLFxyXG4gICAgICAgICAgbmFtZTogXCJ2YXJpYWJsZS5vdGhlci5jb25zdGFudC5tb2xhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoOiBgKD9pKSg/PD0oJHtnZXRUeXBlS2V5d29yZHMoZmFsc2UpLmpvaW4oXCJ8XCIpfSlcXFxcLilcXFxcdytgLFxyXG4gICAgICAgICAgbmFtZTogXCJ2YXJpYWJsZS5vdGhlci5yZWFkd3JpdGUubW9sYW5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFR5cGVLZXl3b3JkcyhyZWFkb25seVZhbHVlPzogYm9vbGVhbikge1xyXG4gIGNvbnN0IGtleXdvcmRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IHR5cGUgaW4gdHlwZXMpIHtcclxuICAgIGNvbnN0IHsgYWxpYXMsIHJlYWRvbmx5ID0gZmFsc2UgfSA9IHR5cGVzW3R5cGVdO1xyXG5cclxuICAgIGlmIChyZWFkb25seVZhbHVlICE9PSB1bmRlZmluZWQgJiYgcmVhZG9ubHlWYWx1ZSAhPT0gcmVhZG9ubHkpIGNvbnRpbnVlO1xyXG5cclxuICAgIGtleXdvcmRzLnB1c2godHlwZSk7XHJcblxyXG4gICAgaWYgKCFhbGlhcykgY29udGludWU7XHJcblxyXG4gICAga2V5d29yZHMucHVzaChhbGlhcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ga2V5d29yZHM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxsYW5ndWFnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxsYW5ndWFnZXNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9sYW5ndWFnZXMvaW5kZXgudHNcIjtpbXBvcnQganNvbiBmcm9tIFwiLi9qc29uXCI7XHJcbmltcG9ydCBsYW5nIGZyb20gXCIuL2xhbmdcIjtcclxuaW1wb3J0IG1vbGFuZyBmcm9tIFwiLi9tb2xhbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtqc29uLCBsYW5nLCBtb2xhbmddO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxccGx1Z2luc1xcXFxleGFtcGxlRmlsZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvZXhhbXBsZUZpbGUudHNcIjtpbXBvcnQgeyBQbHVnaW5TaW1wbGUgfSBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IHsgZXhhbXBsZXNDYWNoZURpcmVjdG9yeSwgcmVuZGVyRXhhbXBsZUZpbGUsIGdldEV4YW1wbGVGb3JQYWdlIH0gZnJvbSBcIi4uLy4uL2V4YW1wbGVzXCI7XHJcbmltcG9ydCBmaWxlUGFnZUxpbmsgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9maWxlUGFnZUxpbmtcIjtcclxuXHJcbmNvbnN0IGV4YW1wbGVGaWxlUGF0dGVybiA9IC9ePEV4YW1wbGVGaWxlXFxzK3BhdGg9XCIoPzxwYXRoPlteXCJdKilcIlxccypcXC8+JC87XHJcblxyXG5leHBvcnQgY29uc3QgZXhhbXBsZUZpbGVQbHVnaW46IFBsdWdpblNpbXBsZSA9IChtZCkgPT4ge1xyXG4gIG1kLmNvcmUucnVsZXIuYWZ0ZXIoXCJibG9ja1wiLCBcImV4YW1wbGVfZmlsZVwiLCAoeyBlbnYsIHRva2VucywgaW5saW5lTW9kZSB9KSA9PiB7XHJcbiAgICBpZiAoaW5saW5lTW9kZSkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAobGV0IHRva2VuSW5kZXggPSAwOyB0b2tlbkluZGV4IDwgdG9rZW5zLmxlbmd0aDsgdG9rZW5JbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW3Rva2VuSW5kZXhdO1xyXG4gICAgICBpZiAoIXRva2VuLnR5cGUuc3RhcnRzV2l0aChcImh0bWxfXCIpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGNvbnN0IG1hdGNoID0gdG9rZW4uY29udGVudC50cmltKCkubWF0Y2goZXhhbXBsZUZpbGVQYXR0ZXJuKTtcclxuICAgICAgaWYgKCFtYXRjaCkgY29udGludWU7XHJcblxyXG4gICAgICBjb25zdCBwcm9wcyA9IG1hdGNoLmdyb3VwcyE7XHJcblxyXG4gICAgICBjb25zdCBleGFtcGxlID0gZ2V0RXhhbXBsZUZvclBhZ2UoZW52LnJlbGF0aXZlUGF0aCk7XHJcblxyXG4gICAgICBpZiAoIWV4YW1wbGUuZmlsZXMuaW5jbHVkZXMocHJvcHMucGF0aCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4YW1wbGUgZmlsZSBcIiR7cHJvcHMucGF0aH1cIiBkb2VzIG5vdCBleGlzdC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FjaGVGaWxlUGF0aCA9IGpvaW4oZXhhbXBsZXNDYWNoZURpcmVjdG9yeSwgZXhhbXBsZS5pZCwgcHJvcHMucGF0aCk7XHJcblxyXG4gICAgICBjb25zdCBidWZmZXIgPSByZWFkRmlsZVN5bmMoY2FjaGVGaWxlUGF0aCk7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBmaWxlUGFnZUxpbmsoZW52LnJlbGF0aXZlUGF0aC5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKSwgcHJvcHMucGF0aCk7XHJcblxyXG4gICAgICBjb25zdCBtYXJrZG93biA9IHJlbmRlckV4YW1wbGVGaWxlKHByb3BzLnBhdGgsIGJ1ZmZlciwgbGluayk7XHJcbiAgICAgIGNvbnN0IG5ld1Rva2VucyA9IG1kLnBhcnNlKG1hcmtkb3duLCBlbnYpO1xyXG5cclxuICAgICAgLy8gUmVwbGFjZSB0aGUgb3JpZ2luYWwgSFRNTCB0b2tlblxyXG4gICAgICB0b2tlbnMuc3BsaWNlKHRva2VuSW5kZXgsIDEsIC4uLm5ld1Rva2Vucyk7XHJcbiAgICAgIHRva2VuSW5kZXggKz0gbmV3VG9rZW5zLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxzaGFyZWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcc2hhcmVkXFxcXGFzc2V0UGF0aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9zaGFyZWQvYXNzZXRQYXRoLnRzXCI7Y29uc3QgYWJzb2x1dGVQYXRoUGF0dGVybiA9IC9eKFxcL3xbYS16XSs6KS87XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NldFBhdGgoYXNzZXRzRGlyZWN0b3J5OiBzdHJpbmcsIHJlbGF0aXZlUGF0aDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICBsZXQgYXNzZXRQYXRoID0gXCJcIjtcclxuXHJcbiAgaWYgKCFhYnNvbHV0ZVBhdGhQYXR0ZXJuLnRlc3QocGF0aCkpIHtcclxuICAgIGFzc2V0UGF0aCArPSBgL2Fzc2V0cy8ke2Fzc2V0c0RpcmVjdG9yeX0vJHtyZWxhdGl2ZVBhdGgucmVwbGFjZSgvXFwubWQkLywgXCIvXCIpfWA7XHJcbiAgfVxyXG5cclxuICBhc3NldFBhdGggKz0gcGF0aDtcclxuXHJcbiAgcmV0dXJuIGFzc2V0UGF0aDtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxccGx1Z2luc1xcXFxpbWFnZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvaW1hZ2UudHNcIjtpbXBvcnQgeyBQbHVnaW5TaW1wbGUgfSBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuaW1wb3J0IGFzc2V0UGF0aCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2Fzc2V0UGF0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGltYWdlUGx1Z2luOiBQbHVnaW5TaW1wbGUgPSAobWQpID0+IHtcclxuICBjb25zdCBpbWFnZSA9IG1kLnJlbmRlcmVyLnJ1bGVzLmltYWdlITtcclxuXHJcbiAgbWQucmVuZGVyZXIucnVsZXMuaW1hZ2UgPSAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcclxuICAgIGNvbnN0IHNyYyA9IHRva2VuLmF0dHJHZXQoXCJzcmNcIik7XHJcblxyXG4gICAgaWYgKHNyYykge1xyXG4gICAgICB0b2tlbi5hdHRyU2V0KFwic3JjXCIsIGFzc2V0UGF0aChcImltYWdlc1wiLCBlbnYucmVsYXRpdmVQYXRoLCBzcmMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1hZ2UodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XHJcbiAgfTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcaW5saW5lSGlnaGxpZ2h0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vcGx1Z2lucy9pbmxpbmVIaWdobGlnaHQudHNcIjtpbXBvcnQgeyBidW5kbGVkTGFuZ3VhZ2VzLCBjcmVhdGVIaWdobGlnaHRlciB9IGZyb20gXCJzaGlraVwiO1xyXG5pbXBvcnQgeyBQbHVnaW5TaW1wbGUgfSBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuaW1wb3J0IGxhbmd1YWdlcyBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XHJcblxyXG5jb25zdCB0aGVtZXMgPSB7XHJcbiAgZGFyazogXCJkYXJrLXBsdXNcIixcclxuICBsaWdodDogXCJsaWdodC1wbHVzXCIsXHJcbn07XHJcblxyXG5jb25zdCBoaWdobGlnaHRlciA9IGF3YWl0IGNyZWF0ZUhpZ2hsaWdodGVyKHtcclxuICB0aGVtZXM6IE9iamVjdC52YWx1ZXModGhlbWVzKSxcclxuICBsYW5nczogWy4uLk9iamVjdC5rZXlzKGJ1bmRsZWRMYW5ndWFnZXMpLCBsYW5ndWFnZXNdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmxpbmVIaWdobGlnaHRQbHVnaW46IFBsdWdpblNpbXBsZSA9IChtZCkgPT4ge1xyXG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmNvZGVfaW5saW5lID0gKHRva2VucywgaWR4KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpZHhdO1xyXG4gICAgY29uc3QgbGFuZyA9IHRva2VuLmF0dHJHZXQoXCJsYW5nXCIpID8/IFwidHh0XCI7XHJcblxyXG4gICAgY29uc3QgaGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRlci5jb2RlVG9IdG1sKHRva2VuLmNvbnRlbnQsIHtcclxuICAgICAgbGFuZyxcclxuICAgICAgdGhlbWVzLFxyXG4gICAgICBzdHJ1Y3R1cmU6IFwiaW5saW5lXCIsXHJcbiAgICAgIGRlZmF1bHRDb2xvcjogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxjb2RlIGNsYXNzPVwic2hpa2lcIj4ke2hpZ2hsaWdodGVkfTwvY29kZT5gO1xyXG4gIH07XHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcdGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXFxcXHRhYmxlXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vcGx1Z2lucy90YWJsZS9pbmRleC50c1wiO2ltcG9ydCB7IFBsdWdpblNpbXBsZSB9IGZyb20gXCJtYXJrZG93bi1pdFwiO1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgYXNzZXRQYXRoIGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvYXNzZXRQYXRoXCI7XHJcblxyXG5pbXBvcnQgeyBwYXJzZVRhYmxlIH0gZnJvbSBcIi4vcGFyc2VUYWJsZVwiO1xyXG5cclxuY29uc3QgcHVibGljRGlyID0gXCJkb2NzL3B1YmxpY1wiO1xyXG5jb25zdCB0YWJsZVBhdHRlcm4gPSAvXjxUYWJsZVxccytkYXRhPVwiKD88ZGF0YT5bXlwiXSopXCJcXHMqXFwvPiQvO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFEcml2ZW5UYWJsZVBsdWdpbjogUGx1Z2luU2ltcGxlID0gKG1kKSA9PiB7XHJcbiAgbWQuY29yZS5ydWxlci5hZnRlcihcImJsb2NrXCIsIFwiZGF0YV9kcml2ZW5fdGFibGVcIiwgKHsgZW52LCB0b2tlbnMsIGlubGluZU1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlubGluZU1vZGUpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGxldCB0b2tlbkluZGV4ID0gMDsgdG9rZW5JbmRleCA8IHRva2Vucy5sZW5ndGg7IHRva2VuSW5kZXgrKykge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1t0b2tlbkluZGV4XTtcclxuICAgICAgaWYgKCF0b2tlbi50eXBlLnN0YXJ0c1dpdGgoXCJodG1sX1wiKSkgY29udGludWU7XHJcblxyXG4gICAgICBjb25zdCBtYXRjaCA9IHRva2VuLmNvbnRlbnQudHJpbSgpLm1hdGNoKHRhYmxlUGF0dGVybik7XHJcbiAgICAgIGlmICghbWF0Y2gpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgY29uc3QgcHJvcHMgPSBtYXRjaC5ncm91cHMhO1xyXG5cclxuICAgICAgY29uc3QgcGF0aCA9IGFzc2V0UGF0aChcInRhYmxlc1wiLCBlbnYucmVsYXRpdmVQYXRoLCBwcm9wcy5kYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhYmxlID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoam9pbihwdWJsaWNEaXIsIHBhdGgpLCBcInV0Zi04XCIpKTtcclxuXHJcbiAgICAgIGVudi5mcm9udG1hdHRlci5fX3RhYmxlcyA/Pz0ge307XHJcbiAgICAgIGVudi5mcm9udG1hdHRlci5fX3RhYmxlc1twYXRoXSA9IHBhcnNlVGFibGUodGFibGUsIG1kLCBlbnYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcc2hhcmVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHNoYXJlZFxcXFxpc09iamVjdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9zaGFyZWQvaXNPYmplY3QudHNcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIG9iamVjdCB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxccGx1Z2luc1xcXFx0YWJsZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcdGFibGVcXFxccGFyc2VUYWJsZVZhbHVlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95angxMi9Eb2N1bWVudHMvUHJvamVjdHMvYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb24vZG9jcy8udml0ZXByZXNzL3RoZW1lL25vZGUvbWFya2Rvd24vcGx1Z2lucy90YWJsZS9wYXJzZVRhYmxlVmFsdWUudHNcIjtpbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuXHJcbmltcG9ydCB7IFRhYmxlVmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlVGFibGVWYWx1ZSh2YWx1ZTogdW5rbm93biwgbWQ6IE1hcmtkb3duSXQsIGVudjogYW55KSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBtZC5yZW5kZXJJbmxpbmUodmFsdWUsIGVudik7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIGNvbnN0IGxpc3Q6IFRhYmxlVmFsdWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGFibGUgbGlzdCBpdGVtcyBtdXN0IGJlIHN0cmluZ3MuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3QucHVzaChtZC5yZW5kZXJJbmxpbmUoaXRlbSwgZW52KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGFibGUgdmFsdWUgbXVzdCBiZSBhIGJvb2xlYW4sIG51bWJlciwgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MuXCIpO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcdGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXFxcXHRhYmxlXFxcXHBhcnNlVGFibGVDb2x1bW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL3RhYmxlL3BhcnNlVGFibGVDb2x1bW4udHNcIjtpbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuXHJcbmltcG9ydCBpc09iamVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL2lzT2JqZWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgcGFyc2VUYWJsZVZhbHVlIGZyb20gXCIuL3BhcnNlVGFibGVWYWx1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VUYWJsZUNvbHVtbihpZDogc3RyaW5nLCBkYXRhOiB1bmtub3duLCBtZDogTWFya2Rvd25JdCwgZW52OiBhbnkpIHtcclxuICBjb25zdCBjb2x1bW46IFBhcnRpYWw8VGFibGVDb2x1bW4+ID0ge307XHJcblxyXG4gIGlmICghaXNPYmplY3QoZGF0YSkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRhYmxlIGNvbHVtbiBcIiR7aWR9XCIgbXVzdCBiZSBhbiBvYmplY3QuYCk7XHJcbiAgfVxyXG5cclxuICAvLyBDb2x1bW4gTmFtZVxyXG4gIGlmICghKFwibmFtZVwiIGluIGRhdGEpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUYWJsZSBjb2x1bW4gXCIke2lkfVwiIG11c3QgaW5jbHVkZSBhIFwibmFtZVwiIGZpZWxkLmApO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEubmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwibmFtZVwiIGZpZWxkIG9mIGNvbHVtbiBcIiR7aWR9XCIgbXVzdCBiZSBhIHN0cmluZy5gKTtcclxuICB9XHJcblxyXG4gIGNvbHVtbi5uYW1lID0gbWQucmVuZGVySW5saW5lKGRhdGEubmFtZSwgZW52KTtcclxuXHJcbiAgLy8gRGVmYXVsdCBWYWx1ZVxyXG4gIGlmIChcImRlZmF1bHRcIiBpbiBkYXRhKSB7XHJcbiAgICBjb2x1bW4uZGVmYXVsdCA9IHBhcnNlVGFibGVWYWx1ZShkYXRhLmRlZmF1bHQsIG1kLCBlbnYpO1xyXG4gIH1cclxuXHJcbiAgLy8gU29ydGFibGVcclxuICBpZiAoXCJzb3J0YWJsZVwiIGluIGRhdGEpIHtcclxuICAgIGlmICh0eXBlb2YgZGF0YS5zb3J0YWJsZSAhPT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwic29ydGFibGVcIiBmaWVsZCBvZiBjb2x1bW4gXCIke2lkfVwiIG11c3QgYmUgYSBib29sZWFuLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbi5zb3J0YWJsZSA9IGRhdGEuc29ydGFibGU7XHJcbiAgfVxyXG5cclxuICAvLyBUZXh0IEFsaWduXHJcbiAgaWYgKFwidGV4dF9hbGlnblwiIGluIGRhdGEpIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIGRhdGEudGV4dF9hbGlnbiAhPT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAoZGF0YS50ZXh0X2FsaWduICE9PSBcImxlZnRcIiAmJiBkYXRhLnRleHRfYWxpZ24gIT09IFwiY2VudGVyXCIgJiYgZGF0YS50ZXh0X2FsaWduICE9PSBcInJpZ2h0XCIpXHJcbiAgICApIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBgVGhlIFwidGV4dF9hbGlnblwiIGZpZWxkIG9mIGNvbHVtbiBcIiR7aWR9XCIgbXVzdCBiZSBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbi50ZXh0QWxpZ24gPSBkYXRhLnRleHRfYWxpZ247XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sdW1uIGFzIFRhYmxlQ29sdW1uO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcdGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXFxcXHRhYmxlXFxcXHBhcnNlVGFibGVSb3cudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL3RhYmxlL3BhcnNlVGFibGVSb3cudHNcIjtpbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuXHJcbmltcG9ydCBpc09iamVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL2lzT2JqZWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlLCBUYWJsZVJvdyB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHBhcnNlVGFibGVWYWx1ZSBmcm9tIFwiLi9wYXJzZVRhYmxlVmFsdWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlVGFibGVSb3coXHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBkYXRhOiB1bmtub3duLFxyXG4gIGNvbHVtbnM6IFRhYmxlW1wiY29sdW1uc1wiXSxcclxuICBtZDogTWFya2Rvd25JdCxcclxuICBlbnY6IGFueVxyXG4pIHtcclxuICBjb25zdCByb3c6IFRhYmxlUm93ID0ge307XHJcblxyXG4gIGlmICghaXNPYmplY3QoZGF0YSkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRhYmxlIHJvdyAke2luZGV4fSBtdXN0IGJlIGFuIG9iamVjdC5gKTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgY29sdW1uSWQgaW4gZGF0YSkge1xyXG4gICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JZF07XHJcblxyXG4gICAgaWYgKCFjb2x1bW4pIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBgVGFibGUgcm93ICR7aW5kZXh9IGNvbnRhaW5zIGEgdmFsdWUgZm9yIHRoZSBub24tZXhpc3RlbnQgY29sdW1uIFwiJHtjb2x1bW5JZH1cIi5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZVRhYmxlVmFsdWUoZGF0YVtjb2x1bW5JZF0sIG1kLCBlbnYpO1xyXG5cclxuICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBgVGFibGUgcm93ICR7aW5kZXh9IGNvbnRhaW5zIGFuIGFycmF5IHZhbHVlIGZvciB0aGUgY29sdW1uIFwiJHtjb2x1bW5JZH1cIiB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGFzIHRoYXQgY29sdW1uIGlzIHNvcnRhYmxlLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByb3dbY29sdW1uSWRdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93O1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWp4MTJcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGJlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxub2RlXFxcXG1hcmtkb3duXFxcXHBsdWdpbnNcXFxcdGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXFxcXHRhYmxlXFxcXHBhcnNlVGFibGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9wbHVnaW5zL3RhYmxlL3BhcnNlVGFibGUudHNcIjtpbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuXHJcbmltcG9ydCBpc09iamVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL2lzT2JqZWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgcGFyc2VUYWJsZUNvbHVtbiBmcm9tIFwiLi9wYXJzZVRhYmxlQ29sdW1uXCI7XHJcbmltcG9ydCBwYXJzZVRhYmxlUm93IGZyb20gXCIuL3BhcnNlVGFibGVSb3dcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhYmxlKGRhdGE6IHVua25vd24sIG1kOiBNYXJrZG93bkl0LCBlbnY6IGFueSkge1xyXG4gIGNvbnN0IHRhYmxlOiBUYWJsZSA9IHtcclxuICAgIGNvbHVtbnM6IHt9LFxyXG4gICAgcm93czogW10sXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFpc09iamVjdChkYXRhKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRhYmxlcyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XHJcbiAgfVxyXG5cclxuICAvLyBDb2x1bW5zXHJcbiAgaWYgKCEoXCJjb2x1bW5zXCIgaW4gZGF0YSkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RhYmxlcyBtdXN0IGluY2x1ZGUgYSBcImNvbHVtbnNcIiBmaWVsZC4nKTtcclxuICB9IGVsc2UgaWYgKCFpc09iamVjdChkYXRhLmNvbHVtbnMpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUYWJsZSBcImNvbHVtbnNcIiBmaWVsZCBtdXN0IGJlIGFuIG9iamVjdC4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChjb25zdCBjb2x1bW5JZCBpbiBkYXRhLmNvbHVtbnMpIHtcclxuICAgICAgY29uc3QgY29sdW1uID0gZGF0YS5jb2x1bW5zW2NvbHVtbklkXTtcclxuXHJcbiAgICAgIHRhYmxlLmNvbHVtbnNbY29sdW1uSWRdID0gcGFyc2VUYWJsZUNvbHVtbihjb2x1bW5JZCwgY29sdW1uLCBtZCwgZW52KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJvd3NcclxuICBpZiAoIShcInJvd3NcIiBpbiBkYXRhKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGFibGVzIG11c3QgaW5jbHVkZSBhIFwicm93c1wiIGZpZWxkLicpO1xyXG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5yb3dzKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGFibGUgXCJyb3dzXCIgZmllbGQgbXVzdCBiZSBhbiBhcnJheS4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEucm93cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gZGF0YS5yb3dzW2luZGV4XTtcclxuXHJcbiAgICAgIHRhYmxlLnJvd3MucHVzaChwYXJzZVRhYmxlUm93KGluZGV4LCByb3csIHRhYmxlLmNvbHVtbnMsIG1kLCBlbnYpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0YWJsZTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cXFxccGx1Z2luc1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9ub2RlL21hcmtkb3duL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgeyBleGFtcGxlRmlsZVBsdWdpbiB9IGZyb20gXCIuL2V4YW1wbGVGaWxlXCI7XHJcbmltcG9ydCB7IGltYWdlUGx1Z2luIH0gZnJvbSBcIi4vaW1hZ2VcIjtcclxuaW1wb3J0IHsgaW5saW5lSGlnaGxpZ2h0UGx1Z2luIH0gZnJvbSBcIi4vaW5saW5lSGlnaGxpZ2h0XCI7XHJcbmltcG9ydCB7IGRhdGFEcml2ZW5UYWJsZVBsdWdpbiB9IGZyb20gXCIuL3RhYmxlXCI7XHJcbmltcG9ydCB0YXNrTGlzdHNQbHVnaW4gZnJvbSBcIm1hcmtkb3duLWl0LXRhc2stbGlzdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICBleGFtcGxlRmlsZVBsdWdpbixcclxuICBpbWFnZVBsdWdpbixcclxuICBpbmxpbmVIaWdobGlnaHRQbHVnaW4sXHJcbiAgZGF0YURyaXZlblRhYmxlUGx1Z2luLFxyXG4gIHRhc2tMaXN0c1BsdWdpbixcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXG5vZGVcXFxcbWFya2Rvd25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlqeDEyXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxiZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbm9kZVxcXFxtYXJrZG93blxcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lqeDEyL0RvY3VtZW50cy9Qcm9qZWN0cy9iZWRyb2NrLXdpa2ktQ2hpbmVzZS10cmFuc2xhdGlvbi9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbm9kZS9tYXJrZG93bi9jb25maWcudHNcIjtpbXBvcnQgeyBNYXJrZG93bk9wdGlvbnMgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCBsYW5ndWFnZXMgZnJvbSBcIi4vbGFuZ3VhZ2VzXCI7XHJcbmltcG9ydCBwbHVnaW5zIGZyb20gXCIuL3BsdWdpbnNcIjtcclxuXHJcbmNvbnN0IGhlYWRpbmdMZXZlbHMgPSBbMiwgMywgNCwgNSwgNl07XHJcblxyXG5leHBvcnQgY29uc3QgbWFya2Rvd25Db25maWc6IE1hcmtkb3duT3B0aW9ucyA9IHtcclxuICBhbmNob3I6IHtcclxuICAgIGxldmVsOiBoZWFkaW5nTGV2ZWxzLFxyXG4gIH0sXHJcbiAgaGVhZGVyczoge1xyXG4gICAgbGV2ZWw6IGhlYWRpbmdMZXZlbHMsXHJcbiAgfSxcclxuICBtYXRoOiB0cnVlLFxyXG4gIGxhbmd1YWdlcyxcclxuICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICB0aGVtZToge1xyXG4gICAgZGFyazogXCJkYXJrLXBsdXNcIixcclxuICAgIGxpZ2h0OiBcImxpZ2h0LXBsdXNcIixcclxuICB9LFxyXG4gIGNvbmZpZyhtZCkge1xyXG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykgbWQudXNlKHBsdWdpbik7XHJcbiAgfSxcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5angxMlxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcYmVkcm9jay13aWtpLUNoaW5lc2UtdHJhbnNsYXRpb25cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWp4MTIvRG9jdW1lbnRzL1Byb2plY3RzL2JlZHJvY2std2lraS1DaGluZXNlLXRyYW5zbGF0aW9uL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVXaWtpQ29uZmlnIH0gZnJvbSBcIi4vdGhlbWUvbm9kZS9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVdpa2lDb25maWcoe1xyXG4gIHRpdGxlOiBcIkJlZHJvY2sgV2lraVwiLFxyXG4gIGxvbmdUaXRsZTogXCJUaGUgQmVkcm9jayBXaWtpXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiQSBrbm93bGVkZ2Utc2hhcmluZyB3ZWJzaXRlIGZvciB0ZWNobmljYWwgZmVhdHVyZXMgb2YgTWluZWNyYWZ0IEJlZHJvY2suXCIsXHJcblxyXG4gIHVybDogXCJodHRwczovL3dpa2kuYmVkcm9jay5kZXZcIixcclxuXHJcbiAgcmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vQmVkcm9jay1PU1MvYmVkcm9jay13aWtpXCIsXHJcbiAgYnJhbmNoOiBcIndpa2lcIixcclxuXHJcbiAgZXhhbXBsZXM6IHtcclxuICAgIHJlcG9zaXRvcnk6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JlZHJvY2stT1NTL2JlZHJvY2stZXhhbXBsZXNcIixcclxuICAgIGJyYW5jaDogXCJtYWluXCIsXHJcbiAgfSxcclxuXHJcbiAgYWxnb2xpYToge1xyXG4gICAgYXBwSWQ6IFwiTjlaSEFZSlFJSVwiLFxyXG4gICAgYXBpS2V5OiBcImE2NjRmNWE1ZGE2MzE4MTBhMDhlMWE0ODU1NGZlNTIzXCIsXHJcbiAgICBpbmRleE5hbWU6IFwid2lraS1iZWRyb2NrXCIsXHJcbiAgfSxcclxuXHJcbiAgbmF2aWdhdGlvbjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkRpc2NvcmRcIixcclxuICAgICAgbGluazogXCIvZGlzY29yZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJDb250cmlidXRlXCIsXHJcbiAgICAgIGxpbms6IFwiL2NvbnRyaWJ1dGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiYmVkcm9jay5kZXZcIixcclxuICAgICAgbGluazogXCJodHRwczovL2JlZHJvY2suZGV2XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIk1TIExlYXJuXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL21pbmVjcmFmdC9jcmVhdG9yL1wiLFxyXG4gICAgfSxcclxuICBdLFxyXG5cclxuICBmYXN0QnVpbGQ6IHtcclxuICAgIGV4Y2x1ZGVkUGFnZXM6IFtcclxuICAgICAgXCIvZW50aXRpZXMvdmFuaWxsYS11c2FnZS1jb21wb25lbnRzXCIsXHJcbiAgICAgIFwiL2VudGl0aWVzL3ZhbmlsbGEtdXNhZ2Utc3Bhd24tcnVsZXNcIixcclxuICAgICAgXCIvZW50aXRpZXMvdnVjLWZ1bGxcIixcclxuICAgICAgXCIvZW50aXRpZXMvdnVzci1mdWxsXCIsXHJcbiAgICAgIFwiL3RleHQvZm9udHNcIixcclxuICAgIF0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbWQsU0FBUyw2QkFBNkI7OztBQ0VsZixJQUFNLE9BQXFCO0FBQUEsRUFD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USxnQkFBZ0IsVUFBVSxLQUFLO0FBRW5ELFNBQU8sc0JBQW1DO0FBQUEsSUFDeEM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUVBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUVBO0FBQUEsSUFDQSxpQkFBaUIsY0FBYyxVQUFVLGdCQUFnQjtBQUFBLElBRXpELFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxNQUNQLFVBQVUsT0FBTztBQUFBLElBQ25CO0FBQUEsSUFFQSxNQUFNLFNBQVMsRUFBRSxPQUFPLEdBQUc7QUFDekIsWUFBTSxvQkFBb0IsTUFBTTtBQUFBLElBQ2xDO0FBQUEsSUFFQSxNQUFNO0FBQUEsTUFDSixLQUFLO0FBQUEsUUFDSCxxQkFBcUI7QUFBQSxVQUNuQixNQUFNO0FBQUEsWUFDSixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QTRCekRBLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBRWIsS0FBSztBQUFBLEVBRUwsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBRVIsVUFBVTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFFQSxZQUFZO0FBQUEsSUFDVjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXO0FBQUEsSUFDVCxlQUFlO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImpvaW4iLCAiam9pbiIsICJnbG9iSXRlcmF0ZSIsICJsYW5ndWFnZSIsICJsYW5ndWFnZSIsICJrZXl3b3JkcyIsICJyZWFkRmlsZVN5bmMiLCAiam9pbiIsICJqb2luIiwgInJlYWRGaWxlU3luYyIsICJhc3NldFBhdGgiLCAicmVhZEZpbGVTeW5jIiwgImpvaW4iLCAicmVhZEZpbGVTeW5jIiwgImpvaW4iXQp9Cg==
