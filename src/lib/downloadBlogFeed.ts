import { getAllPosts } from './Mdx/api'

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
  const blogs = getAllPosts([
    'slug',
    'date',
    'title',
    'titleEN',
    'description',
    'descriptionEN',
    'coverImage',
    'type',
    'draft'
  ])

  return blogs
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
}
