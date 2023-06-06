import React, { Suspense, useEffect } from 'react'

import { useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { useResizeCanvas } from '@/lib/three/useResizeCanvas'

import { useReveal } from '../Reveal/RevealProvider'
import { Background } from './Background'
import { Camera } from './Camera'
import { Light } from './Light'
import { Loader } from './Loader'
import { Person } from './Person'
import { Tree } from './Tree'
import World from './World'
import { ThreeContextProvider, useThreeContext } from './context'

export const Layout = () => {
  return (
    <ThreeContextProvider>
      <ThreeCanvas />
    </ThreeContextProvider>
  )
}

export const ThreeCanvas = () => {
  const { setPosCenter, lookForward } = useThreeContext()
  const { active } = useProgress()
  const { setIsLoading } = useReveal()

  useEffect(() => {
    setIsLoading(active)
  }, [active, setIsLoading])

  return (
    <Canvas
      onPointerMove={(event) => {
        const { clientX, clientY } = event
        const { left, top } = event.currentTarget.getBoundingClientRect()

        const currentX = clientX - left
        const currentY = clientY - top
        const canvasWidth = event.currentTarget.offsetWidth
        const canvasHeight = event.currentTarget.offsetHeight
        const posXCenter = currentX - canvasWidth / 2
        const posYCenter = currentY - canvasHeight / 2
        setPosCenter(posXCenter, posYCenter)
      }}
      onPointerEnter={() => (lookForward.current = true)}
      onPointerLeave={() => (lookForward.current = false)}
      // resize={{ debounce: 0 }}
      shadows
    >
      <Suspense fallback={<Loader />}>
        <Three />
      </Suspense>
    </Canvas>
  )
}
export const Three = () => {
  useResizeCanvas()
  return (
    <group>
      <orthographicCamera />
      <group position={[0,0,40]}><Camera /></group>
      {/* <EffectComposer multisampling={0}>
        <DepthOfField focalLength={0.4} bokehScale={14} target={[0,0,0]} />
      </EffectComposer> */}
      {/* <OrbitControls target={[0, -8, 0]} /> */}
      <Light />
      <group position={[0,0,40]}>
        <World />
        <Tree />
        <Person />
      </group>
      <Background />
      {/* <Stats /> */}
    </group>
  )
}

export default Layout
