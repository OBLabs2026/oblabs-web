"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, LayoutGrid, Info, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group relative h-12 w-48">
          {/* Replaced text logo with Mainpage_banner.png */}
          <Image 
            src="/media/Mainpage_banner.png" 
            alt="OB Labs Banner" 
            fill
            className="object-contain object-left drop-shadow-[0_0_10px_rgba(0,255,200,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,200,0.6)] transition-all"
            priority
          />
        </Link>

        {/* Desktop Nav - Now using icons with glowing effects */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,255,200,0.4)]" title="Services">
            <Layers className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
          </Link>
          <Link href="#work" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,255,200,0.4)]" title="Projects">
            <LayoutGrid className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
          </Link>
          <Link href="#about" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,255,200,0.4)]" title="About">
            <Info className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
          </Link>
          <Link href="#contact" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,255,200,0.4)]" title="Contact">
            <Mail className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="#contact" className="px-6 py-2.5 rounded-full border border-accent text-accent hover:bg-accent/10 transition-colors shadow-[0_0_10px_rgba(0,150,255,0.2)_inset] text-sm font-bold">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-primary/20 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-white hover:text-primary">
              <Layers className="w-5 h-5" /> Services
            </Link>
            <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-white hover:text-primary">
              <LayoutGrid className="w-5 h-5" /> Projects
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-white hover:text-primary">
              <Info className="w-5 h-5" /> About
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-accent hover:text-primary">
              <Mail className="w-5 h-5" /> Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
