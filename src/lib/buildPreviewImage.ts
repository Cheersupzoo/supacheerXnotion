import { existsSync, readFileSync, writeFileSync } from 'fs'
import fs from 'fs/promises'
import lqip from 'lqip-modern'
import { PreviewImage } from 'notion-types'
import pLimit from 'p-limit'

import { isDev } from './env'

export interface PreviewImageMap {
  [url: string]: PreviewImage | null
}

export async function buildPreviewImage(
  imageKeyMap: {
    [key: string]: string
  },
  pageId?: string
): Promise<PreviewImageMap> {
  let previewImageMap: {
    [x: string]: {
      originalWidth: number
      originalHeight: number
      dataURIBase64: string
    }
  } = {}

  if (pageId) {
    previewImageMap = await getImagePageCached(pageId)
  }

  if (!Object.keys(previewImageMap).length) {
    const limit = isDev() ? pLimit(30) : pLimit(12)

    const promises = Object.entries(imageKeyMap).map(async ([, url]) =>
      limit(async () => {
        const buffer = await fs.readFile('./public' + url)
        const result = await lqip(buffer)
        const previewImage = {
          originalWidth: result.metadata.originalWidth,
          originalHeight: result.metadata.originalHeight,
          dataURIBase64: result.metadata.dataURIBase64
        }
        return {
          [url.replace('/picture_cache', 'https://cdn.supacheer.com/picture')]:
            previewImage
        }
      })
    )

    const previewImages = await Promise.all(promises)

    previewImageMap = previewImages.reduce(
      (acc, val) => ({ ...acc, ...val }),
      {}
    )

    if (pageId) {
      await setImagePageCached(pageId, previewImageMap)
    }
  }

  return previewImageMap
}

const pageMapPath = '.cache/pagePreviewImageMap.json'

const limit = pLimit(1)
export const getImagePageCached = async (pageId: string, ...args: any[]) =>
  limit(() => getImagePageCachedExec(pageId, ...args))

export const getImagePageCachedExec = async (
  pageId: string,
  ...args: any[]
) => {
  let pageMap: { [key: string]: any } = {}
  if (existsSync(pageMapPath)) {
    pageMap = JSON.parse(readFileSync(pageMapPath, 'utf-8'))
    if (pageMap[pageId]) {
      return pageMap[pageId]
    }
  }

  return {}
}

export const setImagePageCached = async (
  pageId: string,
  images: any,
  ...args: any[]
) => limit(() => setImagePageCachedExec(pageId, images, ...args))

export const setImagePageCachedExec = async (
  pageId: string,
  images: any,
  ...args: any[]
) => {
  let pageMap: { [key: string]: any } = {}
  if (existsSync(pageMapPath)) {
    pageMap = JSON.parse(readFileSync(pageMapPath, 'utf-8'))
  }

  pageMap[pageId] = images
  writeFileSync(pageMapPath, JSON.stringify(pageMap), {
    encoding: 'utf-8'
  })
}
