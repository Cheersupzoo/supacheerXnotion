import React from 'react'

export const PressingArrowKey = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='key'></div>
      <div className='flex space-x-2'>
        <div className='key'></div>
        <div className='key'></div>
        <div className='key pressing'></div>
      </div>

      <style jsx>{`
        .key {
          --size: 40px;
          width: var(--size);
          height: var(--size);
          border: var(--fg-color) solid 1.5px;
          border-radius: 0.525rem;
        }

        .pressing {
          animation-name: pressing-key;
          animation-duration: 3s;
          animation-iteration-count: infinite;
        }

        @keyframes pressing-key {
          0% {
            transform: scale(100%);
            background: none;
            opacity: 1;
          }
          12% {
            transform: scale(94%);
            background: var(--fg-color);
            opacity: 0.5;
          }
          25% {
            transform: scale(100%);
            background: none;
            opacity: 1;
          }
          50% {
            transform: scale(100%);
            background: none;
            opacity: 1;
          }
          100% {
            transform: scale(100%);
            background: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
