import React, { Suspense, useEffect, useRef } from 'react'

import { animated, useSpring } from '@react-spring/three'
import { Html, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls'
import { lerp } from 'three/src/math/MathUtils'

import { useDarkMode } from '@/lib/use-dark-mode'

import { KeyboardModel } from './KeyboardModel'

export const KeyboardLayout = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ThreeCanvas />
    </div>
  )
}

export const Loader = () => {
  return (
    <Html center className='h-[282px] w-[300px] select-none'>
      <img
        className='h-full w-full'
        style={{ objectFit: 'contain' }}
        src='/keyboard_placeholder.png'
      />
    </Html>
  )
}

export const ThreeCanvas = () => {
  return (
    <Canvas shadows frameloop='demand'>
      <Suspense fallback={<Loader />}>
        <Three />
      </Suspense>
    </Canvas>
  )
}
export const Three = () => {
  const orbitalCameraRef = useRef<OrbitControlsType>(null!)
  const { isDarkMode } = useDarkMode()
  const { lightColor, lightIntensity } = useSpring({
    lightIntensity: isDarkMode ? 1.2 : 1.5,
    lightColor: isDarkMode ? 'rgb(207, 218, 255)' : 'rgb(255, 240, 233)'
  })

  const { invalidate } = useThree()
  useEffect(() => {
    const onScroll = () => {
      if (!orbitalCameraRef.current) return

      const distanceTop =
        document.documentElement.scrollTop || document.body.scrollTop

      orbitalCameraRef.current.minPolarAngle = lerp(
        0.6,
        1.5,
        Math.min(distanceTop, 200) / 200
      )

      orbitalCameraRef.current.maxPolarAngle =
        orbitalCameraRef.current.minPolarAngle

      invalidate(1)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [invalidate])
  return (
    <group>
      {/* <EffectComposer multisampling={0}>
        <DepthOfField focalLength={0.4} bokehScale={14} target={[0,0,0]} />
      </EffectComposer> */}
      <OrbitControls
        // @ts-ignore
        ref={orbitalCameraRef}
        makeDefault
        target={[1, 0, 1]}
        minPolarAngle={0.8}
        maxPolarAngle={0.8}
        minAzimuthAngle={-0.6}
        maxAzimuthAngle={0.6}
        minDistance={5}
        maxDistance={5}
      />
      {/* @ts-ignore */}
      <animated.directionalLight
        position={[50, 50, 0]}
        intensity={lightIntensity}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-camera-near={0.1}
        shadow-camera-far={90}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={lightColor}
      />
      <animated.hemisphereLight
        color={lightColor}
        groundColor='green'
        intensity={0.4}
      />
      <group>
        <KeyboardModel />
      </group>
    </group>
  )
}
