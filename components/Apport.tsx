export default function Apport() {
  return (
    <section id="apport" className="relative px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] max-[900px]:pl-[6vw]">
      <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.01em]">Ce que j&apos;apporte à votre équipe</h2>
      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] border-t border-white/15 max-[700px]:grid-cols-1">
        <div className="border-b border-white/15 py-9 pr-8"><h3 className="mb-4 font-display text-[1.9rem] leading-tight">Du besoin à la mise en production</h3><p className="text-[#bdbdbd]">Je prends un projet en charge de bout en bout : modèle de données, API sécurisée, interfaces, déploiement. Un seul interlocuteur, moins de pertes entre les étapes.</p></div>
        <div className="border-b border-white/15 py-9 pr-8"><h3 className="mb-4 font-display text-[1.9rem] leading-tight">L&apos;IA comme levier concret</h3><p className="text-[#bdbdbd]">Génération de requêtes et de documentation, automatisation de workflows, formation des équipes, règles de sécurité et de conformité pour un usage maîtrisé.</p></div>
        <div className="border-b border-white/15 py-9 pr-8"><h3 className="mb-4 font-display text-[1.9rem] leading-tight">Je parle métier</h3><p className="text-[#bdbdbd]">J&apos;ai travaillé avec des consultants, des data analystes, des RH et des chefs de projet. Je traduis leurs besoins en outils qu&apos;ils utilisent vraiment.</p></div>
      </div>
    </section>
  );
}
