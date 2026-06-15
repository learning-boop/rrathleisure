import Reveal from "./Reveal";

const reviews = [
  {
    num: "01",
    name: "Rahul Singh",
    role: "Marathon Runner · Mumbai",
    text: "RRA Leisure jerseys are absolutely incredible. The fabric is breathable, the fit is perfect, and I've shaved 2 minutes off my PB wearing them. This is next-level sportswear.",
    product: "Pro Performance Jersey",
    rating: 5,
    avatar: "RS",
    color: "#141414",
  },
  {
    num: "02",
    name: "Priya Sharma",
    role: "CrossFit Athlete · Bangalore",
    text: "I've tried every brand out there. Nothing comes close to RRA Leisure's leggings. They stay in place through the heaviest lifts, look incredible, and the quality is unreal.",
    product: "Sculpt Pro Yoga Leggings",
    rating: 5,
    avatar: "PS",
    color: "#dc2626",
  },
  {
    num: "03",
    name: "Arjun Mehta",
    role: "Football Coach · Delhi",
    text: "Ordered jerseys for our entire squad. The quality, the delivery speed, the customisation — every single player was impressed. RRA Leisure is now our official kit partner.",
    product: "Athletic Track Jacket",
    rating: 5,
    avatar: "AM",
    color: "#141414",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-28 overflow-x-hidden bg-[#050505]">
      {/* ── Animated diagonal stripe background ── */}
      <div className="absolute inset-0 bg-stripes pointer-events-none" />

      {/* ── Giant background ghost text ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[22vw] font-black uppercase leading-none whitespace-nowrap tracking-tighter"
          style={{ WebkitTextStroke: "1px rgba(220,38,38,0.07)", color: "transparent" }}
        >
          REVIEWS
        </span>
      </div>

      {/* ── Red glow orb ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <Reveal from="left" delay={0}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-red-600" />
                <span className="text-red-600 text-xs font-black uppercase tracking-[0.5em]">
                  Customer Love
                </span>
              </div>
            </Reveal>

            <div className="overflow-hidden">
              <Reveal from="bottom" delay={100}>
                <h2 className="font-black uppercase leading-none">
                  <span className="block text-[2.5rem] sm:text-7xl lg:text-8xl text-white">
                    What
                  </span>
                  <span
                    className="block text-[2.5rem] sm:text-7xl lg:text-8xl"
                    style={{ WebkitTextStroke: "2px #dc2626", color: "transparent" }}
                  >
                    Athletes
                  </span>
                  <span className="block text-[2.5rem] sm:text-7xl lg:text-8xl text-white">
                    Say.
                  </span>
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Rating block — hidden on mobile, shown on md+ */}
          <Reveal from="right" delay={200} className="hidden md:block">
            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-7xl font-black text-white leading-none">4.9</div>
              <div className="text-gray-600 text-xs uppercase tracking-[0.3em]">
                Based on 2,400+ reviews
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── CRAZY Cards Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {reviews.map((r, i) => {
            const isFeatured = i === 1;
            // rotation only on desktop to prevent mobile overflow
            const rotation = i === 0 ? "md:-rotate-[3deg]" : i === 2 ? "md:rotate-[3deg]" : "";
            const mt = i === 0 ? "md:mt-14" : i === 2 ? "md:mt-8" : "";

            return (
              <Reveal
                key={r.num}
                from={i === 0 ? "left" : i === 2 ? "right" : "scale"}
                delay={i * 120}
                className={`${mt}`}
              >
                <div
                  className={`relative p-5 sm:p-7 transition-all duration-500 group/card cursor-default
                    ${rotation}
                    md:hover:rotate-0 md:hover:scale-[1.03]
                    ${isFeatured
                      ? "bg-red-600 shadow-[0_30px_80px_rgba(220,38,38,0.5)] z-10 animate-float"
                      : "bg-[#111] border border-[#222] hover:border-red-900 hover:shadow-[0_0_60px_rgba(220,38,38,0.25)]"
                    }`}
                >
                  {/* Card number — big background */}
                  <div
                    className={`absolute top-3 right-4 text-[5rem] font-black leading-none select-none pointer-events-none ${
                      isFeatured ? "text-red-700/40" : "text-white/4"
                    }`}
                  >
                    {r.num}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${isFeatured ? "text-yellow-200" : "text-yellow-400"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Huge quote mark */}
                  <div className={`text-[4rem] leading-none font-black mb-1 ${isFeatured ? "text-red-400/60" : "text-red-600/30"}`}>
                    "
                  </div>

                  {/* Review text */}
                  <p className={`text-sm leading-relaxed mb-6 relative z-10 ${
                    isFeatured ? "text-white text-base" : "text-gray-400"
                  }`}>
                    {r.text}
                  </p>

                  {/* Product tag */}
                  <div className={`text-[9px] font-black uppercase tracking-[0.3em] mb-5 ${
                    isFeatured ? "text-red-200/70" : "text-red-600/70"
                  }`}>
                    ✓ Purchased: {r.product}
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px mb-5 ${isFeatured ? "bg-red-500/30" : "bg-[#1e1e1e]"}`} />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${
                      isFeatured ? "bg-red-700 text-white" : "bg-[#1a1a1a] text-red-500"
                    }`}>
                      {r.avatar}
                    </div>
                    <div>
                      <div className={`text-sm font-black ${isFeatured ? "text-white" : "text-white"}`}>
                        {r.name}
                      </div>
                      <div className={`text-[10px] uppercase tracking-widest mt-0.5 ${
                        isFeatured ? "text-red-200/60" : "text-gray-600"
                      }`}>
                        {r.role}
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className={`ml-auto flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider ${
                      isFeatured ? "text-red-200/60" : "text-gray-700"
                    }`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Bottom Trust Bar ── */}
        <Reveal from="bottom" delay={300}>
          <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-[#111] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
              {[
                { val: "50K+", label: "Athletes" },
                { val: "4.9★", label: "Avg Rating" },
                { val: "2,400+", label: "Reviews" },
                { val: "99%", label: "Recommend" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-6 bg-[#1e1e1e]" />}
                  <div className="text-center">
                    <div className="text-white font-black text-lg">{stat.val}</div>
                    <div className="text-gray-600 text-[9px] uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="border border-[#2a2a2a] hover:border-red-600 text-gray-400 hover:text-white px-7 py-3 text-xs font-black uppercase tracking-widest transition-all duration-200 shrink-0">
              View All Reviews →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
