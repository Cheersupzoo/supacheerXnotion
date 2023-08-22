import Image from 'next/legacy/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { ExtendedRecordMap } from 'notion-types'
import { getPageProperty } from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import {
  Code,
  Equation,
  Modal,
  Pdf
} from '@/components/Notion/NotionXComponent'
import { PageHead } from '@/components/helper/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'
import { getPageCached } from '@/lib/notion-api'

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

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const canonicalPageUrl = getCanonicalPageUrl(recordMap)(
    'b294089d65b249b1be54c1dd5875f8c4'
  )

  const socialDescription = getPageProperty<string>(
    'Description',
    block,
    recordMap
  )

  return (
    <Layout>
      <div className='notion-app'>
        <PageHead
          title={'Cooking | Supacheer'}
          description={socialDescription}
          url={canonicalPageUrl}
        />
        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          darkMode={false}
          previewImages={true}
          disableHeader={true}
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
          mapPageUrl={(url) => `/cooking/${idCanonicalMap[url]}`}
          pageAside={pageAside}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const recordMap = await getPageCached(
    'Cooking-Journey-b294089d65b249b1be54c1dd5875f8c4'
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
