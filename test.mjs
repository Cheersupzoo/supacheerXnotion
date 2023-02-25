import {
  getAllPagesInSpace,
  uuidToId,
  idToUuid,
  parsePageId
} from 'notion-utils'
import { NotionAPI } from 'notion-client'
import { writeFileSync } from 'fs'
;(async () => {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(
    'Suppachai-a801d85fcc9e4c76bd7a4c60ad234952'
  )
  const getPage = async (pageId) => {
    console.log('\nnotion getPage', uuidToId(pageId))
    return notion.getPage(pageId)
  }
  const a = await getAllPagesInSpace(
    'a801d85fcc9e4c76bd7a4c60ad234952',
    undefined,
    getPage
  )
  console.log('🚀 ~ file: test.mjs:16 ~ ; ~ a:', a)

  //   console.log("🚀 ~ file: test.mjs:7 ~ recordMap:", recordMap)
  writeFileSync('./temp.json', JSON.stringify(a, null, 2))
})()

// console.log(parsePageId('ba0f708c19dc487f8108c099c8e8b63a'))
