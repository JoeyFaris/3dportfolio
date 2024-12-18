import React, { Suspense, memo, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = memo((props) => {
  const [decal] = useTexture([props.imgUrl])

  const meshProps = useMemo(() => ({
    castShadow: true,
    receiveShadow: true,
    scale: 2.75
  }), [])

  const materialProps = useMemo(() => ({
    color: "#fff8eb",
    polygonOffset: true,
    polygonOffsetFactor: -5,
    flatShading: true
  }), [])

  const decalProps = useMemo(() => ({
    position: [0, 0, 1],
    rotation: [2 * Math.PI, 0, 6.25],
    flatShading: true,
    map: decal
  }), [decal])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh {...meshProps}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial {...materialProps} />
        <Decal {...decalProps} />
      </mesh>
    </Float>
  )
})

const BallCanvas = memo(({ icon }) => {
  const canvasProps = useMemo(() => ({
    frameloop: 'demand',
    gl: { preserveDrawingBuffer: true }
  }), [])

  const controlsProps = useMemo(() => ({
    enableZoom: false
  }), [])

  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls {...controlsProps} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
})

export default BallCanvas