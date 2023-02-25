import Image from 'next/image'
import styles from './page.module.css'
import { NotionAPI } from 'notion-client'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import Link from 'next/link'
import { useMemo } from 'react'



import { NotionPageHeader } from '@/components/NotionPageHeader'
import { PageHead } from '@/components/PageHead'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'
import { buildImageCache } from '@/lib/buildImageCache'

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

  return { props: { recordMap, imageCache } }
}

