import React from 'react'

export function EuropeFlag({ className }: { className: string }) {
  return (
    <img className={className} src='/Flag_of_Europe.svg' />
  )
}

export function JapanFlag({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 300 200"
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d="M0 0h300v200H0z" fill="#fff"  />
        <path d="M210 100a60 60 0 11-120 0 60 60 0 11120 0z" fill="#be0026" />
      </svg>
    )
  }