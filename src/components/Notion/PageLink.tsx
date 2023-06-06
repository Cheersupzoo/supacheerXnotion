import { useState } from 'react'

import { animated, config, useSpring } from '@react-spring/web'
import { clamp, mapLinear } from 'three/src/math/MathUtils'

export function PageLink({ all }: any) {
  const [isHover, setIsHover] = useState(false)
  const { offset } = useSpring({
    offset: isHover ? 420 : 450,
    config: config.stiff
  })
  const content = all[0]?.children.props.block.properties.title?.[0]?.[0]
  return (
    <a
      href={all[0]?.href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className='my-8 flex w-full items-center justify-end  rounded-sm border border-[var(--fg-color)] px-8 py-2 text-[var(--fg-color)] transition-colors hover:bg-[var(--fg-color)] hover:text-[var(--bg-color)]'
    >
      <div className='mt-1 text-sm mr-2 font-medium text-[var(--bg-color)]'>Continue</div>
      <div className='mr-2 text-xl font-semibold'>
        {content}
      </div>
      <div className='relative'>
        <svg
          fill='none'
          className='w-28 rotate-180'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 6'
          preserveAspectRatio='none'
        >
          <path
            className=''
            strokeLinecap='round'
            strokeWidth={0.5}
            strokeDasharray={450}
            strokeDashoffset={420}
            stroke='var(--fg-color)'
            d='M 15 3 C 13 3 11 6 9 4 C 6 2 8 0 10 1 C 13 3 8 5 6 5 C 4 5 4 3 1 3 L 3 2'
          />
          <path
            className=''
            strokeLinecap='round'
            strokeWidth={0.5}
            strokeDasharray={10}
            strokeDashoffset={1}
            stroke='var(--fg-color)'
            d='M 1 3 L 2 5'
          />
        </svg>
        <svg
          fill='none'
          className='absolute inset-0 rotate-180'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 6'
          preserveAspectRatio='none'
        >
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={0.5}
            strokeDasharray={450}
            strokeDashoffset={offset}
            stroke='var(--bg-color)'
            d='M 15 3 C 13 3 11 6 9 4 C 6 2 8 0 10 1 C 13 3 8 5 6 5 C 4 5 4 3 1 3 L 3 2'
          />
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={0.5}
            strokeDasharray={10}
            strokeDashoffset={offset.to((o) =>
              mapLinear(clamp(o, 420, 425), 420, 425, 1, 10)
            )}
            stroke='var(--bg-color)'
            d='M 1 3 L 2 5'
          />
        </svg>
      </div>
    </a>
  )
}
