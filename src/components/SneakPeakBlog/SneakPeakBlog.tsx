import { Suspense, lazy, useEffect, useState } from 'react'

const SneakPeakBlogInit = lazy(() => import('./SneakPeakBlogInit'))
export function SneakPeakBlog({ startDisplay }: { startDisplay: boolean }) {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    if (startDisplay) setDisplay(true)
  }, [startDisplay])
  return (
    <>
      {display ? (
        <Suspense fallback={<></>}>
          <SneakPeakBlogInit />
        </Suspense>
      ) : (
        <></>
      )}
    </>
  )
}
