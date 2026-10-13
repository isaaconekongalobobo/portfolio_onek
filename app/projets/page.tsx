import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Une sélection de projets web et mobile auxquels j'ai contribué.",
  alternates: { canonical: "/projets" },
};

const projects = [
  {
    number: "01", name: "Bracongo Pro", category: "Application mobile · Distribution",
    description: "Une application mobile destinée aux points de vente partenaires de Bracongo. Elle centralise le suivi des achats, des livraisons, du catalogue et des réclamations.",
    image: "https://bracongo.cd/uploads/pages/pro-app_image_1785719773_c3444f6f9798.webp",
    imageAlt: "Aperçu de l'application Bracongo Pro", tone: "bracongo", tags: ["React Native", "Expo", "API REST"],
    links: [{ label: "Site du projet", href: "https://bracongo.cd/Bracongo-pro" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bracongo.market.events.proprod" }],
  },
  {
    number: "02", name: "Kadea Online", category: "Plateforme e-learning",
    description: "Une plateforme de formation en ligne pour apprendre à son rythme et découvrir les bases du développement web, avec des cours accessibles depuis ordinateur, tablette ou smartphone.",
    tone: "kadea", tags: ["Next.js", "Canvas LMS", "Éducation"],
    links: [{ label: "Visiter la plateforme", href: "https://online.kadea.co/" }],
  },
  {
    number: "03", name: "Radar", category: "Intelligence économique · SaaS",
    description: "Une plateforme d'intelligence économique en RDC qui transforme les données macroéconomiques et les relevés de terrain en indicateurs, analyses de marché et outils d'aide à la décision.",
    image: "https://radar-rdc.com/Globe-section-hero.png",
    imageAlt: "Illustration de la plateforme Radar", tone: "radar", tags: ["Next.js", "Data", "Dashboards"],
    links: [{ label: "Visiter le site", href: "https://radar-rdc.com/" }],
  },
  {
    number: "04", name: "KIKS Consulting", category: "Site web · Conseil",
    description: "Le site de présentation d'un cabinet indépendant d'études de marché et de conseil stratégique, spécialisé dans la collecte terrain et l'analyse de données pour éclairer les décisions.",
    image: "https://www.kiks-consulting.com/about.jpg",
    imageAlt: "Aperçu du site KIKS Consulting", tone: "kiks", tags: ["Next.js", "Conseil", "Études de marché"],
    links: [{ label: "Visiter le site", href: "https://www.kiks-consulting.com/" }],
  },
  {
    number: "05", name: "Nayaki", category: "Plateforme de gestion · SaaS",
    description: "Une solution numérique de gestion qui accompagne les organisations dans le suivi de leurs équipes, activités et processus administratifs, avec des outils adaptés à leurs opérations quotidiennes.",
    tone: "nayaki", tags: ["Spring Boot", "Next.js", "PostgreSQL"],
    links: [{ label: "Visiter le site", href: "https://www.nayaki.app/" }],
  },
];

function Preview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-preview ${project.tone}`}>
      {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : (
        <div className="preview-interface" aria-hidden="true">
          <div className="preview-top"><i /><i /><i /></div>
          <div className="preview-brand">{project.name}</div>
          <div className="preview-lines"><i /><i /><i /></div>
          <div className="preview-blocks"><i /><i /><i /></div>
        </div>
      )}
      <span className="preview-index">{project.number} / 05</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="work-page">
        <div className="work-intro">
          <p className="work-eyebrow">Sélection · 2024—2026</p>
          <h1>Des idées<br />en mouvement<span>.</span></h1>
          <p className="work-lead">Des expériences web et mobile conçues pour répondre à des besoins concrets.</p>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.name}>
              <Preview project={project} />
              <div className="work-copy">
                <p className="work-category">{project.category}</p>
                <div className="work-title-line"><h2>{project.name}</h2><span>{project.number}</span></div>
                <p className="work-description">{project.description}</p>
                <div className="work-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="work-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)}</div>
              </div>
            </article>
          ))}
        </div>
        <footer className="work-footer"><a href="/">Isaac Onekonga</a><a href="/#contact">Parlons de votre projet ↗</a></footer>
      </main>
    </>
  );
}
