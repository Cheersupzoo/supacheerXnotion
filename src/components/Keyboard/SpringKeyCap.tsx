import React from 'react'

import { animated, useSpring, useSpringRef } from '@react-spring/three'
import { ThreeEvent, useThree } from '@react-three/fiber'

export const SpringKeyCap = ({ children }: any) => {
  const yRef = useSpringRef()

  const { y } = useSpring({
    y: 0,
    config: {
      friction: 10,
      tension: 200
    },
    ref: yRef
  })
  const { invalidate } = useThree()
  const onPointerDown = async (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    console.log(e.pointerType)
    if (e.pointerType === 'touch') {
      invalidate(40)

      yRef.start({
        from: { y: 0 },
        to: [{ y: -0.0045 }, { y: 0 }],
        config: {
          friction: 100,
          tension: 4000,
          mass: 2
        },
        reset: true
      })

      return
    }

    invalidate(20)
    y.start(-0.0025)
  }
  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    if (e.pointerType === 'touch') {
      return
    }
    invalidate(20)
    y.start(0)
  }
  return (
    <animated.group
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      position={y.to((y) => [0, y, 0])}
    >
      {children}
    </animated.group>
  )
}
