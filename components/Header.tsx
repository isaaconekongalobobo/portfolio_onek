"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[6vw] pt-[calc(1.2rem+env(safe-area-inset-top,0px))] pb-4 mix-blend-difference pointer-events-none max-[900px]:px-[5vw] max-[900px]:pt-[calc(1rem+env(safe-area-inset-top,0px))] max-[900px]:pb-3 max-[600px]:gap-4 max-[600px]:px-[5vw] max-[600px]:pt-[calc(.7rem+env(safe-area-inset-top,0px))] max-[600px]:pb-[.65rem] max-[600px]:bg-black/90 max-[600px]:backdrop-blur-xl" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
      <a href="/" aria-label="Accueil">
        <Image className="h-7.5 w-auto max-[900px]:h-6.5 max-[600px]:h-5.5" src="/logo-white.png" alt="Isaac Onek" width={643} height={141} priority />
      </a>
      <nav className="flex items-center gap-8 pointer-events-auto max-[600px]:hidden" aria-label="Navigation principale">
        <a className="whitespace-nowrap text-[.9rem] opacity-80 transition-opacity hover:opacity-100" href="/projets">Réalisations</a>
        <a className="rounded-full border border-white px-5 py-[.55rem] text-[.9rem] transition-colors hover:bg-white hover:text-black max-[900px]:px-[.9rem] max-[900px]:py-2 max-[900px]:text-[.8rem]" href="/#contact">Parlons de votre projet</a>
      </nav>
      <button
        className="pointer-events-auto hidden size-10.5 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/45 bg-transparent text-white max-[600px]:flex"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`h-px w-3.75 bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} /><span className={`h-px w-3.75 bg-current transition-transform ${menuOpen ? "translate-y-[-3.5px] -rotate-45" : ""}`} />
      </button>
      <nav id="mobile-navigation" className={`absolute left-0 right-0 top-full hidden grid-cols-1 gap-0 border-b border-white/15 bg-black/95 px-[5vw] transition-[opacity,transform,visibility] duration-300 max-[600px]:grid ${menuOpen ? "pointer-events-auto visible translate-y-0 py-2 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"}`} aria-label="Navigation principale" aria-hidden={!menuOpen}>
        <a className="flex items-center justify-between gap-4 border-b border-white/15 py-4 text-base last:border-0" href="/projets" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Réalisations<span className="text-sm text-white/50" aria-hidden="true">↗</span></a>
        <a className="flex items-center justify-between gap-4 border-b border-white/15 py-4 text-base last:border-0" href="/#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Parlons de votre projet<span className="text-sm text-white/50" aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
