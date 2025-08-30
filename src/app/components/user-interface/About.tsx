"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full h-[calc(100vh-10dvh)] pb-[15dvh] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        viewport={{
          amount: 0.5, // Trigger when 50% of the element is in view
          once: false, // Repeat animation on scroll
        }}
        transition={{ duration: 1 }}
        className="w-full max-w-screen-md h-fit flex lg:flex-row flex-col py-4 group"
      >
        {/* Left side with the image */}
        <LeftSide />
        {/* Right side content */}
        <RightSide />
      </motion.div>
    </div>
  );
};

const LeftSide = () => {
  return (
    <div className="lg:w-fit w-full flex justify-center lg:items-start items-center p-8">
      <motion.div
        initial={{ opacity: 0, x: -150 }} // Starts hidden and moved left
        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
        viewport={{
          amount: 0.5, // Trigger animation when 50% of the element is in view
          once: true, // Animate only once on scroll
        }}
        transition={{ duration: 1.2 }} // Smooth transition
        className="relative w-64 h-64 rounded-xl z-0" // Ensuring this container has a relative z-index
      >
        <img
          className="w-full h-full object-cover object-[60%_80%] rounded-xl"
          src="/assets/hand.jpg"
          alt=""
        />
        <div className="absolute top-3 right-3 group-hover:bg-pri-4 duration-500 ease-in-out w-full h-full rounded-xl z-[-1] bg-sec-4 shadow-sm shadow-sec-4"></div>
        {/* Adjust z-index to z-[-1] */}
      </motion.div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, x: 150 }} // Starts hidden and moved left
        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
        viewport={{
          amount: 0.5, // Trigger animation when 10% of the element is in view
          once: true, // Repeat animation on scroll
        }}
        transition={{ duration: 1.2 }} // Smooth transition
        className="w-full h-full flex flex-col gap-1"
      >
        <h2 className="text-sm uppercase font-extrabold text-sec-4">
          <span className="italic">#</span> ABOUT ME
        </h2>
        <div className="leading-relaxed flex flex-col gap-2 ">
          <span className="text-lg font-bold">
            A dedicated Fullstack Developer based in Albay, Philippines.
            <Icon
              className="inline-block align-middle"
              icon="fxemoji:roundpushpin"
              width="27"
              height="27"
            />
          </span>
          <p className="font-sans">
            I am passionate about creating engaging web-applications. I
            specialize in transforming UI/UX designs into responsive, fully
            functional digital products using the latest technologies. I possess
            an impressive arsenal skill in HTML, CSS, Talwind CSS, Javascript,
            TypeScript..
          </p>
        </div>
      </motion.div>
    </div>
  );
};
