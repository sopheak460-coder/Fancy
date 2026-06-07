import { Product } from "@/types";

export const products: Product[] = [
  // ── LEATHER BAGS ──────────────────────────────────────────────
  {
    id: "1",
    name: "Classic Leather Tote",
    price: 189.99,
    category: "Leather Bags",
    description:
      "A timeless tote crafted from full-grain Italian leather. Spacious main compartment, interior slip pockets, and sturdy hand-stitched handles — the perfect work-to-weekend bag.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "2",
    name: "Executive Briefcase",
    price: 249.99,
    category: "Leather Bags",
    description:
      "A sophisticated briefcase in premium vegetable-tanned leather. Padded laptop sleeve fits up to 15 inches, with organised compartments for documents and accessories.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "3",
    name: "Vintage Leather Shoulder Bag",
    price: 159.99,
    category: "Leather Bags",
    description:
      "A vintage-inspired shoulder bag with antique brass hardware and soft pebbled leather. Adjustable crossbody strap makes it as versatile as it is stylish.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop&q=80",
    featured: false,
  },

  // ── BACKPACKS ──────────────────────────────────────────────────
  {
    id: "4",
    name: "Urban Daypack",
    price: 129.99,
    category: "Backpacks",
    description:
      "Sleek and lightweight at 20L, built for city life. Padded laptop sleeve, hidden anti-theft back pocket, and water-resistant recycled nylon fabric.",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "5",
    name: "Travel Pro Backpack",
    price: 179.99,
    category: "Backpacks",
    description:
      "Engineered for the modern traveler at 40L. TSA-friendly clamshell opening, packing organisation, external USB port, and ergonomic shoulder straps.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "6",
    name: "Minimalist Laptop Backpack",
    price: 149.99,
    category: "Backpacks",
    description:
      "Clean lines meet smart storage. Fits a 16-inch laptop, with a refined ballistic nylon exterior and a concealed anti-theft zipper across the back panel.",
    image: "https://images.unsplash.com/photo-1655303219938-3a771279c801?w=600&h=600&fit=crop&q=80",
    featured: false,
  },

  // ── TOTE BAGS ──────────────────────────────────────────────────
  {
    id: "7",
    name: "Canvas Market Tote",
    price: 49.99,
    category: "Tote Bags",
    description:
      "Heavy-duty 12oz canvas tote built for groceries, farmers markets, or beach days. Reinforced handles, a flat base, and a roomy open main compartment.",
    image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?w=600&h=600&fit=crop&q=80",
    featured: false,
  },
  {
    id: "8",
    name: "Linen Beach Bag",
    price: 59.99,
    category: "Tote Bags",
    description:
      "A breezy linen tote with a top zip closure and interior mesh pockets. Roomy enough for a towel, sunscreen, a book, and a change of clothes.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "9",
    name: "Everyday Cotton Tote",
    price: 39.99,
    category: "Tote Bags",
    description:
      "Simple, durable, and eco-friendly. Made from 100% organic cotton with a reinforced bottom gusset. The ideal low-fuss daily carry for errands or the office.",
    image: "https://images.unsplash.com/photo-1630381260512-e3fe55c11973?w=600&h=600&fit=crop&q=80",
    featured: false,
  },

  // ── CROSSBODY BAGS ────────────────────────────────────────────
  {
    id: "10",
    name: "Mini Crossbody",
    price: 89.99,
    category: "Crossbody Bags",
    description:
      "Compact and effortlessly chic. This mini crossbody holds your essentials — phone, cards, keys — with an adjustable gold-tone chain strap that dresses up any outfit.",
    image: "https://images.unsplash.com/photo-1571273260782-bab4699dde20?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "11",
    name: "Structured Flap Crossbody",
    price: 119.99,
    category: "Crossbody Bags",
    description:
      "A polished structured crossbody with a magnetic flap closure, interior card slots, and a removable shoulder strap. Goes seamlessly from the office to dinner.",
    image: "https://images.unsplash.com/photo-1544511196-1646449a253b?w=600&h=600&fit=crop&q=80",
    featured: false,
  },
  {
    id: "12",
    name: "Chain-Strap Crossbody",
    price: 145.99,
    category: "Crossbody Bags",
    description:
      "A sleek quilted bag with an interlocking chain strap — the modern take on a timeless silhouette. Interior zip pocket keeps small items secure.",
    image: "https://images.unsplash.com/photo-1569484221992-2a453658fff3?w=600&h=600&fit=crop&q=80",
    featured: true,
  },

  // ── CLUTCHES & MINI BAGS ──────────────────────────────────────
  {
    id: "13",
    name: "Velvet Evening Clutch",
    price: 75.99,
    category: "Clutches & Mini Bags",
    description:
      "Luxuriously soft velvet clutch with a gold-tone frame clasp. The perfect companion for weddings, galas, or any evening you want to make an impression.",
    image: "https://images.unsplash.com/photo-1486308510493-aa64833637bc?w=600&h=600&fit=crop&q=80",
    featured: false,
  },
  {
    id: "14",
    name: "Leather Envelope Clutch",
    price: 95.99,
    category: "Clutches & Mini Bags",
    description:
      "A sleek envelope-style clutch in buttery soft leather. Interior card slots and a wrist strap make it practical for evenings when you travel light.",
    image: "https://images.unsplash.com/photo-1507831041068-539748fc3c3b?w=600&h=600&fit=crop&q=80",
    featured: true,
  },
  {
    id: "15",
    name: "Mini Top-Handle Bag",
    price: 109.99,
    category: "Clutches & Mini Bags",
    description:
      "A dainty top-handle bag that packs a style punch. Structured satchel silhouette with a detachable shoulder strap — carry it in hand or across the body.",
    image: "https://images.unsplash.com/photo-1589363358751-ab05797e5629?w=600&h=600&fit=crop&q=80",
    featured: false,
  },
];
