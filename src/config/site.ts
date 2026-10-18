/**
 * ============================================================
 * MF CREATIVE STUDIO — CONFIGURATION FILE
 * ============================================================
 * Easily update your contact details, Instagram URL, and portfolio
 * items in this file.
 * ============================================================
 */

// ─── BRAND ───────────────────────────────────────────────────
export const BRAND = {
  name: "MF Creative Studio",
  tagline: "Creative Videos. Modern Websites. Digital Experiences.",
  heroHeadline: "CREATIVE VIDEOS. AMAZING WEBSITES.",
  heroDescription:
    "I create engaging video advertisements, AI cartoon animations, and modern websites for creators and businesses.",
  logo: "/logo-cropped.png",
};

// ─── CONTACT DETAILS ─────────────────────────────────────────
export const CONTACT = {
  phone: "8341284478",
  phoneDisplay: "8341284478",
  phoneIntl: "+918341284478",
  whatsappUrl: "https://wa.me/918341284478",
  whatsappMessage:
    "Hello! I am interested in your video ads or website development services.",
  callUrl: "tel:+918341284478",
};

// ─── SOCIAL LINKS ────────────────────────────────────────────
/**
 * Update your Instagram profile link below.
 * Replace "YOUR_INSTAGRAM_USERNAME" with your actual Instagram handle.
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME", // ← Edit this
  whatsapp: CONTACT.whatsappUrl,
};

// ─── SEO METADATA ────────────────────────────────────────────
export const SEO = {
  title: "MF Creative Studio | Video Advertisements, Animated Videos & Modern Websites",
  description:
    "MF Creative Studio creates engaging video advertisements, AI cartoon animations, and modern responsive websites for creators and businesses. Contact: 8341284478.",
  ogImage: "/logo-cropped.png",
};

// ─── PORTFOLIO ITEMS ─────────────────────────────────────────
/**
 * Add or customize your projects here.
 * - category: "video-ads" | "animated-videos" | "websites"
 * - thumbnail: path to image in /public/portfolio/ or URL
 * - videoUrl: optional YouTube embed / Vimeo / MP4 link
 */
export type PortfolioCategory = "all" | "video-ads" | "animated-videos" | "websites";

export interface PortfolioItem {
  id: string;
  category: "video-ads" | "animated-videos" | "websites";
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  liveUrl?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    category: "video-ads",
    title: "Brand Commercial & Ad Campaign",
    description: "High-impact promotional video designed for social media ads and brand awareness.",
    thumbnail: "",
    videoUrl: "",
  },
  {
    id: "2",
    category: "animated-videos",
    title: "AI Cartoon Character Story",
    description: "Creative 3D-styled AI animated cartoon video with expressive characters and narrative.",
    thumbnail: "",
    videoUrl: "",
  },
  {
    id: "3",
    category: "websites",
    title: "Modern Creator Portfolio Website",
    description: "Clean, fast, responsive animated website built for digital creators and brands.",
    thumbnail: "",
    liveUrl: "",
  },
  {
    id: "4",
    category: "video-ads",
    title: "Product Showcase Video",
    description: "Engaging commercial showcasing product highlights, benefits, and call to action.",
    thumbnail: "",
    videoUrl: "",
  },
  {
    id: "5",
    category: "animated-videos",
    title: "Animated Social Media Reel",
    description: "Short-form entertaining cartoon animation crafted for Instagram Reels and Shorts.",
    thumbnail: "",
    videoUrl: "",
  },
  {
    id: "6",
    category: "websites",
    title: "Business & Agency Website",
    description: "Sleek dark-themed corporate website with smooth micro-interactions and lead forms.",
    thumbnail: "",
    liveUrl: "",
  },
];
