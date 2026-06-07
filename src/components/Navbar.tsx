"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { totalWishlist } = useWishlist();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-52">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="Fancy Daily Shop"
              width={660}
              height={216}
              className="h-48 w-auto object-contain"
              priority
            />
            {/* Divider */}
            <span className="hidden sm:block w-px h-10 bg-stone-200" />
            {/* Brand text */}
            <div className="hidden sm:flex flex-col justify-center gap-0.5">
              <span className="text-[10px] font-medium tracking-[0.4em] text-stone-400 uppercase">
                Fancy
              </span>
              <span className="text-base font-bold tracking-[0.22em] text-black uppercase leading-none">
                Daily Store
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === href
                    ? "text-black border-b-2 border-black pb-0.5"
                    : "text-stone-500 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-0.5">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-1">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="border-b border-black outline-none text-sm px-2 py-1 w-36 sm:w-52"
                />
                <button type="submit" className="p-2 text-stone-600 hover:text-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="p-2 text-stone-400 hover:text-black"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-stone-600 hover:text-black transition-colors"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            )}

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-stone-600 hover:text-black transition-colors"
              aria-label={`Wishlist — ${totalWishlist} item${totalWishlist !== 1 ? "s" : ""}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {totalWishlist > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {totalWishlist > 9 ? "9+" : totalWishlist}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-stone-600 hover:text-black transition-colors"
              aria-label={`Cart — ${totalItems} item${totalItems !== 1 ? "s" : ""}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            {/* User */}
            <button
              className="p-2 text-stone-600 hover:text-black transition-colors hidden sm:block"
              aria-label="Account"
              title="Account (coming soon)"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-black"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 font-medium tracking-wide transition-colors ${
                pathname === href ? "text-black" : "text-stone-500"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="py-2 font-medium text-stone-500 hover:text-black transition-colors"
          >
            Wishlist {totalWishlist > 0 && `(${totalWishlist})`}
          </Link>
        </div>
      )}
    </nav>
  );
}
