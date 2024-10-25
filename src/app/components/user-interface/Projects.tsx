"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-10dvh)] h-fit flex justify-center items-start pb-[10rem]">
      <div className="w-full max-w-screen-md h-fit flex flex-col gap-[8rem] py-4">
        <div className="flex flex-col gap-2">
        <h2 className="text-sm uppercase font-extrabold text-sec-4">
        <span className="italic">#</span> Projects
        </h2>
        <p className="w-full max-w-md">These are some of my created projects using Angular and Next.js, leveraging TypeScript to build responsive, feature-rich applications.</p>
        </div>
        <ProjectList />
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-[5rem] p-4">
      <ProjectCard />
    </div>
  );
};

const ProjectCard = () => {
  return (
    <AnimatePresence>
      {projectLists.map((project, index) => (
        <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }} // Fades out when the component scrolls out of view
        viewport={{
          // margin : "-200px"
          margin: "-100px", // Starts fading out when 50% of the component is out of view
          once: true, // Keeps repeating the animation on scroll
        }}
        transition={{ duration: 1 }} // Adjust transition duration
        className={`w-full h-fit flex gap-4 items-start justify-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="w-full h-full">
          <div className="w-full max-w-md min-h-[16rem] bg-gray-400 shadow-md">
            {/* <img src="" className="w-full h-full object-cover" alt="" /> */}
          </div>
        </div>
        <div className={`w-full max-w-[20rem] h-full text-left ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
          <h1 className="font-bold">{project.title}</h1>
          <span className="text-xs text-pri-1">description:</span>
          <p>
            {project.description}
          </p>
          <div className="mt-4">
          <button className="text-white bg-sec-4 w-32 py-1.5 rounded-md uppercase text-sm">
            demo
          </button>
          </div>
        </div>
      </motion.div>
      ))}
    </AnimatePresence>
  );
};

const projectLists = [
  {
    title: "Library Management System",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sunt fuga ducimus maxime accusamus maiores illo nihil expedita consectetur quidem, accusantium placeat quis voluptas. Voluptas soluta illum eveniet! Earum, fuga.",
  },
  {
    title: "Creatives Legazpi 2.0",
    description:''
  },
  {
    title: "CATSU Speechlab",
    description:''
  },
  {
    title: "ChaCha Flow",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sunt fuga ducimus maxime accusamus maiores illo nihil expedita consectetur quidem, accusantium placeat quis voluptas. Voluptas soluta illum eveniet! Earum, fuga.",
  },
  {
    title: "Notes Cascade",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sunt fuga ducimus maxime accusamus maiores illo nihil expedita consectetur quidem, accusantium placeat quis voluptas. Voluptas soluta illum eveniet! Earum, fuga.",
  },
  
];
