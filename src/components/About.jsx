import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Lazy load the ServiceCard component
const ServiceCard = lazy(() => import("./ServiceCard"));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText} >
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Throughout my career, I've successfully executed numerous projects, overseeing the entire software engineering life cycle from inception through deployment, while continuously seeking to expand my technical knowledge and skills in areas such as full-stack development, cloud infrastructure, and emerging technologies to improve as a software engineer and stay at the forefront of the industry.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10" >
        {services.map((service, index) => (
          <Suspense key={service.title} fallback={<div>Loading...</div>}>
            <ServiceCard index={index} {...service} />
          </Suspense>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
