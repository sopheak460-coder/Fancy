import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartSection from "./AddToCartSection";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-stone-500 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-800 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-stone-800 transition-colors">
          Shop
        </Link>
        <span>/</span>
        <span className="text-stone-900">{product.name}</span>
      </nav>

      {/* Main product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 md:sticky md:top-24">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div>
          <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-stone-900">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-stone-900">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-6 text-stone-600 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Client component handles Add to Cart interactivity */}
          <AddToCartSection product={product} />

          {/* Feature list */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "Free shipping over $150",
              "30-day returns",
              "1-year warranty",
              "Genuine materials",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-stone-600">
                <svg
                  className="w-4 h-4 text-amber-700 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/shop/${p.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-stone-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="33vw"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-stone-900 mt-1">{p.name}</h3>
                  <p className="text-stone-700 font-medium mt-1">
                    ${p.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
