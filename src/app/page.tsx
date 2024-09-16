import Image from "next/image";
import { Children } from "react";
import { HeroPage } from "./components/user-interface/HeroPage";
import { About } from "./components/user-interface/About";
import { Projects } from "./components/user-interface/Projects";
import { Contact } from "./components/user-interface/Contact";

export default function Home() {
  return (
    <main
      className="border border-black flex flex-col text-pri-4"
    >
      <HeroPage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
