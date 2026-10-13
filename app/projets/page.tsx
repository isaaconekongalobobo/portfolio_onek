import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Une sélection de projets web et mobile auxquels j'ai contribué.",
  alternates: { canonical: "/projets" },
};

const projects = [
  { number: "01", name: "Bracongo Pro", category: "Application mobile · Distribution", description: "Une application mobile destinée aux points de vente partenaires de Bracongo. Elle centralise le suivi des achats, des livraisons, du catalogue et des réclamations.", image: "https://bracongo.cd/uploads/pages/pro-app_image_1785719773_c3444f6f9798.webp", imageAlt: "Aperçu de l'application Bracongo Pro", tone: "bracongo", tags: ["React Native", "Expo", "API REST"], links: [{ label: "Site du projet", href: "https://bracongo.cd/Bracongo-pro" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bracongo.market.events.proprod" }] },
  { number: "02", name: "Kadea Online", category: "Plateforme e-learning", description: "Une plateforme de formation en ligne pour apprendre à son rythme et découvrir les bases du développement web, avec des cours accessibles depuis ordinateur, tablette ou smartphone.", tone: "kadea", tags: ["Next.js", "Canvas LMS", "Éducation"], links: [{ label: "Visiter la plateforme", href: "https://online.kadea.co/" }] },
  { number: "03", name: "Radar", category: "Intelligence économique · SaaS", description: "Une plateforme d'intelligence économique en RDC qui transforme les données macroéconomiques et les relevés de terrain en indicateurs, analyses de marché et outils d'aide à la décision.", image: "https://radar-rdc.com/Globe-section-hero.png", imageAlt: "Illustration de la plateforme Radar", tone: "radar", tags: ["Next.js", "Data", "Dashboards"], links: [{ label: "Visiter le site", href: "https://radar-rdc.com/" }] },
  { number: "04", name: "KIKS Consulting", category: "Site web · Conseil", description: "Le site de présentation d'un cabinet indépendant d'études de marché et de conseil stratégique, spécialisé dans la collecte terrain et l'analyse de données pour éclairer les décisions.", image: "https://www.kiks-consulting.com/about.jpg", imageAlt: "Aperçu du site KIKS Consulting", tone: "kiks", tags: ["Next.js", "Conseil", "Études de marché"], links: [{ label: "Visiter le site", href: "https://www.kiks-consulting.com/" }] },
  { number: "05", name: "Nayaki", category: "Plateforme de gestion · SaaS", description: "Une solution numérique de gestion qui accompagne les organisations dans le suivi de leurs équipes, activités et processus administratifs, avec des outils adaptés à leurs opérations quotidiennes.", tone: "nayaki", tags: ["Spring Boot", "Next.js", "PostgreSQL"], links: [{ label: "Visiter le site", href: "https://www.nayaki.app/" }] },
];

const previewTone: Record<string, string> = {
  bracongo: "bg-[radial-gradient(ellipse_at_60%_60%,#87212a,#281215_72%)]",
  radar: "bg-[radial-gradient(ellipse_at_50%_45%,#194f52,#0d1718_75%)]",
  kiks: "bg-[radial-gradient(ellipse_at_50%_55%,#5f502e,#1a1711_75%)]",
  kadea: "bg-[radial-gradient(ellipse_at_75%_20%,#4a4a96,#141420_65%)]",
  nayaki: "bg-[radial-gradient(ellipse_at_35%_35%,#27695f,#111a18_72%)]",
};

function Preview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`group/preview relative grid aspect-[1.45] place-items-center overflow-hidden ${previewTone[project.tone]} after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:to-black/40`}>
      {"image" in project ? <img className="size-full object-cover transition-transform duration-700 ease-out group-hover/preview:scale-[1.04]" src={project.image} alt={project.imageAlt} loading="lazy" /> : (
        <div className="relative h-[74%] w-[69%] -rotate-3 rounded-[10px] border border-white/20 bg-[#101010d9] p-5 shadow-[0_25px_80px_#0008]" aria-hidden="true">
          <div className="flex gap-1.5 border-b border-white/10 pb-3"><i className="size-1.5 rounded-full bg-white/40" /><i className="size-1.5 rounded-full bg-white/40" /><i className="size-1.5 rounded-full bg-white/40" /></div>
          <div className={`mt-5 font-display text-[clamp(1.25rem,2.8vw,2.6rem)] leading-none ${project.tone === "kadea" ? "text-[#c6c4ff]" : "text-[#97d4be]"}`}>{project.name}</div>
          <div className="mt-4 grid gap-2"><i className="h-1.25 w-[85%] rounded bg-white/15" /><i className="h-1.25 w-[64%] rounded bg-white/15" /><i className="h-1.25 w-[42%] rounded bg-white/15" /></div>
          <div className="mt-5 flex gap-2"><i className="h-[clamp(26px,5vw,56px)] flex-1 rounded border border-white/15 bg-white/5" /><i className="h-[clamp(26px,5vw,56px)] flex-1 rounded border border-white/15 bg-white/5" /><i className="h-[clamp(26px,5vw,56px)] flex-1 rounded border border-white/15 bg-white/5" /></div>
        </div>
      )}
      <span className="absolute bottom-4 right-5 z-10 text-[.68rem] tracking-[.12em] text-white/85">{project.number} / 05</span>
    </div>
  );
}

