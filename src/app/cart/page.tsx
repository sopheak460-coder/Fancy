"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-6xl mb-6">🛍️</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-3">
          Your cart is empty
        </h1>
        <p className="text-stone-500 mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-stone-900 mb-1">
        Shopping Cart
      </h1>
      <p className="text-stone-500 mb-8">
        {totalItems} item{totalItems !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-stone-100 p-4 flex gap-4"
            >
              <Link
                href={`/shop/${product.id}`}
                className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-stone-100 block"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="font-semibold text-stone-900 truncate hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-stone-300 hover:text-red-500 transition-colors shrink-0 mt-1"
                    aria-label={`Remove ${product.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <p className="font-bold text-stone-900 mt-1">
                  ${product.price.toFixed(2)}
                </p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, quantity - 1)
                    }
                    className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors text-lg leading-none"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="font-semibold w-5 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(product.id, quantity + 1)
                    }
                    className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors text-lg leading-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <span className="ml-2 text-sm text-stone-400">
                    Subtotal: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-xl border border-stone-100 p-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex justify-between text-stone-600"
              >
                <span className="truncate flex-1 mr-2">
                  {product.name} × {quantity}
                </span>
                <span className="font-medium shrink-0">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 mt-4 pt-4 flex justify-between font-bold text-stone-900 text-lg">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <p className="text-xs text-stone-400 mt-1">
            Shipping calculated at checkout
          </p>

          <button className="mt-6 w-full bg-stone-900 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl transition-colors active:scale-95">
            Checkout →
          </button>

          <Link
            href="/shop"
            className="mt-3 block text-center text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
