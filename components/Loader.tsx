"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { clamp, reducedMotion } from "@/hooks/useFrame";

export default function Loader() {
  const cnt = useRef<HTMLElement>(null);
  useEffect(() => {
    if (reducedMotion()) { document.body.classList.add("go"); return; }
    const t0 = performance.now();
    let id = 0, to: ReturnType<typeof setTimeout>;
    const tick = (t: number) => {
      const n = clamp((t - t0) / 1700);
      if (cnt.current) cnt.current.textContent = String(Math.round(n * 100));
      if (n < 1) id = requestAnimationFrame(tick);
      else to = setTimeout(() => document.body.classList.add("go"), 250);
    };
    id = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(id); clearTimeout(to); };
  }, []);
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black transition-transform duration-1000 ease-portfolio group-[.go]/site:-translate-y-full motion-reduce:hidden" aria-hidden="true">
      <Image className="w-[min(60vw,360px)] animate-[pulse_1.8s_ease-in-out_infinite]" src="/logo-white.png" alt="" width={643} height={141} priority />
      <b className="absolute bottom-[calc(6vh+env(safe-area-inset-bottom,0px))] right-[6vw] font-display text-[clamp(4rem,12vw,9rem)] leading-none font-normal" ref={cnt}>0</b>
    </div>
  );
}
