import React from 'react'

export const SyntaxHighlighterRender = (props: rendererProps) => {
  function renderNode(node: rendererNode): React.ReactNode {
    if (node.tagName === 'span') {
      const nodes = node.children?.map((child, index) => {
        if (child.type === 'element') {
          return renderNode(child)
        }

        const textType = node.properties?.className[0]
          ?.replace('hljs-', '')
          .split('_')
          .join('')
        return (
          <span style={{ ...props.stylesheet[textType] }} key={index}>
            {child.value}
          </span>
        )
      })

      return <>{nodes}</>
    }
    return <span>ELSE</span>
  }
  return <>{props.rows.map((element) => renderNode(element))}</>
}
