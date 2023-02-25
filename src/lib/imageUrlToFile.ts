import { existsSync } from 'fs'
import fs from 'fs/promises'
import { extractKeyFromUrl } from './extractKeyFromUrl'

export async function imageUrlToFile(url: string) {
  const [key, contentType] = extractKeyFromUrl(decodeURIComponent(url))
  console.log('🚀 ~ file: imageUrlToFile.ts:7 ~ imageUrlToFile ~ key:', key)

  const fileName = `/picture_cache/${key}.${contentType}`
  if (!existsSync(`./public${fileName}`)) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    let buffer = Buffer.from(arrayBuffer)

    if (['jpeg', 'jpg', 'png'].includes(contentType ?? '')) {
      const Sharp = (await import('sharp')).default

      let sharp = await Sharp(buffer).resize({
        width: 2500,
        height: 1800,
        fit: 'inside'
      })

      if (['jpeg', 'jpg'].includes(contentType ?? '')) {
        sharp = sharp.jpeg({ mozjpeg: true })
      }

      buffer = await sharp.toBuffer()
    }
    await fs.writeFile(`./public${fileName}`, buffer)
  }

  return fileName
}
