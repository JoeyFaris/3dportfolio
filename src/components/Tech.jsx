import React, { memo, Suspense, lazy } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Lazy load BallCanvas component
const BallCanvas = lazy(() => import("./canvas").then(module => ({ 
  default: module.BallCanvas 
})));

// Memoize the tech ball component to prevent unnecessary re-renders
const TechBall = memo(({ icon }) => (
  <div className='w-28 h-28'>
    <Suspense fallback={<div className="w-28 h-28 animate-pulse bg-tertiary rounded-full" />}>
      <BallCanvas icon={icon} />
    </Suspense>
  </div>
));

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechBall
          key={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");