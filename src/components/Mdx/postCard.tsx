import Link from 'next/link'
import React from 'react'

import { format } from 'date-fns'

import DraftBadge from './draftBadge'

interface MyProp {
  post: any
}

export default function PostCard({ post }: MyProp) {
  return (
    <div className='  mb-8 cursor-pointer overflow-hidden rounded-xl bg-gray-50 dark:bg-slate-700 shadow-md'>
      <Link legacyBehavior href={`/${post.type}/${post.slug}`} passHref>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-52 w-full object-cover md:w-52'
              src={post.coverImage?.replace(/^\/img/, 'https://cdn.supacheer.com/blog')}
              alt='Man looking at item at a store'
            />
          </div>
          <div className='px-8 py-6'>
            {post.draft && (
              <div style={{ top: '10px', right: 1, position: 'relative' }}>
                <DraftBadge />
              </div>
            )}
            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div> */}
            <a
              href={`/${post.type}/${post.slug}`}
              className='mt-1 block text-lg font-medium leading-tight text-[var(--text-color)] hover:underline'
            >
              {post.title}
            </a>
            <div className='text-sm text-[var(--grey-color)]'>
              {format(Date.parse(post.date ?? 0), 'MMM dd, yyyy')}
            </div>
            <p className='mt-2 line-clamp-2 overflow-ellipsis text-[var(--fg-color)]'>
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
