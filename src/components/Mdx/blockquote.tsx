interface MyProp {
  children?: any
}

export default function MyBlockquote({ children }: MyProp) {
  return (
    <div className='mt-8 border-l-4 border-blue-400 bg-gray-100 py-1 pl-3 pr-1 text-gray-800'>
      {children.props?.children ?? children}
    </div>
  )
}
