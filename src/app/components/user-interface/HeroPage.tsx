"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";

const myName = "Alro John";
const iconsName = [
  { id: 1, name: "Firebase", icon: "devicon:firebase" },
  { id: 2, name: "MySQL", icon: "devicon:mysql-wordmark" },
  { id: 3, name: "Angular", icon: "devicon:angular" },
  { id: 4, name: "Svelte", icon: "logos:svelte-icon" },
  { id: 5, name: "Next.js", icon: "devicon:nextjs" },
  { id: 6, name: "TypeScript", icon: "devicon:typescript" },
  { id: 7, name: "JavaScript", icon: "logos:javascript" },
  { id: 8, name: "HTML", icon: "vscode-icons:file-type-html" },
  { id: 9, name: "CSS", icon: "devicon:css3" },
  { id: 10, name: "Tailwind CSS", icon: "devicon:tailwindcss" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger each icon's animation by 0.3 seconds
      delayChildren: 0.3, // Delay the start of animations for the icons
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }, // Each icon will take 0.5 seconds to fade in
};

export const HeroPage = () => {
  return (
    <div className="w-full h-[calc(100vh-10dvh)] flex justify-center items-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }} // Fades out when the component scrolls out of view
        viewport={{
          margin: "-200px", // Starts fading out when 50% of the component is out of view
          once: false, // Keeps repeating the animation on scroll
        }}
        transition={{ duration: 1 }} // Adjust transition duration
        className="w-full max-w-screen-md h-fit flex flex-col gap-8 py-4"
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-fit md:h-80 h-fit flex md:flex-row flex-col-reverse justify-center items-center">
            {/* left side */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-fit h-fit flex md:justify-end justify-center"
            >
              <LeftSide />
            </motion.div>
            {/* right side */}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="h-fit w-fit flex justify-start"
            >
              <Rightside />
            </motion.div>
          </div>
        </div>
        {/* Tech Stack */}
        <TechStack />
      </motion.div>
    </div>
  );
};

const LeftSide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start gap-4 px-4">
      <h1 className="lg:text-5xl md:text-4xl text-3xl md:text-left font-extrabold max-w-96 w-full">
        Front End Web Developer
      </h1>
      <div className=" text-lg font-medium text-left max-w-96 w-full">
        Hi, I&apos;m {myName}. A Front-end Web Developer based in Philippines.
        <svg
          className="inline-block align-middle"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            fill="#d5dee4"
            d="M256 504.575c-13.382 0-18.231-10.848-18.231-24.23l-6-323.28c0-13.382 10.848-24.23 24.23-24.23s24.23 10.848 24.23 24.23l-6 323.28c.001 13.382-4.847 24.23-18.229 24.23"
          />
          <path
            fill="#bccbd3"
            d="M256 132.834c-13.382 0-24.23 10.848-24.23 24.23l1.752 94.386C240.745 253.119 248.27 254 256 254s15.255-.881 22.479-2.549l1.752-94.386c-.001-13.382-10.849-24.231-24.231-24.231"
          />
          <circle cx="256" cy="112" r="111" fill="#ff473e" />
          <ellipse
            cx="194.399"
            cy="60.749"
            fill="#fd7085"
            rx="19.076"
            ry="32.428"
            transform="rotate(33.488 194.39 60.752)"
          />
        </svg>
      </div>
      <div className="flex justify-start items-center gap-4">
        <Link href="https://github.com/AlroJohn">
          <Icon
            className="cursor-pointer"
            icon="grommet-icons:github"
            width="30"
            height="30"
          />
        </Link>
        <Icon
          className="text-blue-500 cursor-pointer"
          icon="brandico:linkedin-rect"
          width="30"
          height="30"
        />
        <Icon
          className="cursor-pointer"
          icon="logos:google-gmail"
          width="30"
          height="30"
        />
      </div>
      <div className="block md:hidden pt-4">
        <button
          className="max-w-44 w-full py-2 px-4 rounded-md bg-pri-4 text-pri-3 hover:bg-sec-4 hover:text-pri-4 duration-300"
          type="button"
        >
          My Tech Stack
        </button>
      </div>
    </div>
  );
};

const Rightside = () => {
  return (
    <div className="md:w-80 w-full h-80 flex justify-center items-center relative">
      {/* Rotating blue circle with animated border radius */}
      <motion.div
        className="absolute w-64 h-64 rounded-full  shadow-sec-4 border-2 border-sec-4   overflow-hidden"
        animate={{
          borderRadius: [
            "50% 70% 30% 70% / 50% 30% 70% 30%",
            "30% 50% 70% 30% / 50% 50% 30% 50%",
            "50% 30% 30% 70% / 50% 30% 70% 30%",
            "70% 40% 50% 30% / 60% 70% 40% 40%",
            "50% 40% 50% 70% / 40% 40% 40% 60%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror", // ensures smooth back-and-forth motion
        }}
      >
        {/* Static image filling the entire rotating blue div */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/grad.jpg"
          alt="Profile"
        />
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="h-fit flex gap-4 md:justify-center justify-start items-center px-4">
      <div className="md:flex hidden gap-4 justify-center items-center">
        <h6 className="font-semibold text-xl">Tech Stack</h6>
        <span className="border-[1.3px] border-black h-6"></span>
        <motion.div
          className=" flex justify-center items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {iconsName.map((icon) => (
            <motion.div key={icon.id} variants={itemVariants}>
              <Icon icon={icon.icon} width="35" height="35" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
