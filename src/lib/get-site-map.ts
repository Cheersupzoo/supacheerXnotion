import { getAllPagesInSpace, uuidToId, parsePageId } from 'notion-utils'

import * as types from './types'
import { notion } from './notion-api'
import { getCanonicalPageId } from './get-canonical-page-id'

import pMemoize from 'p-memoize'

export async function getSiteMap(): Promise<types.SiteMap> {
  const rootNotionPageId = parsePageId(
    'Suppachai-a801d85fcc9e4c76bd7a4c60ad234952',
    { uuid: false }
  )

  const partialSiteMap = await getAllPages(rootNotionPageId)

  return {
    ...partialSiteMap
  } as types.SiteMap
}

const getAllPages = pMemoize(getAllPagesImpl, {
  cacheKey: (...args: any[]) => JSON.stringify(args)
})

async function getAllPagesImpl(
  rootNotionPageId: string,
  rootNotionSpaceId?: string
): Promise<Partial<types.SiteMap>> {
  const getPage = async (pageId: string, ...args: any[]) => {
    return notion.getPage(pageId, ...args)
  }

  const pageMap = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    getPage
  )

  const canonicalPageMap = Object.keys(pageMap).reduce(
    (map, pageId: string) => {
      const recordMap = pageMap[pageId]
      if (!recordMap) {
        throw new Error(`Error loading page "${pageId}"`)
      }

      const canonicalPageId =
        getCanonicalPageId(pageId, recordMap, {
          uuid: false
        }) ?? ''

      if (map[canonicalPageId]) {
        // you can have multiple pages in different collections that have the same id
        // TODO: we may want to error if neither entry is a collection page
        console.warn('error duplicate canonical page id', {
          canonicalPageId,
          pageId,
          existingPageId: map[canonicalPageId]
        })

        return map
      } else {
        return {
          ...map,
          [canonicalPageId]: pageId
        }
      }
    },
    {} as { [key: string]: string }
  )

  return {
    pageMap,
    canonicalPageMap
  }
}
