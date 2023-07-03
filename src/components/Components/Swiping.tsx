import React from 'react'

export const Swiping = () => {
  return (
    <div className='flex justify-center'>
      <div className='circle swiping rounded-full bg-[var(--fg-color)]' />

      <style jsx>{`
        .circle {
          --size: 50px;
          width: var(--size);
          height: var(--size);
        }
        .swiping {
          animation-name: swiping-key;
          animation-duration: 4s;
          animation-iteration-count: infinite;
        }

        @keyframes swiping-key {
          0% {
            width: 50px;
            opacity: 0;
          }
          10% {
            opacity: 0;
          }
          27% {
            opacity: 1;
          }
          30% {
            width: 50px;
            transform: translateX(0px);
          }
          38% {
            width: 100px;
          }
          40% {
            opacity: 1;
          }
          52% {
            width: 50px;
          }

          54% {
            transform: translateX(-70px);
          }
          60% {
            width: 50px;
            opacity: 0;
          }
          64% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
