import Image from "next/image";

const employers = [
  { name: "BCG", src: "/ex_employers/bcg.png" },
  { name: "CJMS", src: "/ex_employers/cjms.png" },
  { name: "Equity", src: "/ex_employers/equity.png" },
  { name: "FG Tech", src: "/ex_employers/fg_tech.png" },
  { name: "KDS", src: "/ex_employers/kds.png" },
  { name: "KIKS", src: "/ex_employers/kiks.png" },
  { name: "Mosala", src: "/ex_employers/mosala.png" },
];

function EmployerLogos({ duplicate = false }: { duplicate?: boolean }) {
  return employers.map((employer) => (
    <div className="grid aspect-square w-[clamp(150px,17vw,220px)] flex-none place-items-center" key={`${duplicate ? "copy-" : ""}${employer.name}`}>
      <Image
        src={employer.src}
        className="size-full object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
        alt={duplicate ? "" : employer.name}
        aria-hidden={duplicate}
        width={220}
        height={100}
      />
    </div>
  ));
}

export default function Employers() {
  return (
    <section className="relative overflow-hidden px-[6vw] py-[clamp(3rem,7vw,6rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw] motion-reduce:[&_*]:[animation-play-state:paused]" aria-label="Anciens employeurs">
      <h2 className="mb-12 max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02]">Ils m&apos;ont fait confiance...</h2>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="my-5 flex w-max animate-[employer-scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex items-center justify-around gap-[clamp(3rem,7vw,7rem)] pr-[clamp(3rem,7vw,7rem)]">
            <EmployerLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
