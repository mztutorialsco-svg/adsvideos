import { motion } from "framer-motion";
import { ExternalLink, Video, Sparkles, ArrowRight } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { SOCIAL } from "../config/site";

export default function InstagramSection() {
  const isDefaultHandle = SOCIAL.instagram.includes("YOUR_INSTAGRAM_USERNAME");

  return (
    <section id="instagram" className="section-spacing bg-[#09090b]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
              Social Media
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              FOLLOW ME ON INSTAGRAM
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto">
              Explore my latest videos, AI cartoon animations, creative reels, and digital projects.
            </p>
          </div>

          {/* Clean Modern Instagram Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="clean-card p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-zinc-800">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                {/* Instagram Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 p-0.5 flex items-center justify-center flex-shrink-0">
                  <div className="w-full h-full bg-zinc-900 rounded-[14px] flex items-center justify-center text-white">
                    <InstagramIcon className="w-8 h-8" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                    AI Video Ads
                    <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Creative Videos • AI Cartoons • Web Design
                  </p>
                  <p className="text-xs text-purple-400 font-mono mt-1">
                    {isDefaultHandle ? "@your_handle_here" : SOCIAL.instagram.split("/").filter(Boolean).pop()}
                  </p>
                </div>
              </div>

              {/* Follow Button */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-primary text-xs py-2.5 px-6 font-semibold flex items-center justify-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow Me</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Content Reel Preview Highlights (Clean 2D Grid) */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Latest Video Highlights
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" /> Daily Creative Posts
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "AI Cartoon Short", tag: "Animation" },
                  { title: "Brand Promo Ad", tag: "Video Ad" },
                  { title: "Creative Reel", tag: "Motion" },
                  { title: "Behind The Scenes", tag: "Process" },
                ].map((reel, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-zinc-950 border border-zinc-800/80 p-4 flex flex-col justify-between hover:border-purple-500/40 transition-colors group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-md bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 transition-colors">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">
                        {reel.tag}
                      </p>
                      <p className="text-xs font-bold text-zinc-200 mt-0.5 leading-snug">
                        {reel.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note for easily editable URL */}
            {isDefaultHandle && (
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-2 text-xs text-zinc-500">
                <span>
                  Update your Instagram profile URL in{" "}
                  <code className="text-purple-400 font-mono">src/config/site.ts</code>
                </span>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
                >
                  Open Link <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
