export default function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
