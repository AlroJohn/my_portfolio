
import { HeroPage } from "./components/user-interface/HeroPage";
import { About } from "./components/user-interface/About";
import { Projects } from "./components/user-interface/Projects";
import { Contact } from "./components/user-interface/Contact";

export default function Home() {
  return (
    <main
      className="flex flex-col text-pri-4 border border-black "
    >
      <HeroPage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
