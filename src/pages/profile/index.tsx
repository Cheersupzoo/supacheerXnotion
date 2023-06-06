import { useRef } from 'react'

import { PageHeader } from '@/components/Components/PageHeader'
import { RevealComponent } from '@/components/Reveal'
import { RevealProvider } from '@/components/Reveal/RevealProvider'
import { RevealBlackCss } from '@/components/Reveal/black.css'
import { RevealCss } from '@/components/Reveal/reveal.css'
import Three from '@/components/Three'
import { PageHead } from '@/components/helper/PageHead'

export default function Profile() {
  const ThreeContainer = useRef<HTMLDivElement>(null!)
  return (
    <div className='notion-app flex h-full flex-col'>
      <RevealProvider>
        <div className='z-10 h-20 backdrop-blur backdrop-brightness-110 backdrop-hue-rotate-15'>
          <PageHeader />
        </div>
        <PageHead title={'Profile | Supacheer'} description={'Profile of developer name Cheer XD'} url={'/profile'} />
        <RevealCss />
        <RevealBlackCss />
        <div
          ref={ThreeContainer}
          style={{
            overflow: 'hidden',
            //   width: 'auto',
            //   height: '400px',
            //   maxWidth: '800px',
            margin: '0 auto',
            transition: 'all 500ms',
            // borderRadius: '0.75rem',
            position: 'absolute',
            inset: 0,
            zIndex: -1
          }}
        >
          <Three />
        </div>

        <div className='h-[calc(100vh-80px)]'>
          <RevealComponent />
        </div>
      </RevealProvider>
    </div>
  )
}
