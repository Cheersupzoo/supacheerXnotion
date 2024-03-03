import { writeFileSync } from 'fs'
import { NotionAPI } from 'notion-client'
import {
  getAllPagesInSpace,
  idToUuid,
  parsePageId,
  uuidToId
} from 'notion-utils'



console.log(parsePageId('79423f4b537e49b482ebc7d15fcfc96b'))
