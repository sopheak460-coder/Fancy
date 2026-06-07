"use client";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-black text-white text-xs py-2.5 px-4 relative flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-stone-300">
        <span>
          Free shipping on orders over{" "}
          <strong className="text-white">$150</strong>
        </span>
        <span className="hidden sm:block w-px h-3 bg-stone-600" />
        <span>
          Call us:{" "}
          <a href="tel:+85512345678" className="text-white font-medium hover:underline">
            +855 12 345 678
          </a>
        </span>
        <span className="hidden sm:block w-px h-3 bg-stone-600" />
        <span>
          Use code{" "}
          <strong className="text-white border border-stone-600 px-1.5 py-0.5 mx-0.5">
            FANCY2026
          </strong>{" "}
          for <strong className="text-white">10% off</strong> your first order
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
