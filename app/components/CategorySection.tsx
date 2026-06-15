import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CategorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <Reveal from="left" delay={0}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-red-600" />
              <span className="text-red-600 text-xs font-black uppercase tracking-[0.4em]">
                Shop by Category
              </span>
            </div>
          </Reveal>
          <Reveal from="bottom" delay={100}>
            <h2 className="text-white text-4xl sm:text-5xl font-black uppercase leading-none">
              Built for<br />
              <span className="text-red-500">Champions</span>
            </h2>
          </Reveal>
        </div>
        <Reveal from="right" delay={0}>
          <Link
            href="/collections"
            className="hidden sm:inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 border-b border-transparent hover:border-white pb-0.5"
          >
            All Collections
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* MEN */}
        <Link href="/men" className="group relative h-[420px] sm:h-[500px] lg:h-[580px] overflow-hidden block">
          <Image
            src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85"
            alt="Men's Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          {/* Base overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          {/* Hover tint */}
          <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/20 transition-colors duration-500" />

          {/* Diagonal accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform -skew-x-12 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          {/* Badge */}
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5">
              New Arrivals
            </span>
          </div>
          <div className="absolute top-6 right-6">
            <span className="glass text-white text-[10px] font-medium px-3 py-1.5 uppercase tracking-widest">
              120+ Styles
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-2">
              Power · Performance · Precision
            </p>
            <h3 className="text-white text-5xl font-black uppercase leading-none mb-2">
              Men's
            </h3>
            <h3 className="text-red-500 text-5xl font-black uppercase leading-none mb-8">
              Collection
            </h3>
            <span className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-xs group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              Explore Men
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>

        {/* WOMEN */}
        <div className="flex flex-col gap-5">
          <Link href="/women" className="group relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden block">
            <Image
              src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=85"
              alt="Women's Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/20 transition-colors duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform -skew-x-12 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="absolute top-5 left-5 flex gap-2">
              <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5">
                Best Sellers
              </span>
            </div>
            <div className="absolute top-5 right-5">
              <span className="glass text-white text-[10px] font-medium px-3 py-1.5 uppercase tracking-widest">
                95+ Styles
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-1">
                Strength · Style · Speed
              </p>
              <h3 className="text-white text-3xl font-black uppercase leading-none mb-5">
                Women's <span className="text-red-500">Collection</span>
              </h3>
              <span className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-black uppercase tracking-widest text-xs group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                Explore Women
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Two mini cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                label: "Sports Jerseys",
                tag: "Men & Women",
                href: "/jerseys",
                img: "https://images.unsplash.com/photo-1556906781-9a412961a28c?auto=format&fit=crop&w=600&q=80",
              },
              {
                label: "Track Pants",
                tag: "New",
                href: "/track-pants",
                img: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?auto=format&fit=crop&w=600&q=80",
              },
            ].map((mini) => (
              <Link
                key={mini.label}
                href={mini.href}
                className="group relative h-[170px] sm:h-[220px] overflow-hidden block"
              >
                <Image
                  src={mini.img}
                  alt={mini.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[9px] text-red-400 font-black uppercase tracking-widest block mb-1">
                    {mini.tag}
                  </span>
                  <h4 className="text-white text-base font-black uppercase leading-tight">
                    {mini.label}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
