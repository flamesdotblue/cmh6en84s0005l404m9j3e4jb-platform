import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Keyboard, Zap } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Prompt with your voice',
    desc: '“Clean my desktop, archive screenshots, and open Figma.”'
  },
  {
    icon: Keyboard,
    title: 'Confirm the plan',
    desc: 'AuraDesk shows a safe, transparent action plan for your approval.'
  },
  {
    icon: Zap,
    title: 'Let it work',
    desc: 'It executes steps, adapts, and learns your preferences for next time.'
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-4 text-white/70">From intent to action in seconds—with safety checks and a delightful, modern interface.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
              <div className="size-12 grid place-items-center rounded-xl bg-white/10">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div id="demo" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <div className="text-sm text-white/60">Live prompt</div>
          <TypePane />
        </motion.div>
      </div>
    </section>
  );
}

function TypePane() {
  const examples = [
    'Arrange my downloads by file type and delete duplicates',
    'Start a Zoom call with Alex and share the Project folder',
    'Summarize notes.md and draft an email to the team',
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % examples.length), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-neutral-950 p-4">
      <div className="flex items-center gap-2 text-xs text-white/50">
        <span className="size-2 rounded-full bg-emerald-400" />
        <span>Listening…</span>
      </div>
      <AnimatedText text={examples[idx]} />
      <div className="mt-4 grid sm:grid-cols-3 gap-2 text-xs text-white/70">
        <span className="rounded-lg bg-white/5 px-3 py-2">Files + Folders</span>
        <span className="rounded-lg bg-white/5 px-3 py-2">Apps + Shortcuts</span>
        <span className="rounded-lg bg-white/5 px-3 py-2">System Controls</span>
      </div>
    </div>
  );
}

function AnimatedText({ text }) {
  const letters = Array.from(text);
  return (
    <div className="mt-3 text-white/90 text-lg">
      {letters.map((char, i) => (
        <span key={i} style={{ display: 'inline-block' }} className="animate-pulse [animation-duration:2.2s]" >{char}</span>
      ))}
      <span className="inline-block w-2 h-5 align-middle ml-1 bg-white/80 animate-pulse" />
    </div>
  );
}
