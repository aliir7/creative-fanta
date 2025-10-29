import { useState } from "react";
import { heroData } from "../constants";
import type { HeroType } from "../types";
import Navbar from "./Navbar";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { UpdateFollower } from "react-mouse-follower";

const SlideRight = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

function Hero() {
  const [activeData, setActiveData] = useState<HeroType | null>(heroData[0]);

  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData?.bgColor }}
        animate={{ backgroundColor: activeData?.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* navbar Component */}
        <Navbar />
        <div className="container grid min-h-[605px] grid-cols-1 md:grid-cols-2">
          {/* data info */}
          <div className="relative z-40 order-2 flex flex-col justify-center py-14 text-white md:order-1 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={activeData?.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="font-handwriting text-shadow text-3xl font-bold capitalize lg:text-6xl xl:text-7xl"
                  >
                    {activeData?.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData?.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white"
                >
                  {activeData?.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData?.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: 720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData?.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData?.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData?.bgColor }}
                    className="inline-block rounded-sm bg-white px-4 py-2 font-normal"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* list sep */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="!md:mt-24 mb-10! flex items-center justify-center gap-4 md:justify-start"
              >
                <div className="h-px w-20 bg-white"></div>
                <p className="uppercase">Top Recommendation</p>
                <div className="h-px w-20 bg-white"></div>
              </motion.div>
              {/* image switcher */}
              <motion.div
                className="grid grid-cols-3 gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              >
                {heroData.map((data) => (
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: data.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      key={data.id}
                      onClick={() => setActiveData(data)}
                      className="cursor-pointer space-y-3 transition-all duration-200 hover:scale-105"
                    >
                      <div className="flex justify-center">
                        <img
                          src={data.image}
                          alt={data.title}
                          className={`img-shadow w-20 ${activeData?.image === data.image ? "scale-110 opacity-100" : "opacity-50"}`}
                        />
                      </div>
                      <div className="mt-6! space-y-1 text-center">
                        <p className="text-base line-through opacity-50">
                          {data.price}
                        </p>
                        <p className="text-xl font-bold">{data.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                ))}
              </motion.div>
            </div>
          </div>
          {/* hero image */}
          <div className="relative order-1 flex flex-col items-center justify-end md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                src={activeData?.image}
                alt={activeData?.title}
                key={activeData?.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="img-shadow relative z-10 w-[150px] md:w-[200px] xl:w-[350px]"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[300px] font-extrabold text-white/5"
              >
                {activeData?.model}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* whatsapp icon */}
          <div className="fixed right-10 bottom-10 z-9999 text-3xl text-white mix-blend-difference duration-500 hover:rotate-360">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
