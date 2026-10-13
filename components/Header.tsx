"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
      <a href="/" aria-label="Accueil">
        <Image src="/logo-white.png" alt="Isaac Onek" width={643} height={141} priority />
      </a>
      <nav className="desktop-links" aria-label="Navigation principale">
        <a className="nav-projects" href="/projets">Réalisations</a>
        <a className="cta" href="/#contact">Parlons de votre projet</a>
      </nav>
      <button
        className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      <nav id="mobile-navigation" className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-label="Navigation principale" aria-hidden={!menuOpen}>
        <a href="/" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Retour au portfolio<span aria-hidden="true">↗</span></a>
        <a href="/projets" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Réalisations<span aria-hidden="true">↗</span></a>
        <a href="/#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Parlons de votre projet<span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
