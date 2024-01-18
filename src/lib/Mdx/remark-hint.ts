import { u } from 'unist-builder'

const classNames = {
  hint_tip: /^!&gt;|i>\s/,
  hint_warn: /^\?&gt;|!>\s/,
  hint_error: /^x&gt;|x>\s/,
  hint_big: /^x&gt;|b>\s/
}

// from github.com/syntax-tree/unist-util-map/blob/bb0567f651517b2d521af711d7376475b3d8446a/index.js
const map = (tree: any, iteratee: any) => {
  const preorder = (node: any, index: any, parent: any) => {
    const newNode = iteratee(node, index, parent)

    if (Array.isArray(newNode.children)) {
      newNode.children = newNode.children.map((child: any, index: any) => {
        return preorder(child, index, node)
      })
    }

    return newNode
  }

  return preorder(tree, null, null)
}

export default () => (tree: any) => {
  return map(tree, (node: any) => {
    const { children = [] } = node

    if (node.type !== 'paragraph') {
      return node
    }

    const [{ value, type }, ...siblings] = children
    if (type !== 'text') {
      return node
    }

    if (!Object.values(classNames).some((r) => r.test(value))) {
      return node
    }

    const [className, r] = Object.entries(classNames).find(([, r]) => {
      return r.test(value)
    }) ?? ['hint_tip', /^!&gt;|!>\s/]

    const newChild = {
      type,
      value: value.replace(r, '')
    }

    const props = {
      data: {
        hName: className,
        class: className,
        hProperties: {
          class: className
        }
      }
    }

    return u('paragraph', props, [newChild, ...siblings])
  })
}
