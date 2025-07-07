import { LanguageRegistration } from "shiki";

const language: LanguageRegistration = {
  scopeName: "source.lang",
  displayName: "Language",
  name: "lang",
  patterns: [
    { include: "#comment" },
    { include: "#property" },
    {
      match: ".",
      name: "invalid.illegal.lang",
    },
  ],
  repository: {
    comment: {
      begin: "#",
      end: "$",
      name: "comment.line.number-sign.lang",
    },
    property: {
      match: "^([^#=]+)(=)([^\\t#]+)",
      captures: {
        1: {
          name: "support.type.property-name.lang",
        },
        2: {
          name: "punctuation.separator.key-value.lang",
        },
        3: {
          patterns: [{ include: "#emoji" }, { include: "#linebreak" }, { include: "#variable" }],
          name: "string.unquoted.lang",
        },
      },
    },
    emoji: {
      match: ":[^:]+:",
      name: "constant.character.escape.lang",
    },
    linebreak: {
      patterns: [
        { match: "~LINEBREAK~", name: "constant.character.escape.lang" },
        { match: "\\n", name: "constant.character.escape.lang" },
      ],
    },
    variable: {
      patterns: [
        { match: "%(0|[1-9]\\d*)(\\$.)?", name: "constant.character.escape.lang" },
        { match: "%.?", name: "constant.character.escape.lang" },
      ],
    },
  },
};

export default language;
