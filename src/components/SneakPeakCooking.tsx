import Link from 'next/link'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { clamp, mapLinear } from 'three/src/math/MathUtils'

import { UnderlineHover } from './Decorator/UnderlineHover'

export const SneakPeakCooking = () => {
  const divRef = useRef<HTMLDivElement>(null!)

  return (
    <div
      ref={divRef}
      className='flex flex-col items-center  
    '
    >
      <div className='-mt-2 flex flex-col items-center space-y-10 overflow-hidden px-6 pb-12 pt-8 md:mb-[300px] md:overflow-visible'>
        {[
          '/cooking/1.jpg',
          '/cooking/2.jpg',
          '/cooking/3.jpg',
          '/cooking/4.jpg',
          '/cooking/5.jpg',
          '/cooking/6.jpg',
          '/cooking/7.jpg',
          '/cooking/8.jpg'
        ].map((src, index) => (
          <Image
            key={`imageCooking` + index}
            src={src}
            index={index}
            parentRef={divRef}
          />
        ))}
      </div>
      <LookForMore />
    </div>
  )
}

function LookForMore() {
  const [isHover, setIsHover] = useState(false)
  const { offset } = useSpring({ offset: isHover ? 370 : 450 })
  const divRef = useRef<HTMLAnchorElement>(null!)

  useEffect(() => {
    const onScroll = () => {
      const screenHeight = document.documentElement.clientHeight

      const { top } = divRef.current.getBoundingClientRect()

      if (top + 100 < screenHeight) {
        setIsHover(true)
      } else {
        setIsHover(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className='relative  '>
      <UnderlineHover offsetBottom={1.2}>
        <Link
          ref={divRef}
          target='_blank'
          rel='noopener noreferrer'
          className={'h-16 text-[--blue-color] hover:text-[--sat-pink-color]'}
          href='/cooking'
        >
          Look for Recipes?
        </Link>
        <div className='absolute -bottom-5 -left-32'>
          <svg
            fill='none'
            className='ml-2 w-32 rotate-12 -scale-100 transition-all delay-150 group-hover:opacity-100'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 15'
            preserveAspectRatio='none'
          >
            <animated.path
              className=''
              strokeLinecap='round'
              strokeWidth={0.7}
              strokeDasharray={450}
              strokeDashoffset={offset}
              stroke='var(--purple-color)'
              d='M 34 12 Q 34 1 22 1 Q 15 1 16 5 C 17 7 20 7 20 4 Q 20 1 9 1 Q 2 2 2 7 Q 1 5 1 3 '
            />
            <animated.path
              className=''
              strokeLinecap='round'
              strokeWidth={0.7}
              strokeDasharray={10}
              strokeDashoffset={offset.to((o) =>
                mapLinear(clamp(o, 370, 380), 370, 380, 1, 10)
              )}
              stroke='var(--purple-color)'
              d='M 2 7 Q 4 6 5 4'
            />
          </svg>
        </div>
        <div className='absolute -right-32 top-3 rotate-[60deg] md:-top-7 md:rotate-0 '>
          <svg
            fill='none'
            className='ml-2 w-32  transition-all delay-75 group-hover:opacity-100'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 15'
            preserveAspectRatio='none'
          >
            <animated.path
              className=''
              strokeLinecap='round'
              strokeWidth={0.7}
              strokeDasharray={450}
              strokeDashoffset={offset}
              stroke='var(--purple-color)'
              d='M 34 12 Q 34 1 22 1 Q 15 1 16 5 C 17 7 20 7 20 4 Q 20 1 9 1 Q 2 2 2 7 Q 1 5 1 3 '
            />
            <animated.path
              className=''
              strokeLinecap='round'
              strokeWidth={0.7}
              strokeDasharray={10}
              strokeDashoffset={offset.to((o) =>
                mapLinear(clamp(o, 370, 380), 370, 380, 1, 10)
              )}
              stroke='var(--purple-color)'
              d='M 2 7 Q 4 6 5 4'
            />
          </svg>
          <div
            className={`mt-1 translate-x-3 translate-y-5 -rotate-[30deg] select-none text-right text-sm font-medium text-[--purple-color] transition-all  md:translate-x-14  md:rotate-0  ${
              isHover
                ? 'translate-y-0 opacity-100 '
                : 'translate-y-5  opacity-0 '
            }`}
          >
            Click to learn more!
          </div>
        </div>
      </UnderlineHover>
    </div>
  )
}

function Image({
  src,
  index,
  parentRef
}: {
  parentRef: MutableRefObject<HTMLDivElement>
  src: string
  index: number
}) {
  const imgRef = useRef<HTMLImageElement>(null!)
  const divRef = useRef<HTMLDivElement>(null!)
  const animatedDivRef = useRef<HTMLDivElement>(null!)
  const animatedDivYRef = useRef<HTMLDivElement>(null!)
  const left = index % 2 === 0

  const show = useRef(false)

  useEffect(() => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    const halfScreenWidth = screenWidth / 2
    const { width: imgWidth } = imgRef.current
    const halfImgWidth = imgWidth / 2
    const offsetY = halfScreenWidth + halfImgWidth + 30
    animatedDivRef.current.style.transform = `translateX(${
      left ? offsetY : -offsetY
    }px) rotate(${left ? '-6' : '6'}deg)`
  }, [imgRef, left])

  useEffect(() => {
    const onscroll = () => {
      const rootTop = parentRef.current?.offsetTop
      const rootHeight = parentRef.current?.clientHeight
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      const halfScreenWidth = screenWidth / 2
      if(!imgRef.current) {
        return
      }
      const { width: imgWidth, clientHeight: imgHeight } = imgRef.current
      const halfImgWidth = imgWidth / 2
      const offsetY = halfScreenWidth + halfImgWidth + 30
      const responsive = 768
      const offsetResponsive = screenWidth > responsive ? halfImgWidth : 0

      const imgOffsetTop = divRef.current.offsetTop

      if (!show?.current && scrollTop > imgOffsetTop - 400) {
        animatedDivRef.current.style.transform = `translateX(${
          left
            ? offsetResponsive - [30, 0, 60][index % 3]
            : -offsetResponsive + [0, 30, 60][index % 3]
        }px) rotate(${left ? '-6' : '6'}deg)`
        show.current = true
      } else if (show?.current && scrollTop < imgOffsetTop - 400) {
        animatedDivRef.current.style.transform = `translateX(${
          left ? offsetY : -offsetY
        }px) rotate(${left ? '-6' : '6'}deg)`
        show.current = false
      }

      const containerOffsetY = imgOffsetTop - rootTop
      const scrollContainerOffsetY = clamp(
        scrollTop - imgOffsetTop + 100,
        0,
        rootHeight - imgHeight - containerOffsetY - 200
      )
      const y = scrollContainerOffsetY * [1.03, 0.9, 1.03][index % 3]
      animatedDivYRef.current.style.transform = `translateY(${y}px)`
      const brightnessPercent = Math.min(
        (scrollContainerOffsetY / rootHeight) * 100 * 1.2,
        70
      )

      animatedDivRef.current.style.filter = `brightness(${
        100 - brightnessPercent
      }%)`
    }

    window.addEventListener('scroll', onscroll)

    return () => {
      window.removeEventListener('scroll', onscroll)
    }
  }, [index, left, parentRef])
  return (
    <div ref={divRef} className=''>
      <div
        ref={animatedDivYRef}
        style={{ transition: '0.3s cubic-bezier(.2,.5,.39,.98)' }}
      >
        <div
          ref={animatedDivRef}
          style={{ transition: '0.45s cubic-bezier(.2,.5,.39,.98)' }}
        >
          <animated.div
            style={{
              boxShadow: 'var(--shadow-elevation-medium)'
            }}
          >
            <picture>
              <source media='(min-width:768px)' srcSet={src} />
              <img
                ref={imgRef}
                className='w-[400px] bg-white p-3'
                src={'/m' + src}
              />
            </picture>
          </animated.div>
        </div>
      </div>
    </div>
  )
}
