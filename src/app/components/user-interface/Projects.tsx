"use client";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="w-full h-[calc(100vh-10dvh)] flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }} // Fades out when the component scrolls out of view
        viewport={{
          // margin : "-200px"
          margin: "-100px", // Starts fading out when 50% of the component is out of view
          once: false, // Keeps repeating the animation on scroll
        }}
        transition={{ duration: 1 }} // Adjust transition duration
        className="w-full max-w-screen-md h-fit flex flex-col py-4 border border-black p-8"
      >
        asd
      </motion.div>
    </div>
  );
};
