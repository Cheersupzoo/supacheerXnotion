import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useMemo } from 'react'

import {
  getBlockTitle,
  getPageProperty,
  idToUuid,
  parsePageId
} from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import { NotionPageHeader } from '@/components/Notion/NotionPageHeader'
import {
  Code,
  Equation,
  Modal,
  Pdf
} from '@/components/Notion/NotionXComponent'
import { PageHead } from '@/components/helper/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'
import { getPageCached } from '@/lib/notion-api'
import { transformParentNode } from '@/lib/transfromParentNode'
import { ExtendedRecordMap, PageProps, Params } from '@/lib/types'
import { NextNotionImage } from '@/components/Notion/NextNotionImage'

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
      nextImage: NextNotionImage,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Pdf,
      Modal,
      Header: NotionPageHeader
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
    <Layout>
      <PageHead
        title={title}
        description={socialDescription}
        url={canonicalPageUrl}
      />
      <div className='h-10' />
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
          if (url === idToUuid('b294089d65b249b1be54c1dd5875f8c4')) {
            return '/cooking'
          }

          return url
        }}
        pageAside={pageAside}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params?.pageId as string

  let pageId = parsePageId(rawPageId)

  let recordMap: ExtendedRecordMap
  if (pageId) {
    recordMap = await getPageCached(pageId)
  } else {
    const siteMap = await getSiteMap()
    pageId = siteMap?.canonicalPageMap[rawPageId]
    recordMap = await getPageCached(pageId)
  }

  const imageCache = await buildImageCache(recordMap)

  await transformParentNode(
    recordMap,
    'Cooking-Journey-b294089d65b249b1be54c1dd5875f8c4'
  )

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

  const siteMap = await getSiteMap(
    'Cooking-Journey-b294089d65b249b1be54c1dd5875f8c4'
  )

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap)
      .filter((pageId) => pageId !== 'cooking-journey')
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
