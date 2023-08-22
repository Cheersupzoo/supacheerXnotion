import fs from 'fs'
import { NotionAPI } from 'notion-client'
import pLimit from 'p-limit'

export const notion = new NotionAPI()

const pageCachePath = '.cache/pageMap.json'

const limit = pLimit(1)
export const getPageCached = async (pageId: string, ...args: any[]) =>
  limit(() => getPageCachedExec(pageId, ...args))

export const getPageCachedExec = async (pageId: string, ...args: any[]) => {
  if (!fs.existsSync('.cache/')) {
    fs.mkdirSync('.cache')
  }
  let pageMap: { [key: string]: any } = {}
  if (fs.existsSync(pageCachePath)) {
    pageMap = JSON.parse(fs.readFileSync(pageCachePath, 'utf-8'))
    if (pageMap[pageId]) {
      return pageMap[pageId]
    }
  }

  const page = await notion.getPage(pageId, ...args)
  pageMap[pageId] = page
  fs.writeFileSync(pageCachePath, JSON.stringify(pageMap), {
    encoding: 'utf-8'
  })
  return page
}
