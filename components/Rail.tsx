"use client";
import { useRef, useState } from "react";
import { useFrame } from "@/hooks/useFrame";
import { CHAPTERS } from "@/lib/data";

export default function Rail() {
  const [on, setOn] = useState(0);
  const cur = useRef(0);
  useFrame(() => {
    let a = 0;
    CHAPTERS.forEach(([id], i) => {
      const s = document.getElementById(id);
      if (s && s.getBoundingClientRect().top < innerHeight * 0.5) a = i;
    });
    if (a !== cur.current) { cur.current = a; setOn(a); }
  });
  return (
    <nav className="fixed left-[2.2vw] top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4 text-[.78rem] mix-blend-difference max-[900px]:hidden" aria-label="Chapitres">
      {CHAPTERS.map(([id, label], i) => <a key={id} href={`#${id}`} className={`group flex items-center gap-2.5 opacity-40 transition-opacity duration-300 hover:opacity-100 ${i === on ? "opacity-100" : ""}`}><span className={`h-px w-[6px] bg-white transition-[width] duration-500 ease-portfolio group-hover:w-[26px] ${i === on ? "w-[26px]" : ""}`} />{label}</a>)}
    </nav>
  );
}
