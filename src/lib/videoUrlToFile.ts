import { existsSync } from 'fs'
import fs from 'fs/promises'

import { extractKeyFromUrl } from './extractKeyFromUrl'

export async function videoUrlToFile(url: string) {
  const [, key, contentType] = extractKeyFromUrl(decodeURIComponent(url))
  const fileName = `/video_cache/${key}.${contentType}`

  if (!existsSync(`./public${fileName}`)) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    await fs.writeFile(`./public${fileName}`, buffer)
  }

  return fileName
}
