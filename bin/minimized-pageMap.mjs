import fs from 'fs'

const pageMapPath = '.cache/pageMap.json'

const fileSizeBefore = fs.statSync(pageMapPath).size / 1024 / 1024

console.log('File Size Before', fileSizeBefore.toFixed(2), 'MB')

const text = fs.readFileSync(pageMapPath)

const pageMap = JSON.parse(text)

// const firstPage = pageMap[Object.keys(pageMap)[0]]

const transformedPageMap = Object.fromEntries(
  Object.entries(pageMap).map(([key, page]) => {
    const transformedPage = transformPage(page)

    return [key, transformedPage]
  })
)

const transformedText = JSON.stringify(transformedPageMap)

fs.writeFileSync(pageMapPath, transformedText)

function omitFields(object, ...args) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !args.includes(key))
  )
}

function transformBlocks(blocks) {
  const blocksEntries = Object.entries(blocks).map(([key, block]) => {
    const transformBlock = omitFields(
      block.value,
      'version',
      'permissions',
      'created_by',
      'created_time',
      'last_edited_by',
      'last_edited_time',
      'copied_from',
      'created_by_table',
      'created_by_id',
      'last_edited_by_table',
      'last_edited_by_id',
      'space_id'
    )

    return [
      key,
      {
        value: transformBlock
      }
    ]
  })

  return Object.fromEntries(blocksEntries)
}

function transformPage(page) {
  const block = transformBlocks(page.block)
  const transformPage = {
    ...omitFields(page, 'space', 'notion_user'),
    block
  }

  return transformPage
}

const fileSizeAfter = fs.statSync(pageMapPath).size / 1024 / 1024

console.log('File Size After', fileSizeAfter.toFixed(2), 'MB')

console.log('✅ Minimized pageMap Done!')
