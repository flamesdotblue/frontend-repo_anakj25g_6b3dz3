import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { key: "recipient", label: "Who is this for?", type: "chips", options: ["Partner", "Friend", "Family", "Coworker", "Self-care"] },
  { key: "occasion", label: "What’s the occasion?", type: "chips", options: ["Birthday", "Anniversary", "Graduation", "Holiday", "Just because"] },
  { key: "interests", label: "Pick a couple interests", type: "chips-multi", options: ["Outdoors", "Art", "Tech", "Wellness", "Foodie", "Books"] },
  { key: "values", label: "What matters most?", type: "chips-multi", options: ["Local", "Sustainable", "Handmade", "Vegan", "Inclusive"] },
  { key: "budget", label: "Budget range", type: "budget" },
];

export default function GiftQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({ recipient: "", occasion: "", interests: [], values: [], budget: 100 });

  const current = steps[index];
  const progress = ((index + 1) / steps.length) * 100;

  function toggleChip(field, value, multi = false) {
    setAnswers((prev) => {
      if (!multi) return { ...prev, [field]: value };
      const has = prev[field].includes(value);
      return { ...prev, [field]: has ? prev[field].filter((v) => v !== value) : [...prev[field], value] };
    });
  }

  function next() {
    if (index < steps.length - 1) setIndex((i) => i + 1);
  }
  function back() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function isNextDisabled() {
    if (current.type === "chips") return !answers[current.key];
    if (current.type === "chips-multi") return answers[current.key].length === 0;
    return false;
  }

  return (
    <section id="quiz" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-slate-600">Step {index + 1} of {steps.length}</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-2xl font-semibold text-slate-900">{current.label}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {current.type === "chips" && current.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleChip(current.key, opt)}
                    className={`px-4 py-2 rounded-full text-sm border transition shadow-sm hover:shadow ${
                      answers[current.key] === opt
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}

                {current.type === "chips-multi" && current.options?.map((opt) => {
                  const active = answers[current.key].includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleChip(current.key, opt, true)}
                      className={`px-4 py-2 rounded-full text-sm border transition shadow-sm hover:shadow ${
                        active
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent"
                          : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}

                {current.type === "budget" && (
                  <div className="w-full">
                    <label htmlFor="budget" className="text-sm text-slate-600">${" "}{answers.budget} budget</label>
                    <input
                      id="budget"
                      type="range"
                      min={20}
                      max={500}
                      step={5}
                      value={answers.budget}
                      onChange={(e) => setAnswers((p) => ({ ...p, budget: Number(e.target.value) }))}
                      className="mt-2 w-full accent-slate-900"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={back}
              disabled={index === 0}
              className="px-4 py-2 rounded-full text-sm border border-slate-200 disabled:opacity-50 bg-white hover:border-slate-300 transition"
            >
              Back
            </button>
            {index < steps.length - 1 ? (
              <button
                onClick={next}
                disabled={isNextDisabled()}
                className="px-5 py-2 rounded-full text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 transition shadow"
              >
                Continue
              </button>
            ) : (
              <a
                href="#" // would route to recommendations later
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-200 to-amber-100 hover:from-amber-300 hover:to-amber-200 transition border border-amber-300 shadow"
              >
                See recommendations
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
