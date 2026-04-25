"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/oblabs-logo.png"
            alt="OB Labs logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover shadow-[0_0_18px_rgba(56,189,248,0.45)]"
            priority
          />
          <span className="text-2xl font-bold tracking-tighter">
            OB<span className="text-primary">LABS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="#games" className="hover:text-white transition-colors">Games</Link>
          <Link href="#apps" className="hover:text-white transition-colors">Apps</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="#contact" className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            Contact Us
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
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            <Link href="#games" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Games</Link>
            <Link href="#apps" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Apps</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-primary">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
