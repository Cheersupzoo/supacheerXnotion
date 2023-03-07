const blogUrl = '/api/blog_feed'
export async function downloadBlogFeed() {
  const response = await fetch(blogUrl)
  const blogs = (await response.json()) as Array<{
    slug: string
    title: string
    description: string
    date: string
    coverImage: string
    type: string
  }>

  console.log('🚀 ~ file: downloadBlogFeed.ts:6 ~ blogs ~ blogs:', blogs)

  return blogs
}
