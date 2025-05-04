import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "APPLE iPhone 15 (Black, 128 GB)",
    price: 69900,
    originalPrice: 79900,
    discount: 12,
    rating: 4.7,
    ratingCount: 8742,
    image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
    category: "Mobiles",
    brand: "Apple",
    description: "Experience the iPhone 15 with a stunning all-screen design, Ceramic Shield, and an advanced dual-camera system.",
    features: [
      "A16 Bionic chip",
      "128 GB Storage",
      "Super Retina XDR display",
      "Advanced dual-camera system",
      "Face ID for secure authentication"
    ],
    inStock: true,
    freeDelivery: true,
    fastDelivery: true
  },
  {
    id: 2,
    title: "SAMSUNG Galaxy S23 Ultra (Green, 256 GB)",
    price: 92999,
    originalPrice: 124999,
    discount: 25,
    rating: 4.5,
    ratingCount: 6238,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    category: "Mobiles",
    brand: "Samsung",
    description: "The Samsung Galaxy S23 Ultra comes with a professional-grade camera, advanced nightography, and S Pen built-in.",
    features: [
      "200MP Wide Camera",
      "Snapdragon 8 Gen 2 processor",
      "6.8-inch QHD+ Dynamic AMOLED display",
      "5000mAh battery",
      "S Pen included"
    ],
    inStock: true,
    freeDelivery: true,
    fastDelivery: true
  },
  {
    id: 3,
    title: "HP Victus Gaming Laptop",
    price: 59990,
    originalPrice: 79990,
    discount: 25,
    rating: 4.3,
    ratingCount: 2423,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    category: "Laptops",
    brand: "HP",
    description: "HP Victus Gaming Laptop with NVIDIA GeForce RTX 3050, 12th Gen Intel Core i5-12450H, 16GB DDR4, 512GB SSD",
    features: [
      "12th Gen Intel Core i5-12450H",
      "NVIDIA GeForce RTX 3050",
      "16GB DDR4 RAM",
      "512GB SSD",
      "15.6-inch FHD IPS display"
    ],
    inStock: true,
    freeDelivery: true
  },
  {
    id: 4,
    title: "boAt Rockerz 550 Bluetooth Headphones",
    price: 1299,
    originalPrice: 4999,
    discount: 74,
    rating: 4.2,
    ratingCount: 12540,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
    category: "Electronics",
    brand: "boAt",
    description: "boAt Rockerz 550 Over-Ear Wireless Headphones with up to 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation",
    features: [
      "20 Hours Playback",
      "Bluetooth v5.0",
      "50MM Dynamic Drivers",
      "Physical Noise Isolation",
      "Soft Padded Ear Cushions"
    ],
    inStock: true,
    freeDelivery: true
  },
  {
    id: 5,
    title: "SONY Bravia 55 inch 4K Ultra HD Smart TV",
    price: 57990,
    originalPrice: 94900,
    discount: 39,
    rating: 4.6,
    ratingCount: 3247,
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
    category: "TVs",
    brand: "Sony",
    description: "Sony Bravia 55 inch 4K Ultra HD Smart LED Google TV with Dolby Vision & Atmos, 4K Processor X1, HDR, Google TV, Voice Search, Apple Airplay and more",
    features: [
      "4K HDR Processor X1",
      "4K Ultra HD (3840 x 2160)",
      "Google TV Smart Features",
      "Dolby Vision & Dolby Atmos",
      "Voice Search"
    ],
    inStock: true,
    freeDelivery: true
  },
  {
    id: 6,
    title: "ADIDAS Running Shoes",
    price: 2399,
    originalPrice: 3999,
    discount: 40,
    rating: 4.3,
    ratingCount: 5640,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    category: "Footwear",
    brand: "Adidas",
    description: "ADIDAS Men's Running Shoes with breathable upper and cushioned sole for all-day comfort and performance",
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Lightweight design",
      "Flexible construction"
    ],
    inStock: true,
    freeDelivery: true
  },
  {
    id: 7,
    title: "Apple MacBook Air M2",
    price: 89990,
    originalPrice: 99990,
    discount: 10,
    rating: 4.8,
    ratingCount: 3245,
    image: "https://images.pexels.com/photos/5938393/pexels-photo-5938393.jpeg",
    category: "Laptops",
    brand: "Apple",
    description: "Apple MacBook Air with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage",
    features: [
      "Apple M2 chip",
      "13.6-inch Liquid Retina display",
      "8GB unified memory",
      "256GB SSD storage",
      "MagSafe charging"
    ],
    inStock: true,
    freeDelivery: true,
    fastDelivery: true
  },
  {
    id: 8,
    title: "Titan Analog Watch for Men",
    price: 2495,
    originalPrice: 4195,
    discount: 40,
    rating: 4.4,
    ratingCount: 7832,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    category: "Watches",
    brand: "Titan",
    description: "Titan Analog Watch for Men with Brown Leather Strap, Quartz Movement, and Water Resistance",
    features: [
      "Quartz movement",
      "Genuine leather strap",
      "Water resistant",
      "Stainless steel case",
      "Mineral glass crystal"
    ],
    inStock: true,
    freeDelivery: true
  },
  {
    id: 9,
    title: "Dell XPS 13 Plus",
    price: 129990,
    originalPrice: 149990,
    discount: 13,
    rating: 4.7,
    ratingCount: 1256,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    category: "Laptops",
    brand: "Dell",
    description: "Dell XPS 13 Plus with 13.4-inch 4K display, 12th Gen Intel Core i7, 16GB RAM, 512GB SSD",
    features: [
      "12th Gen Intel Core i7",
      "16GB LPDDR5 RAM",
      "512GB NVMe SSD",
      "13.4-inch 4K UHD+ display",
      "Windows 11 Pro"
    ],
    inStock: true,
    freeDelivery: true,
    fastDelivery: true
  },
  {
    id: 10,
    title: "OnePlus Nord CE 3",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    rating: 4.4,
    ratingCount: 3567,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
    category: "Mobiles",
    brand: "OnePlus",
    description: "OnePlus Nord CE 3 with 6.7-inch AMOLED display, 8GB RAM, 128GB storage",
    features: [
      "Snapdragon 782G",
      "50MP main camera",
      "5000mAh battery",
      "80W fast charging",
      "OxygenOS 13"
    ],
    inStock: true,
    freeDelivery: true
  }
];

export const categories = [
  { id: 1, name: "Mobiles", icon: "smartphone" },
  { id: 2, name: "Electronics", icon: "radio" },
  { id: 3, name: "Laptops", icon: "laptop" },
  { id: 4, name: "TVs", icon: "tv" },
  { id: 5, name: "Footwear", icon: "boot" },
  { id: 6, name: "Watches", icon: "watch" },
  { id: 7, name: "Furniture", icon: "armchair" },
  { id: 8, name: "Fashion", icon: "shirt" }
];

export const banners = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    title: "New Electronics Arrivals",
    subtitle: "Up to 40% Off"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    title: "Fashion Sale",
    subtitle: "Min. 50% Off"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
    title: "Home Appliances",
    subtitle: "Starting at ₹4,999"
  }
];