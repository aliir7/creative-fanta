import { motion } from "framer-motion";
import bannerImg from "../../assets/Banner/juice.png";
import splashImg from "../../assets/Banner/splash.png";
import { fadeUp } from "../../utils/utils";

function Banner() {
  return (
    <section>
      <div className="container grid grid-cols-1 gap-12 space-y-0 md:grid-cols-2 md:space-y-6">
        {/* banner image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={bannerImg}
            alt="banner-image"
            className="relative z-10 mx-auto w-[300px] md:w-[400px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -100, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={splashImg}
            alt="splash-image"
            className="absolute bottom-0 z-0"
          />
        </div>
        {/* banner info section */}
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w-[450px]">
            <motion.h3
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl font-semibold lg:text-4xl"
            >
              Refresh Your World with Fanta
            </motion.h3>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="text-gray-500"
            >
              Fanta brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you're looking to quench your thirst with a
              zesty. orange, tangy lemon, or one of our many other
              fruits-inspired. flavors, Fanta is your go-to drink for refreshing
              and exciting experience. Dive into the world of fanta and let
              every sip spark your senses with its bold, bubbly, and refreshing
              taste!
            </motion.p>
            <motion.button
              variants={fadeUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="border-primary text-primary hover:bg-primary mt-5! rounded-md border-2 px-6 py-2 duration-200 hover:text-white"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
