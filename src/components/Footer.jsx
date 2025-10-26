import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} KindMatch. Thoughtful, ethical gifting.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-[#F5DEB3]" href="#" aria-label="Twitter">Twitter</a>
          <a className="hover:text-[#F5DEB3]" href="#" aria-label="Instagram">Instagram</a>
          <a className="hover:text-[#F5DEB3]" href="#" aria-label="Contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
