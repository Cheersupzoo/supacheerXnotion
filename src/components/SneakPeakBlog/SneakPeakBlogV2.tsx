import Link from 'next/link'

import { downloadBlogFeed } from '@/lib/downloadBlogFeed'

import { UnderlineHover } from '../Decorator/UnderlineHover'
import { BlogCard, blogBaseUrl } from './BlogCardV2'

export type BlogsProp = Awaited<ReturnType<typeof downloadBlogFeed>>

export default function SneakPeakBlogV2({ blogs }: { blogs: BlogsProp }) {
  return (
    <div className='mt-12' style={{ minHeight: 0 }}>
      <div className='flex flex-col space-y-12'>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} post={blog} />
        ))}
      </div>

      <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
        <span className=''>
          <UnderlineHover>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className={'text-[--blue-color] hover:text-[--sat-pink-color]'}
              href={blogBaseUrl}
            >
              More Blog
            </Link>
          </UnderlineHover>
        </span>
      </div>
    </div>
  )
}
