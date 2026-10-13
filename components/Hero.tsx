"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { reducedMotion } from "@/hooks/useFrame";

export default function Hero() {
  const ph = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ph.current!;
    const set = (x: number, y: number) => { el.style.setProperty("--mx", x + "%"); el.style.setProperty("--my", y + "%"); };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100);
    };
    window.addEventListener("pointermove", move);
    let id = 0;
    if (matchMedia("(hover:none)").matches && !reducedMotion()) {
      const loop = (t: number) => { set(50 + Math.sin(t / 1400) * 28, 40 + Math.cos(t / 1900) * 26); id = requestAnimationFrame(loop); };
      id = requestAnimationFrame(loop);
    }
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(id); };
  }, []);
  
  return (
    <section id="hero" className="relative flex min-h-svh flex-col justify-end overflow-hidden px-[6vw] pb-[5vh] pl-[max(8vw,96px)] max-[900px]:px-[6vw] max-[900px]:pb-[max(5vh,2rem)]">
      <div className="group/hero absolute right-[5vw] top-0 bottom-0 w-[min(46vw,640px)] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-[1600ms] ease-portfolio group-[.go]/site:[clip-path:inset(0)] max-[900px]:right-0 max-[900px]:w-[min(52vw,440px)] max-[600px]:top-[16svh] max-[600px]:w-[min(78vw,390px)]" ref={ph}>
        <div className="absolute inset-[8vh_0_0] max-[600px]:inset-0">
          <Image className="object-cover object-[50%_20%] brightness-[.3] grayscale" src="/portrait-hero.jpg" alt="" fill sizes="46vw" priority />
          <Image className="object-cover object-[50%_20%] grayscale contrast-110 [mask-image:radial-gradient(circle_170px_at_var(--mx)_var(--my),#000_30%,transparent_100%)] max-[600px]:hidden" src="/portrait-hero.jpg" alt="Isaac Onekonga en costume" fill sizes="46vw" priority />
        </div>
      </div>
      <h1 className="relative mb-9 font-display text-[clamp(4.4rem,16.5vw,17rem)] leading-[.9] tracking-[-.025em] max-[900px]:text-[clamp(4rem,12vw,7.5rem)] max-[600px]:z-[1] max-[600px]:mb-6 max-[600px]:text-[clamp(3rem,13vw,5rem)] max-[600px]:leading-[.96] max-[600px]:tracking-[-.035em]" aria-label="Isaac Onekonga">
        <span className="block overflow-hidden pb-[.06em]"><span className="block translate-y-[110%] transition-transform duration-[1300ms] ease-portfolio group-[.go]/site:translate-y-0 motion-reduce:translate-y-0">Isaac</span></span>
        <span className="block overflow-hidden pb-[.06em]"><span className="block translate-y-[110%] transition-transform delay-150 duration-[1300ms] ease-portfolio group-[.go]/site:translate-y-0 motion-reduce:translate-y-0">Onekonga</span></span>
      </h1>
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-8 opacity-0 transition-opacity delay-[1200ms] duration-1000 group-[.go]/site:opacity-100 max-[900px]:items-start max-[900px]:gap-6 max-[600px]:gap-4">
        <p className="max-w-[34ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.45] max-[900px]:max-w-[32ch] max-[600px]:max-w-[31ch] max-[600px]:text-[clamp(1rem,4.5vw,1.2rem)]">Développeur full-stack et intégrateur des solutions d&apos;IA, je transforme des besoins métier complexes en logiciels qui tournent en production.</p>
        <small className="text-white/55 max-[600px]:w-full max-[600px]:text-sm">Kinshasa, télétravail ou présentiel</small>
        <div className="relative h-[70px] w-px overflow-hidden bg-white/15 after:absolute after:inset-0 after:animate-[cue_2s_cubic-bezier(.7,0,.2,1)_infinite] after:bg-white max-[900px]:hidden" />
      </div>
    </section>
  );
}
