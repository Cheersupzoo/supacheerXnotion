import Image from 'next/legacy/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageProperty } from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { Footer } from '@/components/Footer'
import { NotionPageHeader } from '@/components/NotionPageHeader'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { PageAside } from '@/components/PageAside'
import { PageHead } from '@/components/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'
import { SneakPeakBlog } from '@/components/SneakPeakBlog/SneakPeakBlog'

export default function Home({
  recordMap,
  imageCache,
  idCanonicalMap
}: {
  recordMap: ExtendedRecordMap
  imageCache: { [key: string]: string }
  idCanonicalMap: { [key: string]: string }
  previewImageMap: { [key: string]: string }
}) {
  console.log('🚀 ~ file: index.tsx:32 ~ recordMap:', recordMap)
  const components = useMemo(
    () => ({
      nextImage: Image,
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

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value
  console.log('🚀 ~ file: index.tsx:51 ~ block:', block)

  const canonicalPageUrl = getCanonicalPageUrl(recordMap)(
    'a801d85fcc9e4c76bd7a4c60ad234952'
  )

  const socialDescription = getPageProperty<string>(
    'Description',
    block,
    recordMap
  )

  return (
    <>
      <PageHead
        title={'Supacheer'}
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
        mapPageUrl={(url) => idCanonicalMap[url]}
        // footer={<Footer />}
        pageAside={pageAside}
      />
      <Footer />
      <SneakPeakBlog />
    </>
  )
}

export async function getStaticProps() {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(
    'Suppachai-a801d85fcc9e4c76bd7a4c60ad234952'
  )

  const imageCache = await buildImageCache(recordMap)

  const previewImageMap = await buildPreviewImage(imageCache)
  recordMap.preview_images = previewImageMap
  const siteMap = await getSiteMap()
  const idCanonicalMap = Object.entries(siteMap.canonicalPageMap).reduce(
    (map, [canonical, id]) => ({ ...map, [id]: canonical }),
    {}
  )

  return { props: { recordMap, imageCache, idCanonicalMap } }
}
