import Head from 'next/head'
import React, { useEffect } from 'react'

import { format } from 'date-fns'
import { YouTube } from 'mdx-embed'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { Layout } from '@/components/Layout'
import { SyntaxHighlighterRender } from '@/components/Mdx/SyntaxHylighterRender'
import BigLetter from '@/components/Mdx/bigLetter'
import MyBlockquote from '@/components/Mdx/blockquote'
import BlogHeader from '@/components/Mdx/blogHeader'
import Divider from '@/components/Mdx/divider'
import {
  hint_big,
  hint_error,
  hint_tip,
  hint_warn
} from '@/components/Mdx/hint'
import MyLink from '@/components/Mdx/link'
import { GithubBlock, LinkBlock } from '@/components/Mdx/linkBlock'
import LinkIcon from '@/components/Mdx/linkIcon'
import Nav from '@/components/Mdx/nav'
import SyntaxHighlighterInline from '@/components/Mdx/syntaxHighlighterInline'
import { getAllPosts, getPostBySlugRemote } from '@/lib/Mdx/api'

const components = {
  img: (props: any) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <img
      className='mx-auto my-4'
      {...props}
      layout='responsive'
      loading='lazy'
    />
  ),
  code: (props: any) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        language='javascript'
        PreTag={(props) => (
          <pre
            {...props}
            style={{ ...props.style, margin: '0 0.3em', padding: 0 }}
            className='inline-code inline-flex'
          >
            {props.children}
          </pre>
        )}
        CodeTag={(props) => (
          <code
            {...props}
            style={{ ...props.style, padding: 0, margin: '0 0.3em' }}
          >
            {props.children}
          </code>
        )}
        renderer={SyntaxHighlighterRender}
      >
        {props.children}
      </SyntaxHighlighter>
    )
  },
  pre: (props: any) => {
    return (
      <SyntaxHighlighter
        language={(
          props.children?.props?.className ?? props.className
        )?.replace('language-', '')}
        {...props}
        style={dracula}
        renderer={SyntaxHighlighterRender}
      >
        {props.children?.props?.children ?? props.children}
      </SyntaxHighlighter>
    )
  },
  blockquote: (props: any) => (
    <MyBlockquote {...props}>{props.children}</MyBlockquote>
  ),
  a: (props: any) => <MyLink {...props}></MyLink>,
  inlineCode: (props: any) => {
    return (
      <SyntaxHighlighterInline {...props} style={dracula}>
        {props.children}
      </SyntaxHighlighterInline>
    )
  },
  GithubBlock,
  LinkBlock,
  h2: (props: any) => (
    <h2 className='relative mt-5' {...props}>
      <LinkIcon href={`#${props.id}`} />
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className='group relative mt-10 text-3xl font-medium' {...props}>
      <LinkIcon href={`#${props.id}`} />
      {props.children}
    </h3>
  ),
  h4: (props: any) => (
    <h4
      key={props.id}
      className='group relative mt-6 pt-3 text-xl font-bold'
      {...props}
    >
      <LinkIcon href={`#${props.id}`} />
      {props.children}
    </h4>
  ),
  hint_tip,
  hint_warn,
  hint_error,
  hint_big,
  p: (props: any) => (
    <div {...props}>
      <div className='my-4'>{props.children}</div>
    </div>
  ),
  Divider,
  hr: Divider,
  BigLetter,
  YouTube
}

interface MyProp {
  post: {
    [key: string]: any
  }
}
export default function Home({ post }: MyProp) {
  useEffect(() => {
    const hash = window.location.hash
    // window.location.hash = ''
    // window.location.hash = hash
    if (hash) {
      setTimeout(() => {
        document
          .querySelector(decodeURIComponent(hash))!
          .scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  })

  return (
    <Layout>
      <div className='mx-auto mb-8 mt-20 w-11/12 sm:px-4 md:max-w-5xl'>
        <Head>
          <title>{`${post.title} | supaCheer Blog`}</title>
          {/* <meta property="og:image" content={post.ogImage.url} /> */}
        </Head>
        <BlogHeader>{post.title}</BlogHeader>
        <div className='md:base mx-auto mt-5 max-w-2xl text-sm text-gray-500 md:leading-tight'>
          Created on {format(Date.parse(post.date ?? 0), 'MMM dd, yyyy')}
        </div>
        <Nav />
        <div className='mx-auto max-w-2xl text-lg text-[var(--text-color)]'>
          <MDXRemote {...post.source} components={components} />
        </div>
      </div>
      <style global jsx>
        {`
          .mdx-embed {
            padding-top: 0.25rem;
            margin-top: 2rem;
          }
        `}
      </style>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlugRemote(`${params.slug}`, [
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

  return {
    props: {
      post: post
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
