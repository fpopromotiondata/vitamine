'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import { BUSINESS } from '@/lib/theme';

const LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#menu', label: 'Menu' },
  { href: '#reviews', label: 'Avis' },
  { href: '#locations', label: 'Adresses' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-pink/95 backdrop-blur shadow-lg'
          : 'bg-brand-pink shadow-md'
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="relative inline-block w-10 h-10 rounded-full bg-white p-1 ring-2 ring-white/40 group-hover:ring-white transition">
            <Image src="/vitamine-logo.png" alt="Vitamine logo" fill sizes="40px" className="object-contain p-1" />
          </span>
          <span className="text-white font-display font-extrabold text-xl tracking-wide">Vitamine</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-white/95 font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phoneIntl}`}
            className="ml-3 inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-4 py-2 rounded-full shadow-soft transition"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a1 1 0 00.25-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
            </svg>
            {BUSINESS.phone}
          </a>
        </nav>

        {/* Burger */}
        <button
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
        >
          <span className={`block h-0.5 w-6 bg-white rounded transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </Container>

      {/* Mobile drawer (full-screen slide-down) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] z-40 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* panel */}
        <div
          className={`relative bg-brand-pink-dark shadow-2xl border-t border-white/10 transform transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex flex-col py-2">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3.5 text-white font-medium text-lg border-b border-white/10 hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
            <div className="px-6 py-4">
              <a
                href={`tel:${BUSINESS.phoneIntl}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 rounded-full"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a1 1 0 00.25-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
