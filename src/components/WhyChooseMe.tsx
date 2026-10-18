import { motion } from "framer-motion";
import { Lightbulb, Film, Layout, Smartphone, MessageSquareQuote } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Creative & Original Ideas",
    description:
      "Every animation and video starts with fresh, original concepts tailored specifically to your audience and brand identity.",
  },
  {
    icon: Film,
    title: "Engaging Video Content",
    description:
      "High-energy video advertisements and entertaining AI cartoon reels optimized to capture viewer attention within the first seconds.",
  },
  {
    icon: Layout,
    title: "Modern Website Designs",
    description:
      "Clean, stylish, high-converting digital storefronts and creator portfolios built with modern aesthetics.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description:
      "Seamless experiences across desktop, tablet, and mobile screens with fast loading times and smooth 2D transitions.",
  },
  {
    icon: MessageSquareQuote,
    title: "Direct Client Communication",
    description:
      "Work directly with the creator from start to finish. Quick feedback loops, transparent updates, and dedicated support.",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="section-spacing bg-[#0d0d11] border-y border-zinc-800/60">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
            Why Choose AI Video Ads
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Me
          </h2>
          <p className="text-zinc-400 text-base">
            Dedicated craftsmanship combining creative video production, AI animation, and modern web development.
          </p>
        </div>

        {/* 5 Clean Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`clean-card p-6 flex flex-col justify-between ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
