import React from 'react'

export const VideoPlayer = ({ all }: { all: any }) => {
  const { href } = all[0]
  const src = (href as string).replace(/^\/video/, 'https://cdn.supacheer.com/video')
  
  return (
    <figure className='notion-asset-wrapper notion-asset-wrapper-video'>
      <div className='position: relative; display: flex; justify-content: center; align-self: center; width: 527px; max-width: 100%; flex-direction: column; height: 320px;'>
        <video playsInline controls preload='metadata' title='video'>
          <source src={`${src}.webm`} type='video/webm' />
          <source src={`${src}.mp4#t=1`} type='video/mp4' />
        </video>
      </div>
    </figure>
  )
}
