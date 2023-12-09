import Link from 'next/link'
import React from 'react'

import { EuropeFlag, JapanFlag } from '@/components/Components/Flag'
import { FloatingTakatan } from '@/components/Components/FloatingTakatan'
import { HeadCurve } from '@/components/Components/HeadCurve'
import { Container, Layout } from '@/components/Layout'
import { PageHead } from '@/components/helper/PageHead'

const Diary = () => {
  return (
    <Layout>
      <div className='text-[--fg-color]'>
        <PageHead
          title={'Diary | Supacheer'}
          description={'Diary of cheer traveling Europe in 19 Days'}
          url={'/diary'}
          image={'https://www.supacheer.com/diary/swiss1.jpg'}
        />
        <div className='-mt-32 -translate-y-8'>
          <HeadCurve />
        </div>
        <div className='h-48' />
        <div className='mt-16 text-center text-3xl font-semibold'>My Diary</div>
        <div className='h-16' />
        <Container>
          <div className='mx-8 grid gap-24 sm:mx-16 lg:mx-12 lg:grid-cols-2'>
            <LinkDiary
              href='/diary/what-I-eat-in-my-japan-trip-2023'
              title='What I eat in my Japan trip 2023'
              primary1='bg-rose-600'
              primary2='bg-orange-600'
              secondary1='bg-red-400'
              secondary2='bg-rose-500'
              Icon={
                <JapanFlag className='absolute -left-4 -top-4 z-30 w-24 -rotate-6 shadow-2xl' />
              }
              imageSrc1='https://cdn.supacheer.com/picture/5be9c69f-fe41-4155-98aa-f1a8d2ffa445.webp'
              imageSrc2='https://cdn.supacheer.com/picture/0977fb18-6d63-4a52-a773-b0907e337154.webp'
              imageSrc3='https://cdn.supacheer.com/picture/160e6a2e-61a7-4f65-93ab-ee0e1854e16c.webp'
            />
            <LinkDiary
              href='/diary/19-days-europe-trip'
              title='19 days Europe trip'
              primary1='bg-blue-600'
              primary2='bg-yellow-400'
              secondary1='bg-sky-400'
              secondary2='bg-amber-500'
              Icon={
                <EuropeFlag className='absolute -left-4 -top-4 z-30 w-24 -rotate-6 shadow-2xl' />
              }
              imageSrc1='https://cdn.supacheer.com/picture/d47fb393-cf57-429d-b0ef-275e9246505b.webp'
              imageSrc2='https://cdn.supacheer.com/picture/0af5ae50-9422-41f4-aaf4-f5b665015b8c.webp'
              imageSrc3='https://cdn.supacheer.com/picture/9239aa7c-c44b-467e-976a-f81b12e4929f.webp'
            />
          </div>
        </Container>
        <div className='h-14 md:hidden' />
        <Container>
          <div className='ml-auto w-[340px] overflow-hidden'>
            <FloatingTakatan className='-scale-x-100' />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Diary

type LinkDiaryProps = {
  href: string
  title: string
  Icon: JSX.Element
  imageSrc1: string
  imageSrc2: string
  imageSrc3: string
  primary1: string
  primary2: string
  secondary1: string
  secondary2: string
}

const LinkDiary = (props: LinkDiaryProps) => {
  return (
    <Link href={props.href}>
      <div className='group drop-shadow-2xl relative'>
        <div
          className={`absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full ${props.primary1} dark:${props.secondary1}`}
        />
        <div
          className={`absolute -right-4 top-24 -z-10 h-12 w-12 rounded-full ${props.primary2} dark:${props.secondary2}`}
        />
        <div className='relative z-40 text-center text-[var(--text-color)]'>
          <div className='relative z-20 my-auto rounded-2xl bg-gray-100/60 py-12 text-lg font-semibold shadow-xl backdrop-blur-2xl dark:bg-gray-900/60 '>
            {props.title}
          </div>
          {props.Icon}
        </div>
        <img
          className='relative z-30 h-72 w-full -translate-y-6 rotate-3 scale-110 border-[12px] object-cover object-top shadow-xl transition-transform duration-200 group-hover:translate-y-0'
          src={props.imageSrc1}
        />
        <img
          className='relative z-20 h-72 w-full -translate-y-6 -rotate-3 scale-110 border-[12px] object-cover shadow-xl transition-transform duration-300 group-hover:translate-y-0'
          src={props.imageSrc2}
        />
        <img
          className='h-72 w-full -translate-y-6 rotate-3 scale-110 border-[12px] object-cover object-top shadow-xl transition-transform duration-500 group-hover:translate-y-0'
          src={props.imageSrc3}
        />
      </div>
    </Link>
  )
}
