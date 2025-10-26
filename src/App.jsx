import React, { useEffect, useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import Hero from './components/Hero.jsx';
import GiftQuiz from './components/GiftQuiz.jsx';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const route = useMemo(() => hash.replace('#', ''), [hash]);
  return route;
}

function Placeholder({ title, description }) {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif text-[#F5DEB3]">{title}</h1>
      <p className="mt-4 text-white/80 max-w-2xl">{description}</p>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();

  if (route.startsWith('/quiz')) {
    return (
      <Layout>
        <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-serif text-[#F5DEB3] mb-6">Gift Quiz</h1>
          <GiftQuiz compact />
        </main>
      </Layout>
    );
  }

  if (route.startsWith('/recommendations')) {
    return (
      <Layout>
        <Placeholder title="Recommendations" description="This page will show curated AI-powered gift suggestions with filters and artisan details." />
      </Layout>
    );
  }

  if (route.startsWith('/dashboard')) {
    return (
      <Layout>
        <Placeholder title="Dashboard" description="Your saved recipients, upcoming occasions, wishlist, and gift history will appear here after you sign in." />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero onStart={() => {
        const el = document.getElementById('embedded-quiz');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} />

      <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="how-heading" className="text-2xl font-serif text-[#F5DEB3]">How It Works</h2>
        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 list-decimal list-inside">
          <li className="rounded-lg bg-white/5 border border-white/10 p-4">
            Tell us about the recipient and your values.
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-4">
            Our AI curates gifts from sustainable, local artisans.
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-4">
            Save favorites and check out via trusted partners.
          </li>
        </ol>
      </section>

      <div id="embedded-quiz" className="py-8">
        <GiftQuiz />
      </div>
    </Layout>
  );
}
