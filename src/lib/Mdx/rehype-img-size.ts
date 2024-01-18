import fs from 'fs'
import sizeOf from 'image-size'
import { visit } from 'unist-util-visit'

const blogImagePath = '.cache/blogImageMap.json'

export default setImageSize

function setImageSize(options: any) {
  const opts = options || {}
  const dir = opts.dir
  return transformer

  async function transformer(tree: any, file: any) {
    const imgUrls: string[] = []
    let imgCache: { [url: string]: { width?: number; height?: number } } = {}

    if (fs.existsSync(blogImagePath)) {
      imgCache = JSON.parse(fs.readFileSync(blogImagePath, 'utf-8'))
    }

    visit(tree, 'element', visitorGrabUrl)
    await Promise.all(
      imgUrls.map(async (url) => {
        if (imgCache[url]) {
          return
        }
        try {
          const response = await fetch(
            url.replace(/^\/img/, 'https://cdn.supacheer.com/blog')
          )
          const arrayBuffer = await response.arrayBuffer()
          const dimensions = sizeOf(Buffer.from(arrayBuffer))

          imgCache[url] = {
            height: dimensions.height,
            width: dimensions.width
          }
        } catch (error) {
          console.error('Fail to cache blog image', error)
        }
      })
    )

    fs.writeFileSync(blogImagePath ,JSON.stringify(imgCache), 'utf-8')

    visit(tree, 'element', visitor)

    function visitorGrabUrl(node: any) {
      if (node.tagName === 'img') {
        const src = node.properties.src
        if (src.startsWith('http')) {
          return
        }
        if (dir && src.startsWith('/')) {
          imgUrls.push(src)
        }
      }
    }
    function visitor(node: any) {
      if (node.tagName === 'img') {
        const src = node.properties.src
        if (src.startsWith('http')) {
          return
        }
        if (dir && src.startsWith('/')) {
          node.properties.src = node.properties.src.replace(/^\/img/, 'https://cdn.supacheer.com/blog')
        }
        if (imgCache[src]) {
          const dimensions = imgCache[src]
          node.properties.width = dimensions.width
          node.properties.height = dimensions.height
        }
      }
    }
  }
}
