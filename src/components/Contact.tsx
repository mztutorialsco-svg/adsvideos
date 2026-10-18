import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, Sparkles } from "lucide-react";
import { CONTACT } from "../config/site";

export default function Contact() {
  const fullWhatsAppUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  return (
    <section id="contact" className="section-spacing bg-[#09090b] relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-xs font-semibold text-purple-300 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Ready for New Projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            HAVE A PROJECT IN MIND?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Contact me for video advertisements, animated videos, and professional website development. Let's discuss your next project!
          </motion.p>

          {/* Phone Display Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="clean-card p-6 sm:p-8 max-w-md mx-auto mb-10 text-center"
          >
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
              Direct Phone &amp; WhatsApp
            </p>
            <a
              href={CONTACT.callUrl}
              className="text-3xl sm:text-4xl font-extrabold text-white hover:text-purple-400 transition-colors tracking-tight block font-mono"
            >
              {CONTACT.phoneDisplay}
            </a>
            <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500 mt-2">
              <Clock className="w-3 h-3 text-purple-400" />
              <span>Available for freelance projects &amp; consultations</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* WhatsApp Contact */}
            <a
              href={fullWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
              id="whatsapp-contact-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message Me on WhatsApp</span>
            </a>

            {/* Click to Call */}
            <a
              href={CONTACT.callUrl}
              className="btn-call w-full sm:w-auto"
              id="call-contact-btn"
            >
              <Phone className="w-5 h-5 text-purple-400" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
