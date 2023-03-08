import Link from 'next/link'
import React from 'react'

import cs from 'classnames'

import { BlogsProp } from './SneakPeakBlogInit'

interface MyProp {
  post: BlogsProp[0]
}

const blogBaseUrl = 'https://beta.blog.supacheer.com/'

export function BlogCard({ post }: MyProp) {
  return (
    <div className='notion-row'>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className={cs('notion-bookmark')}
        href={`${blogBaseUrl}${post.type}/${post.slug}`}
        passHref
      >
        <div>
          {post.title && (
            <div className='notion-bookmark-title'>{post.title}</div>
          )}

          {post.description && (
            <div className='notion-bookmark-description'>
              {post.description}
            </div>
          )}
        </div>

        {post.coverImage && (
          <div className='notion-bookmark-image'>
            <img
              src={`${blogBaseUrl}${post.coverImage}`}
              alt={post.title}
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        )}
      </Link>
    </div>
  )
}
