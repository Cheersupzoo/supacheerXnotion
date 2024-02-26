import Link from 'next/link'
import React from 'react'

import cs from 'classnames'

import { BlogsProp } from './SneakPeakBlogInit'

interface MyProp {
  post: BlogsProp[0]
}

export const blogBaseUrl = '/'

export function BlogCard({ post }: MyProp) {
  return (
    <div className=''>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className={cs('group')}
        href={`${blogBaseUrl}${post.type}/${post.slug}`}
        passHref
      >
        <div>
          {post.title && (
            <div className='text-xl font-semibold text-[--text-color] group-hover:text-[--blue-color] group-hover:saturate-150'>
              {post.titleEN || post.title}
            </div>
          )}

          {post.description && (
            <div className='text-md mt-4 font-light text-[--text-color]'>
              {post.descriptionEN || post.description}
            </div>
          )}
        </div>

        {/* {post.coverImage && (
          <div className=''>
            <img
              src={`${blogBaseUrl}${post.coverImage}`}
              alt={post.title}
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        )} */}
        <div className='mt-4 flex items-center font-medium text-[--fg-color] group-hover:text-[--sat-pink-color]'>
          Read more
          <svg
            fill='var(--green-color)'
            className='ml-2 w-4 opacity-0 group-hover:opacity-100 transition-all delay-75'
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
  )
}
