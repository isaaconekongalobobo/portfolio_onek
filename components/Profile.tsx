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
    <section id="profil">
      <p className="big" ref={sc}>
        {WORDS.map((w, i) => (<span key={i}>{w}{" "}</span>))}
      </p>
      <div className="pf">
        <figure ref={fig}>
          <Image src="/portrait-studio.jpg" alt="Isaac Onekonga, portrait en studio" fill sizes="(max-width:800px) 90vw, 40vw" style={{ objectFit: "cover" }} />
        </figure>
        <dl>
          <div><dt>En ce moment</dt><dd>Prompt Engineer chez Equity BCDC</dd></div>
          <div><dt>Spécialités</dt><dd>Java (Spring Boot), React / Next.js, SQL, LLMs & Automatisations</dd></div>
          <div><dt>Base</dt><dd>Kinshasa, RD Congo</dd></div>
          <div><dt>Langues</dt><dd>Français & Anglais</dd></div>
        </dl>
      </div>
    </section>
  );
}
