import { createMarkdownRenderer } from "vitepress";
import config from "./config";

export default await createMarkdownRenderer(
  config.srcDir,
  config.markdown,
  config.site.base,
  config.logger
);
