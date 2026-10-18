import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Globe, X, ExternalLink, Video } from "lucide-react";
import { PORTFOLIO_ITEMS, type PortfolioItem, type PortfolioCategory } from "../config/site";

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Video Ads", value: "video-ads" },
  { label: "Animated Videos", value: "animated-videos" },
  { label: "Websites", value: "websites" },
];

const isDirectVideo = (url?: string) => {
  if (!url) return false;
  return (
    url.endsWith(".mp4") ||
    url.endsWith(".webm") ||
    url.endsWith(".ogg") ||
    url.startsWith("/portfolio/") ||
    url.startsWith("/videos/") ||
    url.startsWith("/assets/")
  );
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-spacing bg-[#0d0d11] border-y border-zinc-800/60">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
            Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Portfolio
          </h2>
          <p className="text-zinc-400 text-base">
            Explore promotional video advertisements, creative animated reels, and modern website builds.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="clean-card overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Media Preview Area */}
                <div className="relative aspect-video bg-zinc-900 overflow-hidden flex items-center justify-center border-b border-zinc-800">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : isDirectVideo(item.videoUrl) ? (
                    <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                      <video
                        src={item.videoUrl}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onMouseEnter={(e) => {
                          e.currentTarget.play().catch(() => {});
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-purple-300 flex items-center gap-1 pointer-events-none">
                        <Play className="w-2.5 h-2.5 fill-purple-300" />
                        <span>Hover to Preview</span>
                      </div>
                    </div>
                  ) : (
                    /* Clean 2D placeholder preview */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-900 to-zinc-950">
                      <div className="w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors mb-2">
                        {item.category === "websites" ? (
                          <Globe className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 ml-0.5" />
                        )}
                      </div>
                      <span className="text-xs text-zinc-500 font-medium tracking-wide">
                        Click to view details
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-semibold shadow-md">
                      {item.category === "websites" ? "View Project" : "Watch Video"}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                        {item.category === "video-ads"
                          ? "Video Ad"
                          : item.category === "animated-videos"
                          ? "Animated Video"
                          : "Website"}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Configuration Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500">
            Easily add or update projects, video links, and screenshots in{" "}
            <code className="text-purple-400 font-mono">src/config/site.ts</code>
          </p>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Media Area */}
              <div className="aspect-video bg-black flex items-center justify-center relative">
                {selectedItem.videoUrl ? (
                  isDirectVideo(selectedItem.videoUrl) ? (
                    <video
                      src={selectedItem.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <iframe
                      src={selectedItem.videoUrl}
                      title={selectedItem.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                ) : (
                  <div className="p-8 text-center flex flex-col items-center">
                    <Video className="w-12 h-12 text-purple-400/50 mb-3" />
                    <p className="text-sm text-zinc-400 max-w-sm mb-2">
                      Ready for your video URL or project embed.
                    </p>
                    <p className="text-xs text-zinc-500">
                      Configure in <code className="text-purple-400 font-mono">src/config/site.ts</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  {selectedItem.category.replace("-", " ")}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedItem(null);
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-purple text-xs text-center justify-center"
                  >
                    Discuss Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn-secondary text-xs py-2.5 px-4 justify-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
