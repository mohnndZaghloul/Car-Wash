import { motion } from "framer-motion";
import { GiWaterRecycling } from "react-icons/gi";

const Nav = () => {
  return (
    <header>
      <nav className="container relative py-5 flex justify-center items-center">
        <GiWaterRecycling size={40}/>
        <motion.div
          initial={{
            x: "-50%",
            scaleX: 0,
          }}
          animate={{
            scaleX: [1, 0.6, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
          className="absolute h-[1px] w-3/4 bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary shadow-2xl shadow-secondary"
        />
      </nav>
    </header>
  );
};

export default Nav;
