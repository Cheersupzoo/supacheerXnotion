import Link from 'next/link'
import { useEffect, useState } from 'react'

import { InfinitySpin } from 'react-loader-spinner'

import { downloadBlogFeed } from '@/lib/downloadBlogFeed'

import { BlogCard, blogBaseUrl } from './BlogCard'

export type BlogsProp = Awaited<ReturnType<typeof downloadBlogFeed>>

export default function SneakPeakBlogInit() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState<BlogsProp>([])

  useEffect(() => {
    const init = async () => {
      const start = Date.now()
      const blogs = await downloadBlogFeed()
      const end = Date.now()
      // Want to show my Loader
      setTimeout(
        async () => {
          setBlogs(blogs)
          setLoading(false)
        },
        end - start > 1000 ? 0 : 2000
      )
    }
    init()
  }, [])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin color='var(--fg-color)' />
      </div>
    )
  }

  return (
    <div className='notion' style={{ minHeight: 0 }}>
      <div className='notion-page'>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} post={blog} />
        ))}
      </div>

      <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
        <span className='notion-orange_background'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className={'notion-link'}
            href={blogBaseUrl}
          >
            More
          </Link>
        </span>
      </div>
    </div>
  )
}
