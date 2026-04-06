const absolutePathPattern = /^(\/|[a-z]+:)/;

export default function assetPath(assetsDirectory: string, relativePath: string, path: string) {
  let assetPath = "";

  if (!absolutePathPattern.test(path)) {
    // Strip /zh/ prefix for asset lookup since Chinese content shares English assets
    const cleanPath = relativePath.replace(/^\/?zh\//, "").replace(/\.md$/, "/");
    assetPath += `/assets/${assetsDirectory}/${cleanPath}`;
  }

  assetPath += path;

  return assetPath;
}
