import { GetServerSidePropsContext } from 'next/types'

import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { getSiteMap } from '@/lib/get-site-map'
import { getPageCached } from '@/lib/notion-api'

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
