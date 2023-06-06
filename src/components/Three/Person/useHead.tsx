import { MutableRefObject, useEffect } from 'react'

import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { damp } from 'three/src/math/MathUtils'

import { useReveal } from '@/components/Reveal/RevealProvider'

import { useThreeContext } from '../context'

export const useHead = ({ headRef }: { headRef: MutableRefObject<Group> }) => {
  const { lookForward, posCenterX } = useThreeContext()
  const { reveal } = useReveal()

  useEffect(() => {
    const onSlideChange = (event: any) => {
      const { indexh } = event
      if (indexh === 1) {
        setTimeout(() => {
          lookForward.current = true
        }, 1000)
      } else {
        lookForward.current = false
      }
    }
    reveal?.on('slidechanged', onSlideChange)
  }, [reveal, lookForward])

  useFrame((_state, delta) => {
    if (!headRef?.current) return

    const currentAngleX = headRef.current.rotation.x
    const targetAngleX = lookForward.current ? 0.1 : 0.4
    const finalAngleX = damp(currentAngleX, targetAngleX, 3, delta)
    headRef.current.rotation.x = finalAngleX

    const currentAngleY = headRef.current.rotation.y
    const targetAngleY = lookForward.current
      ? Math.PI + (posCenterX.current * Math.PI) / 8
      : Math.PI
    const finalAngleY = damp(currentAngleY, targetAngleY, 4, delta)
    headRef.current.rotation.y = finalAngleY
  })
  return {}
}
