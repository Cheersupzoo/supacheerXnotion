import { getPageCached } from './notion-api'
import { ExtendedRecordMap } from './types'

// ! - Hack to show header properly -- using in notion block database type
export async function transformParentNode(
  recordMap: ExtendedRecordMap,
  rootId: string
) {
  const recordMapRoot = await getPageCached(rootId)
  const refBlockId = Object.values(recordMap.collection_view)[0].value.parent_id
  const keys = Object.keys(recordMapRoot?.block || {})
  const rootBlockId = keys[0]
  const rootBlock = recordMapRoot?.block?.[rootBlockId]?.value

  recordMap.block[rootBlockId] = { role: 'reader', value: rootBlock }
  recordMap.block[refBlockId].value.parent_id = rootBlockId
}
