"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,5,30,0.8)_100%)] -z-10 pointer-events-none" />
      
      {/* Circuit lines pattern (Simulated via radial gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 -z-20 pointer-events-none" />

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10 w-48 h-48 rounded-full border-2 border-primary shadow-[0_0_40px_rgba(0,255,200,0.4)] flex items-center justify-center bg-background/50 backdrop-blur-sm"
        >
          {/* Outer glowing rings */}
          <div className="absolute inset-0 rounded-full border border-primary/50 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-10px] rounded-full border border-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="flex flex-col items-center justify-center">
            {/* Placeholder for CB Logo */}
            <h1 className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              CB
            </h1>
            <span className="text-lg font-bold text-gray-200 mt-2 tracking-widest uppercase">
              OB Labs
            </span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
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
