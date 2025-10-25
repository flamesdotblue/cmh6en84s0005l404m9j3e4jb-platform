import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/20 via-indigo-700/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25),transparent)] pointer-events-none" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-violet-500/30" />
            <span className="font-semibold tracking-tight text-white/90">AuraDesk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#" className="hover:text-white transition">Docs</a>
          </div>
          <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-sm transition">
            <Download className="size-4" />
            Download
          </a>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-28 md:pt-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                  New • AI voice agent for your desktop
                </span>
                <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                  Your self‑learning desktop copilot
                </h1>
                <p className="mt-5 text-white/70 text-lg leading-relaxed">
                  Ask in voice or text. AuraDesk performs tasks across your laptop—launch apps, organize files, draft emails, automate workflows—and learns your preferences over time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.a whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} href="#download" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-5 py-3 font-medium text-neutral-900 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.7)]">
                    <Download className="size-5" />
                    Download for Desktop
                  </motion.a>
                  <motion.a whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur px-5 py-3 font-medium">
                    <Play className="size-5" />
                    Watch demo
                  </motion.a>
                </div>

                <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
                  <div className="flex -space-x-3">
                    <img alt="" src="https://i.pravatar.cc/40?img=1" className="size-7 rounded-full ring-2 ring-neutral-950" />
                    <img alt="" src="https://i.pravatar.cc/40?img=2" className="size-7 rounded-full ring-2 ring-neutral-950" />
                    <img alt="" src="https://i.pravatar.cc/40?img=3" className="size-7 rounded-full ring-2 ring-neutral-950" />
                  </div>
                  <span>Trusted by 10k+ early users</span>
                </div>
              </motion.div>
            </div>
            <div className="md:col-span-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative">
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span className="size-2 rounded-full bg-red-400" />
                      <span className="size-2 rounded-full bg-yellow-400" />
                      <span className="size-2 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-white/50">Command Preview</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-neutral-900/70 border border-white/5 p-4">
                    <div className="text-white/80 text-sm">“Organize my downloads, summarize this PDF, and schedule a reminder for tomorrow 9am.”</div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <Pill text="Move 34 files → /Work/Assets" />
                      <Pill text="Summarize: product_brief.pdf" />
                      <Pill text="Create calendar event" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                    <span>Privacy-first • On-device actions</span>
                    <span className="inline-flex items-center gap-1">Get started <ArrowRight className="size-3" /></span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
      {text}
    </motion.div>
  );
}
