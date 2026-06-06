"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group bg-white border border-stone-100 hover:border-stone-300 transition-colors flex flex-col">
      <Link
        href={`/shop/${product.id}`}
        className="relative aspect-square overflow-hidden bg-stone-50 block"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
          {product.category}
        </span>
        <Link href={`/shop/${product.id}`} className="flex-1 mt-1">
          <h3 className="font-semibold text-black hover:text-stone-500 transition-colors line-clamp-1 tracking-wide">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-stone-400 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-bold text-black text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="bg-black text-white text-xs px-4 py-2 uppercase tracking-widest font-semibold hover:bg-stone-700 active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
