import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent" />

      <Reveal from="scale" delay={0} className="relative max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-red-600" />
          <span className="text-red-600 text-xs font-black uppercase tracking-[0.4em]">
            Stay in the Game
          </span>
          <div className="w-8 h-px bg-red-600" />
        </div>

        <h2 className="text-white text-4xl sm:text-5xl font-black uppercase leading-tight mb-5">
          Join the<br />
          <span className="text-red-500">RR Tribe</span>
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Subscribe for exclusive deals, new drops, and training tips. Plus get{" "}
          <span className="text-white font-bold">10% off</span> your first order.
        </p>

        <form className="flex flex-col sm:flex-row max-w-md mx-auto mb-5">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-[#111] border border-[#2a2a2a] text-white placeholder-gray-700 px-5 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors duration-200"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-black uppercase tracking-widest text-xs transition-all duration-200 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] shrink-0"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-700 text-[10px] uppercase tracking-[0.3em] mb-10">
          No spam · Unsubscribe anytime · 100% free
        </p>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-[#141414]">
          {["50K+ Subscribers", "Weekly Drops", "Exclusive Deals"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
