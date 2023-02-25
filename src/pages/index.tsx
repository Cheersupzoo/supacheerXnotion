import Image from 'next/image'
import styles from './page.module.css'
import { NotionAPI } from 'notion-client'
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x'
import Link from 'next/link'
import fs from 'fs/promises'
import { existsSync } from 'fs'
import { useMemo } from 'react'
import { getPageImageUrls } from 'notion-utils'

import pLimit from 'p-limit'
import { NotionPageHeader } from '@/components/NotionPageHeader'
import { PageHead } from '@/components/PageHead'
import { Code, Equation, Modal, Pdf } from '@/components/NotionXComponent'
import { Collection } from 'react-notion-x/build/third-party/collection'

import { PreviewImage } from 'notion-types'
import { imageUrlToFile } from '@/lib/imageUrlToFile'
import { extractKeyFromUrl } from '@/lib/extractKeyFromUrl'

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

  if (!existsSync('./public/picture_cache')) {
    await fs.mkdir('./public/picture_cache')
  }

  const limit = pLimit(4)

  const imageUrls = getPageImageUrls(recordMap, {
    mapImageUrl: (url, block) => {
      return defaultMapImageUrl(url, block)
    }
  })

  let current = 0
  const total = imageUrls.length

  console.log(`🚀 Build Image Cache...`)

  const promises = imageUrls.map(async (url) =>
    limit(async () => {
      const image = await imageUrlToFile(url)
      current++
      console.log(`🚀 ${current}/${total}`)
      const [key] = extractKeyFromUrl(decodeURIComponent(url))
      if (!key) {
        return {}
      }

      return {
        [key]: image
      }
    })
  )

  const arrayKeyUrl = await Promise.all(promises)

  const base64Signed_url = arrayKeyUrl.reduce(
    (acc, val) => ({ ...acc, ...val }),
    {}
  )

  return { props: { recordMap, imageCache: base64Signed_url } }
}
