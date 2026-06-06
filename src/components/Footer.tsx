import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-stone-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="mb-3">
              <Image
                src="/logo.png"
                alt="Fancy Daily Shop"
                width={110}
                height={36}
                className="h-8 w-auto object-contain invert"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-stone-400">
              Premium everyday essentials curated for the modern lifestyle.
              Quality you can feel, style you can trust.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold tracking-wide mb-3 text-sm uppercase">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Leather Bags", category: "Leather Bags" },
                { label: "Backpacks", category: "Backpacks" },
                { label: "Tote Bags", category: "Tote Bags" },
              ].map(({ label, category }) => (
                <li key={category}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(category)}`}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold tracking-wide mb-3 text-sm uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "All Products", href: "/shop" },
                { label: "Cart", href: "/cart" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-center text-xs text-stone-600">
          <p>© 2026 Fancy Daily Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
