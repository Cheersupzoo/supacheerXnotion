import { ReactNode } from 'react'

export const Container = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={'mx-auto max-w-5xl ' + className}>{children}</div>
}
