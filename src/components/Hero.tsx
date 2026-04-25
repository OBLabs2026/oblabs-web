"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Image (main_page.png) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/media/main_page.png" 
          alt="OB Labs Hero" 
          fill
          priority
          className="object-cover md:object-center opacity-80"
        />
        {/* Gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* We keep the text and buttons. If the image already has text baked in, we can remove these later */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8 mt-48"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            We Build Intelligent Digital Systems
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="px-8 py-3 rounded-full bg-primary text-black font-bold shadow-[0_0_20px_rgba(0,255,200,0.5)] hover:scale-105 transition-all">
              Explore Solutions
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-all shadow-[0_0_15px_rgba(0,150,255,0.2)_inset]">
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
