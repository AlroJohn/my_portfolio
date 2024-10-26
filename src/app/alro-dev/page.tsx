import { About } from "../components/user-interface/About";
import { Contact } from "../components/user-interface/Contact";
import { HeroPage } from "../components/user-interface/HeroPage";
import { Projects } from "../components/user-interface/Projects";

 

export default function Home() {
  return (
    <main
      className="flex flex-col text-pri-4"
    >
      <HeroPage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
