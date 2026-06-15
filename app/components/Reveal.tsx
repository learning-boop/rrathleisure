"use client";

import { useEffect, useRef, ReactNode } from "react";

type From = "bottom" | "left" | "right" | "scale" | "rotate" | "clip";

type Props = {
  children: ReactNode;
  from?: From;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
};

const initial: Record<From, string> = {
  bottom: "opacity:0;transform:translateY(80px)",
  left:   "opacity:0;transform:translateX(-80px)",
  right:  "opacity:0;transform:translateX(80px)",
  scale:  "opacity:0;transform:scale(0.8)",
  rotate: "opacity:0;transform:rotate(-6deg) translateY(40px)",
  clip:   "clip-path:inset(0 100% 0 0);opacity:1",
};

const revealed: Record<From, string> = {
  bottom: "opacity:1;transform:translateY(0)",
  left:   "opacity:1;transform:translateX(0)",
  right:  "opacity:1;transform:translateX(0)",
  scale:  "opacity:1;transform:scale(1)",
  rotate: "opacity:1;transform:rotate(0deg) translateY(0)",
  clip:   "clip-path:inset(0 0% 0 0);opacity:1",
};

export default function Reveal({
  children,
  from = "bottom",
  delay = 0,
  duration = 900,
  className = "",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    const initStyles = initial[from].split(";");
    initStyles.forEach((s) => {
      const [prop, val] = s.split(":");
      el.style.setProperty(prop.trim(), val.trim());
    });
    el.style.transition = "none";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => {
          const easing = "cubic-bezier(0.16,1,0.3,1)";
          el.style.transition = from === "clip"
            ? `clip-path ${duration}ms ${easing} ${delay}ms`
            : `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;

          const revStyles = revealed[from].split(";");
          revStyles.forEach((s) => {
            const [prop, val] = s.split(":");
            el.style.setProperty(prop.trim(), val.trim());
          });
        }, 60);
        observer.unobserve(el);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, delay, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
