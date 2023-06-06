import React, { useEffect, useRef } from 'react'

import { SpringRef, animated, config, useSpring } from '@react-spring/three'
import { Cloud, Sky, Sparkles, Sphere, Stars } from '@react-three/drei'
import { DoubleSide } from 'three'

import { useDarkMode } from '@/lib/use-dark-mode'

const AnimatedSky = animated(Sky)

export const Background = () => {
  const { isDarkMode } = useDarkMode()
  const isDarkModeRef = useRef(true)
  useEffect(() => {
    isDarkModeRef.current = isDarkMode
  }, [isDarkMode])
  const springRef = SpringRef()
  const { backgroundAngle, lightOpacity, darkOpacity } = useSpring({
    backgroundAngle: Math.PI / 2,
    lightOpacity: isDarkMode ? 0 : 1,
    darkOpacity: 0.5,
    rayleigh: 0.08,
    config: { ...config.molasses },
    ref: springRef
  })

  useEffect(() => {
    if (isDarkMode) {
      backgroundAngle.set(2 * Math.PI)
      backgroundAngle.start(Math.PI)
      lightOpacity.start(0.0)
      darkOpacity.start(1.0)
    } else {
      backgroundAngle.set(Math.PI)
      backgroundAngle.start(0)
      lightOpacity.start(1.0)
      darkOpacity.start(0.0)
    }
  }, [isDarkMode])

  return (
    <group>
      <animated.group
        position={[0, -20, 0]}
        visible={lightOpacity.to((op) => op > 0.01)}
        rotation={backgroundAngle.to((angle) => [0, 0, angle]) as any}
      >
        <group position={[0, 20, 0]}>
          <AnimatedSky
            turbidity={0.1}
            rayleigh={0.4}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
            sunPosition={[1500, 550, 1000]}
          />
          <Cloud position={[-20, -9, 25]} speed={0.2} opacity={0.7} />
          <Cloud position={[24, -12, 17]} speed={0.2} opacity={0.5} />
          <Cloud position={[6, -6, 15]} speed={0.2} opacity={0.6} />
          <Cloud position={[-7, -6, 21]} speed={0.2} opacity={0.7} />
        </group>
      </animated.group>
      <Sparkles
        renderOrder={999}
        position={[-3.5, -7.5, -3.5 + 40]}
        color='orange'
        size={100}
        speed={0.4}
        noise={1}
        scale={5}
        opacity={isDarkMode ? 0.1 : 0}
      ></Sparkles>

      <animated.group visible={darkOpacity.to((op) => op > 0.01)}>
        <group position={[0, 0, 0]} scale={20}>
          <Sphere args={[10, 100, 100]} receiveShadow={false}>
            {/* @ts-ignore */}
            <animated.meshBasicMaterial
              transparent
              side={DoubleSide}
              opacity={darkOpacity}
              color='#292c33'
            />
          </Sphere>
        </group>
      </animated.group>
      <animated.group
        position={[0, -40, 0]}
        rotation={backgroundAngle.to((angle) => [0, 0, angle + Math.PI]) as any}
      >
        <group renderOrder={999} position={[0, 40, 0]}>
          <Stars
            count={3000}
            radius={isDarkMode ? 10 : 10000}
            fade
            factor={3}
          />
        </group>
      </animated.group>
    </group>
  )
}
