"use client";

import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Cpu } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "games",
      desc: "Cutting-edge gameplay systems",
      icon: <Gamepad2 className="w-10 h-10 text-primary mb-4" />,
      delay: 0.1,
    },
    {
      title: "apps",
      desc: "Fluid user experiences",
      icon: <Smartphone className="w-10 h-10 text-primary mb-4" />,
      delay: 0.2,
    },
    {
      title: "solutions",
      desc: "AI-driven business logic",
      icon: <Cpu className="w-10 h-10 text-primary mb-4" />,
      delay: 0.3,
    }
  ];

  return (
    <section className="py-16 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold tracking-widest text-white uppercase">
            Services / 3 Categories
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: cat.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-primary/50 bg-background/50 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,200,0.15)] hover:shadow-[0_0_30px_rgba(0,255,200,0.4)] transition-all hover:-translate-y-2 group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{cat.title}</h4>
              <p className="text-gray-400 text-center text-sm">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
