"use client";

import { useState, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["All", "Leather Bags", "Backpacks", "Tote Bags", "Crossbody Bags", "Clutches & Mini Bags"] as const;
type Category = (typeof CATEGORIES)[number];

const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
] as const;

export default function ShopContent() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") ?? "All";
  const rawSearch = searchParams.get("q") ?? "";

  const [category, setCategory] = useState<Category>(
    CATEGORIES.includes(rawCategory as Category) ? (rawCategory as Category) : "All"
  );
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState(rawSearch);
  const pillsRef = useRef<HTMLDivElement>(null);

  function scrollPills(dir: "left" | "right") {
    pillsRef.current?.scrollBy({ left: dir === "right" ? 160 : -160, behavior: "smooth" });
  }

  const filtered = useMemo(() => {
    let list =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, sort, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">Fancy Daily Shop</p>
        <h1 className="text-4xl font-bold text-black tracking-tight">All Products</h1>
      </div>

      {/* Search + Sort row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex items-center border border-stone-200 flex-1 max-w-sm focus-within:border-black transition-colors">
          <svg className="ml-3 w-4 h-4 text-stone-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="mr-2 text-stone-400 hover:text-black transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="sm:ml-auto">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-stone-200 text-xs text-stone-700 bg-white uppercase tracking-wider focus:outline-none focus:border-black transition-colors"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills with scroll arrows */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => scrollPills("left")}
          className="flex-shrink-0 p-1.5 border border-stone-200 hover:border-black hover:text-black text-stone-400 transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={pillsRef}
          className="flex gap-2 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors ${
                category === cat
                  ? "bg-black text-white"
                  : "bg-white border border-stone-200 text-stone-500 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollPills("right")}
          className="flex-shrink-0 p-1.5 border border-stone-200 hover:border-black hover:text-black text-stone-400 transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Result count */}
      <p className="text-sm text-stone-400 mb-6">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {search.trim() && ` for "${search.trim()}"`}
      </p>

      {/* Grid — 2 col mobile, 3 col lg, 4 col xl */}
      {filtered.length === 0 ? (
        <p className="text-center text-stone-400 py-24 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
