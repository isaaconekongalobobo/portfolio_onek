import { EDUCATIONS } from "@/lib/data";
import Image from "next/image";

export default function Formation() {
  return (
    <section id="formation">
      <h2>Toujours en apprentissage</h2>
      <div className="fm">
        <figure>
          <Image src="/graduation.jpg" alt="Isaac Onekonga en tenue de remise de diplôme" fill sizes="(max-width:800px) 90vw, 35vw" style={{ objectFit: "cover" }} />
        </figure>
        <ul>{EDUCATIONS.map(([t, s]) => (<li key={t}><b>{t}</b><span>{s}</span></li>))}</ul>
      </div>
    </section>
  );
}
