import React from 'react';
import { Gift, User, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/#/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-md bg-[#F5DEB3] text-[#36454F] shadow-sm group-hover:shadow transition-shadow">
            <Gift size={18} />
          </div>
          <span className="font-semibold tracking-tight">KindMatch</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="/#/quiz" className="text-sm hover:text-[#F5DEB3] transition-colors">Gift Quiz</a>
          <a href="/#/recommendations" className="text-sm hover:text-[#F5DEB3] transition-colors">Recommendations</a>
          <a href="/#/dashboard" className="text-sm hover:text-[#F5DEB3] transition-colors flex items-center gap-1"><User size={16}/> Dashboard</a>
          <a href="/#/" className="inline-flex items-center gap-2 rounded-md bg-[#F5DEB3] text-[#36454F] px-4 py-2 text-sm font-medium shadow hover:shadow-md transition">
            <Star size={16}/> Start Gift Quiz
          </a>
        </div>
      </nav>
    </header>
  );
}
