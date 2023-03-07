import { Suspense, lazy } from 'react'

const SneakPeakBlogInit = lazy(() => import('./SneakPeakBlogInit'))
export function SneakPeakBlog() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <SneakPeakBlogInit />
      </Suspense>
    </>
  )
}
