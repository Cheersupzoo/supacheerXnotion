import { GetStaticProps } from 'next'

import { Layout } from '@/components/Layout'
import PageSelector from '@/components/Mdx/pageSelector'
import PostCard from '@/components/Mdx/postCard'
import { getAllPosts } from '@/lib/Mdx/api'

import config from '../../../blog.config'

interface MyProp {
  posts: {
    [key: string]: any
  }
  prevPosts: any
  nextPosts: any
  numOfPage: number
}
export default function Home({
  posts,
  prevPosts,
  nextPosts,
  numOfPage
}: MyProp) {
  const isLocal = process.env.NODE_ENV === 'development'

  return (
    <Layout>
      <div className='h-8' />
      <div className='mt-16 text-center text-3xl font-semibold text-[var(--fg-color)]'>Blog</div>
      <div className='mx-auto mb-4 mt-12 w-5/6  sm:w-2/3 sm:px-4 md:max-w-xl'>
        {posts
          .filter((post: any) => {
            return isLocal || !post.draft
          })
          .map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </div>

      <PageSelector numOfPage={numOfPage} curPage={1} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'description',
    'author',
    'coverImage',
    'coverImageAlt',
    'coverImageHeight',
    'coverImageWidth',
    'excerpt',
    'type',
    'draft'
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2
  const numOfPage = Math.ceil(posts.length / config.postsPerPage)

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts,
      numOfPage
    }
  }
}
