"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a051a] py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-6 flex flex-col items-center group">
          <div className="relative w-24 h-24 mb-2 group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(0,255,200,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,255,200,0.6)]">
            <Image
              src="/media/main_logo.png"
              alt="OB Labs Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">YouTube</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-3 h-3" /> hello@oblabs.com
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} OB Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
