import React, { Suspense, useEffect, useState, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = lazy(() => {
  return new Promise(resolve => {
    import('@react-three/drei').then(module => {
      const Component = ({ isMobile }) => {
        const computer = module.useGLTF("/desktop_pc/scene.gltf");
        
        return (
          <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
              object={computer.scene}
              scale={isMobile ? 0.6 : 0.65}
              position={isMobile ? [0, -3, -2.2] : [0, -2.75, -1.5]}
              rotation={[-0.01, -0.2, -0.1]}
            />
          </mesh>
        );
      };
      resolve(Component);
    });
  });
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleScroll = () => {
      // Scroll handling logic
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;