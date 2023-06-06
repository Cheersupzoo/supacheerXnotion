import fg from 'fast-glob'
import fs from 'fs'
import { writeFile } from 'fs/promises'
import Sharp from 'sharp'

;(async () => {
  // Sharp('')
  if (!fs.existsSync('public/m')) {
    fs.mkdirSync('public/m')
    fs.mkdirSync('public/m/cooking')
  }
  const entries = await fg('public/cooking/*.{jpg,png,jpeg}')
  console.log('🚀 ~ file: mobileImg.mjs:7 ~ entries:', entries)
  await Promise.all(
    entries.map(async (path) => {
      let sharp = Sharp(path)
      sharp = sharp.resize({
        width: 800,
        height: 600,
        fit: 'inside'
      })

      const buffer = await sharp.withMetadata().toBuffer()

      await writeFile(path.replace('public', 'public/m'), buffer)
    })
  )
})()
