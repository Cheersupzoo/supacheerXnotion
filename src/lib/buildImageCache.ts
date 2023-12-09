import { existsSync } from 'fs'
import fs from 'fs/promises'
import { ExtendedRecordMap } from 'notion-types'
import { getPageImageUrls } from 'notion-utils'
import pLimit from 'p-limit'
import { defaultMapImageUrl } from 'react-notion-x'

import { isDev } from './env'
import { extractKeyFromUrl } from './extractKeyFromUrl'
import { imageUrlToFile } from './imageUrlToFile'

export async function buildImageCache(recordMap: ExtendedRecordMap) {
  const imageFolder = './public/picture_cache'
  if (!existsSync(imageFolder)) {
    await fs.mkdir(imageFolder)
  }

  const limit = isDev() ? pLimit(30) : pLimit(6)

  const imageUrls = getPageImageUrls(recordMap, {
    mapImageUrl: (url, block) => {
      return defaultMapImageUrl(url, block)
    }
  })
  // console.log(`🚀 Build Image Cache...`)

  let base64Signed_url: {
    [x: string]: string
  }

  if (process.env.BUILD_IMAGE_CACHE === 'true') {
    const promises = imageUrls.map(async (url) =>
      limit(async () => {
        const image = await imageUrlToFile(url)
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

    base64Signed_url = arrayKeyUrl.reduce(
      (acc, val) => ({ ...acc, ...val }),
      {}
    )
  } else {
    base64Signed_url = imageUrls
      .map((url) => {
        const [key] = extractKeyFromUrl(decodeURIComponent(url))
        const image = `https://cdn.supacheer.com/picture/${key}.webp`
        if (!key) {
          return {}
        }

        return {
          [key]: image
        }
      })
      .reduce((acc, val) => ({ ...acc, ...val }), {})
  }

  // console.log(`🚀 Build Image Cache Done!`)

  return base64Signed_url
}
