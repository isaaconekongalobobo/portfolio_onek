import { EDUCATIONS } from "@/lib/data";
import Image from "next/image";

export default function Formation() {
  return (
    <section id="formation" className="relative px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw]">
      <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.01em]">Toujours en apprentissage</h2>
      <div className="mt-16 grid grid-cols-[1fr_1.3fr] items-start gap-[6vw] max-[800px]:grid-cols-1">
        <figure className="relative aspect-[3/4] overflow-hidden">
          <Image className="object-cover grayscale" src="/graduation.jpg" alt="Isaac Onekonga en tenue de remise de diplôme" fill sizes="(max-width:800px) 90vw, 35vw" />
        </figure>
        <ul>{EDUCATIONS.map(([t, s]) => (<li className="grid list-none gap-1 border-b border-white/15 py-5 first:pt-0" key={t}><b className="font-display text-[1.35rem] font-normal">{t}</b><span className="text-[.92rem] text-[#8a8a8a]">{s}</span></li>))}</ul>
      </div>
    </section>
  );
}
