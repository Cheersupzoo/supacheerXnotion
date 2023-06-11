import { CSSProperties, ReactNode, useRef, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

export const ImageViewer = ({
  children,
  src,
  style,
  className,
  isZoomable = true
}: {
  children: ReactNode
  src: string
  style?: CSSProperties
  className?: string
  isZoomable?: boolean
}) => {
  const [isShow, setIsShow] = useState(false)
  const bodyOverflow = useRef('')
  const [isZoom, setIsZoom] = useState(false)

  const escKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      hide()
    }
  }

  const show = () => {
    if (isShow) {
      return
    }
    setIsShow(true)
    bodyOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    addEventListener('keydown', escKey)
  }

  const hide = () => {
    setIsShow(false)
    document.body.style.overflow = bodyOverflow.current
    removeEventListener('keydown', escKey)
  }

  const [divWidth, setDivWidth] = useState('100%')

  const onResize = () => {
    if (isShow && isZoom) {
      const ratio = imgRef.current?.naturalWidth / imgRef.current?.naturalHeight
      const divHeight = divRef.current?.getClientRects()[0].height
      const divWidth = divHeight * ratio
      setDivWidth(`${divWidth}px`)
    }
  }

  const toggleZoom = () => {
    if (!isZoomable) {
      return
    }
    if (!isZoom) {
      const ratio = imgRef.current?.naturalWidth / imgRef.current?.naturalHeight
      const divHeight = divRef.current?.getClientRects()[0].height
      const divWidth = divHeight * ratio
      setDivWidth(`${divWidth}px`)
      setIsZoom(true)
      addEventListener('resize', onResize)
    } else {
      setDivWidth(`100%`)
      removeEventListener('resize', onResize)
      setIsZoom(false)
    }
  }

  const imgRef = useRef<HTMLImageElement>(null!)
  const divRef = useRef<HTMLDivElement>(null!)

  return (
    <div style={style} className={className} onClick={show}>
      {children}
      {isShow && (
        <div
          className='fixed  left-0 right-0 top-0 z-[299]  h-[100vh] transform overflow-scroll   bg-[var(--bg-color)] bg-opacity-90 opacity-100 shadow-lg backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-90'
          onClick={hide}
        >
          <div
            ref={divRef}
            className='flex h-full items-center justify-center'
            style={{ width: divWidth }}
          >
            <img
              ref={imgRef}
              style={{
                margin: 'auto',
                width: '100%',
                objectFit: 'contain',
                cursor: !isZoomable? 'default' : !isZoom ? 'zoom-in' : 'zoom-out'
              }}
              onClick={(e) => {
                e.stopPropagation()
                toggleZoom()
              }}
              src={src}
            />
          </div>
          <div className='absolute right-4 top-4 text-xl text-[var(--text-color)]'>
            <AiOutlineClose />
          </div>
        </div>
      )}
    </div>
  )
}
