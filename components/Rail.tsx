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
    <nav id="rail" aria-label="Chapitres">
      {CHAPTERS.map(([id, label], i) => <a key={id} href={`#${id}`} className={i === on ? "on" : ""}>{label}</a>)}
    </nav>
  );
}
