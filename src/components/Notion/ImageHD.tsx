import { MdOutlineVrpano } from 'react-icons/md'

import { ImageViewer } from './ImageViewer'

export const ImageHD = ({ all }: { all: any }) => {
  const file = all[0].href
  const regexResult = /(.*)\.(jpg|png)/gm.exec(file)
  const fileName = regexResult?.[1]
  const paramRegex = /[(?|&)]([^=]+)=([^&#]+)/
  const paramRegexResult = paramRegex.exec(file)
  const hIndex = paramRegexResult?.findIndex((text) => text === 'h') ?? -1
  const height = hIndex > -1 ? paramRegexResult?.[hIndex + 1] : '500px'

  return (
    <ImageViewer
      style={{ height }}
      className={
        'imageHD relative flex w-[100vw] flex-col justify-center self-center'
      }
      src={`/diary/${fileName}.webp`}
    >
      <img
        className='flex-1'
        style={{
          objectFit: 'cover',
          height: '100%',
          cursor: 'zoom-in'
        }}
        src={`/diary/${file}`}
      />

      <MdOutlineVrpano className='pointer-events-none absolute bottom-0 right-5  text-2xl text-gray-100' />
    </ImageViewer>
  )
}
