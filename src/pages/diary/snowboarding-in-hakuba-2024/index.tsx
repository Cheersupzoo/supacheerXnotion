import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useMemo } from 'react'

import { getBlockTitle, getPageProperty, idToUuid } from 'notion-utils'
import { MdOutlineVrpano } from 'react-icons/md/index'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import { ImageViewer } from '@/components/Notion/ImageViewer'
import { LinkMod } from '@/components/Notion/LinkMod'
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
import { getCanonicalPageUrl } from '@/lib/map-page-url'
import { getPageCached } from '@/lib/notion-api'
import { PageProps, Params } from '@/lib/types'
import { NextNotionImage } from '@/components/Notion/NextNotionImage'

export default function Home({
  recordMap,
  imageCache,
  pageId,
  idCanonicalMap
}: {
  recordMap: any
  imageCache: { [key: string]: string }
  pageId: string
  idCanonicalMap: { [key: string]: string }
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

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const canonicalPageUrl = getCanonicalPageUrl(recordMap)(pageId)

  const socialDescription = getPageProperty<string>(
    'Description',
    block,
    recordMap
  )

  const title = getBlockTitle(block, recordMap)

  const firstImage = Object.values(imageCache)[0]

  return (
    <Layout>
      <PageHead
        title={title}
        description={socialDescription}
        url={'/diary/what-I-eat-in-my-japan-trip-2023'}
        image={`https://www.supacheer.com${firstImage}`}
      />
      <div className='h-10' />
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
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

export const getStaticProps: GetStaticProps<PageProps, Params> = async () => {
  const pageId = '79423f4b537e49b482ebc7d15fcfc96b'

  const recordMap = await getPageCached(
    'Snowboarding-in-Hakuba-2024-79423f4b537e49b482ebc7d15fcfc96b'
  )
  const imageCache = await buildImageCache(recordMap)

  const videoKeyUrls = await buildVideoCache(recordMap)
  videoKeyUrls.map(([key, url]) => (recordMap.signed_urls[key] = url))

  const previewImageMap = await buildPreviewImage(imageCache, pageId)
  recordMap.preview_images = previewImageMap

  const siteMap = await getSiteMap()
  const idCanonicalMap = Object.entries(siteMap.canonicalPageMap).reduce(
    (map, [canonical, id]) => ({ ...map, [id]: canonical }),
    {}
  )

  return { props: { recordMap, imageCache, pageId, idCanonicalMap } }
}