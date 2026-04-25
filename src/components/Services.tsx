"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Games",
    description: "Cutting-edge gameplay systems. Games designed with amazing visual fidelity, engaging game loops, and scalable backend architecture to support millions of players worldwide.",
    image: "/media/games.png",
    reverse: false,
  },
  {
    title: "Apps",
    description: "Fluid user experiences. Mobile applications built with native performance, intuitive UI/UX design, and robust data synchronization across devices and platforms.",
    image: "/media/Apps.png",
    reverse: true,
  },
  {
    title: "Solutions",
    description: "AI and backend systems. Enterprise-grade AI solutions ensuring scalable data processing, predictive analytics, and automated decision making pipelines.",
    image: "/media/solutions.png",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors shadow-lg min-h-[400px] flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover md:object-fill"
                />
              </div>

              {/* Text Content Overlaid on Empty Space */}
              <div className={`relative z-10 w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${service.reverse ? 'ml-auto' : 'mr-auto'}`}>
                <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed drop-shadow-md font-medium">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2 drop-shadow-md">
                    Learn more <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
