import Image from 'next/image';
import Container from './Container';
import { BUSINESS } from '@/lib/theme';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-brand-pink-dark text-white pt-14 pb-6">
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative w-14 h-14 rounded-full bg-white p-1.5">
                <Image src="/vitamine-logo.png" alt="Vitamine" fill sizes="56px" className="object-contain p-1" />
              </span>
              <span className="font-display font-extrabold text-2xl">{BUSINESS.name}</span>
            </div>
            <p className="mt-4 text-white/85 text-base leading-relaxed max-w-xs">
              Jus frais, crêpes, gaufres, cocktails et salades de fruits, milkshakes — préparés
              chaque jour à {BUSINESS.city}.
            </p>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition rounded-full px-4 py-2 text-base font-medium"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.89h-2.29v6.98A10 10 0 0 0 22 12Z" />
              </svg>
              facebook.com/vitamine.oran
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-3">Contact</h4>
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition rounded-full px-4 py-2 text-base font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a1 1 0 00.25-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <h4 className="font-display font-bold text-lg mt-6 mb-2">Horaires</h4>
            <p className="text-white/85 text-base">{BUSINESS.hours}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-3">Navigation</h4>
            <ul className="space-y-2 text-base">
              {[
                { href: '#hero', label: 'Accueil' },
                { href: '#menu', label: 'Menu' },
                { href: '#reviews', label: 'Avis clients' },
                { href: '#locations', label: 'Nos adresses' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/85 hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 text-center text-base text-white/75">
          © {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.city} · Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
