import React, { Fragment } from 'react'

export const SyntaxHighlighterRender = (
  props: rendererProps
) => {
  function renderNode(node: rendererNode, index: number): React.ReactNode {
    if (node.tagName === 'span') {
      const nodes = node.children?.map((child, childIndex) => {
        if (child.type === 'element') {
          return renderNode(child, index + childIndex)
        }

        const textType = node.properties?.className[0]
          ?.replace('hljs-', '')
          .split('_')
          .join('')
        return (
          <span style={{ ...props.stylesheet[textType] }} key={childIndex}>
            {child.value}
          </span>
        )
      })

      return <Fragment key={index}>{nodes}</Fragment>
    }
    return <span>ELSE</span>
  }
  return <>{props.rows.map((element, index) => renderNode(element, index))}</>
}
