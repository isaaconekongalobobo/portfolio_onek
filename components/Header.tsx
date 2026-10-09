import Image from "next/image";

export default function Header() {
  return (
    <header>
      <a href="#hero" aria-label="Accueil">
        <Image src="/logo-white.png" alt="Isaac Onek" width={643} height={141} priority />
      </a>
      <a className="cta" href="#contact">Parlons de votre projet</a>
    </header>
  );
}
