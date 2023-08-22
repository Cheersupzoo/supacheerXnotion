import { existsSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { mkdirp } from 'mkdirp'
import Sharp from 'sharp'

const basePath = './public/diary'
let folder = basePath
;(async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'folder',
      message: 'Path to export',
      default: basePath
    }
  ])
  folder = answers.folder.trim().replaceAll("'", '').replaceAll('"', '')
  console.log('Output', folder)
  if (!existsSync(basePath)) {
    mkdirp(basePath)
  }
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'image_path',
        message: 'Image that want to import to public',
        validate(value: string) {
          const pass = value.match(/.*\.(JPG|jpg|png|jpeg)/i)
          if (pass) {
            return true
          }

          return 'Please enter a valid image path'
        }
      }
    ])

    console.log(answers)
    const path = answers.image_path
      .trim()
      .replaceAll("'", '')
      .replaceAll('"', '')
    const regexResult = /.*\/(.*)\.(JPG|jpg|png|jpeg)/gm.exec(path)
    const fileName = regexResult?.[1]
    const fileType = regexResult?.[2].toLowerCase()
    if (!fileName || !fileType) {
      continue
    }
    console.log(`${fileName}.${fileType}`)

    const sharp = Sharp(path)

    if (folder === basePath) {
      await writeImage(sharp, fileName, fileType, {
        maxWidth: 7000,
        maxHeight: 3000,
        isWebp: true
      })

      await writeImage(sharp, fileName, fileType, {
        maxWidth: 2200,
        maxHeight: 1200
      })
    } else {
      await writeImage(sharp, fileName, fileType, {
        maxWidth: 7000,
        maxHeight: 4000,
        isWebp: true
      })
    }
  }
})()

type OutputImageOption = {
  maxWidth?: number
  maxHeight?: number
  isWebp?: boolean
}

async function writeImage(
  sharp: Sharp.Sharp,
  fileName: string,
  fileType: string,
  { maxWidth = 2200, maxHeight = 1200, isWebp = false }: OutputImageOption
) {
  const { width, height } = await sharp.metadata()
  if ((width ?? 0) > maxWidth || (height ?? 0) > maxHeight) {
    sharp = sharp.resize({
      width: maxWidth,
      height: maxHeight,
      fit: 'inside'
    })
  }

  let outputPath = `${folder}/${fileName}.`

  if (isWebp) {
    sharp = sharp.webp({ quality: 65 })
    outputPath += 'webp'
  } else {
    if (['jpeg', 'jpg'].includes(fileType)) {
      sharp = sharp.jpeg({ mozjpeg: true, quality: 70 })
    }

    if (['png'].includes(fileType)) {
      sharp = sharp.png({ quality: 75 })
    }
    outputPath += fileType
  }

  // const buffer = await sharp.withMetadata().toBuffer()
  const buffer = await sharp.rotate().toBuffer()
  writeFileSync(outputPath, buffer)
  console.log('✅ Write Complete', outputPath)
}
