"use client";

import Link from "next/link";
import { Mail, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a051a] py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-6 flex flex-col items-center group">
          <div className="w-12 h-12 bg-primary/10 rounded-md border border-primary/50 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,200,0.3)] mb-2 group-hover:shadow-[0_0_20px_rgba(0,255,200,0.6)] transition-all">
            <span className="font-black text-primary tracking-tighter text-xl">CB</span>
          </div>
          <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">
            OB Labs
          </span>
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
