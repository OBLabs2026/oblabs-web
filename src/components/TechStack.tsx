"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
  const tech = [
    {
      name: "React",
      img: "/media/React_icon.png",
    },
    {
      name: "Node.js",
      img: "/media/nodejs_icon.png",
    },
    {
      name: "AI",
      img: null, // Keep AI as lucide icon for now
    },
    {
      name: "Python",
      img: "/media/pyhton_icon.png",
    },
    {
      name: "Unity",
      img: "/media/unity_icon.png",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase">Technology Stack</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl border border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] transition-all cursor-pointer w-40 h-40 group"
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300 relative w-12 h-12 mb-4">
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(0,255,200,0.5)]"
                  />
                ) : (
                  <Cpu className="w-12 h-12 text-primary" />
                )}
              </div>
              <span className="text-white font-medium">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
