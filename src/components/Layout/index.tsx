import React from 'react'

import { Footer, FooterOptions } from '../Components/Footer'
import { PageHeader } from '../Components/PageHeader'

export const Layout = ({
  children,
  footerOptions
}: {
  children: any
  footerOptions?: FooterOptions
}) => {
  return (
    <div className='notion-app'>
      <PageHeader />
      {children}
      <Footer options={footerOptions} />
    </div>
  )
}

export { Container } from './Container'
