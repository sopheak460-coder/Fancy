"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlistIds } = useWishlist();
  const wishlisted = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">Fancy Daily Shop</p>
        <h1 className="text-4xl font-bold text-black tracking-tight">Wishlist</h1>
        <p className="mt-1 text-stone-400 text-sm">
          {wishlisted.length} saved item{wishlisted.length !== 1 ? "s" : ""}
        </p>
      </div>

      {wishlisted.length === 0 ? (
        <div className="text-center py-24">
          <svg
            className="w-16 h-16 text-stone-200 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p className="text-stone-400 mb-6 text-lg">No saved items yet.</p>
          <p className="text-stone-400 text-sm mb-8">
            Click the heart icon on any product to save it here.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-black text-white px-10 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {wishlisted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
