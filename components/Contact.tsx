import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-svh flex-col justify-between gap-16 bg-white px-[6vw] py-[clamp(5rem,12vw,11rem)] pl-[max(8vw,96px)] text-black max-[900px]:pl-[6vw]">
      <div>
        <h2 className="max-w-[14ch] font-display text-[clamp(2.4rem,6.4vw,6.4rem)] leading-[1.02] tracking-[-.01em]">Un projet, une équipe à renforcer ?</h2>
        <p className="mt-6 max-w-[44ch] text-[#444]">Je serais ravi d’en parler avec vous !</p>
      </div>
      <div className="grid gap-8">
        <a className="inline-block break-all bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat pb-[.15em] font-display text-[clamp(1.5rem,5.4vw,5.4rem)] leading-[1.1] transition-[background-size] duration-700 ease-portfolio hover:bg-[length:100%_2px]" href="mailto:isaac.onekonga@gmail.com">isaac.onekonga@gmail.com</a>
        <div className="flex flex-wrap gap-x-12 gap-y-5 text-lg">
          <a className="border-b border-black" href="tel:+243971648935">+243 971 648 935</a>
          <a className="border-b border-black" href="https://www.linkedin.com/in/isaac-onek-825b23262/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="border-b border-black" href="https://github.com/isaaconekongalobobo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-5 text-sm text-[#555]">
        <Image className="h-[26px] w-auto" src="/logo-black.png" alt="Isaac Onek" width={643} height={141} />
        <span>© 2026 Isaac Onekonga, Kinshasa</span>
        <a href="https://github.com/isaaconekongalobobo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#hero">Retour en haut</a>
      </footer>
    </section>
  );
}
