import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Video, Globe } from "lucide-react";
import { BRAND } from "../config/site";

export default function Hero() {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern bg-radial-fade"
    >
      <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-2xl blur-lg group-hover:opacity-100 transition-opacity opacity-70" />
            <img
              src="/logo-cropped.png"
              alt="AI Video Ads"
              className="relative h-20 sm:h-24 w-auto object-contain rounded-xl drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-medium text-zinc-300 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Video Production &amp; Web Development</span>
        </motion.div>

        {/* Main Headline with Clean 2D Text Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          CREATIVE VIDEOS. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white">
            AMAZING WEBSITES.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {BRAND.heroDescription}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#portfolio")}
            className="w-full sm:w-auto btn-primary"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto btn-secondary"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Clean Service Highlights (2D feature pills) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Video className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Video Ads</p>
              <p className="text-[11px] text-zinc-500">Engaging &amp; High-ROI</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Animated Videos</p>
              <p className="text-[11px] text-zinc-500">AI Cartoons &amp; Stories</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Globe className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Modern Websites</p>
              <p className="text-[11px] text-zinc-500">Fast &amp; Responsive</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
