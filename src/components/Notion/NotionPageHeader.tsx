import * as React from 'react'

import * as types from 'notion-types'
import { Breadcrumbs, PageIcon } from 'react-notion-x'

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock | types.Block
}> = ({ block }) => {
  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        {block.id === 'b294089d-65b2-49b1-be54-c1dd5875f8c4' ? (
          <PageIcon block={block} />
        ) : (
          <Breadcrumbs block={block} rootOnly={false} />
        )}
        {/* <div className='notion-nav-header-rhs breadcrumbs'>
          <ToggleThemeButton />
        </div> */}
      </div>
    </header>
  )
}
