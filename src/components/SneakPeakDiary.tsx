import Link from 'next/link'
import React from 'react'

import { cs } from 'react-notion-x'

export const SneakPeakDiary = () => {
  return (
    <div className='w-full'>
      <div className='mt-12'>
        <Link
          rel='noopener noreferrer'
          className={cs('group')}
          href={`/diary/what-I-eat-in-my-japan-trip-2023`}
          passHref
        >
          <div>
            <div className='text-xl font-semibold text-[--text-color] group-hover:text-[--blue-color] group-hover:saturate-150'>
              What I eat in my Japan trip 2023
            </div>

            <div className='my-5 grid w-full' style={{ gridArea: '1/1' }}>
              <img
                src='https://cdn.supacheer.com/picture/5be9c69f-fe41-4155-98aa-f1a8d2ffa445.webp'
                alt='japan2023'
                className='object-top max-h-80 w-full transition group-hover:brightness-105'
                style={{
                  objectFit: 'cover',
                  gridArea: '1/1'
                }}
              />
              <div
                style={{ gridArea: '1/1', alignSelf: 'end' }}
                className='text-md mt-4 bg-white/40 p-1  text-gray-800 backdrop-blur-sm'
              >
                🍽️ 🍽️ 🍽️ 😋
              </div>
            </div>
          </div>

          <div className='mt-4 flex items-center font-medium text-[--fg-color] group-hover:text-[--sat-pink-color]'>
            Read more
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
