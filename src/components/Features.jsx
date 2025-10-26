import { Rocket, Star, Leaf, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Rocket,
    title: "AI‑curated picks",
    desc: "Smart matches from taste & values in under a minute.",
  },
  { icon: Leaf, title: "Sustainable first", desc: "Spotlight on eco‑friendly, ethical makers." },
  { icon: MapPin, title: "Shop local", desc: "Discover artisans near your recipient." },
  { icon: Star, title: "Feel‑good gifting", desc: "Transparent sourcing and maker stories." },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition group"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center shadow-sm mb-4">
                <it.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
