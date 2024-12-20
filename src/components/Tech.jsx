import React, { memo, Suspense, lazy, useEffect, useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Lazy load BallCanvas component
const BallCanvas = lazy(() => import("./canvas").then(module => ({ 
  default: module.BallCanvas 
})));

// Image optimization component
const OptimizedImage = memo(({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
});

// Memoize the tech ball component to prevent unnecessary re-renders
const TechBall = memo(({ icon, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ballRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ballRef.current) {
      observer.observe(ballRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ballRef} className='w-28 h-28'>
      {isVisible && (
        <Suspense fallback={
          <div className="w-28 h-28 animate-pulse bg-tertiary rounded-full">
            <OptimizedImage src={icon} alt={name} />
          </div>
        }>
          <BallCanvas icon={icon} />
        </Suspense>
      )}
    </div>
  );
});

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechBall
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");