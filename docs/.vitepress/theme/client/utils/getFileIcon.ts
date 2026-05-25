export default function getFileIcon(path: string) {
  const type = path.split(".").pop();

  switch (type) {
    case "jpeg":
    case "jpg":
    case "png":
    case "tga":
      return "🖼️";
    case "lang":
      return "🈵";
    case "mcstructure":
      return "🏛";
    default:
      return "📝";
  }
}
