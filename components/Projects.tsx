"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="projets">
      <h2>Ce que j&apos;ai construit</h2>
      <p className="mut" style={{ marginTop: "1.2rem" }}>Cliquez sur un projet pour l&apos;ouvrir.</p>
      <div className="rows">
        {PROJECTS.map((p, i) => (
          <div key={p.name} className={`row${open === i ? " o" : ""}`}>
            <button className="rh" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              <b>{p.name}</b><em>{p.year}</em>
            </button>
            <div className="rb">
              <div>
                <p>{p.text}</p>
                <div className="tg">{p.tags.map((t) => <i key={t}>{t}</i>)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
