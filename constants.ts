
import { GamingAsset, User, UserRole } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Aryan Sharma',
  email: 'aryan@nexus.in',
  role: UserRole.BUYER,
  walletBalance: 12500,
  avatar: 'https://picsum.photos/seed/user1/200',
  isVerified: true,
  trustScore: 98
};

export const FEATURED_ASSETS: GamingAsset[] = [
  {
    id: 'a1',
    title: 'Valorant Radiant Account - All Skins',
    description: 'High-tier account with peak Radiant rank. Includes Kuronami Vandal, Elderflame Dagger, and more.',
    category: 'ACCOUNT',
    gameName: 'Valorant',
    price: 45000,
    sellerId: 's1',
    images: ['https://picsum.photos/seed/val1/600/400'],
    stats: { level: 240, rank: 'Immortal 3', skins: 85 },
    isFeatured: true,
    status: 'AVAILABLE'
  },
  {
    id: 'a2',
    title: 'BGMI Conqueror Season 12 - Rare Outfits',
    description: 'Old OG account with Season 2 outfits and Conqueror frames. Full Glacier M416 Lv. 5.',
    category: 'ACCOUNT',
    gameName: 'BGMI',
    price: 28000,
    sellerId: 's2',
    images: ['https://picsum.photos/seed/bgmi1/600/400'],
    stats: { level: 78, tier: 'Conqueror', kills: '15000+' },
    isFeatured: true,
    status: 'AVAILABLE'
  },
  {
    id: 'a3',
    title: 'Custom Minecraft Survival Server - 20 Slots',
    description: 'Fully configured Spigot server with custom plugins, pre-built spawn, and 1 year hosting.',
    category: 'SERVER',
    gameName: 'Minecraft',
    price: 5500,
    sellerId: 's3',
    images: ['https://picsum.photos/seed/mc1/600/400'],
    stats: { slots: 20, ram: '4GB', uptime: '99.9%' },
    isFeatured: false,
    status: 'AVAILABLE'
  },
  {
    id: 'a4',
    title: 'Steam Account - 200+ AAA Games',
    description: 'Cyberpunk, Elden Ring, RDR2, and much more. High Steam level (50+).',
    category: 'STEAM',
    gameName: 'Steam',
    price: 35000,
    sellerId: 's4',
    images: ['https://picsum.photos/seed/steam1/600/400'],
    stats: { games: 212, level: 55, vacStatus: 'Clean' },
    isFeatured: true,
    status: 'AVAILABLE'
  }
];
