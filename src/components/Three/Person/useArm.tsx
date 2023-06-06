import { useEffect, useState } from 'react'

import { config } from '@react-spring/three'
import { useSpring } from '@react-spring/web'

import { useReveal } from '@/components/Reveal/RevealProvider'

export const useArm = (right: boolean) => {
  const defaultArmMove = [
    { rotationLowerArm: [-1.18, 0, 0] },
    { rotationLowerArm: [-1.3, 0, 0] },
    { rotationLowerArm: [-1.18, 0, right ? -0.3 : 0] },
    { rotationLowerArm: [-1.3, 0, 0] },
    { rotationLowerArm: [-1.18, 0, 0] },
    { rotationLowerArm: [-1.3, 0, 0] },
    { rotationLowerArm: [-1.18, 0, right ? 0 : 0.3] },
    { rotationLowerArm: [-1.18, 0, 0] },
    { rotationLowerArm: [-1.3, 0, 0] },
    { rotationLowerArm: [-1.18, 0, 0] },
    { rotationLowerArm: [-1.3, 0, 0] },
    { rotationLowerArm: [-1.18, 0, 0] },
    { rotationLowerArm: [-1.3, 0, 0] }
  ]

  const raisedArmMove = [
    { rotationLowerArm: [right ? -2.8 : -1.3, 0, right ? 0.3 : 0] },
    { rotationLowerArm: [right ? -2.8 : -1.3, 0, right ? 0.0 : 0] },
    { rotationLowerArm: [right ? -2.8 : -1.3, 0, right ? 0.3 : 0] },
    { rotationLowerArm: [right ? -2.8 : -1.3, 0, right ? 0.0 : 0] },
    { rotationLowerArm: [right ? -2.8 : -1.3, 0, right ? 0.3 : 0] }
  ]
  let nextArmMove: {
    rotationLowerArm: number[]
  }[]

  const [slide, setSlide] = useState(0)

  if (slide !== 1) {
    nextArmMove = defaultArmMove
  } else {
    nextArmMove = raisedArmMove
  }

  const { rotationLowerArm } = useSpring({
    from: { rotationLowerArm: [-1.3, 0, 0] },
    to: nextArmMove,
    config: { ...config.stiff },
    reset: true,
    loop: { reverse: true, immediate: true },
    delay: right ? 0 : 110
  })

  const { reveal } = useReveal()

  useEffect(() => {
    const onSlideChange = (event: any) => {
      const { indexh } = event
      setSlide(indexh)
    }
    reveal?.on('slidechanged', onSlideChange)
  }, [reveal])
  return { rotationLowerArm }
}
