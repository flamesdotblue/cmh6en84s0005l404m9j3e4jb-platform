import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Shield, Workflow, Cpu, DownloadCloud } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice + Text Commands',
    desc: 'Speak or type. Natural language understanding with real‑time feedback and confirmations.',
    glow: 'from-violet-500/40',
  },
  {
    icon: Workflow,
    title: 'Universal Desktop Actions',
    desc: 'Launch apps, manage files, control settings, automate routines, and orchestrate multi‑step workflows.',
    glow: 'from-fuchsia-500/40',
  },
  {
    icon: Shield,
    title: 'Privacy‑First',
    desc: 'Runs locally whenever possible. Fine‑grained permission gates and transparent action logs.',
    glow: 'from-emerald-500/40',
  },
  {
    icon: Zap,
    title: 'Learns Your Style',
    desc: 'Adapts to your preferences, shortcuts, and tools for faster, smarter automations over time.',
    glow: 'from-amber-400/40',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_20%,rgba(147,51,234,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Do anything on your laptop with one prompt</h2>
          <p className="mt-4 text-white/70">AuraDesk connects voice understanding with native desktop controls to execute tasks end‑to‑end. No more switching windows or clicking through menus.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 overflow-hidden">
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-b ${f.glow} to-transparent opacity-20`} />
              <div className="relative flex items-center gap-3">
                <div className="size-10 grid place-items-center rounded-xl bg-white/10">
                  <f.icon className="size-5" />
                </div>
                <h3 className="font-medium">{f.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="size-10 grid place-items-center rounded-xl bg-white/10">
                <Cpu className="size-5" />
              </div>
              <div>
                <h4 className="font-medium">Local-first intelligence</h4>
                <p className="text-sm text-white/70">On-device inference for fast, private actions. Cloud optional for heavier tasks.</p>
              </div>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
              <Badge>macOS • Windows • Linux</Badge>
              <Badge>Keyboard shortcuts</Badge>
              <Badge>Context-aware automations</Badge>
              <Badge>Action audit trail</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="size-10 grid place-items-center rounded-xl bg-white/10">
                <DownloadCloud className="size-5" />
              </div>
              <div>
                <h4 className="font-medium">One-click install</h4>
                <p className="text-sm text-white/70">Ship-ready desktop app with auto‑updates and safe permissions.</p>
              </div>
            </div>
            <div className="mt-5">
              <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm">Get the app</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">{children}</span>
  );
}
