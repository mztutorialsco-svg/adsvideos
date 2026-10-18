import { motion } from "framer-motion";
import { Video, Sparkles, Globe, ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "video-ads",
    icon: Video,
    title: "Video Advertisements",
    description:
      "Engaging promotional videos for products, businesses, and brands.",
    highlights: [
      "Product showcase videos",
      "Social media ads (Reels & Shorts)",
      "High-converting brand promos",
      "Fast turnarounds & revisions",
    ],
  },
  {
    id: "animated-videos",
    icon: Sparkles,
    title: "Animated Videos",
    description:
      "Creative AI cartoon videos, animated stories, and entertaining reels.",
    highlights: [
      "AI cartoon character design",
      "Storytelling & viral reels",
      "Custom animation sequences",
      "Engaging sound & pacing",
    ],
  },
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, animated websites for businesses and creators.",
    highlights: [
      "Mobile-first responsive design",
      "Smooth 2D animations & speed",
      "SEO & clean structure",
      "Custom portfolio & landing pages",
    ],
  },
];

export default function Services() {
  const handleContactClick = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-spacing bg-[#09090b]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Services
          </h2>
          <p className="text-zinc-400 text-base">
            High-quality video production and modern web development crafted to elevate your brand.
          </p>
        </div>

        {/* 3 Clean Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="clean-card p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-950/20 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {item.highlights.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <span className="w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-purple-500/50 text-white font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  Contact for Project
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
