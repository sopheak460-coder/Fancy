import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";

const categories = [
  {
    name: "Leather Bags",
    tagline: "Timeless craftsmanship",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Backpacks",
    tagline: "Built for adventure",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Tote Bags",
    tagline: "Effortless everyday carry",
    image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Crossbody Bags",
    tagline: "Hands-free style",
    image: "https://images.unsplash.com/photo-1571273260782-bab4699dde20?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Clutches & Mini Bags",
    tagline: "Small but mighty",
    image: "https://images.unsplash.com/photo-1486308510493-aa64833637bc?w=600&h=600&fit=crop&q=80",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.badge === "New" || p.badge === "Limited");

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Top Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">Browse by style</p>
          <h2 className="text-3xl font-bold text-black tracking-tight">Top Categories</h2>
          <div className="mt-2 w-12 h-px bg-black mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-50">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="font-bold text-black text-sm tracking-wide">{cat.name}</h3>
                <p className="text-xs text-stone-400 tracking-wider uppercase">{cat.tagline}</p>
                <span className="mt-2 text-xs font-semibold text-black uppercase tracking-widest group-hover:text-stone-500 transition-colors">
                  See Products →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">Just dropped</p>
                <h2 className="text-3xl font-bold text-black tracking-tight">New Arrivals</h2>
                <div className="mt-2 w-8 h-px bg-black" />
              </div>
              <Link
                href="/shop"
                className="text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {newArrivals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promo Banner */}
      <section className="relative overflow-hidden bg-stone-900 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-3">Limited time offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
              Free Shipping on Orders Over $150
            </h2>
            <p className="text-stone-400 mb-6 text-sm leading-relaxed">
              Use code{" "}
              <span className="text-white font-bold border border-stone-600 px-2 py-0.5">
                FANCY2026
              </span>{" "}
              for 10% off your first order. Limited time only.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-black font-semibold px-8 py-3 tracking-widest text-sm uppercase hover:bg-stone-100 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-3">
            {products.filter((p) => p.badge === "Sale").slice(0, 2).map((p) => (
              <Link key={p.id} href={`/shop/${p.id}`} className="group relative aspect-square overflow-hidden bg-stone-800">
                <Image src={p.image} alt={p.name} fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity" sizes="200px" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80">
                  <p className="text-white text-xs font-semibold truncate">{p.name}</p>
                  <p className="text-stone-300 text-xs">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-1">Handpicked for you</p>
              <h2 className="text-3xl font-bold text-black tracking-tight">Featured</h2>
              <div className="mt-2 w-8 h-px bg-black" />
            </div>
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
