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
  { slug: 'all', name: 'All', icon: '' },
  { slug: 'vpn-reviews', name: 'VPN Reviews', icon: '' },
  { slug: 'antivirus', name: 'Antivirus & Malware', icon: '' },
  { slug: 'password-managers', name: 'Password Managers', icon: '' },
  { slug: 'privacy-tools', name: 'Privacy Tools', icon: '' },
  { slug: 'secure-messaging', name: 'Secure Messaging', icon: '' },
  { slug: 'comparisons', name: 'Head-to-Head Comparisons', icon: '' },
  { slug: 'guides', name: 'Security Guides', icon: '' },
];

export const guides: StyleGuide[] = [

  {
    slug: 'best-vpns-2026-ultimate-online-privacy',
    title: 'Best VPNs for 2026: Top Choices for Ultimate Online Privacy',
    category: 'vpn-reviews',
    description: 'Discover the best VPNs for 2026 with our hands-on review. We analyze NordVPN, ExpressVPN, ProtonVPN, and Surfshark for future-proof security and performance.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔒',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'NordVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'ExpressVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Surfshark', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=Surfshark&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'ProtonVPN', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ProtonVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ProtonMail', brand: 'Amazon', price: '$--', url: 'https://www.amazon.com/s?k=ProtonMail&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },
];
