import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function PromoBanner() {
  return (
    <section className="px-4 sm:px-6 py-4 max-w-7xl mx-auto">
      <Reveal from="bottom">
      <div className="grid md:grid-cols-5 gap-4">
        {/* Main: End of Season Sale — 3 cols */}
        <div className="md:col-span-3 relative h-72 sm:h-80 overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
            alt="End of Season Sale"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />

          <div className="relative h-full flex items-center px-8 sm:px-12">
            <div>
              <span className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 mb-4">
                Limited Time
              </span>
              <h3 className="text-white text-4xl sm:text-5xl font-black uppercase leading-none mb-2">
                End of Season
              </h3>
              <h3 className="text-red-500 text-4xl sm:text-5xl font-black uppercase leading-none mb-5">
                SALE
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white text-xl font-black">Up to</span>
                <span className="text-red-400 text-4xl font-black">50%</span>
                <span className="text-white text-xl font-black">OFF</span>
              </div>
              <Link
                href="/sale"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-200 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                Shop Sale Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Side: 2 stacked — 2 cols */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* New Women's Drop */}
          <div className="relative h-36 sm:h-[calc(50%-0.5rem)] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
              alt="Women's Drop"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/20" />
            <div className="relative h-full flex items-center px-6">
              <div>
                <span className="text-emerald-400 text-[9px] font-black uppercase tracking-widest block mb-1">
                  Just Dropped
                </span>
                <h4 className="text-white text-xl font-black uppercase leading-tight mb-3">
                  Women's New<br />Arrivals
                </h4>
                <Link href="/women/new" className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest border-b border-white/40 hover:border-white pb-0.5 transition-colors duration-200">
                  Explore <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Men's Performance */}
          <div className="relative h-36 sm:h-[calc(50%-0.5rem)] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
              alt="Men's Training"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/20" />
            <div className="relative h-full flex items-center px-6">
              <div>
                <span className="text-blue-400 text-[9px] font-black uppercase tracking-widest block mb-1">
                  Performance Series
                </span>
                <h4 className="text-white text-xl font-black uppercase leading-tight mb-3">
                  Men's Training<br />Gear
                </h4>
                <Link href="/men/training" className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest border-b border-white/40 hover:border-white pb-0.5 transition-colors duration-200">
                  Shop Now <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
