import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'

import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageProperty } from 'notion-utils'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { MouseScroll } from '@/components/Components/MouseScroll'
import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import {
  Code,
  Equation,
  Modal,
  Pdf
} from '@/components/Notion/NotionXComponent'
import Three from '@/components/Three'
import { PageHead } from '@/components/helper/PageHead'
import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'

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
    'a801d85fcc9e4c76bd7a4c60ad234952'
  )

  const socialDescription = getPageProperty<string>(
    'Description',
    block,
    recordMap
  )

  const ThreeContainer = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > 100) {
        ThreeContainer.current.style.maxWidth = '100%'
        ThreeContainer.current.style.height = '100vh'
        ThreeContainer.current.style.borderRadius = '0rem'
      } else {
        ThreeContainer.current.style.maxWidth = '800px'
        ThreeContainer.current.style.height = '400px'
        ThreeContainer.current.style.borderRadius = '0.75rem'
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Layout>
      <PageHead
        title={'Supacheer'}
        description={socialDescription}
        url={canonicalPageUrl}
      />
      <div className='h-16' />
      <div
        ref={ThreeContainer}
        style={{
          overflow: 'hidden',
          width: 'auto',
          height: '400px',
          maxWidth: '800px',
          margin: '0 auto',
          transition: 'all 500ms',
          borderRadius: '0.75rem',
          position: 'sticky',
          top: 0,
          zIndex: -1
        }}
      >
        <Three />
      </div>
      <MouseScroll />
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
        mapPageUrl={(url) => idCanonicalMap[url]}
        pageAside={pageAside}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(
    'About-19837e8210c24e0e95d6b22b1b1d5204'
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
