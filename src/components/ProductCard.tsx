"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group bg-white border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all flex flex-col">
      {/* Image */}
      <Link
        href={`/shop/${product.id}`}
        className="relative aspect-square overflow-hidden bg-stone-50 block"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">
          {product.category}
        </span>
        <Link href={`/shop/${product.id}`} className="mt-1 flex-1">
          <h3 className="font-semibold text-black hover:text-stone-500 transition-colors line-clamp-2 text-sm leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Price + action buttons */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-bold text-black text-base">${product.price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            {/* Wishlist */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2 border transition-colors ${
                wishlisted
                  ? "border-black bg-black text-white"
                  : "border-stone-200 text-stone-400 hover:border-black hover:text-black"
              }`}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <svg
                className="w-4 h-4"
                fill={wishlisted ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            {/* Add to cart */}
            <button
              onClick={() => addItem(product)}
              className="p-2 border border-black bg-black text-white hover:bg-stone-700 transition-colors active:scale-95"
              aria-label="Add to cart"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
