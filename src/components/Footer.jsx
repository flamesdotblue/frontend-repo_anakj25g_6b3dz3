export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Kindly — Thoughtful gifting for good.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
