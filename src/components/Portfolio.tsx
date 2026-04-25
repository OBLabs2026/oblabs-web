"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  // We have 6 portfolio images
  const images = Array.from({ length: 6 }).map((_, i) => `/media/portfolio-${i + 1}.png`);

  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Recent Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">A glimpse into the digital experiences and platforms we've built.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={src} 
                alt={`Portfolio project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-3 rounded-full bg-primary text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Case Study
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
