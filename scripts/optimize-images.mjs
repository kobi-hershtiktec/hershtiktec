// Generates responsive WebP variants for site images: public/img/<name>-<width>.webp
// Run manually after adding or replacing a source image:  node scripts/optimize-images.mjs
// Components reference them through src/img.ts (keep WIDTHS in sync).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const out = path.join(pub, "img");
fs.mkdirSync(out, { recursive: true });

// name -> [source, widths]
const jobs = {
  "hershtik-capital": ["work/hershtik-capital.jpg", [640, 960, 1440]],
  aura: ["work/aura.jpg", [640, 960, 1440]],
  "by-renovations": ["work/by-renovations.jpg", [640, 960, 1440]],
  "camera-reveal": ["work/camera-reveal.jpg", [640, 960, 1440]],
  "scroll-demo": ["work/scroll-demo.jpg", [640, 960, 1440]],
  "hershtik-capital-mobile": ["work/hershtik-capital-mobile.jpg", [240, 400]],
  "aura-mobile": ["work/aura-mobile.jpg", [240, 400]],
  "by-renovations-mobile": ["work/by-renovations-mobile.jpg", [240, 400]],
  "fruit-dashboard": ["work/fruit/dashboard.jpg", [640, 1024, 1600, 2400]],
  "fruit-certificate": ["work/fruit/certificate.jpg", [640, 1024, 1600]],
  "fruit-invoice": ["work/fruit/invoice.jpg", [640, 1024, 1600, 2400]],
  "fruit-dashboard-mobile": ["work/fruit/dashboard-mobile.jpg", [320, 520]],
  kobi: ["kobi.png", [96, 480, 800]],
  mark: ["mark.png", [96]],
};

let total = 0;
for (const [name, [src, widths]] of Object.entries(jobs)) {
  for (const w of widths) {
    const file = path.join(out, `${name}-${w}.webp`);
    await sharp(path.join(pub, src))
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: name.startsWith("kobi") || name === "mark" ? 82 : 74, effort: 6 })
      .toFile(file);
    const kb = fs.statSync(file).size / 1024;
    total += kb;
    console.log(`${(name + "-" + w).padEnd(32)} ${kb.toFixed(0).padStart(5)} KB`);
  }
}
console.log(`total ${total.toFixed(0)} KB`);
