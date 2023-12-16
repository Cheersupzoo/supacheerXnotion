import React from 'react'

import { MdOutlineVrpano } from 'react-icons/md'

import { ImageViewer } from './ImageViewer'

export const NextNotionImage = (...all: any) => {
  const { width, height, src, objectfit, layout, blurDataURL } = all[0]
  if (width / height > 1.6) {
    return (
      <ImageViewer src={src} className='relative h-full flex-1'>
        <img
          {...{ src, objectfit, layout, width, height }}
          style={{
            ...all[0].style,
            objectFit: 'cover',
            height: '100%',
            cursor: 'zoom-in',
            ...(blurDataURL && {
              backgroundImage: `url(${blurDataURL})`,
              backgroundSize: 'cover'
            })
          }}
        />

        <MdOutlineVrpano className='pointer-events-none absolute bottom-0 right-5  text-2xl text-gray-100' />
      </ImageViewer>
    )
  }
  return (
    <ImageViewer
      src={src}
      className='relative h-full flex-1'
      isZoomable={false}
    >
      <img
        {...{ src, objectfit, layout, width, height }}
        style={{
          ...all[0].style,
          objectFit: 'cover',
          cursor: 'zoom-in',
          ...(blurDataURL && {
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover'
          })
        }}
      />
    </ImageViewer>
  )
}
