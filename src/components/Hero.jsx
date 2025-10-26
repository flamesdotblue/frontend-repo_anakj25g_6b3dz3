import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* Spline 3D scene */}
      <div className="relative h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Gradient glow overlay (doesn't block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Find gifts they’ll actually love.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-lg text-slate-600"
            >
              Ethical, local, and delightfully personal. Take a 60‑second quiz and get AI‑curated picks from independent makers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#quiz"
                className="group inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white bg-slate-800 hover:bg-slate-900 active:scale-[0.98] transition shadow-lg shadow-slate-900/10"
              >
                Start the Quiz
                <span className="ml-2 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 group-hover:scale-125 transition" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-slate-800 bg-white/80 backdrop-blur hover:bg-white active:scale-[0.98] transition border border-slate-200 shadow-sm"
              >
                How it works
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
