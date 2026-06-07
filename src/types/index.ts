export interface Product {
  id: string;
  name: string;
  price: number;
  category: "Leather Bags" | "Backpacks" | "Tote Bags" | "Crossbody Bags" | "Clutches & Mini Bags";
  description: string;
  image: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
