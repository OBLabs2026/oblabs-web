"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        <Link href="/" className="flex items-center group relative h-12">
          <span className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_15px_rgba(0,255,200,0.5)] transition-all">
            OB Labs
          </span>
        </Link>

        {/* Desktop Nav - Plain text with hover effect */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]">Services</Link>
          <Link href="#work" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]">Projects</Link>
          <Link href="#about" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]">About</Link>
          <Link href="#contact" className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]">Contact</Link>
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
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-primary">Services</Link>
            <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-primary">Projects</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-primary">About</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-accent hover:text-primary">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
