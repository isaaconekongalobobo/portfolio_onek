"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { clamp, reducedMotion } from "@/hooks/useFrame";

export default function Loader() {
  const cnt = useRef<HTMLElement>(null);
  useEffect(() => {
    if (reducedMotion()) { document.body.classList.add("go"); return; }
    const t0 = performance.now();
    let id = 0, to: ReturnType<typeof setTimeout>;
    const tick = (t: number) => {
      const n = clamp((t - t0) / 1700);
      if (cnt.current) cnt.current.textContent = String(Math.round(n * 100));
      if (n < 1) id = requestAnimationFrame(tick);
      else to = setTimeout(() => document.body.classList.add("go"), 250);
    };
    id = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(id); clearTimeout(to); };
  }, []);
  return (
    <div id="pre" aria-hidden="true">
      <Image src="/logo-white.png" alt="" width={643} height={141} priority />
      <b ref={cnt}>0</b>
    </div>
  );
}
