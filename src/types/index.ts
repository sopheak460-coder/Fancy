export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "Leather Bags" | "Backpacks" | "Tote Bags" | "Crossbody Bags" | "Clutches & Mini Bags";
  description: string;
  image: string;
  featured?: boolean;
  badge?: "New" | "Sale" | "Best Seller" | "Limited";
}

export interface CartItem {
  product: Product;
  quantity: number;
}
