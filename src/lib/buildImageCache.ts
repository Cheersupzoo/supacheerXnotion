import { ExtendedRecordMap } from 'notion-types'
import pLimit from 'p-limit'
import fs from 'fs/promises'
import { existsSync } from 'fs'
import { getPageImageUrls } from 'notion-utils'
import { defaultMapImageUrl } from 'react-notion-x'
import { imageUrlToFile } from './imageUrlToFile'
import { extractKeyFromUrl } from './extractKeyFromUrl'

export async function buildImageCache(recordMap: ExtendedRecordMap) {
  if (!existsSync('./public/picture_cache')) {
    await fs.mkdir('./public/picture_cache')
  }

  const limit = pLimit(6)

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

  console.log(`🚀 Build Image Cache Done!`)

  return base64Signed_url
}
