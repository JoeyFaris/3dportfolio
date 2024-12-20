import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, linkedin, resume, resumePDF } from "../assets";
import { useEffect, useState, memo } from "react";

// Memoize links to prevent unnecessary re-renders
const SocialLink = memo(({ href, imgSrc, imgAlt, text, className, download }) => (
  <a 
    href={href}
    target={download ? undefined : "_blank"} 
    rel={download ? undefined : "noopener noreferrer"}
    className={className}
    download={download}
  >
    <img 
      src={imgSrc} 
      alt={imgAlt} 
      className="w-6 h-6 mr-2"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
    {text}
  </a>
));

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const linkClass = "bg-gray-800 py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center";

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start justify-center`}>
        <motion.h1 
          className={`${styles.heroHeadText} text-white font-black`}
          initial={{ y: -50, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
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
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
        >
          Explore my projects, skills, and journey <br className="sm:block hidden" />
          through the ever-evolving world of technology
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ scale: 0 }}
          animate={isLoaded ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 }}
        >
          <a href="#about" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center">
            <span className="text-2xl font-extrabold mr-2">⇩</span>
            Dive In
          </a>
          
          <SocialLink 
            href="https://github.com/joeyfaris"
            imgSrc={github}
            imgAlt="GitHub"
            text="GitHub"
            className={linkClass}
          />
          
          <SocialLink 
            href="https://linkedin.com/in/Joey-Faris"
            imgSrc={linkedin}
            imgAlt="LinkedIn"
            text="LinkedIn"
            className={linkClass}
          />
          
          <SocialLink 
            href={resumePDF}
            imgSrc={resume}
            imgAlt="Resume"
            text="Resume"
            className={linkClass}
            download
          />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);