import type { Review } from '@/lib/reviews-data';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="relative shrink-0 w-[300px] sm:w-[360px] bg-white text-brand-ink rounded-2xl p-6 shadow-card flex flex-col">
      {/* Big quote glyph */}
      <svg
        viewBox="0 0 32 32"
        className="absolute top-4 right-4 w-10 h-10 text-brand-pink-soft"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.4 8C5.3 8 2 11.3 2 15.4v8.6h8.6V15.4H6.3c0-1.7 1.4-3.1 3.1-3.1V8zm13.4 0c-4.1 0-7.4 3.3-7.4 7.4v8.6H24V15.4h-4.3c0-1.7 1.4-3.1 3.1-3.1V8z" />
      </svg>

      {/* Header: avatar + meta */}
      <header className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white font-display font-bold text-lg shadow-soft">
          {review.initial}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-brand-ink truncate">{review.name}</p>
          <p className="text-xs text-zinc-500 truncate">{review.date}</p>
        </div>
      </header>

      {/* Stars */}
      <div className="mt-3 flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i < review.rating ? 'currentColor' : '#e5e7eb'}>
            <path d="M10 1.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L10 15.4l-5.5 2.9 1-6.1L1.2 7.9l6.1-.9z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="mt-3 text-sm text-zinc-700 leading-relaxed line-clamp-6">
        “{review.text}”
      </p>

      {/* Source pill */}
      <footer className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-500">
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
          <path fill="#4285F4" d="M23 12.2c0-.8-.1-1.6-.2-2.4H12v4.5h6.2c-.3 1.5-1.1 2.7-2.3 3.6v3h3.7c2.2-2 3.4-5 3.4-8.7z"/>
          <path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-3c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3C3.7 21.4 7.5 24 12 24z"/>
          <path fill="#FBBC05" d="M5.6 14.6c-.2-.7-.3-1.5-.3-2.3s.1-1.6.3-2.3v-3H1.8C1 8.5.5 10.2.5 12s.5 3.5 1.3 5.1l3.8-2.5z"/>
          <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.2 15.1 0 12 0 7.5 0 3.7 2.6 1.8 6.4l3.8 3c.9-2.7 3.4-4.6 6.4-4.6z"/>
        </svg>
        Avis Google · Note 5/5
      </footer>
    </article>
  );
}
