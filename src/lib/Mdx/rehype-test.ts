import { visit, BuildVisitor } from 'unist-util-visit'



const rehypeTest = () => {
  return transformer

  async function transformer(tree: any) {
    // console.log('tree.type', tree)
    // import('fs').then(fs => fs.writeFileSync('tree.json', JSON.stringify(tree)))
    const visitor: BuildVisitor = (node, ...other) => {
    //  console.log('Hype node.type ',node.type )
    //  console.log('Hype node.type ',node.data )
    // @ts-ignore
    if(node.type === 'element' && node.tagName === 'code') {
      console.log("🚀 ~ transformer ~ other:", other)
      console.log('Hype',node)
    }
    }
    visit(tree, null, visitor)

    
  }
}

export default rehypeTest
