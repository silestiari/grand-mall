// Replace media here when approved Grand Mall assets are available.
// For video, set kind: "video", src to the clip, and poster to its still image.
type HeroMedia =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster: string };

export const homepageMedia: {
  hero: HeroMedia;
  brands: { src: string; alt: string };
} = {
  hero: {
    kind: "image",
    src: "/images/hero-light-study.svg",
  },
  brands: {
    src: "/images/fashion-gallery-placeholder.jpg",
    alt: "Spacious contemporary fashion gallery with glass storefronts and natural light",
  },
};
