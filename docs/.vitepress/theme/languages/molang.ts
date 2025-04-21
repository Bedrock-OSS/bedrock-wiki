import { LanguageRegistration } from "shiki";

const keywords = ["break", "continue", "return"];

const types = {
  array: {
    readonly: true,
  },
  context: {
    alias: "c",
    readonly: true,
  },
  geometry: {
    readonly: true,
  },
  material: {
    readonly: true,
  },
  math: {
    readonly: true,
  },
  query: {
    alias: "q",
    readonly: true,
  },
  temp: {
    alias: "t",
  },
  texture: {
    readonly: true,
  },
  variable: {
    alias: "v",
  },
};

const language: LanguageRegistration = {
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
    { include: "#semicolon" },
  ],
  repository: {
    boolean: {
      match: "(?i)\\b(false|true)\\b",
      name: "constant.language.molang",
    },
    comma: {
      match: ",",
      name: "punctuation.separator.comma.molang",
    },
    function: {
      match: "\\b\\w+(?=\\()",
      name: "entity.name.function.molang",
    },
    keywords: {
      match: `(?i)\\b(${keywords.join("|")})\\b`,
      name: "keyword.control.molang",
    },
    number: {
      match: "(?i)(\\b|-)\\d+(\\.\\d+)?(e[+-]?\\d+)?f?\\b",
      name: "constant.numeric.molang",
    },
    operators: {
      match: "[!=<>]=?|[?:*/+-]|&&|\\|\\||\\?\\?|->",
      name: "keyword.operator.molang",
    },
    string: {
      begin: "'",
      beginCaptures: {
        "0": {
          name: "punctuation.definition.string.begin.molang",
        },
      },
      end: "'",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.end.molang",
        },
      },
      name: "string.quoted.single.molang",
    },
    semicolon: {
      match: ";",
      name: "punctuation.terminator.statement.molang",
    },
    this: {
      match: "(?i)\\bthis\\b",
      name: "variable.language.molang",
    },
    types: {
      patterns: [
        {
          match: `(?i)\\b(${getTypeKeywords().join("|")})(?=\\.)`,
          name: "storage.type.molang",
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(true).join("|")})\\.)\\w+`,
          name: "variable.other.constant.molang",
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(false).join("|")})\\.)\\w+`,
          name: "variable.other.readwrite.molang",
        },
      ],
    },
  },
};

function getTypeKeywords(readonlyValue?: boolean) {
  const keywords: string[] = [];

  for (const type in types) {
    const { alias, readonly = false } = types[type];

    if (readonlyValue !== undefined && readonlyValue !== readonly) continue;

    keywords.push(type);

    if (!alias) continue;

    keywords.push(alias);
  }

  return keywords;
}

export default language;
