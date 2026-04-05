import { PluginSimple } from "markdown-it";
import assetPath from "../../../shared/assetPath";

export const imagePlugin: PluginSimple = (md) => {
  const image = md.renderer.rules.image!;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");

    if (src) {
      token.attrSet("src", assetPath("images", env.relativePath, src));
    }

    return image(tokens, idx, options, env, self);
  };
};
