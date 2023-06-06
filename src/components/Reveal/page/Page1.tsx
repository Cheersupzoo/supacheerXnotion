import React, { useEffect, useState } from 'react'

// import { BsPhoneFlip } from 'react-icons/bs'
import { isTouchDevice } from '@/lib/isTouchDevice'

import { MouseScroll } from '../../Components/MouseScroll'
import { PressingArrowKey } from '../../Components/PressingArrowKey'
import { Swiping } from '../../Components/Swiping'

export const Page1 = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  // const [isAllowGyroscopeButtonShow, setIsAllowGyroscopeButtonShow] =
  //   useState(false)
  // useEffect(() => {
  //   const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  //   const isDeviceMotionExist =
  //     typeof DeviceMotionEvent !== 'undefined' &&
  //     //@ts-ignore
  //     typeof DeviceMotionEvent.requestPermission === 'function'
  //   if (!isIOS) {
  //     return
  //   }
  //   if (!isDeviceMotionExist) {
  //     return
  //   }

  //   setIsAllowGyroscopeButtonShow(true)
  //   //@ts-ignore
  //   DeviceMotionEvent.requestPermission()
  //     .then((permissionState: string) => {
  //       const isPermissionGranted = permissionState === 'granted'

  //       setIsAllowGyroscopeButtonShow(!isPermissionGranted)
  //     })
  //     .catch(console.error)
  // }, [])

  const isTouchable = isTouchDevice()
  return (
    <section id="START">
      <div className='animate-pulse1 text-[4rem] text-[--fg-color] md:text-[3rem]'>
        START
      </div>
      <style jsx>{`
        @keyframes pulse {
          33% {
            opacity: 0.1;
          }

          66% {
            opacity: 1;
          }
        }
        .animate-pulse1 {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      {!isLoading && !isTouchable && (
        <div className='mt-16 flex items-center justify-center space-x-32'>
          <MouseScroll />
          <PressingArrowKey />
        </div>
      )}
      {!isLoading && isTouchable && (
        <div className='ml-8 mt-20'>
          <Swiping />
        </div>
      )}

      {/* {isAllowGyroscopeButtonShow && (
        <button
          className='mx-auto mt-64 flex items-center justify-center rounded-md bg-white/60 px-1'
          onClick={() => {
            const isDeviceMotionExist =
              typeof DeviceMotionEvent !== 'undefined' &&
              //@ts-ignore
              typeof DeviceMotionEvent.requestPermission === 'function'
            if (isDeviceMotionExist) {
              // (optional) Do something before API request prompt.
              //@ts-ignore
              DeviceMotionEvent.requestPermission()
                .then((permissionState: string) => {
                  const isPermissionGranted = permissionState === 'granted'

                  if (!isPermissionGranted) {
                    alert(
                      'Please restart the browser and allow permission again.'
                    )
                  }

                  setIsAllowGyroscopeButtonShow(!isPermissionGranted)
                })
                .catch(console.error)
            } else {
              alert('DeviceMotionEvent is not defined')
            }
          }}
        >
          <BsPhoneFlip /> <span>Tap to allow Access to Device Gyroscope</span>
        </button>
      )} */}
    </section>
  )
}
