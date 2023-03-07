import { ExtendedRecordMap } from 'notion-types'
import { parsePageId, uuidToId } from 'notion-utils'

import { getCanonicalPageId } from './get-canonical-page-id'
import { Site } from './types'

// include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)

export const mapPageUrl =
  (site: Site, recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageUuid) === site.rootNotionPageId) {
      return createUrl('/', searchParams)
    } else {
      return createUrl(
        `/${getCanonicalPageId(pageUuid, recordMap)}`,
        searchParams
      )
    }
  }

export const getCanonicalPageUrl =
  (recordMap: ExtendedRecordMap) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageId) === 'a801d85fcc9e4c76bd7a4c60ad234952') {
      return `https://www.supacheer.com`
    } else {
      return `https://www.supacheer.com/${getCanonicalPageId(
        pageUuid,
        recordMap
      )}`
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}
