"use client";
import { useEffect, useRef } from "react";
import { clamp, useFrame } from "@/hooks/useFrame";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  const sec = useRef<HTMLElement>(null);
  const trk = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const max = useRef(0);
  
  useEffect(() => {
    const size = () => {
      max.current = trk.current!.scrollWidth - innerWidth;
      sec.current!.style.height = max.current + innerHeight * 1.1 + "px";
    };
    size();
    window.addEventListener("resize", size);
    window.addEventListener("load", size);
    document.fonts?.ready.then(size);
    return () => { window.removeEventListener("resize", size); window.removeEventListener("load", size); };
  }, []);

  useFrame(() => {
    const h = sec.current!.getBoundingClientRect();
    const q = clamp(-h.top / (h.height - innerHeight));
    trk.current!.style.transform = `translate3d(${-q * max.current}px,0,0)`;
    bar.current!.style.transform = `scaleX(${q})`;
  });

  return (
    <section id="parcours" className="relative h-[600vh] p-0" ref={sec}>
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="flex w-max gap-[6vw] pl-[max(8vw,96px)] will-change-transform" ref={trk}>
          <article className="w-[min(44vw,520px)] min-w-[300px] flex-none">
            <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02]">De 2023 à aujourd&apos;hui</h2>
            <p className="mt-6 text-[#8a8a8a]">Faites défiler, le parcours avance.</p>
          </article>
          {TIMELINE.map((p, i) => (
            <article className="w-[min(62vw,720px)] min-w-[300px] flex-none" key={i}>
              <div className="mb-6 whitespace-nowrap font-display text-[clamp(5rem,13vw,13rem)] leading-[.9] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.7)]">{p.y}</div>
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1]">{p.h}</h3>
              <h4 className="mb-5 mt-2 text-[#8a8a8a]">{p.o}</h4>
              <ul className="grid list-none gap-2.5 text-[.98rem]">{p.l.map((x) => <li className="relative pl-6 before:absolute before:left-0 before:top-[.75em] before:h-px before:w-3 before:bg-white" key={x}>{x}</li>)}</ul>
            </article>
          ))}
          <div className="w-[6vw] flex-none" />
        </div>
        <div className="absolute bottom-[calc(5vh+env(safe-area-inset-bottom,0px))] left-[max(8vw,96px)] right-[6vw] h-px bg-white/15 max-[900px]:left-[6vw]"><i className="block h-full origin-left scale-x-0 bg-white" ref={bar} /></div>
      </div>
    </section>
  );
}
