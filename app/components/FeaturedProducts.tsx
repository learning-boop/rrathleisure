"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import Reveal from "./Reveal";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Pro Performance Running Jersey",
    category: "Men's Tops",
    price: 1299,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28c?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
    gender: "men",
    rating: 4,
    reviews: 238,
    colors: ["#111", "#dc2626", "#1e3a5f"],
  },
  {
    id: 2,
    name: "Elite Training Shorts",
    category: "Men's Bottoms",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?auto=format&fit=crop&w=600&q=80",
    badge: "New",
    gender: "men",
    rating: 4,
    reviews: 112,
    colors: ["#111", "#374151", "#dc2626"],
  },
  {
    id: 3,
    name: "Athletic Track Jacket",
    category: "Men's Outerwear",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    gender: "men",
    rating: 5,
    reviews: 187,
    colors: ["#111", "#1e3a5f", "#064e3b"],
  },
  {
    id: 4,
    name: "Compression Base Layer Tights",
    category: "Men's Bottoms",
    price: 1499,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
    badge: null,
    gender: "men",
    rating: 4,
    reviews: 76,
    colors: ["#111", "#1f2937"],
  },
  {
    id: 5,
    name: "High-Impact Sports Bra",
    category: "Women's Tops",
    price: 999,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    badge: "New",
    gender: "women",
    rating: 5,
    reviews: 342,
    colors: ["#111", "#dc2626", "#7c3aed"],
  },
  {
    id: 6,
    name: "Sculpt Pro Yoga Leggings",
    category: "Women's Bottoms",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
    gender: "women",
    rating: 5,
    reviews: 421,
    colors: ["#111", "#1f2937", "#dc2626"],
  },
  {
    id: 7,
    name: "Flex Performance Tank",
    category: "Women's Tops",
    price: 799,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=600&q=80",
    badge: null,
    gender: "women",
    rating: 4,
    reviews: 98,
    colors: ["#f9fafb", "#dc2626", "#111"],
  },
  {
    id: 8,
    name: "Windbreaker Running Jacket",
    category: "Women's Outerwear",
    price: 2199,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    gender: "women",
    rating: 4,
    reviews: 143,
    colors: ["#111", "#064e3b", "#7c3aed"],
  },
];

type Filter = "all" | "men" | "women";

export default function FeaturedProducts() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? allProducts
      : allProducts.filter((p) => p.gender === filter);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <Reveal from="left">
          <div>
            <span className="text-red-600 text-xs font-black uppercase tracking-[0.4em]">
              Top Picks
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-black uppercase mt-1">
              Featured Products
            </h2>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal from="right">
          <div className="flex gap-1 bg-[#111] border border-[#1e1e1e] p-1 self-start sm:self-auto">
            {(["all", "men", "women"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-200 ${
                  filter === f
                    ? "bg-red-600 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {f === "all" ? "All" : f === "men" ? "Men" : "Women"}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Products Grid — staggered reveal per card */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((product, i) => (
          <Reveal key={product.id} from="bottom" delay={i * 60}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {/* View All Button */}
      <Reveal from="bottom" delay={200}>
        <div className="text-center mt-12">
          <button className="group relative border border-[#252525] text-gray-400 hover:border-red-600 hover:text-white px-10 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View All Products</span>
            <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-black uppercase tracking-widest text-xs z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View All Products
            </span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
