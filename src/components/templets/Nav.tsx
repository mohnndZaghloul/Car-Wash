import { motion } from "framer-motion";
import { GiWaterRecycling } from "react-icons/gi";
import { FaWhatsapp, FaVideo, FaPhone } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="absolute z-50 top-0 w-full">
      <nav className="container relative w-full py-5 flex justify-center items-center gap-8">
        <a target="_blank" href="tel:0551916679">
          <FaPhone
            className="animate-pulse hover:scale-110 transition duration-300 cursor-pointer"
            size={32}
          />
        </a>
        <GiWaterRecycling size={40} />
        <a target="_blank" href="https://wa.me/0551916679">
          <FaWhatsapp
            className="animate-pulse hover:scale-110 transition duration-300 cursor-pointer"
            size={32}
          />
        </a>
        <motion.div
          initial={{
            x: "-50%",
            scaleX: 0,
          }}
          animate={{
            scaleX: [1, 0.5, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
          className="absolute h-[1px] w-3/4 bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary shadow-2xl shadow-secondary"
        />
      </nav>
    </header>
  );
};

export default Nav;
