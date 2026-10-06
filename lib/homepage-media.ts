import { officialMedia } from "./official-media";
// Homepage assets from the existing Grand Mall website.
// For video, set kind: "video", src to the clip, and poster to its still image.
type HeroMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string };

export const homepageMedia: {
  hero: HeroMedia;
  brands: { src: string; alt: string };
} = {
  hero: {
    kind: "image",
    src: officialMedia.exterior.src,
    alt: officialMedia.exterior.alt,
  },
  brands: officialMedia.zara,
};
