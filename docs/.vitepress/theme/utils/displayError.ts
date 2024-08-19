export default function displayError(error: Error) {
  if (import.meta.env.DEV) {
    const ErrorOverlay = customElements.get("vite-error-overlay");

    if (!ErrorOverlay) return;

    const overlay = new ErrorOverlay(error);
    document.body.appendChild(overlay);
  }
  throw error;
}
