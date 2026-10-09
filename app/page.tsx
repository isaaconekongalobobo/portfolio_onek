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

export default function Page() {
  return (
    <>
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
