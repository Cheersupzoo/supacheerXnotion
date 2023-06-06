import { useEffect, useState } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { clamp, mapLinear } from 'three/src/math/MathUtils'

import { KeyboardLayout } from '.'

export function KeyboardContainer() {
  const [isHover, setIsHover] = useState(false)
  const { offset } = useSpring({ offset: isHover ? 370 : 450 })
  useEffect(() => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    const responsive = 768
    if (screenWidth < responsive) {
      setTimeout(() => setIsHover(true), 1000)
    }

    return
  }, [setIsHover])

  return (
    <div
      className='group relative'
      onPointerEnter={() => {
        const screenWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        const responsive = 768
        if (screenWidth < responsive) {
          return
        }
        setIsHover(true)
      }}
      onPointerLeave={() => {
        const screenWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        const responsive = 768
        if (screenWidth < responsive) {
          return
        }
        setIsHover(false)
      }}
    >
      <KeyboardLayout className=' h-[282px] w-[300px] select-none' />
      <div className='absolute -right-16 top-16 select-none '>
        <svg
          fill='none'
          className='ml-2 w-32 rotate-12 transition-all delay-75 group-hover:opacity-100'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 40 15'
          preserveAspectRatio='none'
        >
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={1}
            strokeDasharray={450}
            strokeDashoffset={offset}
            stroke='var(--blue-color)'
            d='M 34 12 Q 34 1 22 1 Q 15 2 16 10 C 17 17 23 11 21 6 Q 19 0 9 1 Q 2 2 2 7 Q 1 5 1 3'
          />
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={1}
            strokeDasharray={10}
            strokeDashoffset={offset.to((o) =>
              mapLinear(clamp(o, 370, 380), 370, 380, 1, 10)
            )}
            stroke='var(--blue-color)'
            d='M 2 7 Q 4 6 5 4'
          />
        </svg>
        <div className='mt-1 select-none text-right text-sm font-bold text-[--blue-color] transition-all group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-5 md:opacity-0'>
          Click Me!
        </div>
      </div>
    </div>
  )
}
