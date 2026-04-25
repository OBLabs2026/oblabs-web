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
          className="object-cover md:object-center opacity-100"
        />
        {/* Soft overlay removed to let the baked-in image text shine through clearly */}
      </div>

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* We removed the HTML text and buttons because they are baked into main_page.png */}
        
        {/* Optional: Add an invisible clickable area over the image buttons if you want them to actually do something */}
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-auto pt-96 animate-bounce"
        >
          {/* Arrow down removed or kept? The image might not have an arrow down. Let's keep it but push it very low */}
        </motion.div>
      </div>
    </section>
  );
}
