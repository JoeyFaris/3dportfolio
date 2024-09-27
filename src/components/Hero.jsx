import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start justify-center`}>
        <motion.h1 
          className={`${styles.heroHeadText} text-white font-black`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          Hi, I'm Joey <br />
          <span className="text-[#915eff]">
            Software Engineer
          </span>
        </motion.h1>
        
        <motion.p 
          className={`${styles.heroSubText} mt-4 text-white-100`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
        >
          Explore my projects, skills, and journey <br className="sm:block hidden" />
          through the ever-evolving world of technology
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 }}
        >
          <a href="#about" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            Dive In
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;