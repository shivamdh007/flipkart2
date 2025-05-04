export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  ratingCount: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
  freeDelivery: boolean;
  fastDelivery?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export type SortOption = 'popularity' | 'priceLowToHigh' | 'priceHighToLow' | 'newest';