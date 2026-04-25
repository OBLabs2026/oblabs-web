"use client";

import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Code2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Mobile Games",
    description: "Creating highly engaging, chart-topping casual and hyper-casual games that reach millions of players worldwide.",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    image: "/media/service-1.png",
  },
  {
    title: "App Development",
    description: "Designing beautiful and functional iOS and Android applications focused on exceptional user experience.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    image: "/media/service-2.png",
  },
  {
    title: "Software Solutions",
    description: "Building robust, scalable backend architectures and web applications tailored to business needs.",
    icon: <Code2 className="w-8 h-8 text-white" />,
    image: "/media/service-3.png",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We deliver state-of-the-art digital products across multiple platforms.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="relative z-20 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors cursor-pointer w-max">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
