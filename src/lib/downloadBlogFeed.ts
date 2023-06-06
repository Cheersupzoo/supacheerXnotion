const blogUrl = '/api/blog_feed'
export async function downloadBlogFeed() {
  const response = await fetch(blogUrl)
  const blogs = (await response.json()) as Array<{
    slug: string
    title: string
    titleEN: string
    description: string
    descriptionEN: string
    date: string
    coverImage: string
    type: string
  }>

  return blogs
}
export async function directDownloadBlogFeed() {
  const blogUrl = 'https://blog.supacheer.com/feed_json'
  const response = await fetch(blogUrl)
  const blogs = (await response.json()) as Array<{
    slug: string
    title: string
    titleEN: string
    description: string
    descriptionEN: string
    date: string
    coverImage: string
    type: string
  }>

  return blogs
}
