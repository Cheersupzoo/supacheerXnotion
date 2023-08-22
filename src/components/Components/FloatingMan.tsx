import Image from 'next/image'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import Man from '@/assets/1_zpng.png'
import { SpringRef, animated, easings, useSpring } from '@react-spring/web'
import { clamp, mapLinear } from 'three/src/math/MathUtils'

export function FloatingMan({ className }: { className?: string }) {
  const [isHover, setIsHover] = useState(false)
  const imageRef = useRef<{
    addOnLoad: (fun: () => void) => void
    removeOnload: (fun: () => void) => void
  }>(null!)

  const hiRef = SpringRef()

  useEffect(() => {
    const loaded = () => {
      setTimeout(() => {
        setIsHover(true)
        hiRef.current.forEach((controller) => controller.start())
      }, 1400)
      // setIsHover(true)
    }

    const currentImageRef = imageRef.current

    currentImageRef.addOnLoad(loaded)

    return () => {
      currentImageRef.removeOnload(loaded)
    }
  }, [])

  const { offset, hiX, opacity } = useSpring({
    from: { offset: -4, hiX: -20, opacity: 0 },
    to: { offset: 0, hiX: -36, opacity: 100 },
    delay: 2000,
    config: {
      easing: easings.easeOutCirc,
      duration: 300
    },
    ref: hiRef
  })

  const { scale, translateX } = useSpring({
    from: { scale: '100%', translateX: '0px' },
    to: [
      { scale: '100%', translateX: '0px' },
      { scale: '100%', translateX: '0px' },
      { scale: '110%', translateX: '-1px' },
      { scale: '100%', translateX: '0px' },
      { scale: '110%', translateX: '-1px' },
      { scale: '100%', translateX: '0px' },
      { scale: '100%', translateX: '0px' }
    ],
    delay: 3000,
    config: {
      easing: easings.easeInOutCirc,
      duration: 300
    },
    reset: true,
    loop: { reverse: true }
  })

  return (
    <div
      className={'group relative z-0 ' + className}
      // onPointerEnter={() => {
      //   setIsHover(true)
      // }}
      // onPointerLeave={() => {
      //   setIsHover(false)
      // }}
    >
      <FloatingManImage ref={imageRef} />
      <div className='absolute -left-4 top-12 flex rotate-6 flex-col items-end'>
        <animated.svg
          fill='none'
          className='w-12 '
          style={{
            scale,
            rotate: '12deg',
            translateY: '0.5rem',
            translateX
          }}
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 6 3'
          preserveAspectRatio='none'
        >
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={0.4}
            strokeDasharray={10}
            strokeDashoffset={offset}
            stroke='var(--blue-color)'
            d='M 1 1 L 5 1'
          />
        </animated.svg>
        <animated.div
          className='font-medium text-[--blue-color]  '
          style={{
            transform: hiX.to((x) => `translateX(${x}px)`),
            opacity: opacity.to((o) => `${o}%`)
          }}
        >
          Hi
        </animated.div>
        <animated.svg
          fill='none'
          className='w-12'
          style={{
            scale,
            rotate: '-12deg',
            translateY: '-0.25rem',
            translateX
          }}
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 6 3'
          preserveAspectRatio='none'
        >
          <animated.path
            className=''
            strokeLinecap='round'
            strokeWidth={0.4}
            strokeDasharray={10}
            strokeDashoffset={offset}
            stroke='var(--blue-color)'
            d='M 1 1 L 5 1'
          />
        </animated.svg>
      </div>
      <ClickMe isHover={isHover} />
      <ScrollDown isHover={isHover} />
    </div>
  )
}

export const FloatingManImage = forwardRef(function FloatingManImageRef(
  prop,
  ref: ForwardedRef<{
    addOnLoad: (fun: () => void) => void
    removeOnload: (fun: () => void) => void
  }>
) {
  const onLoadRef = useRef({ callbacks: new Set<() => void>() })

  useImperativeHandle(
    ref,
    () => ({
      addOnLoad: (fun: () => void) => {
        onLoadRef.current.callbacks.add(fun)
      },
      removeOnload: (fun: () => void) => {
        onLoadRef.current.callbacks.delete(fun)
      }
    }),
    []
  )
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
    <div className='relative'>
      <a href='/profile'>
        <Image
          className='select-none transition-all group-hover:rotate-3 group-hover:scale-105 dark:brightness-90'
          src={Man}
          alt='Floating Man'
          style={{
            scale: '0',
            transition: '1s cubic-bezier(.33,.02,.17,1.24)'
          }}
          onLoadingComplete={(img) => {
            img.style.transform = ''
            img.style.scale = '1'
            onLoadRef.current.callbacks.forEach((e) => e())
          }}
        />
      </a>
      <svg
        fill='var(--orange-color)'
        className='absolute bottom-0 top-0 -z-10 rotate-45 p-4'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 160 190'
        preserveAspectRatio='none'
      >
        <animated.path d={x} />
      </svg>
    </div>
  )
})

function ClickMe({ isHover }: { isHover: boolean }) {
  const { offset } = useSpring({ offset: isHover ? 420 : 450 })
  return (
    <div className='absolute -bottom-[100px] right-0 flex flex-col items-center'>
      <svg
        fill='none'
        className='ml-2 w-24  rotate-[60deg]'
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
          stroke='var(--blue-color)'
          d='M 15 4 C 13 4 11 6 9 4 C 6 2 8 0 10 1 C 13 3 8 5 6 5 C 4 5 4 3 1 3 L 3 2'
        />
        <animated.path
          className=''
          strokeLinecap='round'
          strokeWidth={0.5}
          strokeDasharray={10}
          strokeDashoffset={offset.to((o) =>
            mapLinear(clamp(o, 420, 425), 420, 425, 1, 10)
          )}
          stroke='var(--blue-color)'
          d='M 1 3 L 2 5'
        />
      </svg>
      <div
        className={`translate-y-6 select-none font-medium text-[--blue-color] transition-all delay-75 duration-700 ${
          isHover ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Click to learn more about me!
      </div>
    </div>
  )
}

function ScrollDown({ isHover }: { isHover: boolean }) {
  const { offset } = useSpring({ offset: isHover ? 420 : 450, delay: 200 })
  return (
    <div className='absolute -left-0 bottom-[-10px] flex -translate-x-[calc(100%)] flex-row items-center'>
      <div
        className={`-translate-y-8 translate-x-10 select-none text-right text-sm font-medium text-[--blue-color] transition-all delay-500 duration-700 ${
          isHover ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Or scroll down to look at my blog and more!
      </div>
      <svg
        fill='none'
        className='ml-2 w-48  rotate-[-30deg]'
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
          stroke='var(--blue-color)'
          d='M 15 4 C 13 4 11 6 9 4 C 6 2 8 0 10 1 C 13 3 8 5 6 5 C 4 5 4 3 1 3 L 3 2'
        />
        <animated.path
          className=''
          strokeLinecap='round'
          strokeWidth={0.5}
          strokeDasharray={10}
          strokeDashoffset={offset.to((o) =>
            mapLinear(clamp(o, 420, 425), 420, 425, 1, 10)
          )}
          stroke='var(--blue-color)'
          d='M 1 3 L 2 5'
        />
      </svg>
    </div>
  )
}
