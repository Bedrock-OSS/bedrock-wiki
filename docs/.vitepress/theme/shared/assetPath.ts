const absolutePathPattern = /^(\/|[a-z]+:)/;

export default function assetPath(assetsDirectory: string, relativePath: string, path: string) {
  let assetPath = "";

  if (!absolutePathPattern.test(path)) {
    assetPath += `/assets/${assetsDirectory}/${relativePath.replace(/\.md$/, "/")}`;
  }

  assetPath += path;

  return assetPath;
}
