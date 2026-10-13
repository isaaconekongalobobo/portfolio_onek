import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Rail from "@/components/Rail";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Apport from "@/components/Apport";
import Employers from "@/components/Employers";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import { siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#isaac-onekonga`,
      name: "Isaac Onekonga",
      alternateName: "Isaac Onek",
      url: siteUrl.toString(),
      image: new URL("/portrait-studio.jpg", siteUrl).toString(),
      jobTitle: "Développeur full-stack et Prompt Engineer",
      homeLocation: { "@type": "Place", name: "Kinshasa, République démocratique du Congo" },
      knowsAbout: [
        "Développement full-stack", "Développement web", "Développement mobile",
        "Développement assisté par intelligence artificielle", "Java", "Spring Boot",
        "Next.js", "React", "React Native", "PostgreSQL", "Prompt engineering",
      ],
      sameAs: [
        "https://www.linkedin.com/in/isaac-onek-825b23262/",
        "https://github.com/isaaconekongalobobo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl.toString(),
      name: "Portfolio d’Isaac Onekonga",
      alternateName: "Isaac Onek",
      inLanguage: "fr",
      about: { "@id": `${siteUrl}#isaac-onekonga` },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Loader />
      <Cursor />
      <Header />
      <Rail />
      <main>
        <Hero />
        <Profile />
        <Timeline />
        <Projects />
        <Skills />
        <Apport />
        {/* <Employers /> */}
        <Formation />
        <Contact />
      </main>
    </>
  );
}
