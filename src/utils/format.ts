export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export const calculateDiscountPercentage = (originalPrice: number, price: number): number => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};