import type { Metadata } from 'next';
import { getAllProducts, shopCategories } from '@/lib/guides-data';
import ShopPageClient from './ShopPageClient';

export const metadata: Metadata = {
  title: 'Security Tools — VPN, Antivirus & Privacy Software',
  description: 'Browse our curated selection of VPNs, password managers, antivirus software, and privacy tools. Expert-vetted security recommendations.',
  keywords: ['best vpn deals', 'security software', 'password manager', 'antivirus 2026', 'privacy tools', 'vpn discount'],
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ShopPage() {
  const allProducts = getAllProducts();

  return (
    <div className="pt-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="section-title">Shop All Items</h1>
        <p className="text-gray-400 mt-1 text-sm">
          {allProducts.length} curated items from our style guides
        </p>
      </div>
      <ShopPageClient products={allProducts} categories={shopCategories} />
    </div>
  );
}
