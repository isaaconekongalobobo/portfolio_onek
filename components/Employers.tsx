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
    <div className="employer-logo" key={`${duplicate ? "copy-" : ""}${employer.name}`}>
      <Image
        src={employer.src}
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
    <section className="employers" aria-label="Anciens employeurs">
      <h2>Ils m&apos;ont fait confiance...</h2>
      <div className="employer-marquee">
        <div className="employer-track ">
          <div className="employer-group">
            <EmployerLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
