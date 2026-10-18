import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Instagram", href: "#instagram" },
  { label: "About", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <img
              src="/logo-cropped.png"
              alt="AI Video Ads Logo"
              className="h-10 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-zinc-200 transition-colors hidden sm:inline">
              AI Video <span className="text-purple-400 font-semibold">Ads</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-white hover:border-purple-500/50 transition-all cursor-pointer"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#09090b]/98 backdrop-blur-xl border-b border-zinc-800 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-medium text-zinc-300 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-zinc-800">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full btn-primary text-sm py-3 justify-center"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
