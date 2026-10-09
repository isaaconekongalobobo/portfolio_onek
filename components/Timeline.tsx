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
    <section id="parcours" className="hs" ref={sec}>
      <div className="stk">
        <div className="trk" ref={trk}>
          <article className="pn i">
            <h2>De 2023 à aujourd&apos;hui</h2>
            <p className="mut" style={{ marginTop: "1.5rem" }}>Faites défiler, le parcours avance.</p>
          </article>
          {TIMELINE.map((p, i) => (
            <article className="pn" key={i}>
              <div className="yr">{p.y}</div>
              <h3>{p.h}</h3>
              <h4>{p.o}</h4>
              <ul>{p.l.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
          <div style={{ flex: "none", width: "6vw" }} />
        </div>
        <div className="bar"><i ref={bar} /></div>
      </div>
    </section>
  );
}
