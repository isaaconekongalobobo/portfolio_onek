"use client";
import { useEffect, useRef } from "react";
import { useFrame } from "@/hooks/useFrame";

export default function Cursor() {
  const el = useRef<HTMLDivElement>(null);
  const p = useRef({ x: -50, y: -50, px: -50, py: -50 });
  useEffect(() => {
    const move = (e: PointerEvent) => { p.current.x = e.clientX; p.current.y = e.clientY; };
    const over = (e: PointerEvent) => {
      const hit = (e.target as Element)?.closest?.("a,button,.row");
      el.current?.classList.toggle("h", !!hit);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", over); };
  }, []);
  useFrame(() => {
    const c = p.current;
    c.px += (c.x - c.px) * 0.18; c.py += (c.y - c.py) * 0.18;
    if (el.current) el.current.style.transform = `translate(${c.px}px,${c.py}px)`;
  });
  return <div ref={el} className="cur" aria-hidden="true" />;
}
