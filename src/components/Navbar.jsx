import { Gift } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-sm">
            <Gift size={18} />
          </span>
          <span className="text-lg tracking-tight">Kindly</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
          <a href="#quiz" className="text-slate-600 hover:text-slate-900 transition">Quiz</a>
          <a href="#ethos" className="text-slate-600 hover:text-slate-900 transition">Ethos</a>
        </div>
        <a
          href="#quiz"
          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-200 to-amber-100 hover:from-amber-300 hover:to-amber-200 active:scale-[0.98] transition shadow-sm border border-amber-300"
        >
          Find a Gift
        </a>
      </nav>
    </header>
  );
}
