import { ReactNode, useState } from 'react'

import { animated, useSpring } from '@react-spring/web'

export function UnderlineHover({
  children,
  offsetBottom = 0.75
}: {
  children: ReactNode
  offsetBottom?: number
}) {
  const [isHover, setIsHover] = useState(false)
  const { offset } = useSpring({
    offset: isHover ? 1 : 100,
    config: { tension: 500, friction: 50 }
  })
  return (
    <div
      className='relative'
      onPointerEnter={() => {
        setIsHover(true)
      }}
      onPointerLeave={() => {
        setIsHover(false)
      }}
    >
      {children}
      <div
        className='absolute left-0 right-0'
        style={{ bottom: `${-offsetBottom}rem` }}
      >
        <svg
          fill='none'
          className=''
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 21 4'
          preserveAspectRatio='none'
        >
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={0.6}
            strokeDasharray={100}
            strokeDashoffset={offset}
            stroke='var(--sat-pink-color)'
            d='M 1 2 C 5 1 8 0 11 1 C 16 3 19 2 20 2'
          />
        </svg>
      </div>
    </div>
  )
}
