import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div>
        <h2>Un projet, une équipe à renforcer ?</h2>
        <p style={{ marginTop: "1.5rem", maxWidth: "44ch", color: "#444" }}>Je serais ravi d’en parler avec vous !</p>
      </div>
      <div style={{ display: "grid", gap: "2rem" }}>
        <a className="mail" href="mailto:isaac.onekonga@gmail.com">isaac.onekonga@gmail.com</a>
        <div className="ct">
          <a href="tel:+243971648935">+243 971 648 935</a>
          <a href="https://www.linkedin.com/in/isaac-onek-825b23262/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/isaaconekongalobobo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <footer>
        <Image src="/logo-black.png" alt="Isaac Onek" width={643} height={141} />
        <span>© 2026 Isaac Onekonga, Kinshasa</span>
        <a href="https://github.com/isaaconekongalobobo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#hero">Retour en haut</a>
      </footer>
    </section>
  );
}
