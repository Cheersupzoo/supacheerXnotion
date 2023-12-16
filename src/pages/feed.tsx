import { ExtendedRecordMap } from 'notion-types'
import {
  getBlockParentPage,
  getBlockTitle,
  getPageProperty,
  idToUuid
} from 'notion-utils'
import RSS from 'rss'

import { getSiteMap } from '@/lib/get-site-map'
import { getCanonicalPageUrl } from '@/lib/map-page-url'

export const getStaticProps = async () => {
  const siteMap = await getSiteMap()
  const ttlMinutes = 24 * 60 // 24 hours

  const feed = new RSS({
    title: 'Supacheer',
    site_url: 'https://www.supacheer.com',
    feed_url: `https://www.supacheer.com/feed.xml`,
    language: 'englisth',
    ttl: ttlMinutes
  })

  for (const pagePath of Object.keys(siteMap.canonicalPageMap)) {
    const pageId = siteMap.canonicalPageMap[pagePath]
    const recordMap = siteMap.pageMap[pageId] as ExtendedRecordMap
    if (!recordMap) continue

    const keys = Object.keys(recordMap?.block || {})
    const block = recordMap?.block?.[keys[0]]?.value
    if (!block) continue

    const parentPage = getBlockParentPage(block, recordMap)
    const isBlogPost =
      block.type === 'page' &&
      block.parent_table === 'collection' &&
      parentPage?.id === idToUuid('a801d85fcc9e4c76bd7a4c60ad234952')
    if (!isBlogPost) {
      continue
    }

    const title = getBlockTitle(block, recordMap) || 'Supacheer'
    const description = getPageProperty<string>('Description', block, recordMap)
    const url = getCanonicalPageUrl(recordMap)(pageId)
    const lastUpdatedTime = getPageProperty<number>(
      'Last Updated',
      block,
      recordMap
    )
    const publishedTime = getPageProperty<number>('Published', block, recordMap)
    const date = lastUpdatedTime
      ? new Date(lastUpdatedTime)
      : publishedTime
      ? new Date(publishedTime)
      : new Date()

    feed.item({
      title,
      url,
      date,
      description
    })
  }

  const feedText = feed.xml({ indent: true })

  return { props: { feedText } }
}

export default () => null
