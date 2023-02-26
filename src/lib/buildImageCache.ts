import { existsSync } from 'fs'
import fs from 'fs/promises'
import { ExtendedRecordMap } from 'notion-types'
import { getPageImageUrls } from 'notion-utils'
import pLimit from 'p-limit'
import { defaultMapImageUrl } from 'react-notion-x'

import { extractKeyFromUrl } from './extractKeyFromUrl'
import { imageUrlToFile } from './imageUrlToFile'

export async function buildImageCache(recordMap: ExtendedRecordMap) {
  const imageFolder = './public/picture_cache'
  if (!existsSync(imageFolder)) {
    await fs.mkdir(imageFolder)
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
