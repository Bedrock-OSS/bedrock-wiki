const slugify = require('vitepress/dist/node/markdown/plugins/slugify').slugify

function extractHeaderPlugin(md, include = ['h1', 'h2', 'h3']) {
  md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
    const token = tokens[i]
    if (include.includes(token.tag)) {
      const title = tokens[i + 1].content
      const idAttr = token.attrs.find(([name]) => name === 'id')
      const slug = idAttr && idAttr[1]
      const data = md.__data
      const headers = data.headers || (data.headers = [])
      headers.push({
        level: parseInt(token.tag.slice(1), 10),
        title: title,
        slug: slug || slugify(title)
      })
    }
    return self.renderToken(tokens, i, options)
  }
}
module.exports = extractHeaderPlugin;