"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=900&fit=crop&q=80",
    label: "New Collection 2026",
    title: "FANCY",
    subtitle: "Daily Shop",
    desc: "Premium everyday essentials — curated for people who care about quality in every detail.",
    cta: { label: "Shop Now", href: "/shop" },
    cta2: { label: "Our Story", href: "/about" },
  },
  {
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&h=900&fit=crop&q=80",
    label: "Leather Collection",
    title: "TIMELESS",
    subtitle: "Leather Bags",
    desc: "Full-grain leather bags crafted for the modern professional. Built to last a lifetime.",
    cta: { label: "Shop Leather Bags", href: "/shop?category=Leather+Bags" },
    cta2: null,
  },
  {
    image: "https://images.unsplash.com/photo-1569484221992-2a453658fff3?w=1600&h=900&fit=crop&q=80",
    label: "Crossbody Edit",
    title: "HANDS-FREE",
    subtitle: "Crossbody Bags",
    desc: "Compact, stylish, and effortless. The perfect crossbody for every occasion.",
    cta: { label: "Shop Crossbody", href: "/shop?category=Crossbody+Bags" },
    cta2: null,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setCurrent(index);
      setTimeout(() => setTransitioning(false), 700);
    },
    [transitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] min-h-[520px] bg-black overflow-hidden">
      {/* Slide images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.label}
            fill
            className="object-cover opacity-35"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-stone-300 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            {slide.label}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            {slide.title}
          </h1>
          <p className="mt-2 text-2xl md:text-3xl text-stone-300 font-light tracking-widest uppercase">
            {slide.subtitle}
          </p>
          <p className="mt-8 text-base text-stone-400 max-w-md mx-auto leading-relaxed">
            {slide.desc}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href={slide.cta.href}
              className="bg-white text-black px-10 py-3 font-semibold tracking-widest text-sm uppercase hover:bg-stone-100 transition-colors"
            >
              {slide.cta.label}
            </Link>
            {slide.cta2 && (
              <Link
                href={slide.cta2.href}
                className="border border-white text-white px-10 py-3 font-semibold tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-colors"
              >
                {slide.cta2.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-7" : "bg-white/40 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
