import { useEffect, useRef } from 'react'

import { animated, config, useSpring } from '@react-spring/three'
import { PerspectiveCamera } from '@react-three/drei'
import { Euler, useFrame } from '@react-three/fiber'
import { Group, Vector3 } from 'three'
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three'
import { damp } from 'three/src/math/MathUtils'

import { useReveal } from '../Reveal/RevealProvider'

export const Camera = () => {
  const camera = useRef<ThreePerspectiveCamera>(null!)
  const group = useRef<Group>(null!)
  const { rotation } = useSpring({
    rotation: [0, 0, 0],
    config: config.gentle
  })

  const lookAtRef = useRef({ x: 0, y: -35, z: 0 })
  const targetRef = useRef({
    lookAtX: 0,
    lookAtY: -35,
    lookAtZ: 0,
    positionX: 0,
    positionY: -7,
    positionZ: 80
  })

  useFrame((state, delta) => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const responsive = 768
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    const currentPositionX = camera.current.position.x
    const currentPositionY = camera.current.position.y
    const currentPositionZ = camera.current.position.z
    const currentLookAtX = lookAtRef.current.x
    const currentLookAtY = lookAtRef.current.y
    const currentLookAtZ = lookAtRef.current.z

    const targetPositionX: number = targetRef.current.positionX
    const targetPositionY: number = targetRef.current.positionY
    const targetPositionZ: number = targetRef.current.positionZ
    const targetLookAtX: number = targetRef.current.lookAtX
    const targetLookAtY: number = targetRef.current.lookAtY
    const targetLookAtZ: number = targetRef.current.lookAtZ

    // if (scrollTop < 100) {
    //   targetPositionZ = 10
    //   targetLookAtX = 0
    //   targetLookAtY = -8
    // } else if (screenWidth > 950) {
    //   targetPositionZ = 25
    //   targetLookAtX = -23
    //   targetLookAtY = -3
    // } else if (screenWidth > responsive) {
    //   targetPositionZ = 25
    //   targetLookAtX = -14
    //   targetLookAtY = -3
    // } else {
    //   targetPositionZ = 25
    //   targetLookAtX = -8
    //   targetLookAtY = -3
    // }

    const newPositionX = damp(
      currentPositionX,
      targetPositionX,
      targetLookAtZ > 30 ? 8 : 2,
      delta
    )
    const newPositionY = damp(
      currentPositionY,
      targetPositionY,
      targetLookAtZ > 30 ? 8 : 2,
      delta
    )
    const newPositionZ = damp(
      currentPositionZ,
      targetPositionZ,
      targetLookAtZ > 30 ? 8 : 4,
      delta
    )
    const newLookAtX = damp(currentLookAtX, targetLookAtX, 3, delta)
    const newLookAtY = damp(currentLookAtY, targetLookAtY, 4, delta)
    const newLookAtZ = damp(
      currentLookAtZ,
      targetLookAtZ,
      targetLookAtZ > 30 ? 10 : 4,
      delta
    )
    lookAtRef.current.x = newLookAtX
    lookAtRef.current.y = newLookAtY
    lookAtRef.current.z = newLookAtZ
    camera.current.lookAt(new Vector3(newLookAtX, newLookAtY, newLookAtZ))
    camera.current.position.x = newPositionX
    camera.current.position.y = newPositionY
    camera.current.position.z = newPositionZ
  })

  // useEffect(() => {
  //   // if (!posCenterEvents.current) return
  //   posCenterEvents.current = (x, y) => {
  //     const targetX = ((x / size.width) * Math.PI) / 20

  //     rotation.start([0, targetX, 0])
  //   }
  //   window.addEventListener(
  //     'devicemotion',
  //     function (event) {
  //       const [, currentX] = rotation.get()
  //       const targetX = clamp(
  //         currentX + (event.rotationRate?.beta ?? 0) * 0.0001,
  //         -Math.PI / 8,
  //         Math.PI / 12
  //       )
  //       rotation.set([0, targetX, 0])
  //     },
  //     true
  //   )
  // }, [])

  const { reveal, isLoading } = useReveal()

  useEffect(() => {
    if (isLoading || !reveal) {
      return
    }

    function onSlideChange(event: Event) {
      const indexh = (event as any).indexh as number
      const responsive = 768
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

      if (screenWidth > responsive) {
        if (indexh === 0) {
          targetRef.current.positionX = 0
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 80
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -35
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 1) {
          targetRef.current.positionX = 0
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 10
          targetRef.current.lookAtX = 3
          targetRef.current.lookAtY = -7.5
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 2) {
          targetRef.current.positionX = 15
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 12
          targetRef.current.lookAtX = -40
          targetRef.current.lookAtY = 5
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 3) {
          targetRef.current.positionX = 15
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 12
          targetRef.current.lookAtX = -40
          targetRef.current.lookAtY = -0.5
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 4) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.4
          targetRef.current.positionZ = 0.2
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -9.8
          targetRef.current.lookAtZ = 2 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 5) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.4
          targetRef.current.positionZ = 0.2
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -9.8
          targetRef.current.lookAtZ = 2 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 6) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.4
          targetRef.current.positionZ = 0.2
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -9.8
          targetRef.current.lookAtZ = 2 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 7) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.4
          targetRef.current.positionZ = 0.2
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -9.8
          targetRef.current.lookAtZ = 2 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 8) {
          targetRef.current.positionX = 16
          targetRef.current.positionY = -10
          targetRef.current.positionZ = 9
          targetRef.current.lookAtX = 1
          targetRef.current.lookAtY = -2
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        }
      } else {
        if (indexh === 0) {
          targetRef.current.positionX = 0
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 90
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -30
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 1) {
          targetRef.current.positionX = 0
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 25
          targetRef.current.lookAtX = 4
          targetRef.current.lookAtY = -7.5
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 2) {
          targetRef.current.positionX = 30
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 30
          targetRef.current.lookAtX = -10
          targetRef.current.lookAtY = 8
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 3) {
          targetRef.current.positionX = 30
          targetRef.current.positionY = -7
          targetRef.current.positionZ = 30
          targetRef.current.lookAtX = -10
          targetRef.current.lookAtY = 0
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 4) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.5
          targetRef.current.positionZ = -0.1
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -10.5
          targetRef.current.lookAtZ = 40 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 5) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.5
          targetRef.current.positionZ = -0.1
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -10.5
          targetRef.current.lookAtZ = 40 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 6) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.5
          targetRef.current.positionZ = -0.1
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -10.5
          targetRef.current.lookAtZ = 40 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 7) {
          // Working Experience
          targetRef.current.positionX = 0
          targetRef.current.positionY = -9.5
          targetRef.current.positionZ = -0.1
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -10.5
          targetRef.current.lookAtZ = 40 + 40
          rotation.start([0, 0, 0])
        } else if (indexh === 8) {
          targetRef.current.positionX = 16
          targetRef.current.positionY = -10
          targetRef.current.positionZ = 11
          targetRef.current.lookAtX = 0
          targetRef.current.lookAtY = -2
          targetRef.current.lookAtZ = 0 + 40
          rotation.start([0, 0, 0])
        }
      }
    }
    onSlideChange({ indexh: reveal.getState().indexh } as any)

    reveal?.on('slidechanged', onSlideChange)
  }, [isLoading, reveal])

  return (
    <animated.group
      ref={group}
      position={[0, 0, 0]}
      rotation={rotation as any as Euler}
    >
      <PerspectiveCamera makeDefault position={[0, -7, 80]} ref={camera} />
    </animated.group>
  )
}
