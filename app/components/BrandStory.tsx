import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { end: 6, suffix: "+", label: "Years" },
  { end: 500, suffix: "+", label: "Products" },
  { end: 50, suffix: "K+", label: "Athletes" },
  { end: 99, suffix: "%", label: "Satisfaction" },
];

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3196430/3196430-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6456249/6456249-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl w-full">
            <Reveal from="bottom" delay={0}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-10 h-px bg-red-600" />
                <span className="text-red-500 text-xs font-black uppercase tracking-[0.5em]">
                  Our Story
                </span>
                <div className="w-10 h-px bg-red-600" />
              </div>
            </Reveal>

            <Reveal from="scale" delay={100}>
              <h2 className="font-black uppercase leading-none mb-8">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                  More Than
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl"
                  style={{ WebkitTextStroke: "2px #dc2626", color: "transparent" }}
                >
                  Sportswear.
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                  A Lifestyle.
                </span>
              </h2>
            </Reveal>

            <Reveal from="bottom" delay={200}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
                RR Athleisure was built for athletes who refuse to settle. Every stitch,
                every fabric, every design — engineered to help you move faster,
                train harder, and look sharper.
              </p>
            </Reveal>

            {/* Stats with CountUp — 2×2 grid on mobile, single row on sm+ */}
            <div className="grid grid-cols-2 sm:flex items-center justify-center gap-6 sm:gap-0 w-full max-w-sm sm:max-w-none mx-auto">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} from="bottom" delay={300 + i * 80}>
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="hidden sm:block">
                      {i > 0 && (
                        <div className="w-px h-10 bg-white/10 mx-8 sm:mx-10" />
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-4xl font-black text-white leading-none">
                        <CountUp end={stat.end} suffix={stat.suffix} />
                      </div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
