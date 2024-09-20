"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full h-[calc(100vh-30dvh)] flex justify-center items-start">
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
        <Rightside />
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

const Rightside = () => {
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
        <h2 className="text-sm uppercase font-extrabold text-sec-4">ABOUT ME</h2>
        <div className="leading-relaxed flex flex-col gap-2 ">
          <span className="text-lg font-bold">
            A dedicated Front-end Developer based in Albay, Philippines.
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
          </span>
          <p className="font-sans">
            I am passionate about creating engaging web-applications. I
            specialize in transforming UI/UX designs into responsive, fully
            functional digital products using the latest technologies. I possess
            an impressive arsenal skill in HTML, CSS, Talwind CSS, Javascript,
            TypeScript, Angular, Svelte and Next.js..
          </p>
        </div>
      </motion.div>
    </div>
  );
};
