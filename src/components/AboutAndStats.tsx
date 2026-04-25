"use client";

import { motion } from "framer-motion";

export default function AboutAndStats() {
  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* ABOUT BRAND */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase mb-8">About / Brand</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              OB Labs is a forward-thinking technology studio dedicated to pushing the boundaries of digital experiences. We blend creative design with cutting-edge engineering to deliver products that resonate with users worldwide.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our vision is to become the architectural backbone of the next generation of internet applications, focusing on scalable gaming, intelligent AI solutions, and fluid mobile applications.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="text-center mb-10 mt-24">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase mb-12">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-black text-primary mb-4 drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]">50+</span>
              <span className="text-xl text-gray-300 font-medium">Projects</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-black text-primary mb-4 drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]">10+</span>
              <span className="text-xl text-gray-300 font-medium">Clients</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-black text-primary mb-4 drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]">5+</span>
              <span className="text-xl text-gray-300 font-medium">Years</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
