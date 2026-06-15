const items = [
  "Free Shipping Above ₹999",
  "Premium Performance Fabrics",
  "Men's Collection",
  "Women's Collection",
  "New Arrivals 2026",
  "Up to 50% Off on Sale",
  "Engineered for Champions",
  "Sports Jerseys",
  "Track Jackets",
  "Compression Gear",
  "Yoga Leggings",
  "Running Shorts",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-red-600 py-3 border-y border-red-700">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-4 text-white text-xs font-black uppercase tracking-widest"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
