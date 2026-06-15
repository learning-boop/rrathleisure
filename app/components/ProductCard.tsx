import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string | null;
  gender: "men" | "women";
  rating: number;
  reviews: number;
  colors?: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const colors = product.colors ?? ["#1a1a1a", "#dc2626", "#1e3a5f"];

  return (
    <div className="group relative bg-[#111111] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:-translate-y-1">
      {/* ── Image ── */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 ${
                product.badge === "Sale"
                  ? "bg-red-600"
                  : product.badge === "New"
                  ? "bg-emerald-600"
                  : "bg-blue-600"
              }`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          aria-label="Wishlist"
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 backdrop-blur-sm text-white/40 hover:text-red-500 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-black/80"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Add — desktop hover slide-up */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-10">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Quick Add
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="p-4 border-t border-[#1e1e1e]">
        {/* Category */}
        <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mb-1.5 font-bold">
          {product.category}
        </div>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-white text-sm font-bold mb-3 line-clamp-2 hover:text-red-400 transition-colors duration-200 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Color swatches */}
        <div className="flex gap-1.5 mb-3">
          {colors.map((c) => (
            <button
              key={c}
              className="w-4 h-4 rounded-full border border-white/10 hover:border-white/40 transition-colors duration-200"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < product.rating ? "text-yellow-400" : "text-gray-800"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[9px] text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-base">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-gray-700 text-xs line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <span className="text-red-500 text-[10px] font-black">
            Save ₹{(product.originalPrice - product.price).toLocaleString()}
          </span>
        </div>

        {/* Mobile Add to Cart — always visible, hidden on desktop */}
        <button className="md:hidden w-full mt-3 bg-[#1a1a1a] active:bg-red-600 text-white py-3 text-[11px] font-black uppercase tracking-widest transition-colors duration-150 flex items-center justify-center gap-2 border border-[#2a2a2a]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
