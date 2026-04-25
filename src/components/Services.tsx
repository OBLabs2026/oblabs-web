"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Games",
    description: "Cutting-edge gameplay systems. Games designed with amazing visual fidelity, engaging game loops, and scalable backend architecture to support millions of players worldwide.",
    image: "/media/service-1.png",
    reverse: false,
  },
  {
    title: "Apps",
    description: "Fluid user experiences. Mobile applications built with native performance, intuitive UI/UX design, and robust data synchronization across devices and platforms.",
    image: "/media/service-2.png",
    reverse: true,
  },
  {
    title: "Solutions",
    description: "AI and backend systems. Enterprise-grade AI solutions ensuring scalable data processing, predictive analytics, and automated decision making pipelines.",
    image: "/media/service-3.png",
    reverse: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Services</h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-primary/40 transition-colors shadow-lg`}
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2">
                    Learn more <span>→</span>
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 relative min-h-[300px]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
