import Image from 'next/image';
import type { AffiliateProduct } from '@/lib/guides-data';

export default function ShopTheLook({ products }: { products: AffiliateProduct[] }) {
  return (
    <div className="border border-gray-700 rounded-xl bg-gray-800 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-700">
        <h3 className="font-body font-bold text-white">Recommended Tools</h3>
        <p className="text-xs text-gray-400 mt-0.5">Prices may vary. We may earn a small commission.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {products.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
            className="border-r border-b border-gray-700 last:border-r-0 hover:bg-gray-700/50 transition-colors group relative">
            {i === 0 && (
              <div className="absolute top-2 left-2 z-10">
                <span className="text-[10px] font-medium text-emerald-400 bg-gray-900 border border-emerald-800 px-2 py-0.5 rounded">
                  Top Pick
                </span>
              </div>
            )}
            {p.image ? (
              <div className="relative h-36 overflow-hidden bg-gray-900">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="h-36 bg-gray-900 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No image</span>
              </div>
            )}
            <div className="p-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">{p.brand}</p>
              <p className="font-medium text-xs text-gray-200 group-hover:text-white transition-colors leading-tight mt-0.5 line-clamp-2">{p.name}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="font-mono font-bold text-sm text-white">{p.price}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
