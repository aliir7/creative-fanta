import { MdMenu } from "react-icons/md";
import logoImg from "../assets/logo.png";
import { navbarMenu } from "../constants";
import { FaRegUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

function Navbar() {
  return (
    <nav className="py-8 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex items-center justify-between"
      >
        {/* logo section */}
        <div>
          <img src={logoImg} alt="logo-img" className="max-w-[100px] invert" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="relative z-40 flex items-center gap-4">
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
        {/* hamburger menu section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
