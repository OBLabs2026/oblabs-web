"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Terminal, Cpu, Cloud, Smartphone } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Quantum CRM",
      desc: "Next-gen CRM ecosystem with advanced analytics.",
      image: "/media/portfolio-1.png",
      tech: [<Code2 key="1" className="w-4 h-4 text-primary" />, <Terminal key="2" className="w-4 h-4 text-accent" />, <Cloud key="3" className="w-4 h-4 text-white" />]
    },
    {
      title: "AI Chatbot",
      desc: "Conversational AI agent for enterprise automation.",
      image: "/media/portfolio-2.png",
      tech: [<Cpu key="1" className="w-4 h-4 text-primary" />, <Terminal key="2" className="w-4 h-4 text-accent" />, <Cloud key="3" className="w-4 h-4 text-white" />]
    },
    {
      title: "Mobile ERP",
      desc: "Cross-platform enterprise resource planning tool.",
      image: "/media/portfolio-3.png",
      tech: [<Smartphone key="1" className="w-4 h-4 text-primary" />, <Code2 key="2" className="w-4 h-4 text-accent" />]
    }
  ];

  return (
    <section id="work" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase">Project Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/50 transition-colors shadow-lg cursor-pointer"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {project.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
