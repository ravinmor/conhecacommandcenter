export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function titleCase(value) {
  return String(value).replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
