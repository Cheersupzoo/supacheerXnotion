import React, { Fragment, ReactNode, useEffect, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { HiMenu } from '@react-icons/all-files/hi/HiMenu'
import { HiX } from '@react-icons/all-files/hi/HiX'

import { FloatingManImage } from './FloatingMan'
import { ToggleThemeButton } from './ToggleThemeButton'

export const PageHeader = () => {
  return (
    <header className='relative left-0 right-0 top-0 z-50 mx-auto  h-10 w-full max-w-7xl bg-transparent pt-6 '>
      <div className=' flex items-center px-8 py-3 md:px-32'>
        <a href='/'>
          <img
            src='/default-monochrome-color.svg'
            className='ml-2 h-5'
            alt='logo-text'
          />
        </a>
        <div className='mx-8 hidden space-x-8 md:flex'>
          <HeaderLink title='Diary' href='/diary' />
          <HeaderLink title='Blog' href='https://blog.supacheer.com' />
          <HeaderLink title='Cooking' href='/cooking' />
          <HeaderLink title='Profile' href='/profile' />
        </div>
        <div className='notion-nav-header-rhs breadcrumbs ml-auto hidden hover:cursor-pointer md:block'>
          <ToggleThemeButton />
        </div>
        <div className='ml-auto block md:hidden '>
          <PageHeaderToggle />
        </div>
      </div>
    </header>
  )
}

export const HeaderLink = ({
  title,
  href
}: {
  title: string
  href: string
}) => {
  return (
    <a href={href} className='HeaderLink mx-2 text-[--text-color]'>
      {title}
      <style jsx>{`
        .HeaderLink {
          position: relative;
          text-decoration: none;
        }
        .HeaderLink:hover {
        }
        .HeaderLink::before {
          content: '';
          position: absolute;
          display: block;
          width: calc(100% - 10px);
          height: 3px;
          bottom: -2px;
          right: 0;
          background-color: var(--purple-color);
          transform: scaleX(0);
          transform-origin: top right;
          transition: transform 0.3s ease;
        }

        .HeaderLink:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </a>
  )
}

export const PageHeaderToggle = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              <HiMenu
                className='-mx-2 h-5 w-5 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-150'
            enterFrom='transform opacity-0 '
            enterTo='transform opacity-100 '
            leave='transition ease-in duration-100'
            leaveFrom='transform opacity-100 '
            leaveTo='transform opacity-0 '
          >
            <Menu.Items className='fixed left-0 right-0 top-0 h-[100vh] bg-[var(--bg-color)] bg-opacity-90 shadow-lg backdrop-blur-sm dark:bg-gray-800  dark:bg-opacity-90 '>
              <div className='flex w-full justify-end px-10'>
                <Menu.Button className='ml-auto mt-6 rounded-md px-2 py-2 font-medium text-white active:bg-none'>
                  <HiX
                    className='-mx-2 h-5 w-5 text-[--fg-color] hover:brightness-150'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>
              <div className='mt-4 flex flex-col space-y-4 px-2 py-1'>
                <Menu.Item>
                  <FlyIn open={open}>
                    <a href='/' className=''>
                      <img
                        src='/default-monochrome-color.svg'
                        className='ml-4 h-5'
                        alt='logo-text'
                      />
                    </a>
                  </FlyIn>
                </Menu.Item>
                <Menu.Item>
                  <FlyIn open={open}>
                    <HeaderLinkSmall title='Diary' href='/diary' />
                  </FlyIn>
                </Menu.Item>
                <Menu.Item>
                  <FlyIn index={1} open={open}>
                    <HeaderLinkSmall
                      title='Latest Blog'
                      href='https://blog.supacheer.com'
                    />
                  </FlyIn>
                </Menu.Item>
                <Menu.Item>
                  <FlyIn index={2} open={open}>
                    <HeaderLinkSmall title='Cooking' href='/cooking' />
                  </FlyIn>
                </Menu.Item>
                <Menu.Item>
                  <FlyIn index={3} open={open}>
                    <HeaderLinkSmall title='Profile' href='/profile' />
                  </FlyIn>
                </Menu.Item>
              </div>
              <div className='flex px-6 py-4'>
                <FlyIn index={4} open={open}>
                  <div className='rounded-md p-2 hover:bg-white/10'>
                    <ToggleThemeButton />
                  </div>
                </FlyIn>
              </div>
              <div className='relative isolate '>
                <div className='ml-auto max-w-[300px] px-1 py-1'>
                  <FloatingManImage />
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

const FlyIn = ({
  open,
  children,
  index = 0
}: {
  open: boolean
  children: ReactNode
  index?: number
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <div
      className={` transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : '-translate-x-[50vw]'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {children}
    </div>
  )
}

export const HeaderLinkSmall = ({
  title,
  href
}: {
  title: string
  href: string
}) => {
  return (
    <a href={href} className='HeaderLink mx-4  text-2xl text-[--text-color] '>
      {title}
      <style jsx>{`
        .HeaderLink {
          position: relative;
          text-decoration: none;
        }
        .HeaderLink:hover {
        }
        .HeaderLink::before {
          content: '';
          position: absolute;
          display: block;
          width: calc(100% - 10px);
          height: 3px;
          bottom: -2px;
          left: 0;
          background-color: var(--purple-color);
          transform: scaleX(0);
          transform-origin: top left;
          transition: transform 0.3s ease;
        }

        .HeaderLink:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </a>
  )
}
