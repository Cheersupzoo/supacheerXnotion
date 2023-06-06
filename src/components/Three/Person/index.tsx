import React from 'react'

import { useTexture } from '@react-three/drei'

import { useDarkMode } from '@/lib/use-dark-mode'

import { M1 } from '../M1'
import { Arm } from './Arm'
import { Head } from './Head'
import { LBody } from './LBody'
import { UBody } from './UBody'

export const Person = () => {
  const { isDarkMode } = useDarkMode()
  const textureRed = useTexture(
    isDarkMode ? '/Screenshot.png' : '/ScreenshotW.png'
  )
  return (
    <group position={[0, -9.6, 0]} scale={0.15}>
      <Head position={[0, 6.5, 1]} />
      <UBody />
      <LBody />
      <Arm position={[-3, 3, 0]} />
      <Arm position={[3, 3, 0]} right />
      <M1
        // ref={mbp14}
        texture={textureRed}
        scale={0.2}
        rotation={[-0.05, Math.PI, 0]}
        position={[0, -2.4, 4.5]}
      />
    </group>
  )
}

useTexture.preload('/Screenshot.png')
useTexture.preload('/ScreenshotW.png')