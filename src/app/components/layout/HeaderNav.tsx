import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderNavProps {
  openAddEvent: () => void;
}

interface MenuItem {
  name: string;
  link: string;
  id?: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const header =
    document.querySelector("header") || document.querySelector(".sticky");
  if (element) {
    const headerHeight = header ? header.clientHeight : 80;
    const offsetTop = element.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const HeaderNav: React.FC<HeaderNavProps> = ({ openAddEvent }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  // Add scroll padding to body when component mounts
  useEffect(() => {
    const header =
      document.querySelector("header") || document.querySelector(".sticky");
    const headerHeight = header ? header.clientHeight : 80;

    // Add scroll padding to body
    document.body.style.scrollPaddingTop = `${headerHeight}px`;

    // Scroll listener to highlight active section
    const handleScroll = () => {
      // Only apply scroll highlighting on the home page
      const currentPath = window.location.pathname;
      if (currentPath === "/" || currentPath === "/alro-dev") {
        const sections = menu
          .filter(item => item.id) // Only items with ids
          .map(item => document.getElementById(item.id!));
        
        const scrollPosition = window.scrollY + headerHeight + 50; // Add a small offset

        for (const section of sections) {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              setActiveSection(section.id || "");
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial active section based on current path
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "/alro-dev") {
      // For home page, set active section based on scroll position
      const sections = menu
        .filter(item => item.id)
        .map(item => document.getElementById(item.id!));
      
      const scrollPosition = window.scrollY + headerHeight + 50;
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(section.id || "");
            break;
          }
        }
      }
    } else {
      // For other pages, find matching menu item
      const activeItem = menu.find(
        (item) => item.link === currentPath
      );
      if (activeItem) {
        setActiveSection(activeItem.name.toLowerCase());
      }
    }

    // Cleanup function to remove the style and event listener when component unmounts
    return () => {
      document.body.style.scrollPaddingTop = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchorClick = (id: string) => {
    const currentPath = window.location.pathname;
    if (currentPath === "/alro-dev/tech-stack") {
      // If on tech stack page, navigate to home page with hash
      router.push(`/alro-dev#${id}`);
    } else {
      // If on home page, scroll to section
      scrollToSection(id);
    }
  };

  return (
    <header className="w-full h-[10dvh] sticky top-0 z-50 bg-pri-0">
      <div className="w-full h-full flex justify-between items-center px-4 mx-auto">
        <Link href="/alro-dev" className="font-bold text-lg">Alro.dev</Link>
        <div className="md:flex hidden flex-row gap-8 ">
          {menu.map((item, index) => (
            <div key={index} className="font-semibold">
              {item.link === "/alro-dev/tech-stack" ? (
                // For Tech Stack page, use Next.js Link
                <Link
                  href={item.link}
                  className={`transition-colors duration-300 ${
                    window.location.pathname === item.link
                      ? "text-sec-4"
                      : "hover:text-sec-4"
                  }`}
                >
                  {item.name}
                </Link>
              ) : item.id ? (
                // For scroll sections, handle both page navigation and scrolling
                <div
                  className={`cursor-pointer transition-colors duration-300 ${
                    (item.id && activeSection === item.id)
                      ? "text-sec-4"
                      : "hover:text-sec-4"
                  }`}
                  onClick={() => handleAnchorClick(item.id!)}
                >
                  {item.name}
                </div>
              ) : (
                // For regular links to home
                <Link
                  href={item.link}
                  className={`transition-colors duration-300 ${
                    (window.location.pathname === "/alro-dev" && item.link === "/alro-dev")
                      ? "text-sec-4"
                      : "hover:text-sec-4"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <Icon
          onClick={openAddEvent}
          className="cursor-pointer md:hidden flex"
          icon="solar:hamburger-menu-linear"
          width="30"
          height="30"
        />
      </div>
    </header>
  );
};

const menu: MenuItem[] = [
  { name: "Home", link: "/alro-dev", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Contact", link: "#contact", id: "contact" },
  { name: "Tech Stack", link: "/alro-dev/tech-stack" },
];
