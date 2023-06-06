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
          animation-duration: 5s;
          animation-iteration-count: infinite;
        }

        @keyframes swiping-key {
          0% {
            width: 50px;
            opacity: 0;
          }
          15% {
            opacity: 0;
          }
          27% {
            opacity: 1;
          }
          30% {
            width: 50px;
            transform: translateX(0px);
          }
          34% {
            width: 100px;
          }
          40% {
            opacity: 1;
          }
          44% {
            width: 50px;
          }

          46% {
            transform: translateX(-70px);
          }
          50% {
            width: 50px;
            opacity: 0;
          }
          54% {
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
