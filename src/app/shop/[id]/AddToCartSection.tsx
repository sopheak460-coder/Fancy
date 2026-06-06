"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

export default function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleAddToCart}
        className={`flex-1 py-4 px-6 font-semibold text-sm uppercase tracking-widest transition-all active:scale-95 ${
          added
            ? "bg-stone-600 text-white"
            : "bg-black text-white hover:bg-stone-700"
        }`}
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
      <Link
        href="/cart"
        className="flex-1 py-4 px-6 border-2 border-black text-black font-semibold text-sm text-center uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
      >
        View Cart
      </Link>
    </div>
  );
}
