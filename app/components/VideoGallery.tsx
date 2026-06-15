"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const videos = [
  "https://assets.mixkit.co/videos/52112/52112-1080.mp4",   // woman doing lunges
  "https://assets.mixkit.co/videos/52104/52104-1080.mp4",   // woman with medicine ball
  "https://assets.mixkit.co/videos/52317/52317-1080.mp4",   // battle rope training
  "https://assets.mixkit.co/videos/608/608-1080.mp4",       // runner silhouette
];

export default function VideoGallery() {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "640px" }}
    >
      {/* ── Full-bleed video mosaic ── */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {videos.map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
              style={{ filter: "brightness(0.8) saturate(1.15)" }}
            >
              <source src={src} type="video/mp4" />
            </video>
            {/* Thin red seam between panels */}
            <div className="absolute inset-y-0 right-0 w-px bg-red-600/25" />
          </div>
        ))}
      </div>

      {/* ── Gradient vignette — dark top + bottom, lighter mid ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-black/85 pointer-events-none" />

      {/* ── Subtle red cast ── */}
      <div className="absolute inset-0 bg-red-600/[0.06] pointer-events-none" />

      {/* ── Center content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <Reveal from="bottom" delay={0}>
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="w-10 h-px bg-red-600" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.55em]">
              In Motion
            </span>
            <div className="w-10 h-px bg-red-600" />
          </div>
        </Reveal>

        <Reveal from="scale" delay={80}>
          <h2 className="font-black uppercase leading-[0.9] mb-8">
            <span className="block text-[3.5rem] sm:text-7xl lg:text-[8.5rem] text-white drop-shadow-2xl">
              Train.
            </span>
            <span
              className="block text-[3.5rem] sm:text-7xl lg:text-[8.5rem]"
              style={{ WebkitTextStroke: "2px #dc2626", color: "transparent" }}
            >
              Grind.
            </span>
            <span className="block text-[3.5rem] sm:text-7xl lg:text-[8.5rem] text-white drop-shadow-2xl">
              Conquer.
            </span>
          </h2>
        </Reveal>

        <Reveal from="bottom" delay={180}>
          <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-10">
            Engineered for athletes who refuse to stop. Gear that matches your
            intensity — rep after rep.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/women"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.55)] text-center"
            >
              Shop Women →
            </Link>
            <Link
              href="/men"
              className="w-full sm:w-auto border border-white/30 hover:border-white text-white/70 hover:text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all duration-300 text-center"
            >
              Shop Men →
            </Link>
          </div>
        </Reveal>
      </div>

      {/* ── Bottom trust strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.07]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {["10K+ Orders", "Free Returns", "Premium Fabrics", "For Champions"].map(
            (item, i) => (
              <div
                key={item}
                className="py-3 sm:py-4 text-center text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold border-r border-b md:border-b-0 border-white/[0.07] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
