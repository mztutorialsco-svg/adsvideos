# MF Creative Studio — Official Website

A complete, modern, professional animated website for **MF Creative Studio** specializing in engaging video advertisements, AI cartoon animations, and modern responsive website development.

---

## 🎨 Design System & Visual Style
- **Aesthetic**: Clean modern black and white theme with refined purple accents.
- **Animations**: Pure 2D motion powered by Framer Motion and lightweight CSS. **No 3D models, Three.js, or heavy graphics**, ensuring instant load times and 60fps performance.
- **Typography**: Plus Jakarta Sans for crisp, modern editorial agency style.
- **Accessibility**: Smooth scrolling with automatic reduced-motion accessibility support.
- **Responsive**: Seamless experience across mobile phones, tablets, and large desktop screens.

---

## 🚀 Sections & Features

1. **Modern 2D Hero**:
   - Headline: **“CREATIVE VIDEOS. AMAZING WEBSITES.”**
   - Tagline: *“I create engaging video advertisements, AI cartoon animations, and modern websites for creators and businesses.”*
   - Clean action buttons: **Explore My Work** (scrolls to portfolio) and **Contact Me** (scrolls to contact).
   - Subtle 2D text reveals and service indicator pills.

2. **My Services**:
   - **Video Advertisements**: Engaging promotional videos for products, businesses, and brands.
   - **Animated Videos**: Creative AI cartoon videos, animated stories, and entertaining reels.
   - **Website Development**: Modern, responsive, animated websites for businesses and creators.
   - Subtle hover states and direct **“Contact for Project”** buttons.

3. **My Portfolio**:
   - Filterable categories: **All Projects**, **Video Ads**, **Animated Videos**, and **Websites**.
   - Clean project cards with hover overlays and an interactive **Project & Video Preview Modal**.
   - Easily customizable in [`src/config/site.ts`](file:///c:/Users/user/AdvideosWeb/src/config/site.ts) without code changes.

4. **Instagram Promotion**:
   - Headline: **“FOLLOW ME ON INSTAGRAM”**.
   - Description: *“Explore my latest videos, AI cartoon animations, creative reels, and digital projects.”*
   - Clean profile card with Instagram icon and **“Follow Me”** button.

5. **Why Work With Me**:
   - 5 core pillars:
     1. Creative & original ideas.
     2. Engaging video content.
     3. Modern website designs.
     4. Responsive layouts.
     5. Direct client communication.

6. **Contact Section**:
   - Headline: **“HAVE A PROJECT IN MIND?”**.
   - Description: *“Contact me for video advertisements, animated videos, and professional website development. Let's discuss your next project!”*
   - Direct phone number displayed: **`8341284478`**.
   - **“Message Me on WhatsApp”** button linking to:  
     `https://wa.me/918341284478?text=Hello!%20I%20am%20interested%20in%20your%20video%20ads%20or%20website%20development%20services.`
   - **“Call Now”** button linking to `tel:+918341284478`.

7. **Footer**:
   - Brand: **MF Creative Studio**.
   - Tagline: *“Creative Videos. Modern Websites. Digital Experiences.”*
   - Quick links to Instagram, WhatsApp, Services, Portfolio, and Contact, plus smooth back-to-top button.

---

## 🛠️ Configuration & Customization

Everything is centralized in a single file:  
👉 [**`src/config/site.ts`**](file:///c:/Users/user/AdvideosWeb/src/config/site.ts)

### 1. Update Instagram URL
```typescript
export const SOCIAL = {
  instagram: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME",
};
```

### 2. Update Phone / Contact
```typescript
export const CONTACT = {
  phone: "8341284478",
  phoneDisplay: "8341284478",
  whatsappUrl: "https://wa.me/918341284478",
  callUrl: "tel:+918341284478",
};
```

### 3. Add or Edit Projects in Portfolio
```typescript
export const PORTFOLIO_ITEMS = [
  {
    id: "1",
    category: "video-ads", // "video-ads" | "animated-videos" | "websites"
    title: "Brand Commercial & Ad Campaign",
    description: "High-impact promotional video designed for social media ads.",
    thumbnail: "/portfolio/project-1.jpg", // optional thumbnail image
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // optional video embed
  },
  // Add as many items as you like...
];
```

---

## 💻 Running Locally

```bash
# Start local development server
cd c:\Users\user\AdvideosWeb
npm run dev
```
Open **`http://localhost:5173`** in your browser.

## 🚢 Building for Production

```bash
npm run build
```
The optimized bundle is saved in the `dist/` directory, ready to deploy to Vercel, Netlify, or Cloudflare Pages.
