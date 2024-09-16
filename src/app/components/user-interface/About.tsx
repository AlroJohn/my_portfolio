"use client";
import { motion } from "framer-motion";

const details = [
  {
    email: "alromercado08@gmail.com",
    college: "Divine Word College of Legazpi",
    jobPosition: "Frontend Developer",
  },
];
export const About = () => {
  return (
    <div className="w-full lg:h-[calc(100vh-10dvh)] h-fit flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        viewport={{
          amount: 0.5, // Starts fading out when 50% of the component is out of view
          once: false, // Keeps repeating the animation on scroll
        }}
        transition={{ duration: 1 }}
        className="w-full max-w-screen-lg h-fit flex lg:flex-row flex-col py-4 border border-black"
      >
        <div className="lg:w-fit w-full flex justify-center lg:items-start items-center border border-black p-8">
          <div className="relative w-80 h-80 border border-black rounded-xl">
            <img
              className="w-full h-full object-cover object-[60%_80%] rounded-xl"
              src="/assets/hand.jpg"
              alt=""
            />
            <div className="absolute top-4 right-4 w-full h-full rounded-xl -z-10 bg-sec-4 shadow-sm shadow-sec-4"></div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center border border-black p-8">
          <div className="w-full h-full flex flex-col gap-4">
            <h2 className="text-4xl font-medium">ABOUT ME</h2>
            <p className="leading-relaxed">
              I am a web developer based in Tabaco City, Albay, Philippines,
              passionate about creating engaging web-applications. I specialize
              in transforming UI/UX designs into responsive, fully functional
              digital products using the latest technologies. With a keen eye
              for detail and a strong commitment to excellence, I deliver
              high-quality digital experiences tailored to meet my clients&apos;
              needs.
            </p>
            {details.map((detail, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 grid-cols-1 gap-x-12 md:gap-4 gap-1 w-full"
              >
                <h1 className="flex flex-row lg:flex-col lg:gap-0 gap-2">
                  <span className="font-medium">EMAIL:</span>
                  {detail.email}
                </h1>
                <h1 className="flex flex-row lg:flex-col lg:gap-0 gap-2">
                  <span className="font-medium">EDUCATION:</span>
                  {detail.college}
                </h1>
                <h1 className="flex flex-row lg:flex-col lg:gap-0 gap-2">
                  <span className="font-medium">EMPLOYMENT:</span>
                  Open
                </h1>
                <h1 className="flex flex-row lg:flex-col lg:gap-0 gap-2">
                  <span className="font-medium">POSITION:</span>
                  {detail.jobPosition}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
