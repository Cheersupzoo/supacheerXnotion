import fs from 'fs/promises'
import lqip from 'lqip-modern'
import { PreviewImage } from 'notion-types'
import pLimit from 'p-limit'

export interface PreviewImageMap {
  [url: string]: PreviewImage | null
}

export async function buildPreviewImage(imageKeyMap: {
  [key: string]: string
}): Promise<PreviewImageMap> {
  const limit = pLimit(12)

  const promises = Object.entries(imageKeyMap).map(async ([, url]) =>
    limit(async () => {
      const buffer = await fs.readFile('./public' + url)
      const result = await lqip(buffer)
      const previewImage = {
        originalWidth: result.metadata.originalWidth,
        originalHeight: result.metadata.originalHeight,
        dataURIBase64: result.metadata.dataURIBase64
      }
      return { [url]: previewImage }
    })
  )

  const previewImages = await Promise.all(promises)

  const previewImageMap = previewImages.reduce(
    (acc, val) => ({ ...acc, ...val }),
    {}
  )

  return previewImageMap
}
