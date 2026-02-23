export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  image?: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
  image?: string;
}

export const categories = [
  { slug: 'all', name: 'All Guides', icon: '✨' },
  { slug: 'security', name: 'Cybersecurity', icon: '🛡️' },
  { slug: 'insurance', name: 'Insurance', icon: '📝' },
  { slug: 'privacy', name: 'Privacy', icon: '🔒' },
  { slug: 'software', name: 'Software', icon: '💻' },
];

export const guides: StyleGuide[] = [  {
    slug: 'best-identity-theft-protection-services-2026',
    title: 'The 4 Best Identity Theft Protection Services of 2026',
    category: 'security',
    description: 'Worried about data breaches? We tested and ranked the top 4 identity theft protection services of 2026 to keep your personal information safe.',
    readTime: '14 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🛡️',
    image: '/images/guides/best-identity-theft-protection-services-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Aura Identity Guard', brand: 'Aura', price: '$12/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-identity-theft-protection-services-2026-prod0.jpg' },
      { name: 'LifeLock with Norton 360', brand: 'LifeLock', price: '$11/mo', url: 'https://amzn.to/example', tag: 'Most Comprehensive Suite', image: '/images/guides/best-identity-theft-protection-services-2026-prod1.jpg' },
      { name: 'IdentityForce UltraSecure+Credit', brand: 'IdentityForce', price: '$24/mo', url: 'https://amzn.to/example', tag: 'Best for Restoration', image: '/images/guides/best-identity-theft-protection-services-2026-prod2.jpg' },
      { name: 'IdentityIQ Secure Max', brand: 'IdentityIQ', price: '$30/mo', url: 'https://amzn.to/example', tag: 'Best for Credit Monitoring', image: '/images/guides/best-identity-theft-protection-services-2026-prod3.jpg' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}

export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
    }
  }
  return products;
}

export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
    }
  }
  return products.slice(0, count);
}

export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'security', name: 'Security' },
  { slug: 'insurance', name: 'Insurance' },
  { slug: 'privacy', name: 'Privacy' },
  { slug: 'software', name: 'Software' },
];