"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-10"
        >
          <Image 
            src="/media/main_logo.png" 
            alt="OB Labs Main Logo" 
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(0,255,200,0.2)]"
            priority
          />
        </motion.div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            We Build Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]">Digital Systems</span>
          </h2>
        </motion.div>

        {/* Arrow Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(0,255,200,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}
