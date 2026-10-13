"use client";
import Image from "next/image";
import { useRef } from "react";
import { clamp, reducedMotion, useFrame } from "@/hooks/useFrame";

const TEXT = "Je conçois des bases de données, des API et des interfaces UI, et je les accompagne jusqu’à leur mise en production et leur usage au quotidien. Depuis 2023, j’ai livré pour des brasseries, des cabinets d’avocats, des banques et des start-ups. Aujourd’hui, j’intègre l’intelligence artificielle à mes projets pour livrer plus vite, et j’aide les équipes à l’adopter pour mieux travailler.";
const WORDS = TEXT.split(" ");

export default function Profile() {
  const sc = useRef<HTMLParagraphElement>(null);
  const fig = useRef<HTMLElement>(null);
  useFrame(() => {
    const H = innerHeight, rm = reducedMotion();
    const p = sc.current;
    if (p) {
      const r = p.getBoundingClientRect();
      const k = clamp((H * 0.85 - r.top) / (H * 0.55 + r.height * 0.6));
      Array.from(p.children).forEach((w, i) => {
        (w as HTMLElement).style.opacity = String(rm ? 1 : clamp(0.16 + (k * WORDS.length * 1.15 - i) * 0.5, 0.16, 1));
      });
    }
    if (fig.current) fig.current.style.setProperty("--s", String(1 + clamp(fig.current.getBoundingClientRect().top / H, 0, 1) * 0.2));
  });
  return (
    <section id="profil" className="relative px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw]">
      <p className="max-w-[24ch] font-display text-[clamp(1.7rem,3.9vw,3.7rem)] leading-[1.18]" ref={sc}>
        {WORDS.map((w, i) => (<span className="opacity-[.16] transition-opacity duration-150 motion-reduce:opacity-100" key={i}>{w}{" "}</span>))}
      </p>
      <div className="mt-24 grid grid-cols-[1.4fr_1fr] items-start gap-[6vw] max-[800px]:grid-cols-1">
        <figure className="relative aspect-[3/4] overflow-hidden" ref={fig}>
          <Image className="scale-[var(--s,1.15)] object-cover grayscale" src="/portrait-studio.jpg" alt="Isaac Onekonga, portrait en studio" fill sizes="(max-width:800px) 90vw, 40vw" />
        </figure>
        <dl className="grid gap-6">
          <div><dt className="text-sm text-[#8a8a8a]">En ce moment</dt><dd className="border-b border-white/15 pb-4 text-lg">Prompt Engineer chez Equity BCDC</dd></div>
          <div><dt className="text-sm text-[#8a8a8a]">Spécialités</dt><dd className="border-b border-white/15 pb-4 text-lg">Java (Spring Boot), React / Next.js, SQL, LLMs & Automatisations</dd></div>
          <div><dt className="text-sm text-[#8a8a8a]">Base</dt><dd className="border-b border-white/15 pb-4 text-lg">Kinshasa, RD Congo</dd></div>
          <div><dt className="text-sm text-[#8a8a8a]">Langues</dt><dd className="border-b border-white/15 pb-4 text-lg">Français & Anglais</dd></div>
        </dl>
      </div>
    </section>
  );
}
