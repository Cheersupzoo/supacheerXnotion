import Link from 'next/link'
import { useMemo } from 'react'

import { getBlockTitle, idToUuid, parsePageId, uuidToId } from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import { LinkMod } from '@/components/Notion/LinkMod'
import { NextNotionImage } from '@/components/Notion/NextNotionImage'
import { NotionPageHeader } from '@/components/Notion/NotionPageHeader'
import {
  Code,
  Equation,
  Modal,
  Pdf
} from '@/components/Notion/NotionXComponent'
import { PageLink } from '@/components/Notion/PageLink'
import { PageHead } from '@/components/helper/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { buildVideoCache } from '@/lib/buildVideoCache'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import {
  getPageCached,
  getPageProperties,
  getPublicPageData
} from '@/lib/notion-api'
import { NotionPageData } from '@/lib/types'

const pageCanonicalIds = [
  'What-I-eat-in-my-Japan-Trip-2023-7fe81dd5b54a4b0da444aa8e15dab9ca',
  'Snowboarding-in-Hakuba-2024-79423f4b537e49b482ebc7d15fcfc96b'
]

export default function Home({
  recordMap,
  imageCache,
  pageId,
  idCanonicalMap,
  properties
}: Awaited<ReturnType<typeof getStaticProps>>['props']) {
  const components = useMemo(
    () => ({
      nextImage: NextNotionImage,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Pdf,
      Modal,
      Header: NotionPageHeader,
      PageLink: (...all: any[]) => {
        if ((all[0]?.className as string)?.includes('notion-page-link')) {
          return <PageLink all={all} />
        }

        return (
          <a href={all[0]?.href} className={all[0]?.className}>
            {all[0]?.children}
          </a>
        )
      },
      Link: LinkMod
    }),
    []
  )
  const pageAside = useMemo(() => <PageAside />, [])

  if (!recordMap) {
    return <div>Loading...</div>
  }

  const block = Object.values(recordMap?.block)[0]?.value

  const title = getBlockTitle(block, recordMap)

  const firstImage = Object.values(imageCache)[0]

  return (
    <Layout>
      <PageHead
        title={title}
        description={properties['Description'].value}
        url={'/diary/snowboarding-in-hakuba-2024'}
        image={`https://www.supacheer.com${firstImage}`}
      />
      <div className='h-10' />
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        pageHeader={
          <>
            {properties['Published on']?.value && (
              <div className='mb-10 text-sm text-[var(--grey-color)]'>
                Published on{' '}
                {new Date(properties['Published on'].value).toLocaleDateString(
                  undefined,
                  { year: 'numeric', month: 'short', day: 'numeric' }
                )}
              </div>
            )}
          </>
        }
        previewImages={true}
        isImageZoomable={false}
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
          if (url === idToUuid(pageId)) {
            return '/diary'
          }
          if (idCanonicalMap[url]) {
            return './' + idCanonicalMap[url]
          }

          return url
        }}
        pageAside={pageAside}
      />
    </Layout>
  )
}

const pageSlugIdMap = Object.fromEntries(
  pageCanonicalIds.map((pageCanonicalId) => {
    const pageUUID = parsePageId(pageCanonicalId)
    const pageId = uuidToId(pageUUID)
    return [
      pageCanonicalId.replace(`-${pageId}`, '').toLowerCase(),
      pageCanonicalId
    ]
  })
)

export const getStaticProps = async ({
  params: { slug }
}: {
  params: { slug: string }
}) => {
  const pageCanonicalId = pageSlugIdMap[slug.toLowerCase()]
  if (!pageCanonicalId) {
    throw new Error('Slug not exist!')
  }
  const pageId = parsePageId(pageCanonicalId)
  const recordMap = await getPageCached(pageCanonicalId)
  const pageData = (await getPublicPageData(pageId)) as NotionPageData
  const block = Object.values(recordMap?.block)[0]?.value
  const properties = getPageProperties(block, pageData)

  const imageCache = await buildImageCache(recordMap)
  const videoKeyUrls = await buildVideoCache(recordMap)
  videoKeyUrls.map(([key, url]) => (recordMap.signed_urls[key] = url))
  const previewImageMap = await buildPreviewImage(imageCache, pageId)

  recordMap.preview_images = previewImageMap

  const siteMap = await getSiteMap()
  const idCanonicalMap = Object.fromEntries(
    Object.entries(siteMap.canonicalPageMap).map(([canonical, id]) => [
      id,
      canonical
    ])
  )

  return {
    props: { recordMap, imageCache, pageId, idCanonicalMap, properties }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      ...Object.keys(pageSlugIdMap).map((slug) => ({
        params: { slug }
      })),
      { params: { slug: 'what-I-eat-in-my-japan-trip-2023' } }
    ],
    fallback: false
  }
}
