import { GetServerSidePropsContext } from 'next/types'

import { NotionAPI } from 'notion-client'

import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { getSiteMap } from '@/lib/get-site-map'

export async function getServerSideProps({
  req,
  res
}: GetServerSidePropsContext) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ error: 'method not allowed' }))
    res.end()
    return { props: {} }
  }

  const ttlMinutes = 24 * 60 // 24 hours
  const ttlSeconds = ttlMinutes * 60

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

  res.setHeader(
    'Cache-Control',
    `public, max-age=${ttlSeconds}, stale-while-revalidate=${ttlSeconds}`
  )
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.write(JSON.stringify({ recordMap, previewImageMap, idCanonicalMap }))
  res.end()

  return { props: {} }
}

export default () => null
