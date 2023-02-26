import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { NotionAPI } from 'notion-client'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { NotionPageHeader } from '@/components/NotionPageHeader'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { PageHead } from '@/components/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'

export default function Home({
  recordMap,
  imageCache,
  idCanonicalMap
}: {
  recordMap: any
  imageCache: { [key: string]: string }
  idCanonicalMap: { [key: string]: string }
  previewImageMap: { [key: string]: string }
}) {
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
        mapPageUrl={(url) => idCanonicalMap[url]}
      />
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
