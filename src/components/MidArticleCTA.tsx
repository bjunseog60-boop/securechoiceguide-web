import Image from 'next/image';
import type { AffiliateProduct } from '@/lib/guides-data';

interface MidArticleCTAProps {
  products: AffiliateProduct[];
  variant?: 'hero' | 'pair';
}

export default function MidArticleCTA({ products, variant = 'hero' }: MidArticleCTAProps) {
  if (products.length === 0) return null;

  if (variant === 'hero') {
    const p = products[0];
    return (
      <div className="not-prose my-8 bg-gray-800 border border-gray-700 rounded-xl p-5">
        <p className="text-xs text-emerald-400 uppercase tracking-wide font-medium mb-3">Top Pick</p>
        <div className="flex items-center gap-4">
          {p.image && (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-900">
              <Image src={p.image} alt={p.name} fill sizes="80px" className="object-cover" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide">{p.brand}</p>
            <p className="font-semibold text-sm text-white mt-0.5">{p.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono font-bold text-sm text-white">{p.price}</span>
            </div>
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap flex-shrink-0"
          >
            View Deal
          </a>
        </div>
      </div>
    );
  }

  // pair variant
  const items = products.slice(0, 2);
  return (
    <div className="not-prose my-8 bg-gray-800 border border-gray-700 rounded-xl p-5">
      <p className="text-xs text-emerald-400 uppercase tracking-wide font-medium mb-3">Expert Picks</p>
      <div className="grid grid-cols-2 gap-3">
        {items.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="bg-gray-900 rounded-lg border border-gray-700 p-3 hover:border-emerald-700 hover:shadow-sm transition-all group"
          >
            {p.image && (
              <div className="relative h-24 rounded-lg overflow-hidden mb-2 bg-gray-800">
                <Image src={p.image} alt={p.name} fill sizes="200px" className="object-cover" />
              </div>
            )}
            <p className="text-[11px] text-gray-400 uppercase tracking-wide">{p.brand}</p>
            <p className="font-medium text-xs text-gray-200 group-hover:text-white mt-0.5 line-clamp-1">{p.name}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-mono font-bold text-xs text-white">{p.price}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
