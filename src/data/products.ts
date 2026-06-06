import { Product } from "@/types";

// ─────────────────────────────────────────────────────────────────
// HOW TO ADD YOUR OWN PRODUCTS
// ─────────────────────────────────────────────────────────────────
// 1. Copy one of the blocks below and paste it at the end of the array.
// 2. Fill in your own id, name, price, category, description, image.
// 3. For images: put your photo in the /public folder, then use "/your-photo.jpg"
//    OR use an external image URL: "https://example.com/image.jpg"
// 4. Set featured: true to show the item on the Homepage.
// 5. Categories must be exactly: "Leather Bags" | "Backpacks" | "Tote Bags"
//    (You can rename these in src/types/index.ts if you sell something different)
// 6. Run: npm run build   ← to regenerate the HTML files
// ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── LEATHER BAGS ──────────────────────────────────────────────
  {
    id: "1",
    name: "Classic Leather Tote",
    price: 189.99,
    category: "Leather Bags",
    description:
      "A timeless tote crafted from full-grain Italian leather. Spacious main compartment, interior slip pockets, and sturdy hand-stitched handles — the perfect work-to-weekend bag.",
    image: "https://picsum.photos/seed/leathertote/600/600",
    featured: true,
  },
  {
    id: "2",
    name: "Executive Briefcase",
    price: 249.99,
    category: "Leather Bags",
    description:
      "A sophisticated briefcase in premium vegetable-tanned leather. Padded laptop sleeve fits up to 15 inches, with organised compartments for documents and accessories.",
    image: "https://picsum.photos/seed/briefcase/600/600",
    featured: true,
  },
  {
    id: "3",
    name: "Vintage Leather Shoulder Bag",
    price: 159.99,
    category: "Leather Bags",
    description:
      "A vintage-inspired shoulder bag with antique brass hardware and soft pebbled leather. Adjustable crossbody strap makes it as versatile as it is stylish.",
    image: "https://picsum.photos/seed/shoulderbag/600/600",
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
    image: "https://picsum.photos/seed/daypack/600/600",
    featured: true,
  },
  {
    id: "5",
    name: "Travel Pro Backpack",
    price: 179.99,
    category: "Backpacks",
    description:
      "Engineered for the modern traveler at 40L. TSA-friendly clamshell opening, packing organisation, external USB port, and ergonomic shoulder straps.",
    image: "https://picsum.photos/seed/travelpack/600/600",
    featured: true,
  },
  {
    id: "6",
    name: "Minimalist Laptop Backpack",
    price: 149.99,
    category: "Backpacks",
    description:
      "Clean lines meet smart storage. Fits a 16-inch laptop, with a refined ballistic nylon exterior and a concealed anti-theft zipper across the back panel.",
    image: "https://picsum.photos/seed/laptoppack/600/600",
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
    image: "https://picsum.photos/seed/canvastote/600/600",
    featured: false,
  },
  {
    id: "8",
    name: "Linen Beach Bag",
    price: 59.99,
    category: "Tote Bags",
    description:
      "A breezy linen tote with a top zip closure and interior mesh pockets. Roomy enough for a towel, sunscreen, a book, and a change of clothes.",
    image: "https://picsum.photos/seed/beachbag/600/600",
    featured: true,
  },
  {
    id: "9",
    name: "Everyday Cotton Tote",
    price: 39.99,
    category: "Tote Bags",
    description:
      "Simple, durable, and eco-friendly. Made from 100% organic cotton with a reinforced bottom gusset. The ideal low-fuss daily carry for errands or the office.",
    image: "https://picsum.photos/seed/cottontote/600/600",
    featured: false,
  },

  // ── ADD YOUR PRODUCTS BELOW ────────────────────────────────────
  // Example — delete this block and fill in your real product:
  //
  // {
  //   id: "10",                          ← must be unique (10, 11, 12 ...)
  //   name: "Your Product Name",
  //   price: 99.99,
  //   category: "Tote Bags",            ← "Leather Bags" | "Backpacks" | "Tote Bags"
  //   description: "Describe your product here.",
  //   image: "/my-product-photo.jpg",   ← put the photo in /public folder
  //   featured: false,                   ← true = shows on Homepage
  // },
];
