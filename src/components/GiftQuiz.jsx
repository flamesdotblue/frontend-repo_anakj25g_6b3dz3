import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { key: 'interests', label: 'Interests & Profile' },
  { key: 'occasion', label: 'Occasion' },
  { key: 'budget', label: 'Budget' },
  { key: 'values', label: 'Values' },
  { key: 'review', label: 'Review' },
];

export default function GiftQuiz({ compact = false }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState({
    ageRange: '25-34',
    interests: [],
    values: [],
    occasion: 'Birthday',
    budget: 75,
  });

  const next = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);

  const toggleInArray = (field, value) => {
    setForm((f) => {
      const has = f[field].includes(value);
      return { ...f, [field]: has ? f[field].filter((v) => v !== value) : [...f[field], value] };
    });
  };

  return (
    <section aria-labelledby="quiz-heading" className={`mx-auto w-full ${compact ? 'max-w-2xl' : 'max-w-4xl'} px-4 sm:px-6 lg:px-8`}>
      <h2 id="quiz-heading" className="sr-only">Gift Quiz</h2>

      <div className="rounded-xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/80">Step {step + 1} of {steps.length} • {steps[step].label}</p>
            <span className="text-xs text-white/60">{progress}% complete</span>
          </div>
          <div className="mt-2 h-2 w-full rounded bg-white/10 overflow-hidden" aria-hidden="true">
            <div className="h-full bg-[#F5DEB3]" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35 }}
            >
              {step === 0 && (
                <StepInterests form={form} setForm={setForm} toggle={toggleInArray} />
              )}
              {step === 1 && (
                <StepOccasion form={form} setForm={setForm} />
              )}
              {step === 2 && (
                <StepBudget form={form} setForm={setForm} />
              )}
              {step === 3 && (
                <StepValues form={form} toggle={toggleInArray} />
              )}
              {step === 4 && (
                <StepReview form={form} />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 rounded-md bg-[#F5DEB3] text-[#36454F] px-5 py-2 text-sm font-semibold shadow hover:shadow-md active:scale-95 transition"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <a
                href="/#/recommendations"
                className="inline-flex items-center gap-2 rounded-md bg-[#F5DEB3] text-[#36454F] px-5 py-2 text-sm font-semibold shadow hover:shadow-md active:scale-95 transition"
              >
                See Recommendations <CheckCircle2 size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepInterests({ form, setForm, toggle }) {
  const interestOptions = ['Outdoors', 'Cooking', 'Tech', 'Art', 'Wellness', 'Music', 'Books'];
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="age" className="block text-sm font-medium mb-2">Age range</label>
        <select
          id="age"
          value={form.ageRange}
          onChange={(e) => setForm((f) => ({ ...f, ageRange: e.target.value }))}
          className="w-full rounded-md bg-[#2b3740] border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F5DEB3]"
        >
          <option>18-24</option>
          <option>25-34</option>
          <option>35-44</option>
          <option>45-54</option>
          <option>55+</option>
        </select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium mb-2">Interests</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {interestOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => toggle('interests', opt)}
              aria-pressed={form.interests.includes(opt)}
              className={`rounded-md border px-3 py-2 text-sm transition ${form.interests.includes(opt) ? 'border-[#F5DEB3] bg-white/10' : 'border-white/10 bg-[#2b3740] hover:bg-white/5'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function StepOccasion({ form, setForm }) {
  const occasions = ['Birthday', 'Anniversary', 'Thank You', 'Holiday', 'Graduation'];
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="block text-sm font-medium mb-2">Occasion</legend>
        <div className="flex flex-wrap gap-2">
          {occasions.map((o) => (
            <button
              type="button"
              key={o}
              onClick={() => setForm((f) => ({ ...f, occasion: o }))}
              aria-pressed={form.occasion === o}
              className={`rounded-md border px-3 py-2 text-sm transition ${form.occasion === o ? 'border-[#F5DEB3] bg-white/10' : 'border-white/10 bg-[#2b3740] hover:bg-white/5'}`}
            >
              {o}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function StepBudget({ form, setForm }) {
  return (
    <div className="space-y-6">
      <label htmlFor="budget" className="block text-sm font-medium">Budget: ${form.budget}</label>
      <input
        id="budget"
        type="range"
        min="20"
        max="500"
        step="5"
        value={form.budget}
        onChange={(e) => setForm((f) => ({ ...f, budget: Number(e.target.value) }))}
        className="w-full accent-[#F5DEB3]"
      />
      <div className="flex justify-between text-xs text-white/70">
        <span>$20</span>
        <span>$500</span>
      </div>
    </div>
  );
}

function StepValues({ form, toggle }) {
  const valueOptions = ['Eco-friendly', 'Local artisan', 'Fair trade', 'Charitable'];
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="block text-sm font-medium mb-2">Values</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {valueOptions.map((v) => (
            <button
              type="button"
              key={v}
              onClick={() => toggle('values', v)}
              aria-pressed={form.values.includes(v)}
              className={`rounded-md border px-3 py-2 text-sm transition ${form.values.includes(v) ? 'border-[#F5DEB3] bg-white/10' : 'border-white/10 bg-[#2b3740] hover:bg-white/5'}`}
            >
              {v}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function StepReview({ form }) {
  return (
    <div className="space-y-4 text-sm">
      <p className="text-white/80">Review your selections before seeing recommendations.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <li className="rounded-md bg-[#2b3740] border border-white/10 p-3"><strong>Age:</strong> {form.ageRange}</li>
        <li className="rounded-md bg-[#2b3740] border border-white/10 p-3"><strong>Occasion:</strong> {form.occasion}</li>
        <li className="rounded-md bg-[#2b3740] border border-white/10 p-3"><strong>Budget:</strong> ${form.budget}</li>
        <li className="rounded-md bg-[#2b3740] border border-white/10 p-3"><strong>Interests:</strong> {form.interests.join(', ') || '—'}</li>
        <li className="rounded-md bg-[#2b3740] border border-white/10 p-3"><strong>Values:</strong> {form.values.join(', ') || '—'}</li>
      </ul>
    </div>
  );
}
