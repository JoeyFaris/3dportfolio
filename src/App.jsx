import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef } from 'react';
import { StarsCanvas } from "./components";

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  const componentsRef = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Preload the component when it's about to come into view
          const componentId = entry.target.dataset.component;
          if (componentId && componentsRef.current[componentId]) {
            componentsRef.current[componentId]();
          }
        }
      });
    }, observerOptions);

    // Observe placeholder elements
    document.querySelectorAll('[data-component]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Suspense fallback={<div className="h-16" />}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Hero />
          </Suspense>
        </div>

        <div data-component="about">
          <Suspense fallback={<div className="h-screen" />}>
            <About />
          </Suspense>
        </div>

        <div data-component="experience">
          <Suspense fallback={<div className="h-screen" />}>
            <Experience />
          </Suspense>
        </div>

        <div data-component="tech">
          <Suspense fallback={<div className="h-screen" />}>
            <Tech />
          </Suspense>
        </div>

        <div data-component="works">
          <Suspense fallback={<div className="h-screen" />}>
            <Works />
          </Suspense>
        </div>

        <div className='relative z-0' data-component="contact">
          <Suspense fallback={<div className="h-screen" />}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;