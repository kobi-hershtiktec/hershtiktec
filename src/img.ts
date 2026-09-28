// Responsive WebP variants produced by scripts/optimize-images.mjs (keep widths in sync).
const WIDTHS = {
  "hershtik-capital": [640, 960, 1440],
  aura: [640, 960, 1440],
  "by-renovations": [640, 960, 1440],
  "camera-reveal": [640, 960, 1440],
  "scroll-demo": [640, 960, 1440],
  "hershtik-capital-mobile": [240, 400],
  "aura-mobile": [240, 400],
  "by-renovations-mobile": [240, 400],
  "fruit-dashboard": [640, 1024, 1600, 2400],
  "fruit-certificate": [640, 1024, 1600],
  "fruit-invoice": [640, 1024, 1600, 2400],
  "fruit-dashboard-mobile": [320, 520],
  kobi: [96, 480, 800],
  mark: [96],
} as const;

export type ImgName = keyof typeof WIDTHS;

export const imgUrl = (name: ImgName, w: number) => `/img/${name}-${w}.webp`;

/** Props for <img>: smallest variant as src, full srcset, and the caller's sizes hint. */
export function responsive(name: ImgName, sizes: string) {
  const widths = WIDTHS[name];
  return {
    src: imgUrl(name, widths[0]),
    srcSet: widths.map((w) => `${imgUrl(name, w)} ${w}w`).join(", "),
    sizes,
  };
}
