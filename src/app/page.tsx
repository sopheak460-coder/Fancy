import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    name: "Leather Bags",
    tagline: "Timeless craftsmanship",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Backpacks",
    tagline: "Built for adventure",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Tote Bags",
    tagline: "Effortless everyday carry",
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Crossbody Bags",
    tagline: "Hands-free style",
    image: "https://images.unsplash.com/photo-1584917865442-e0e72c007872?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Clutches & Mini Bags",
    tagline: "Small but mighty",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=900&fit=crop&q=80"
          alt="Fancy Daily Shop — new collection"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block text-stone-300 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            New Collection 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            FANCY
          </h1>
          <p className="mt-2 text-2xl md:text-3xl text-stone-300 font-light tracking-widest uppercase">
            Daily Shop
          </p>
          <p className="mt-8 text-base text-stone-400 max-w-md mx-auto leading-relaxed">
            Premium everyday essentials — curated for people who care about quality in every detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-black px-10 py-3 font-semibold tracking-widest text-sm uppercase hover:bg-stone-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-10 py-3 font-semibold tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black tracking-tight">Shop by Category</h2>
          <div className="mt-2 w-12 h-px bg-black mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[4/3] overflow-hidden bg-stone-100 block"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold tracking-wide">{cat.name}</h3>
                <p className="text-stone-300 text-sm mt-1 tracking-wider uppercase text-xs">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-black py-20 text-center px-4">
        <p className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-4">
          Limited time offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Free Shipping on Orders Over $150
        </h2>
        <p className="text-stone-400 mb-8 text-sm">
          Use code{" "}
          <span className="text-white font-bold border border-stone-600 px-2 py-0.5">
            FANCY2026
          </span>{" "}
          for 10% off your first order
        </p>
        <Link
          href="/shop"
          className="inline-block bg-white text-black font-semibold px-10 py-3 tracking-widest text-sm uppercase hover:bg-stone-100 transition-colors"
        >
          Shop the Collection
        </Link>
      </section>
    </>
  );
}
