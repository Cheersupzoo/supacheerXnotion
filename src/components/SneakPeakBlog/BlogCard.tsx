import Link from 'next/link'
import React from 'react'

import { format } from 'date-fns'
import { BlogsProp } from './SneakPeakBlogInit'

interface MyProp {
  post: BlogsProp[0]
}

const blogBaseUrl = "https://beta.blog.supacheer.com/"

export default function BlogCard({ post }: MyProp) {
  return (
    <div className='  bg-white rounded-xl shadow-md overflow-hidden mb-8 cursor-pointer'>
      <Link href={`${blogBaseUrl}${post.type}/${post.slug}`} passHref>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-52 w-full object-cover md:w-52'
              src={`${blogBaseUrl}${post.coverImage}`}
              alt='Man looking at item at a store'
            />
          </div>
          <div className='px-8 py-6'>
            <a
              href={`${blogBaseUrl}${post.type}/${post.slug}`}
              className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              {post.title}
            </a>
            <div className='text-sm text-gray-600'>
              {format(Date.parse(post.date ?? 0), 'MMM dd, yyyy')}
            </div>
            <p className='mt-2 text-gray-500 line-clamp-2 overflow-ellipsis'>
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}


export function BlogCard2() {
  return <div className='notion-row'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className={cs(
              'notion-bookmark',
              block.format?.block_color && `notion-${block.format.block_color}`,
              blockId
            )}
            href={link[0][0]}
          >
            <div>
              {title && (
                <div className='notion-bookmark-title'>
                  <Text value={[[title]]} block={block} />
                </div>
              )}

              {block.properties?.description && (
                <div className='notion-bookmark-description'>
                  <Text value={block.properties?.description} block={block} />
                </div>
              )}

              <div className='notion-bookmark-link'>
                {block.format?.bookmark_icon && (
                  <div className='notion-bookmark-link-icon'>
                    <LazyImage
                      src={mapImageUrl(block.format?.bookmark_icon, block)}
                      alt={title}
                    />
                  </div>
                )}

                <div className='notion-bookmark-link-text'>
                  <Text value={link} block={block} />
                </div>
              </div>
            </div>

            {block.format?.bookmark_cover && (
              <div className='notion-bookmark-image'>
                <LazyImage
                  src={mapImageUrl(block.format?.bookmark_cover, block)}
                  alt={getTextContent(block.properties?.title)}
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
          </Link>
        </div>
}