import { MdClose, MdMenu } from "react-icons/md";
import logoImg from "../assets/logo.png";
import { navbarMenu } from "../constants";
import { FaRegUser } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 py-8 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto flex items-center justify-between px-6"
      >
        {/* logo */}
        <div>
          <img src={logoImg} alt="logo" className="max-w-[100px] invert" />
        </div>

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block px-3 py-2 text-base font-semibold uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="ps-14 text-xl">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>

        {/* mobile toggle */}
        <button
          className="z-50 md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="toggle menu"
        >
          {isOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <MdMenu className="text-3xl" />
          )}
        </button>
      </motion.div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="bg-primary/50 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-sm md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
              {navbarMenu.map((item) => (
                <li key={item.id} className="hover:text-white/60">
                  <a
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer px-4 py-2 uppercase"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-2xl"
                >
                  <FaRegUser />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
