import fs from 'fs'
import inquirer from 'inquirer'
import { parsePageId } from 'notion-utils'

import { omitFields } from '../src/utils/object.mjs'

;(async () => {
  const pageMapPath = '.cache/pageMap.json'
  const rawFile = fs.readFileSync(pageMapPath)
  const blogMap = JSON.parse(rawFile)
  const blogKeys = Object.keys(blogMap)

  const { key } = await inquirer.prompt([
    {
      type: 'list',
      name: 'key',
      message: 'Which blog key to delete?',
      choices: blogKeys.reverse()
    }
  ])
  const modifiedBlogMap = omitFields(blogMap, key)
  const rawModifiedBlogMap = JSON.stringify(modifiedBlogMap)
  fs.writeFileSync(pageMapPath, rawModifiedBlogMap)
  console.log('Deleted', key)
  console.log('Page Done!')

  const pageDataMapPath = '.cache/pageDataMap.json'
  if (fs.existsSync(pageDataMapPath)) {
    const pageId = parsePageId(key)
    const rawDataFile = fs.readFileSync(pageDataMapPath)
    const blogDataMap = JSON.parse(rawDataFile)
    const modifiedBlogDataMap = omitFields(blogDataMap, pageId)
    const rawModifiedBlogDataMap = JSON.stringify(modifiedBlogDataMap)
    fs.writeFileSync(pageDataMapPath, rawModifiedBlogDataMap)
    console.log('PageData Done!')
  }
})()
