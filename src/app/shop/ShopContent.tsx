"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["All", "Leather Bags", "Backpacks", "Tote Bags"] as const;
type Category = (typeof CATEGORIES)[number];

const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
] as const;

export default function ShopContent() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") ?? "All";

  const [category, setCategory] = useState<Category>(
    CATEGORIES.includes(rawCategory as Category)
      ? (rawCategory as Category)
      : "All"
  );
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let list =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">
          Fancy Daily Shop
        </p>
        <h1 className="text-4xl font-bold text-black tracking-tight">All Products</h1>
        <p className="mt-1 text-stone-400 text-sm">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                category === cat
                  ? "bg-black text-white"
                  : "bg-white border border-stone-200 text-stone-500 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="sm:ml-auto">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-stone-200 text-xs text-stone-700 bg-white uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-black"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-stone-400 py-24 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
