import * as React from 'react'
import Head from 'next/head'

export const PageHead: React.FC<{
  title?: string
  description?: string
  image?: string
  url?: string
}> = ({ title, description, url }) => {
  const rssFeedUrl = `https://www.supacheer.com/feed`
  title = title ?? 'Supacheer'
  description = description ?? 'Website of Cheer'

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      <meta property='og:site_name' content='Supacheer' />
      <meta property='twitter:domain' content='supacheer.com' />

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={'Supacheer'}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>
    </Head>
  )
}
