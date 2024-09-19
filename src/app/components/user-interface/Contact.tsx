"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="w-full h-[calc(100vh-12dvh)] md:h-[calc(100vh-50dvh)] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        viewport={{
          amount: 0.5, // Trigger when 50% of the element is in view
          once: false, // Repeat animation on scroll
        }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl h-fit flex lg:flex-row flex-col py-4 lg:px-0 px-6 group"
      >
        {/* Left side with the image */}
        <ContactInfo />
      </motion.div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-sm uppercase font-extrabold text-sec-4">Contact</h1>
        <p className="text-lg font-bold w-full max-w-sm">
          Let&apos;s connect! I&apos;d happy to hear from you.
        </p>
      </div>
      <div className="px-4 grid lg:grid-cols-2 grid-cols-1 gap-4 w-full max-w-xl">
        {contactInformation.map((info, index) => (
            <div key={index} className="w-fit flex justify-start items-center gap-3">
            <Icon
              className="text-pri-4"
              icon={info.icon}
              width="40"
              height="40"
            />
            <div className="w-full flex flex-col">
              <span>{info.title}</span>
              <p className="text-pri-1">{info.info}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

const contactInformation = [
  {
    icon: "fa6-solid:map-location",
    title: "Location",
    info: "Albay, Philippines",
  },
  {
    icon: "icon-park-solid:mail-review",
    title: "Mail",
    info: "alromercado08@gmail",
  },
  {
    icon: "material-symbols:contact-phone",
    title: "Phone",
    info: "+63 981 5133 675",
  },
  {
    icon: "devicon-plain:facebook",
    title: "Facebook",
    info: "pugz.mercado",
  },
];
