import { GetStaticProps } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { NotionAPI } from 'notion-client'
import {
  getBlockTitle,
  getPageProperty,
  idToUuid,
  parsePageId
} from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { Footer } from '@/components/Footer'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { PageAside } from '@/components/PageAside'
import { PageHead } from '@/components/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'
import { ExtendedRecordMap, PageProps, Params } from '@/lib/types'

export default function Home({
  recordMap,
  imageCache,
  pageId
}: {
  recordMap: any
  imageCache: { [key: string]: string }
  pageId: string
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
  const pageAside = useMemo(() => <PageAside />, [])

  if (!recordMap) {
    return <div>Loading...</div>
  }

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const canonicalPageUrl = getCanonicalPageUrl(recordMap)(pageId)

  const socialDescription = getPageProperty<string>(
    'Description',
    block,
    recordMap
  )

  const title = getBlockTitle(block, recordMap)

  return (
    <>
      <PageHead
        title={title}
        description={socialDescription}
        url={canonicalPageUrl}
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
        pageAside={pageAside}
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

  return { props: { recordMap, imageCache, pageId } }
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
