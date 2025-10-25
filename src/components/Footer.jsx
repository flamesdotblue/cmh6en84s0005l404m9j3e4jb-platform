import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="text-white/80 text-sm">© {new Date().getFullYear()} AuraDesk</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Changelog</a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Github className="size-5" /></a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Twitter className="size-5" /></a>
        </div>
      </div>
    </footer>
  );
}
