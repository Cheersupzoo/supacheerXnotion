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
          href={`/diary/snowboarding-in-hakuba-2024`}
          passHref
        >
          <div>
            <div className='layout-padding text-xl font-semibold text-[--text-color] group-hover:text-[--blue-color] group-hover:saturate-150'>
              Snowboarding in Hakuba 2024
            </div>

            <div
              className='px-0 sm:px-6 md:px-12 my-5 grid w-full'
              style={{ gridArea: '1/1' }}
            >
              <img
                src='https://cdn.supacheer.com/picture/e04aa30e-2bfe-4853-b512-eed6ffd2070e.webp'
                alt='japan2024'
                className='max-h-80 w-full object-top transition group-hover:brightness-105'
                style={{
                  objectFit: 'cover',
                  gridArea: '1/1',
                  objectPosition: 'bottom'
                }}
              />
              <div
                style={{
                  gridArea: '1/1',
                  alignSelf: 'end'
                }}
                className='text-md mt-4 line-clamp-2 bg-white/40  p-1 text-gray-800 backdrop-blur-sm'
              >
                A snowboarding adventure in Hakuba, 2024, detailing the journey
                from Tokyo, including travel tips and transportation options. It
                covers experiences like renting equipment, exploring the slopes,
                and the convenience of local amenities. The trip wraps up with a
                return to Tokyo, offering a glimpse into the scenic beauty and
                excitement of snowboarding in Hakuba.
              </div>
            </div>
          </div>

          <div className='layout-padding mt-4 flex items-center font-medium text-[--fg-color] group-hover:text-[--sat-pink-color]'>
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
