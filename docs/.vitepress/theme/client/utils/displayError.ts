export default function displayError(error: Error): never {
  if (import.meta.env.DEV) {
    const ErrorOverlay = customElements.get("vite-error-overlay");

    if (!ErrorOverlay) throw error;

    const overlay = new ErrorOverlay(error);
    document.body.appendChild(overlay);
  }
  throw error;
}
