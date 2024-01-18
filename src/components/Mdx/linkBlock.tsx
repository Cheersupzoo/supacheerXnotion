import { useEffect } from 'react'

interface MyProp {
  src?: any
  href?: string
  title?: string
  description?: string
}

function LinkBlock({ href, src, title, description }: MyProp) {
  const domainName = (href as string).match(
    /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+)/
  )?.[1]
  return (
    <div className='group my-3 border transition hover:shadow-md'>
      <a
        className='flex  '
        target='_blank'
        rel='noreferrer'
        href={href}
        style={{ minWidth: 0 }}
      >
        <div className='text mx-5 my-auto flex-grow'>
          <h2 className='text-base group-hover:text-blue-900'>
            <strong>{title}</strong>
          </h2>
          <div
            className='mt-2 line-clamp-2 text-base leading-5 text-gray-500'
            style={{ lineHeight: '2.5ex', height: '5ex' }}
          >
            {description}
          </div>
          <div className='mt-2 text-xs text-gray-500'>{domainName}</div>
        </div>

        <img
          className='h-40 w-40 flex-shrink-0 object-cover object-center'
          src={src}
        />
      </a>
    </div>
  )
}

function GithubBlock(props: any) {
  //https://opengraph.githubassets.com/1/Cheersupzoo/icon_showcase_animation_part
  return (
    <LinkBlock
      {...props}
      src='https://avatars.githubusercontent.com/u/54928306?s=40&v=4'
    />
  )
}

export { GithubBlock, LinkBlock }
