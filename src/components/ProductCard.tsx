"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types";

const BADGE_STYLES: Record<string, string> = {
  "New": "bg-emerald-500",
  "Sale": "bg-red-500",
  "Best Seller": "bg-amber-500",
  "Limited": "bg-purple-600",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <div className="group bg-white border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all flex flex-col relative">

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 z-10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${BADGE_STYLES[product.badge]}`}>
            {product.badge}
          </span>
        )}

        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-stone-50">
          <Link href={`/shop/${product.id}`} className="block w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </Link>
          {/* Quick View button on hover */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-5 py-2 hover:bg-black hover:text-white transition-colors shadow-lg"
            >
              Quick View
            </button>
          </div>
        </div>

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

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <span className="font-bold text-black text-base">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-stone-400 text-sm line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Buy Now */}
          <Link
            href={`/shop/${product.id}`}
            className="mt-3 w-full py-2 bg-black text-white text-xs font-semibold uppercase tracking-widest text-center hover:bg-stone-700 transition-colors"
          >
            Buy Now
          </Link>

          {/* Add to Cart + Wishlist */}
          <div className="mt-2 flex items-center gap-1">
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2 border transition-colors flex-shrink-0 ${
                wishlisted
                  ? "border-black bg-black text-white"
                  : "border-stone-200 text-stone-400 hover:border-black hover:text-black"
              }`}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <svg className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button
              onClick={() => addItem(product)}
              className="flex-1 py-2 border border-stone-200 text-stone-600 hover:border-black hover:text-black transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setQuickViewOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white w-full max-w-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setQuickViewOpen(false)}
              className="absolute top-3 right-3 z-10 p-1.5 text-stone-400 hover:text-black transition-colors"
              aria-label="Close quick view"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square bg-stone-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-white text-xs font-bold uppercase px-2 py-0.5 ${BADGE_STYLES[product.badge]}`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">
                  {product.category}
                </span>
                <h2 className="mt-2 text-xl font-bold text-black leading-snug">
                  {product.name}
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl font-bold text-black">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-stone-400 text-base line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-stone-500 leading-relaxed flex-1 line-clamp-4">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <button
                    onClick={() => { addItem(product); setQuickViewOpen(false); }}
                    className="w-full py-3 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/shop/${product.id}`}
                    onClick={() => setQuickViewOpen(false)}
                    className="w-full py-3 border border-black text-black text-xs font-semibold uppercase tracking-widest text-center hover:bg-stone-50 transition-colors"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
