import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../ui/Loader3d/Loader3d'
import cls from './Earth.module.scss'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={0.7}
        position={[0, 25, 0]}
        rotation={[600, -300, 0]}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <div className={cls.Earth}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[2, 2]}
        camera={{ position: [-100, 0, -50], fov: -60 }}
        gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default EarthCanvas
