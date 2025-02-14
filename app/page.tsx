// import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
// import Projects from "@/components/main/Projects";
// import ContactMe from "@/components/main/ContactMe";
import Skills from "@/components/main/Skills";
// import Image from "next/image";
import TechnicalSkills from "@/components/main/TechnicalSkills";
import Timeline from '@/components/main/Timeline';
// Use it in your page/component

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">  {/* gap-20 has been commented out to make the page look better */}
        <Hero />
        <Skills />
        <TechnicalSkills />
        {/* <Encryption /> */}
        <Timeline />
        {/* <ContactMe/> */}
        {/* <Projects /> */}
      </div>
    </main>
  );
}
