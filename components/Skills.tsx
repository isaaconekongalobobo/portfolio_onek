"use client";
import { useRef } from "react";
import { useFrame } from "@/hooks/useFrame";
import { SKILLS } from "@/lib/data";

const W = "Java Spring Boot / Next.js / React Native / PostgreSQL / Docker / Spring AI / n8n / TypeScript / ";

export default function Skills() {
  const sec = useRef<HTMLElement>(null);
  const mq = useRef<HTMLDivElement>(null);
  useFrame(() => {
    const s = innerHeight - sec.current!.getBoundingClientRect().top;
    Array.from(mq.current!.children).forEach((e, i) => {
      const el = e as HTMLElement;
      el.style.marginLeft = i % 2 ? "-1800px" : "0";
      el.style.transform = `translate3d(${(i % 2 ? 1 : -1) * s * 0.3}px,0,0)`;
    });
  });
  return (
    <section id="skills" className="relative px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw]" ref={sec}>
      <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.01em]">La boîte à outils</h2>
      <div className="my-12 grid gap-1 overflow-hidden" aria-hidden="true" ref={mq}>
        {[0, 1, 2].map((i) => <div className={`w-max whitespace-nowrap font-display text-[clamp(3rem,9vw,8rem)] leading-[1.05] will-change-transform ${i % 2 ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.55)]" : ""}`} key={i}>{W + W}</div>)}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-[4vw] gap-y-12">
        {SKILLS.map((s) => (<div key={s.t}><h3 className="mb-4 border-b border-white/15 pb-3 font-display text-2xl font-normal">{s.t}</h3><p className="leading-[1.9] text-[#8a8a8a]">{s.p}</p></div>))}
      </div>
    </section>
  );
}
