"use client";

import { createContext, useContext, useState, useEffect } from "react";

type WishlistContextType = {
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  totalWishlist: number;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("fancy-wishlist");
      if (stored) setWishlistIds(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("fancy-wishlist", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  function toggleWishlist(id: string) {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        toggleWishlist,
        isWishlisted: (id) => wishlistIds.includes(id),
        totalWishlist: wishlistIds.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
