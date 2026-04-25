"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden z-10 border-t border-white/5">
      {/* Waveform Background Placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-full h-48 bg-[repeating-linear-gradient(90deg,var(--color-primary)_0px,var(--color-primary)_2px,transparent_2px,transparent_8px)] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl font-bold tracking-widest text-gray-400 uppercase mb-4">CTA Section</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-lg">
            Let's Build Something <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Powerful</span>
          </h3>
          <button className="px-10 py-4 rounded-full bg-primary text-black font-bold text-lg shadow-[0_0_30px_rgba(0,255,200,0.6)] hover:scale-105 transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
