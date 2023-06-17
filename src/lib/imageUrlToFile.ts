import { existsSync } from 'fs'
import fs from 'fs/promises'

import { extractKeyFromUrl } from './extractKeyFromUrl'

export async function imageUrlToFile(url: string) {
  const [key, contentType] = extractKeyFromUrl(decodeURIComponent(url))
  const overrideContentType = 'webp'
  const fileName = `/picture_cache/${key}.${overrideContentType}`
  if (!existsSync(`./public${fileName}`)) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    let buffer = Buffer.from(arrayBuffer)

    if (['jpeg', 'jpg', 'png', 'webp'].includes(contentType ?? '')) {
      const Sharp = (await import('sharp')).default

      let sharp = await Sharp(buffer)

      const { width, height } = await sharp.metadata()
      if ((width ?? 0) > 2500 || (height ?? 0) > 1800) {
        sharp = sharp.resize({
          width: 2800,
          height: 2000,
          fit: 'inside'
        })
      }
      sharp = sharp.webp({ quality: 60, alphaQuality: 80 })
      buffer = await sharp.withMetadata().toBuffer()
    }
    await fs.writeFile(`./public${fileName}`, buffer)
  }

  return fileName
}
