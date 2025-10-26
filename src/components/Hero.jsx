import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, MapPin } from 'lucide-react';

export default function Hero({ onStart }) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-[#36454F] via-[#36454F] to-[#2b3740]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-serif tracking-tight text-[#F5DEB3]"
        >
          Find Thoughtful Gifts That Match Your Values
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-white/80"
        >
          AI-powered recommendations from local artisans with sustainability at heart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-md bg-[#F5DEB3] text-[#36454F] px-6 py-3 text-base font-semibold shadow hover:shadow-md active:scale-95 transition"
            aria-label="Start the gift quiz"
          >
            <Sparkles size={18} /> Start Gift Quiz
          </button>
          <a
            href="/#/recommendations"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-6 py-3 text-base font-medium hover:bg-white/10 transition"
          >
            Browse Ideas
          </a>
        </motion.div>

        <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature icon={<Sparkles className="text-[#F5DEB3]" size={18} />} title="AI-Powered Matching"/>
          <Feature icon={<MapPin className="text-[#F5DEB3]" size={18} />} title="Support Local Artisans"/>
          <Feature icon={<Leaf className="text-[#F5DEB3]" size={18} />} title="Sustainable Options"/>
        </dl>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 shadow-sm"
    >
      <div className="p-2 rounded-md bg-white/10">{icon}</div>
      <dt className="text-sm font-medium">{title}</dt>
    </motion.div>
  );
}
