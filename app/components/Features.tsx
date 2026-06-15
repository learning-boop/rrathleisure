import Reveal from "./Reveal";

const features = [
  {
    num: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Free Shipping",
    desc: "On all orders above ₹999 — delivered across India",
  },
  {
    num: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Easy Returns",
    desc: "Hassle-free 30-day return & exchange",
  },
  {
    num: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Performance fabrics engineered for champions",
  },
  {
    num: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Secure Payments",
    desc: "100% safe checkout — UPI, Cards, Wallets",
  },
];

export default function Features() {
  return (
    <section className="bg-[#080808] border-y border-[#111]">
      <div className="max-w-7xl mx-auto">
        {features.map((f, i) => (
          <Reveal key={f.num} from={i % 2 === 0 ? "left" : "right"} delay={0}>
            <div
              className={`feature-row group flex items-center gap-4 sm:gap-10 px-4 sm:px-6 lg:px-10 py-5 sm:py-7 border-b border-[#111] transition-all duration-300 hover:bg-[#0d0d0d] cursor-default ${
                i === features.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Number — desktop only */}
              <span className="feature-num hidden sm:block text-5xl font-black text-[#1a1a1a] transition-colors duration-300 tabular-nums shrink-0 w-20 select-none">
                {f.num}
              </span>

              {/* Divider line — desktop only */}
              <div className="hidden sm:block w-px h-10 bg-[#1a1a1a] group-hover:bg-red-600/30 transition-colors duration-300 shrink-0" />

              {/* Icon with mobile number badge */}
              <div className="relative text-red-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
                <span className="sm:hidden absolute -top-1.5 -right-1.5 text-[9px] font-black text-[#333] leading-none">
                  {f.num}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white text-sm sm:text-xl font-black uppercase tracking-wide">
                  {f.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 text-[#1e1e1e] group-hover:text-red-600 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
