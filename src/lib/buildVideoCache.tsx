import { existsSync } from 'fs'
import fs from 'fs/promises'
import pLimit from 'p-limit'

import { isDev } from './env'
import { ExtendedRecordMap } from './types'
import { videoUrlToFile } from './videoUrlToFile'

export async function buildVideoCache(recordMap: ExtendedRecordMap) {
  const imageFolder = './public/video_cache'
  if (!existsSync(imageFolder)) {
    await fs.mkdir(imageFolder)
  }
  const arrayOfVideoHashUrl = Object.entries(recordMap.signed_urls).filter(
    (entry) => ['mp4', 'webm'].some((fileType) => entry[1].includes(fileType))
  )

  const limit = isDev() ? pLimit(30) : pLimit(6)

  const promises = arrayOfVideoHashUrl.map(async ([hash, url]) =>
    limit(async () => {
      const video = await videoUrlToFile(url)

      return [hash, video]
    })
  )

  const arrayKeyUrl = await Promise.all(promises)

  return arrayKeyUrl
}
