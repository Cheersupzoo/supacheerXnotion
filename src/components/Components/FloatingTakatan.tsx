import Image from 'next/image'

import Takatan from '@/assets/3_zpng.png'
import { animated, easings, useSpring } from '@react-spring/web'

export function FloatingTakatan({ className }: { className?: string }) {
  const { x } = useSpring({
    from: {
      x: 'M 106.102 3.4202 C 76.6289 -0.2932 7.2936 -5.9885 1.5766 40.3115 C -4.1404 86.6116 34.7439 85.3943 26.1708 106.9209 C 17.5977 128.4475 7.3316 140.3894 15.9232 161.2331 C 24.5148 182.0768 51.5677 192.3043 86.6316 184.8026 C 121.6955 177.3008 153.2202 171.121 156.3152 152.0103 C 159.4102 132.8995 137.7763 130.1391 136.8448 101.7971 C 135.9133 73.455 160.3037 46.7019 149.1419 28.0144 C 137.9801 9.3269 135.5751 7.1335 106.102 3.4202 Z'
    },
    to: [
      {
        x: 'M 106.102 3.4202 C 76.6289 -0.2932 27 -3 11 42 C 5 88 22 87 21 107 C 24 129 11 141 21 159 C 31 180 51.5677 192.3043 86.6316 184.8026 C 121.6955 177.3008 140 171 149 152 C 153 126 151 124 147 102 C 144 72 153 53 142 33 C 129 16 130 15 106.102 3.4202 Z'
      },
      {
        x: 'M 77 18 C 48 -5 18 -2 11 42 C 5 88 22 87 21 107 C 24 129 11 141 21 159 C 31 180 51.5677 192.3043 86 171 C 106 154 140 171 149 152 C 153 126 151 124 147 102 C 144 72 169 37 145 27 C 129 16 89 35 77 18 Z'
      },
      {
        x: 'M 106.102 3.4202 C 76.6289 -0.2932 27 -3 11 42 C 5 88 6 89 11 108 C 24 129 11 141 21 159 C 31 180 51.5677 192.3043 86.6316 184.8026 C 121.6955 177.3008 140 171 149 152 C 153 126 151 124 154 101 C 155 71 153 53 142 33 C 129 16 130 15 106.102 3.4202 Z'
      },
      {
        x: 'M 106.102 3.4202 C 76.6289 -0.2932 7.2936 -5.9885 1.5766 40.3115 C -4.1404 86.6116 34.7439 85.3943 26.1708 106.9209 C 17.5977 128.4475 7.3316 140.3894 15.9232 161.2331 C 24.5148 182.0768 51.5677 192.3043 86.6316 184.8026 C 121.6955 177.3008 153.2202 171.121 156.3152 152.0103 C 159.4102 132.8995 137.7763 130.1391 136.8448 101.7971 C 135.9133 73.455 160.3037 46.7019 149.1419 28.0144 C 137.9801 9.3269 135.5751 7.1335 106.102 3.4202 Z'
      }
    ],
    config: { easing: easings.easeOutSine, duration: 3000 },
    reset: true,
    loop: { reverse: true }
  })

  return (
    <div className={'relative z-0 ' + className}>
      <Image
        className='select-none transition-all dark:brightness-90'
        src={Takatan}
        alt='Floating Man'
      />
      <svg
        fill='var(--orange-color)'
        className='absolute -top-4 left-20 right-0 -z-10 w-28 h-80 rotate-[85deg]'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 160 190'
        preserveAspectRatio='none'
      >
        <animated.path d={x} />
      </svg>
    </div>
  )
}