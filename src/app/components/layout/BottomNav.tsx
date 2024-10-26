import { Icon } from "@iconify/react/dist/iconify.js";
import e from "express";
import { AnimatePresence, motion } from "framer-motion";

interface BottomNavProps {
  onClose: () => void;
  eventOpen: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onClose, eventOpen }) => {
  return (
    <AnimatePresence>
      {eventOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            damping: 25,
            stiffness: 500,
            duration: 0.5,
          }}
          onClick={onClose}
          className="md:hidden block w-full h-dvh fixed top-0 left-0 z-[1000] bg-black/50"
        >
          <div className="w-full h-full flex items-end">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ damping: 25, stiffness: 500, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-[20rem] bg-pri-4 rounded-t-[2rem] p-6 z-50"
            >
              <div className="w-full h-full flex flex-col gap-6">
                {menu.map((item, index) => (
                  <div
                    key={index}
                    className="w-fit flex items-center gap-2 cursor-pointer text-pri-3 hover:text-sec-4"
                  >
                    <Icon icon={item.icon} width="30" height="30" />
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const menu = [
  { icon: "ic:baseline-home", name: "Home", link: "/" },
  { icon: "mdi:about", name: "About", link: "/about" },
  { icon: "si:projects-fill", name: "Projects", link: "/projects" },
  { icon: "bxs:contact", name: "Contact", link: "/contact" },
  { icon: "tabler:stack-filled", name: "Tech Stack", link: "/tech-stack" },
];
