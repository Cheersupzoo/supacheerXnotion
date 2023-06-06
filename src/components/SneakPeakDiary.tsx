import Link from 'next/link'
import React from 'react'

import { cs } from 'react-notion-x'

export const SneakPeakDiary = () => {
  return (
    <div>
      <div className='mt-12'>
        <Link
          rel='noopener noreferrer'
          className={cs('group')}
          href={`/diary`}
          passHref
        >
          <div>
            <div className='text-xl font-semibold text-[--text-color] group-hover:text-[--blue-color] group-hover:saturate-150'>
              I traveled to Europe for 19 Days
            </div>

            <div className='my-5 grid' style={{ gridArea: '1/1' }}>
              <img
                src={`/europe2023.jpg`}
                alt={'europe2023'}
                className='max-h-80 w-full group-hover:brightness-105 transition'
                style={{
                  objectFit: 'cover',
                  gridArea: '1/1'
                }}
              />
              <div
                style={{ gridArea: '1/1', alignSelf: 'end' }}
                className='text-md mt-4 bg-white/40 p-1  text-gray-800 backdrop-blur-sm'
              >
                This is my first time travel to the main land europe and also
                self traveling. All planned ahead 😏.
              </div>
            </div>
          </div>

          <div className='mt-4 flex items-center font-medium text-[--fg-color] group-hover:text-[--sat-pink-color]'>
            Sneak peak now
            <svg
              fill='var(--green-color)'
              className='ml-2 w-4 opacity-0 transition-all delay-75 group-hover:opacity-100'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 26 18'
              preserveAspectRatio='none'
            >
              <path d='M 0 7 L 19 7 L 13 0 L 18 0 L 26 9 L 18 18 L 13 18 L 19 11 L 0 11 L 0 7' />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}
