import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vitamine Oran — Jus frais, Crêpes, Gaufres, Milkshakes',
  description:
    'Vitamine Oran : jus frais pressés, crêpes, gaufres, cocktails de fruits, salades de fruits, milkshakes et bouteilles 1L. À Oran.',
  icons: { icon: '/vitamine-logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
