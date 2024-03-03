import blogConfig from 'blog.config'
import fs from 'fs'
import { NotionAPI } from 'notion-client'
import { Block, DateFormat, ExtendedRecordMap } from 'notion-types'
import { parsePageId } from 'notion-utils'
import pLimit from 'p-limit'

import { NotionPageData } from './types'

export const notion = new NotionAPI()

const pageCachePath = '.cache/pageMap.json'

const limit = pLimit(1)
export const getPageCached = async (pageId: string, ...args: any[]) =>
  limit(() => getPageCachedExec(pageId, ...args)) as Promise<
    ExtendedRecordMap & { [key: string]: any }
  >

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

const pageDataMapPath = '.cache/pageDataMap.json'
export async function getPublicPageData(pageId: string) {
  if (!fs.existsSync('.cache/')) {
    fs.mkdirSync('.cache')
  }

  let pageDataMap: { [key: string]: any } = {}
  if (fs.existsSync(pageDataMapPath)) {
    pageDataMap = JSON.parse(fs.readFileSync(pageCachePath, 'utf-8'))
    if (pageDataMap[pageId]) {
      return pageDataMap[pageId]
    }
  }

  const blockId = parsePageId(pageId)
  const response = await fetch(
    `${blogConfig.notionBaseUrl}/api/v3/getPublicPageData`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'block-space',
        name: 'page',
        blockId: blockId,
        spaceDomain: 'supacheer',
        requestedOnPublicDomain: true,
        requestedOnExternalDomain: false,
        showMoveTo: false,
        saveParent: false,
        shouldDuplicate: false,
        projectManagementLaunch: false,
        configureOpenInDesktopApp: false,
        mobileData: {
          isPush: false
        }
      })
    }
  )

  const json = await response.json()

  pageDataMap[pageId] = json
  fs.writeFileSync(pageDataMapPath, JSON.stringify(pageDataMap), {
    encoding: 'utf-8'
  })

  return json
}

export function getPageProperties(
  pageBlock: Block,
  pageData: NotionPageData
): { [key: string]: { name: string; type: string; value: any } } {
  const properties = Object.entries(pageData.collectionSchema)
    .map(([key, setting]) => {
      switch (setting.type) {
        case 'text':
          return {
            ...setting,
            value: pageBlock.properties[key]?.[0]?.[0] ?? ''
          }
        case 'multi_select':
          return {
            name: setting.name,
            type: setting.type,
            value: pageBlock.properties[key]?.[0]?.[0]
              .split(',')
              .map((optionKey: string) =>
                setting.options.find(
                  (option: any) => option.value === optionKey
                )
              )
          }

        case 'date': {
          const property = pageBlock.properties[key] as [['‣', [DateFormat]]]
          const formatDate = property[0][1][0][1]
          const transformProperty = { ...setting } as any

          if (formatDate.type == 'datetime') {
            transformProperty.value = new Date(
              `${formatDate.start_date} ${formatDate.start_time}`
            ).getTime()
          } else if (formatDate.type == 'date') {
            transformProperty.value = new Date(formatDate.start_date).getTime()
          } else if (formatDate.type == 'datetimerange') {
            const { start_date, start_time, end_date, end_time } = formatDate
            const startTime = new Date(`${start_date} ${start_time}`).getTime()
            const endTime = new Date(`${end_date} ${end_time}`).getTime()
            transformProperty.value = [startTime, endTime]
          } else {
            const startTime = new Date(formatDate.start_date).getTime()
            //@ts-ignore
            const endTime = new Date(formatDate.end_date).getTime()
            transformProperty.value = [startTime, endTime]
          }

          return transformProperty
        }

        default:
          break
      }
    })
    .filter(Boolean)

  const propertyByName = Object.fromEntries(
    properties.map((property) => [property.name, property])
  )

  return propertyByName
}
