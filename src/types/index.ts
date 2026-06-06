export interface Product {
  id: string;
  name: string;
  price: number;
  category: "Leather Bags" | "Backpacks" | "Tote Bags";
  description: string;
  image: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
