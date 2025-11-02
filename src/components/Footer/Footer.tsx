import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaGoogle,
  FaTelegram,
  FaMapLocation,
} from "react-icons/fa6";
import cardsImg from "../../assets/credit-cards.webp";
import logoImg from "../../assets/logo.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-primary pt-8 pb-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* company details section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <img
              src={logoImg}
              alt="footer-logo"
              className="max-w-[100px] invert"
            />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123)-456-7890
              </p>
              <p className="mt-2 flex items-center gap-2">
                <FaMapLocation />
                Tehran, Iran
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* footer links section */}
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social details section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Fallow Us</h3>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-xl duration-300 hover:scale-105" />
              <FaGoogle className="text-xl duration-300 hover:scale-105" />
              <FaInstagram className="text-xl duration-300 hover:scale-105" />
              <FaTelegram className="text-xl duration-300 hover:scale-105" />
            </div>
            <div className="space-y-2">
              <p>Payment Method</p>
              <img src={cardsImg} alt="payment-methods" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <p className="mt-8 border-t-2 border-white/40 pt-8 text-center text-sm">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
            <br />
            <p className="text-xs capitalize">
              design by:{" "}
              <a
                href="https://www.alirezaeii.ir/"
                target="_blank"
                className="transition-all duration-300 hover:text-white/80"
                aria-label="developer"
              >
                Ali Rezaei
              </a>
            </p>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
