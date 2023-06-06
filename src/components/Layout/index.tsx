import React from 'react'

import { Footer } from '../Components/Footer'
import { PageHeader } from '../Components/PageHeader'

export const Layout = ({ children }: any) => {
  return (
    <div className='notion-app'>
      <PageHeader />
      {children}
      <Footer />
    </div>
  )
}

export { Container } from './Container'
