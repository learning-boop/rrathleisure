import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=90"
      >
        <source
          src="https://videos.pexels.com/video-files/6823528/6823528-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/4761663/4761663-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      {/* Red vignette accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
      <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

      {/* ── Floating Decorative Blobs ── */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-red-900/15 rounded-full blur-2xl animate-float-delay pointer-events-none" />

      {/* ── Grid Overlay ── */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-red-500 text-xs font-black uppercase tracking-[0.5em]">
                New Collection 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black leading-none uppercase mb-6 sm:mb-8 opacity-0 animate-fade-in-up animate-delay-100">
              <span className="block text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-8xl text-white tracking-tight">
                Perform.
              </span>
              <span className="block text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-8xl text-red-500 tracking-tight text-glow">
                Conquer.
              </span>
              <span className="block text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-8xl text-white tracking-tight">
                Repeat.
              </span>
            </h1>

            {/* Sub */}
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg opacity-0 animate-fade-in-up animate-delay-200">
              Premium sportswear engineered for{" "}
              <span className="text-white font-semibold">champions</span>.
              Push your limits every single day with RRA Leisure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 opacity-0 animate-fade-in-up animate-delay-300">
              <Link
                href="/men"
                className="group relative bg-red-600 text-white px-8 py-3.5 sm:px-9 sm:py-4 font-black uppercase tracking-widest text-sm overflow-hidden inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-red-700 animate-pulse-glow"
              >
                <span className="relative z-10">Shop Men</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/women"
                className="group glass text-white px-8 py-3.5 sm:px-9 sm:py-4 font-black uppercase tracking-widest text-sm inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10"
              >
                <span>Shop Women</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-5 sm:gap-12 opacity-0 animate-fade-in-up animate-delay-400">
              {[
                { value: "500+", label: "Products" },
                { value: "50K+", label: "Athletes" },
                { value: "100%", label: "Premium" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-start gap-3 sm:gap-4">
                  {i > 0 && <div className="w-px h-8 sm:h-10 bg-white/10 self-center" />}
                  <div>
                    <div className="text-xl sm:text-3xl font-black text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] text-white/30 uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-600/60 to-transparent" />
      </div>

      {/* ── Side Watermark ── */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-white/8 text-[11px] uppercase tracking-[0.5em] font-black select-none"
        style={{ writingMode: "vertical-rl" }}
      >
        RRA LEISURE — EST. 2020
      </div>
    </section>
  );
}
