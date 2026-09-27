import { PluginSimple } from "markdown-it";

/**
 * Renders ```mermaid fenced code blocks as <Mermaid> components instead of highlighted code.
 *
 * The diagram source is URI-encoded before being placed in the attribute so that characters
 * which are meaningful to Vue's template compiler (`{`, `}`, `"`, `<`, etc.) cannot be altered
 * between the markdown renderer and the client. The component decodes it again before rendering.
 */
export const mermaidPlugin: PluginSimple = (md) => {
  const fence = md.renderer.rules.fence!;

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim().split(/\s+/)[0];

    if (lang !== "mermaid") {
      return fence(tokens, idx, options, env, self);
    }

    const code = encodeURIComponent(token.content.trim());

    return `<Mermaid code="${code}" />\n`;
  };
};
