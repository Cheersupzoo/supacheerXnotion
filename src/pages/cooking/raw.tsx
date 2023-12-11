import { buildImageCache } from '@/lib/buildImageCache'
import { buildPreviewImage } from '@/lib/buildPreviewImage'
import { getSiteMap } from '@/lib/get-site-map'
import { getPageCached } from '@/lib/notion-api'

export async function getStaticProps() {
  const recordMap = await getPageCached(
    'Cooking-Journey-b294089d65b249b1be54c1dd5875f8c4'
  )

  const imageCache = await buildImageCache(recordMap)

  const previewImageMap = await buildPreviewImage(
    imageCache,
    'Cooking-Journey-b294089d65b249b1be54c1dd5875f8c4'
  )
  recordMap.preview_images = previewImageMap
  const siteMap = await getSiteMap()
  const idCanonicalMap = Object.entries(siteMap.canonicalPageMap).reduce(
    (map, [canonical, id]) => ({ ...map, [id]: canonical }),
    {}
  )

  return { props: { recordMap, previewImageMap, idCanonicalMap } }
}

export default () => null
