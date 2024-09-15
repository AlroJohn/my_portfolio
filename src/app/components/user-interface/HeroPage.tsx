"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroPage = () => {
  return (
    <div className="w-full h-[calc(100vh-10dvh)] border border-black">
      <div className="w-full h-full flex justify-center items-center gap-10">
        <div className="w-full h-full flex justify-end">
          <div className="w-full h-full flex justify-center items-center border border-black relative">
            {/* Rotating blue circle with animated border radius */}
            <motion.div
              className="absolute w-72 h-72 rounded-full shadow-lg shadow-slate-400 overflow-hidden"
              animate={{
                borderRadius: [
                  "50% 70% 30% 70% / 50% 30% 70% 30%",
                  "30% 50% 70% 30% / 50% 50% 30% 50%",
                  "50% 30% 30% 70% / 50% 30% 70% 30%",
                ],
              }}
              transition={{
                duration: 5,
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
        </div>
        <div className="w-full justify-start">
          <h1 className="text-2xl font-serif uppercase">
            Alro John T. Mercado
          </h1>
          <p className=" leading-relaxed">
            I am a web developer based in Tabaco City, Albay, Philippines,
            passionate about creating websites and applications. I specialize in
            translating UI/UX designs into responsive, fully functional websites
            and applications using the latest technologies. With a keen eye for
            detail and a commitment to excellence, I deliver high-quality
            digital experiences that meet my clients' needs.
          </p>
        </div>
      </div>
    </div>
  );
};
