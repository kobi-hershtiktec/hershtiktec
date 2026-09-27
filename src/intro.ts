// When the page arrives prerendered, the HTML is already visible on first paint.
// Replaying entrance animations would make that content blink out and back in,
// so intro animations are skipped until the first client-side navigation.

let prerendered = typeof document !== "undefined" && !!document.getElementById("root")?.firstElementChild;

export const introAllowed = () => !prerendered;

export function markNavigated() {
  prerendered = false;
}
