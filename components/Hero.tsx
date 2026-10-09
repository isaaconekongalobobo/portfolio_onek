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
  
  const img = { objectFit: "cover", objectPosition: "50% 20%" } as const;
  return (
    <section id="hero">
      <div className="ph" ref={ph}>
        <div className="pw">
          <Image src="/portrait-hero.jpg" alt="" fill sizes="46vw" style={img} priority />
          <Image src="/portrait-hero.jpg" alt="Isaac Onekonga en costume" fill sizes="46vw" style={img} priority />
        </div>
      </div>
      <h1 aria-label="Isaac Onekonga">
        <span className="ln"><span>Isaac</span></span>
        <span className="ln"><span>Onekonga</span></span>
      </h1>
      <div className="hb">
        <p>Développeur full-stack et intégrateur des solutions d'IA, je transforme des besoins métier complexes en logiciels qui tournent en production.</p>
        <small>Kinshasa, télétravail ou présentiel</small>
        <div className="cue" />
      </div>
    </section>
  );
}
