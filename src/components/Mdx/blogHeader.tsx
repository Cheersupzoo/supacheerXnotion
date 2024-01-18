import React from 'react'

export default function BlogHeader(props: any) {
  return (
    <h2 className='mx-auto max-w-2xl text-3xl font-black text-gray-800 md:text-5xl md:leading-tight'>
      {props.children}
    </h2>
  )
}
