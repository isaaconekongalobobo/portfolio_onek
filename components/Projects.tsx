"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="projets" className="relative px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw]">
      <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.01em]">Ce que j&apos;ai construit</h2>
      <p className="mt-5 text-[#8a8a8a]">Cliquez sur un projet pour l&apos;ouvrir.</p>
      <div className="mt-16 border-t border-white/15">
        {PROJECTS.map((p, i) => (
          <div key={p.name} data-cursor-hover className={`border-b border-white/15 transition-colors duration-500 ease-portfolio hover:bg-white hover:text-black ${open === i ? "bg-white text-black" : ""}`}>
            <button className="grid w-full cursor-pointer grid-cols-[1fr_auto] items-baseline gap-4 border-0 bg-transparent px-5 py-6 text-left font-sans text-inherit" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              <b className="font-display text-[clamp(1.5rem,3.6vw,3.4rem)] font-normal leading-tight">{p.name}</b><em className="text-[.9rem] not-italic opacity-60">{p.year}</em>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-portfolio ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-[60ch] px-5 pb-6">{p.text}</p>
                <div className="flex flex-wrap gap-2 px-5 pb-7">{p.tags.map((t) => <i className="rounded-full border border-current px-3 py-1 text-[.8rem] not-italic" key={t}>{t}</i>)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
