
export enum UserRole {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  walletBalance: number;
  avatar: string;
  isVerified: boolean;
  trustScore: number;
}

export interface GamingAsset {
  id: string;
  title: string;
  description: string;
  category: 'ACCOUNT' | 'SERVER' | 'SERVICE' | 'STEAM';
  gameName: string;
  price: number;
  sellerId: string;
  images: string[];
  stats: Record<string, any>;
  isFeatured: boolean;
  status: 'AVAILABLE' | 'SOLD' | 'PENDING';
}

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  assetId: string;
  amount: number;
  status: 'PENDING' | 'ESCROW' | 'COMPLETED' | 'DISPUTED' | 'REFUNDED';
  createdAt: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdAt: string;
}
