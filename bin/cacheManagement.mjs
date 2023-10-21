import fs from 'fs'
import inquirer from 'inquirer'

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
      choices: blogKeys
    }
  ])
  const modifiedBlogMap = omitFields(blogMap, key)
  const rawModifiedBlogMap = JSON.stringify(modifiedBlogMap)
  fs.writeFileSync(pageMapPath, rawModifiedBlogMap)
  console.log('Deleted', key);
  console.log('Done!')
})()
