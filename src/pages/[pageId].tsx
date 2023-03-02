import { GetStaticProps } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { NotionAPI } from 'notion-client'
import { idToUuid, parsePageId } from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { Footer } from '@/components/Footer'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { PageHead } from '@/components/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { ExtendedRecordMap, PageProps, Params } from '@/lib/types'

export default function Home({
  recordMap,
  imageCache
}: {
  recordMap: any
  imageCache: { [key: string]: string }
}) {
  const components = useMemo(
    () => ({
      nextImage: Image,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Pdf,
      Modal
    }),
    []
  )

  if (!recordMap) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PageHead
        pageId={recordMap.pageId}
        site={recordMap.site}
        title={recordMap.title}
      />
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        previewImages={true}
        mapImageUrl={(url, block) => {
          const defaultUrl = defaultMapImageUrl(url, block)
          if (!defaultUrl) {
            return ''
          }

          const [key] = extractKeyFromUrl(decodeURIComponent(defaultUrl))
          if (!key) {
            return defaultUrl
          }

          return imageCache[key]
        }}
        components={components}
        mapPageUrl={(url) => {
          if (url === idToUuid('a801d85fcc9e4c76bd7a4c60ad234952')) {
            return '/'
          }

          return url
        }}
        footer={<Footer />}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params?.pageId as string

  let pageId = parsePageId(rawPageId)

  const notion = new NotionAPI()
  let recordMap: ExtendedRecordMap
  if (pageId) {
    recordMap = await notion.getPage(pageId)
  } else {
    const siteMap = await getSiteMap()
    pageId = siteMap?.canonicalPageMap[rawPageId]
    recordMap = await notion.getPage(pageId)
  }

  const imageCache = await buildImageCache(recordMap)

  return { props: { recordMap, imageCache } }
}

export async function getStaticPaths() {
  const environment = process.env.NODE_ENV || 'development'
  if (environment === 'development') {
    return {
      paths: [],
      fallback: true
    }
  }

  const siteMap = await getSiteMap()

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap)
      .filter((pageId) => pageId !== 'about')
      .map((pageId) => ({
        params: {
          pageId
        }
      })),
    // paths: [],
    fallback: false
  }

  return staticPaths
}