export default function ProjectsPage() {
  return <>
    <Header />
    <main className="min-h-svh w-full max-w-full overflow-x-clip bg-[#080808] px-[8vw] pb-8 pt-36 pl-[max(8vw,96px)] max-[900px]:px-[6vw] max-[900px]:pt-32 max-[650px]:px-[5vw] max-[650px]:pt-28">
      <div className="mx-auto mb-[clamp(4rem,9vw,8rem)] max-w-275 max-[650px]:mb-16">
        <a className="mb-[clamp(3rem,7vw,6rem)] inline-block text-[.85rem] text-[#aaa] transition-colors hover:text-white" href="/">← Retour au portfolio</a>
        <p className="text-[.68rem] uppercase tracking-[.16em] text-[#888]">Sélection · 2024—2026</p>
        <h1 className="my-5 max-w-[16ch] font-display text-[clamp(4rem,11vw,10rem)] leading-[.88] tracking-[-.045em]">Des idées<br />en mouvement<span className="text-[#777]">.</span></h1>
        <p className="max-w-[36ch] text-[clamp(1rem,1.7vw,1.25rem)] text-[#aaa]">Des expériences web et mobile conçues pour répondre à des besoins concrets.</p>
      </div>
      <div className="mx-auto grid max-w-345 grid-cols-2 gap-x-[3vw] gap-y-[clamp(3rem,7vw,7rem)] max-[650px]:grid-cols-1 max-[650px]:gap-y-14">
        {projects.map((project) => <article className="min-w-0" key={project.name}>
          <Preview project={project} />
          <div className="px-[.15rem] pt-6">
            <p className="text-[.68rem] uppercase tracking-[.16em] text-[#888]">{project.category}</p>
            <div className="my-2 flex items-baseline justify-between gap-4"><h2 className="max-w-none font-display text-[clamp(1.65rem,3vw,2.8rem)] leading-[1.05] tracking-[-.02em] max-[650px]:text-[2rem]">{project.name}</h2><span className="text-xs text-[#777]">{project.number}</span></div>
            <p className="max-w-[56ch] text-[.92rem] leading-[1.75] text-[#aaa]">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="rounded-full border border-white/20 px-3 py-1 text-[.68rem] text-[#bbb]" key={tag}>{tag}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">{project.links.map((link) => <a className="flex items-center gap-2 border-b border-white/35 pb-1 text-[.8rem] transition-colors hover:border-[#ccc] hover:text-[#ccc]" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)}</div>
          </div>
        </article>)}
      </div>
      <footer className="mx-auto mt-[clamp(5rem,10vw,9rem)] flex max-w-345 flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-sm text-[#aaa] max-[650px]:justify-start max-[650px]:gap-x-6"><a href="/">Isaac Onekonga</a><a href="/#contact">Parlons de votre projet ↗</a></footer>
    </main>
  </>;
}
