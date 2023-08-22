import React, { MutableRefObject, useEffect, useRef } from 'react'

import {
  PiBowlFood,
  PiBrandyBold,
  PiCarrot,
  PiCoffee,
  PiCookie,
  PiCookingPot,
  PiEgg,
  PiFishSimple,
  PiForkKnife,
  PiHamburger,
  PiIceCream,
  PiOrangeSlice,
  PiPizza,
  PiPopcorn,
  PiShrimp
} from 'react-icons/pi'

const icons = [
  PiBrandyBold,
  PiBowlFood,
  PiCarrot,
  PiCoffee,
  PiCookie,
  PiCookingPot,
  PiEgg,
  PiFishSimple,
  PiForkKnife,
  PiHamburger,
  PiIceCream,
  PiOrangeSlice,
  PiPizza,
  PiPopcorn,
  PiShrimp
]

export const CookingBg = ({
  parentRef
}: {
  parentRef: MutableRefObject<HTMLDivElement>
}) => {
  const divRef = useRef<HTMLDivElement>(null!)

  const divHeightRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    divHeightRef.current.style.height = `${
      parentRef.current.offsetHeight - screenHeight
    }px`
    // divRef.current.style.width = `${parentRef.current.offsetWidth}px`
  }, [parentRef])

  useEffect(() => {
    const onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      const scrollOffset = scrollTop - parentRef.current.offsetTop

      divRef.current.style.position = scrollOffset > 0 ? 'sticky' : 'relative'
    }

    window.addEventListener('scroll', onscroll)

    return () => {
      window.removeEventListener('scroll', onscroll)
    }
  }, [parentRef])

  return (
    <div className='relative h-0 w-full'>
      <div ref={divHeightRef} className='flex justify-center'>
        <div
          ref={divRef}
          className='relative top-0 mx-auto grid h-0 grid-cols-2 text-[2.5rem] text-gray-300 dark:text-gray-700 md:text-[3rem] lg:grid-cols-3 '
        >
          {icons.map((Icon, index) => {
            const xs = ['-35vw', '10vw', '-20vw', '40vw', '-5vw']
            const ys = ['5vh', '55vh', '10vh', '20vh', '1vh', '40vh']
            return (
              <Icon
                style={{
                  transform: `translate(${xs[index % xs.length]},${
                    ys[index % ys.length]
                  })`
                }}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
