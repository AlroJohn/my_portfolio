// app/alro-dev/page.tsx
"use client";

import { About } from "../components/user-interface/About";
import { Contact } from "../components/user-interface/Contact";
import { HeroPage } from "../components/user-interface/HeroPage";
import { Projects } from "../components/user-interface/Projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle scrolling to section when page loads with hash
    const handleScrollToSection = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          const header = document.querySelector("header") || document.querySelector(".sticky");
          if (element) {
            const headerHeight = header ? header.clientHeight : 80;
            const offsetTop = element.offsetTop - headerHeight;
            
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }, 100); // Small delay to ensure DOM is ready
      }
    };

    // Scroll to section on initial load
    handleScrollToSection();

    // Listen for hash changes (for client-side navigation)
    window.addEventListener('hashchange', handleScrollToSection);

    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  return (
    <main className="flex flex-col text-pri-4">
      <div id="home">
        <HeroPage />
      </div>
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="projects" className="pt-20">
        <Projects />
      </div>
      <div id="contact" className="pt-20">
        <Contact />
      </div>
    </main>
  );
}
