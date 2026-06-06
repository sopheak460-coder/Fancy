import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "✦",
    title: "Quality First",
    desc: "Every product in our collection is hand-picked for its construction, materials, and durability. We only stock what we would carry ourselves.",
  },
  {
    icon: "◇",
    title: "Honest Design",
    desc: "No gimmicks. Our catalog is curated for longevity — pieces that age gracefully and remain stylish season after season.",
  },
  {
    icon: "○",
    title: "Real Service",
    desc: "Questions before you buy? Issues after? We respond within 24 hours, every day. Real people, real answers.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="https://picsum.photos/seed/about-fancy/1600/600"
          alt="About Fancy Daily Shop"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
          <h1 className="text-5xl font-bold text-white tracking-tight">Fancy Daily Shop</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Mission */}
        <section className="mb-20 text-center">
          <div className="w-8 h-px bg-black mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">Why Fancy Daily?</h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            We believe the everyday items you carry should feel as good as they look.
            Fancy Daily Shop was built on the idea that premium quality,
            thoughtful design, and honest materials should be accessible to
            everyone who values them.
          </p>
        </section>

        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center p-8 border border-stone-100 hover:border-stone-300 transition-colors"
            >
              <div className="text-2xl text-black mb-4">{v.icon}</div>
              <h3 className="font-bold text-black text-lg mb-3 tracking-wide">{v.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://picsum.photos/seed/fancy-craft/600/600"
              alt="Craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3">Est. 2019</p>
            <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">
              From Concept to Collection
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Fancy Daily Shop started with a simple question: why is it so hard
              to find everyday items that are both beautiful and built to last?
              We set out to answer it — sourcing from makers who share our
              standards.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Today we ship worldwide, but our standards haven&apos;t changed:
              every product is inspected, packed with care, and backed by our
              one-year warranty. When you carry something from Fancy, you carry
              that promise.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4 mb-20">
          {[
            { num: "12K+", label: "Happy customers" },
            { num: "9", label: "Curated styles" },
            { num: "7", label: "Years crafting" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center border border-stone-200 py-8">
              <div className="text-3xl font-bold text-black">{num}</div>
              <div className="text-xs text-stone-400 mt-2 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center bg-black py-16 px-8">
          <p className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-4">
            Ready to explore?
          </p>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Find Your Next Favourite
          </h2>
          <p className="text-stone-400 mb-8 text-sm max-w-sm mx-auto">
            Browse the full collection and find something you&apos;ll carry every day.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-black font-semibold px-10 py-3 tracking-widest text-sm uppercase hover:bg-stone-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </section>
      </div>
    </>
  );
}
