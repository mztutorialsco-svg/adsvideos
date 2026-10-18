import { ArrowUp, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { BRAND, CONTACT, SOCIAL } from "../config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fullWhatsAppUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 pt-16 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-cropped.png"
                alt="AI Video Ads Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
              <span className="font-bold text-lg text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
              {BRAND.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={fullWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-green-500/50 flex items-center justify-center text-zinc-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Video Advertisements
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Animated Videos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Website Development
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo("#portfolio")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#instagram")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Instagram
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#why-me")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Why Work With Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
