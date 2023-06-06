import React, { useEffect } from 'react'

import { useReveal } from './RevealProvider'

export const RevealRenderer = ({ children }: any) => {
  const { reveal, setReveal, isLoading } = useReveal()
  useEffect(() => {
    if (isLoading || reveal) {
      return
    }

    import('reveal.js').then(async (Reveal) => {
      const deck = new Reveal.default()
      setReveal(deck)
      await deck.initialize({
        controls: false,
        mouseWheel: true,
        touch: true,
        transition: 'fade',
        //@ts-ignore
        keyboard: {
          27: null,
          32: null,
          66: null,
          70: null,
          71: null,
          73: null,
          74: null,
          75: null,
          76: null,
          78: null,
          79: null,
          80: null,
          83: null,
          86: null,
          190: null,
          191: null
        }
      })
      // deck.slide(7)
    })
  }, [isLoading, reveal, setReveal])

  return (
    <div className='reveal'>
      <div hidden={isLoading} className='slides'>
        {children}
      </div>
    </div>
  )
}
