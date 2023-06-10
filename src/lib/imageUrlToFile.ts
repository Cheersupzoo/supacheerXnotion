import { existsSync } from 'fs'
import fs from 'fs/promises'

import { extractKeyFromUrl } from './extractKeyFromUrl'

export async function imageUrlToFile(url: string) {
  const [key, contentType] = extractKeyFromUrl(decodeURIComponent(url))
  const fileName = `/picture_cache/${key}.${contentType}`
  if (!existsSync(`./public${fileName}`)) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    let buffer = Buffer.from(arrayBuffer)

    if (['jpeg', 'jpg', 'png','webp'].includes(contentType ?? '')) {
      const Sharp = (await import('sharp')).default

      let sharp = await Sharp(buffer)

      const { width, height } = await sharp.metadata()
      if ((width ?? 0) > 2500 || (height ?? 0) > 1800) {
        sharp = sharp.resize({
          width: 2500,
          height: 1800,
          fit: 'inside'
        })
      }

      if (['jpeg', 'jpg'].includes(contentType ?? '')) {
        sharp = sharp.jpeg({ mozjpeg: true, quality: 75 })
      }

      buffer = await sharp.withMetadata().toBuffer()
    }
    await fs.writeFile(`./public${fileName}`, buffer)
  }

  return fileName
}
