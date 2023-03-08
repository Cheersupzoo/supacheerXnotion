import { useEffect, useState } from 'react'

import { downloadBlogFeed } from '@/lib/downloadBlogFeed'

import { BlogCard } from './BlogCard'

export type BlogsProp = Awaited<ReturnType<typeof downloadBlogFeed>>

export default function SneakPeakBlogInit() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState<BlogsProp>([])

  useEffect(() => {
    const init = async () => {
      const blogs = await downloadBlogFeed()
      setBlogs(blogs)
      setLoading(false)
    }
    init()
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <div className='notion' style={{ minHeight: 0, marginTop: '-3rem' }}>
      <div className='notion-page'>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} post={blog} />
        ))}
      </div>
    </div>
  )
}
