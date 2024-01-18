import {fromHtml} from 'hast-util-from-html'

function extractDocumentWriteArgument(inputString: string) {
    const regex = /document\.write\((['"])([\s\S]*?)\1\)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(inputString)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The first group captured is the argument
        matches.push(match[2].replaceAll(/\\"/g, '"').replaceAll(/<\\/gm, '<').replaceAll(/\\n/g, '\n'));

    }

    return matches;
}

const rehypeGist = () => {
  return transformer

  async function transformer(tree: any) {
    if (tree.type === 'root') {
      const gistChildren = tree.children.filter(
        (child: any) =>
          child.type === 'mdxJsxFlowElement' && child.name === 'Gist'
      )
      await Promise.all(gistChildren.map(async (child: any) => {
        const id = child.attributes[0]?.value
        if(id) {
            const res = await fetch(`https://gist.github.com/Cheersupzoo/${id}.js`)
            const raw = await res.text()
            const elementTexts = extractDocumentWriteArgument(raw)

            const tree = fromHtml(elementTexts.join(''), {fragment: true})
            child.type = 'mdxJsxFlowElement'
            child.name = 'div'
            child.attributes = []
            child.children = tree.children
            
        }
      }))
    }
  }
}

export default rehypeGist
