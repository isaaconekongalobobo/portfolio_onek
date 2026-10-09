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
    <section id="skills" ref={sec}>
      <h2>La boîte à outils</h2>
      <div className="mq" ref={mq} aria-hidden="true">
        {[0, 1, 2].map((i) => <div key={i}>{W + W}</div>)}
      </div>
      <div className="sk">
        {SKILLS.map((s) => (<div key={s.t}><h3>{s.t}</h3><p>{s.p}</p></div>))}
      </div>
    </section>
  );
}
