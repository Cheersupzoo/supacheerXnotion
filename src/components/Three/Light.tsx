import React, { useEffect } from 'react'

import { SpringRef, animated, config, useSpring } from '@react-spring/three'

import { useDarkMode } from '@/lib/use-dark-mode'

export const Light = () => {
  const { isDarkMode } = useDarkMode()
  const skyColor = !isDarkMode ? 'rgb(255, 240, 233)' : 'rgb(207, 218, 255)'
  const springRef = SpringRef()
  const { directLight1Intensity, directLight2Intensity, lightAngle } =
    useSpring({
      directLight1Intensity: 0.8,
      directLight2Intensity: 0.3,
      lightAngle: 0,
      config: config.molasses,
      ref: springRef
    })
  useEffect(() => {
    if (isDarkMode) {
      directLight1Intensity.start(0.0)
      directLight2Intensity.start(0.1)
      lightAngle.set(2 * Math.PI)
      lightAngle.start(Math.PI)
    } else {
      directLight1Intensity.start(0.8)
      directLight2Intensity.start(0.3)
      lightAngle.set(Math.PI)
      lightAngle.start(0)
    }
  }, [isDarkMode])

  return (
    <>
      <hemisphereLight color={skyColor} groundColor='green' intensity={0.3} />
      <animated.group
        visible={true}
        rotation={lightAngle.to((angle) => [0, 0, angle]) as any}
      >
        {/* @ts-ignore */}
        <animated.directionalLight
          position={[50, 50, 10]}
          intensity={directLight1Intensity}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={0.1}
          shadow-camera-far={90}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          color={skyColor}
        />
        <animated.directionalLight
          position={[10, 50, 80]}
          intensity={directLight2Intensity}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={0.1}
          shadow-camera-far={90}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          color={skyColor}
        />
      </animated.group>
    </>
  )
}
