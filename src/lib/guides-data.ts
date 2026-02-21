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
    slug: 'digital-footprint-clean-up-guide-online-privacy',
    title: 'Digital Footprint Clean-Up: A Step-by-Step Guide to Online Privacy',
    category: 'guides',
    description: 'Minimize your digital footprint and boost online privacy with our expert guide. Learn practical cybersecurity tips, compare VPNs and data removal services.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Guide',
    emoji: '👣',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Optery', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Optery&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'DeleteMe', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=DeleteMe&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Firefox browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Firefox+browser&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Brave browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Brave+browser&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'DuckDuckGo browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=DuckDuckGo+browser&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'mastering-cybersecurity-essential-tips-protecting-digital-life',
    title: 'Mastering Cybersecurity: Essential Tips for Protecting Your Digital Life',
    category: 'guides',
    description: 'Unlock expert cybersecurity tips to fortify your online presence. This guide covers password managers, MFA, VPNs, and essential online privacy tools.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔒',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Multi-factor Authentication', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Multi-factor+Authentication&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Bitwarden', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: '1Password', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=1Password&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'ProtonVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ProtonVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'NordVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'lastpass-vs-bitwarden-choosing-the-right-password-manager',
    title: 'LastPass vs. Bitwarden: Choosing the Right Password Manager',
    category: 'password-managers',
    description: 'An honest, hands-on comparison of LastPass and Bitwarden to help you choose the best password manager for your cybersecurity needs.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔐',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'LastPass', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=LastPass&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Bitwarden', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'KeePass', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=KeePass&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: '1Password', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=1Password&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'bitdefender-vs-norton-360-antivirus-face-off',
    title: 'Antivirus Face-Off: Bitdefender vs. Norton 360 for Max Protection',
    category: 'antivirus',
    description: 'Unbiased antivirus comparison: Bitdefender vs. Norton 360. We dive deep into malware protection, privacy, performance, and pricing to help you choose the best security.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Bitdefender Total Security', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitdefender+Total+Security&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Norton 360 Deluxe', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Norton+360+Deluxe&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'ESET Internet Security', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ESET+Internet+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Kaspersky Total Security', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Kaspersky+Total+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'nordvpn-vs-expressvpn-ultimate-battle-online-security',
    title: 'NordVPN vs. ExpressVPN: The Ultimate Battle for Online Security',
    category: 'vpn-reviews',
    description: 'A deep-dive VPN comparison: NordVPN vs. ExpressVPN. Our hands-on testing reveals which VPN truly delivers superior online security and privacy in 2026.',
    readTime: '6 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'NordVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'ExpressVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'ultimate-secure-messaging-apps-protect-your-conversations',
    title: 'Ultimate Secure Messaging Apps: Protect Your Conversations',
    category: 'secure-messaging',
    description: 'Discover the top secure messaging apps – Signal, Threema, and Session – for truly private conversations. Learn about their encryption, privacy, and real-world security.',
    readTime: '8 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔒',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Signal', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Signal&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Threema', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Threema&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Session', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Session&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Proton Mail', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Proton+Mail&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Tutanota', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Tutanota&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'secure-browsing-explained-how-to-choose-a-privacy-focused-browser',
    title: 'Secure Browsing Explained: How to Choose a Privacy-Focused Browser',
    category: 'guides',
    description: 'Cut through the noise. Learn how to choose a privacy-focused browser to truly shield your online activities from tracking. Real advice, no-BS.',
    readTime: '11 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🕵️',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Brave Browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Brave+Browser&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Mozilla Firefox', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Mozilla+Firefox&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'DuckDuckGo Privacy Browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=DuckDuckGo+Privacy+Browser&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'uBlock Origin', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=uBlock+Origin&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Privacy Badger', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Privacy+Badger&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'boost-your-anonymity-top-online-privacy-tools-you-need-now',
    title: 'Boost Your Anonymity: Top Online Privacy Tools You Need Now',
    category: 'privacy-tools',
    description: 'Reclaim your online anonymity and protect personal data with these expert-tested online privacy tools and cybersecurity tips.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Tor Browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Tor+Browser&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Brave Browser', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Brave+Browser&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'DuckDuckGo', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=DuckDuckGo&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Signal', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Signal&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Bitwarden', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'choosing-password-manager-free-vs-paid',
    title: 'Choosing a Password Manager: Free vs. Paid Options Explored',
    category: 'password-managers',
    description: 'Navigate the world of password managers. We break down free vs. paid options, reviewing Bitwarden, LastPass, and KeePass for security, features, and value.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Guide',
    emoji: '🔑',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Bitwarden', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'LastPass', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=LastPass&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'KeePass', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=KeePass&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'YubiKey', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=YubiKey&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Dropbox', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Dropbox&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'best-password-managers-2026',
    title: 'Best Password Managers 2026: Secure Your Digital Life Easily',
    category: 'password-managers',
    description: 'Unlock top-tier password security for 2026. Our hands-on review dissects the best password managers, evaluating features, privacy, and ease of use.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🔑',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: '1Password', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=1Password&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'LastPass', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=LastPass&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Bitwarden', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitwarden&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Dashlane', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Dashlane&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'YubiKey', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=YubiKey&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'beyond-antivirus-zero-day-malware',
    title: 'Beyond Antivirus: Essential Steps to Protect Against Zero-Day Malware',
    category: 'antivirus',
    description: 'Go beyond basic antivirus. Learn advanced strategies and essential tools to defend your devices from sophisticated zero-day malware attacks.',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ESET', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ESET&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Malwarebytes', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Malwarebytes&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'CrowdStrike', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=CrowdStrike&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'password manager', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=password+manager&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'VPNs', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=VPNs&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'antivirus-showdown-ultimate-pc-security',
    title: 'Antivirus Showdown: The Ultimate Comparison for Total PC Security',
    category: 'antivirus',
    description: 'Dive into a head-to-head antivirus comparison of Bitdefender, Norton 360, and Kaspersky. Get honest insights on malware protection, performance, and privacy.',
    readTime: '8 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Bitdefender Antivirus Plus', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitdefender+Antivirus+Plus&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Bitdefender Internet Security', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitdefender+Internet+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Bitdefender Total Security', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Bitdefender+Total+Security&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Norton 360 Standard', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Norton+360+Standard&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Norton 360 Deluxe', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Norton+360+Deluxe&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'stream-without-buffering-best-vpns-for-flawless-streaming',
    title: 'Stream Without Buffering: The Best VPNs for Flawless Streaming',
    category: 'vpn-reviews',
    description: 'Unlock seamless HD streaming anywhere. This VPN review cuts through the noise, revealing the top services for bypassing geo-blocks and ending buffering for good.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '📺',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'ExpressVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'NordVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'CyberGhost', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=CyberGhost&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Netflix', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Netflix&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Hulu', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Hulu&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

  {
    slug: 'is-a-free-vpn-worth-it-deep-dive',
    title: 'Is a Free VPN Worth It? A Deep Dive into the Best Free Options',
    category: 'vpn-reviews',
    description: 'Unlock the truth about free VPNs. Our hands-on review identifies the safest, most reliable choices for casual online privacy without hidden costs.',
    readTime: '12 min',
    date: '2026-02-21',
    tag: 'Editor Pick',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    affiliateProducts: [
      { name: 'Proton VPN Free', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Proton+VPN+Free&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'Windscribe Free', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Windscribe+Free&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'TunnelBear Free', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=TunnelBear+Free&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'Proton VPN (Paid)', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Proton+VPN+%28Paid%29&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Windscribe (Paid)', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Windscribe+%28Paid%29&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ],
  },

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
      { name: 'NordVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=NordVPN&tag=securecg-20', tag: 'Editor Pick', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop' },
      { name: 'ExpressVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ExpressVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=200&fit=crop' },
      { name: 'Surfshark', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=Surfshark&tag=securecg-20', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=200&fit=crop' },
      { name: 'ProtonVPN', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ProtonVPN&tag=securecg-20', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'ProtonMail', brand: 'Amazon', price: 'See Price', url: 'https://www.amazon.com/s?k=ProtonMail&tag=securecg-20', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
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

/** Extract all products from all guides, deduplicated by name+brand */
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

/** Get featured products based on tags like Editor Pick, Best Overall, etc. */
export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

/** Get products filtered by guide category */
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

/** Category mapping for shop tabs */
export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'vpn-reviews', name: 'VPN Reviews' },
  { slug: 'antivirus', name: 'Antivirus' },
  { slug: 'password-managers', name: 'Password Managers' },
  { slug: 'privacy-tools', name: 'Privacy Tools' },
  { slug: 'comparisons', name: 'Comparisons' },
];
