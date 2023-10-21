import Link from 'next/link'
import { useMemo } from 'react'

import { PiAirplaneLanding, PiAirplaneTilt, PiArmchair } from 'react-icons/pi'

import { PageAside } from '@/components/Components/PageAside'
import { Layout } from '@/components/Layout'
import { PageHead } from '@/components/helper/PageHead'

const basePath = '/diary/19-days-europe-trip'
const getDayUrl = (index: number) => `${basePath}/day-${index}`

export default function Diary() {
  const pageAside = useMemo(() => <PageAside />, [])

  return (
    <Layout footerOptions={{ bgColor: 'var(--grey-color)' }}>
      {/* {pageAside} */}
      <div className='overflow-hidden text-[--fg-color] md:overflow-visible'>
        <PageHead
          title={'Diary | Supacheer'}
          description={'Diary of cheer traveling Europe in 19 Days'}
          url={'/diary'}
          image={'https://www.supacheer.com/diary/swiss1.jpg'}
        />
        <div className='h-8' />
        <div className='mt-16 text-center text-3xl font-semibold'>
          19 Days Europe Trip Diary
        </div>
        <div className='mx-auto mt-16 max-w-5xl px-4'>
          I made a diary recoding my whole trip during traveling in Europe for
          19 days. It may not highly details but it should contain roughly the
          location and part of the day that I enter each place so it could be
          use as a guideline as well. Feel free to read and share this diary.
          And if you too lazy to read, just enjoy the pictures.
        </div>
        <div className='mx-auto flex max-w-5xl px-4 pt-20'>
          <StartFrom
            Flag={<ThaiFlag className='h-14' />}
            country='Thailand'
            day={0}
          />
          <div className='relative'>
            <PiAirplaneTilt className='text-[60px]' />
            <svg
              className='absolute -top-full left-full w-[400px]'
              preserveAspectRatio='none'
              viewBox='0 0 28 25'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeWidth={0.2}
                stroke='var(--fg-color)'
                fill='none'
                strokeDasharray={1}
                d='M 0 5 C 3 3 6 1 13 1 Q 20 1 20 7 C 19 10 14 9 15 5 Q 19 -1 23 6 C 26 10 26 15 25 17'
              />
            </svg>
          </div>
        </div>

        <TillDivider fill='#E3B6B3' fillDark='#732d2b' top />
        <div className='relative z-10 flex  flex-col bg-[#E3B6B3] dark:bg-[#732d2b]'>
          <div className='mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3'>
            <div className='pt-12 md:col-span-1'>
              <StartFrom
                Flag={<SwissFlag className='h-14' />}
                country='Switzerland'
                day={1}
              />
              <OR />
              <div>
                {[2, 3, 4, 5].map((num) => (
                  <LinkDay key={num} day={num} />
                ))}
              </div>
            </div>
            <div className='swiss-picture md:col-span-2 '>
              <ResponsiveImage
                filename='swiss1'
                zIndex={1}
                gridArea='1 / 1 / 4 / 3'
                className='rotate-6'
              />
              <ResponsiveImage
                filename='swiss2'
                zIndex={2}
                gridArea='3 / 1 / 5 / 3'
                className='translate-y-10 -rotate-3'
              />
              <ResponsiveImage
                filename='swiss3'
                zIndex={3}
                gridArea='1 / 3 / 3 / 5'
                className='rotate-2'
              />
              <ResponsiveImage
                filename='swiss4'
                zIndex={4}
                gridArea='3 / 3 / 5 / 5'
                className='-translate-y-8 rotate-3'
              />

              <style jsx>
                {`
                  .swiss-picture {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(4, 1fr);
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                  }
                `}
              </style>
            </div>
          </div>
        </div>
        <div className='relative -z-10'>
          <TillDivider fill='#E3B6B3' fillDark='#732d2b' bottom />
          <svg
            className='absolute left-[54%] top-0 -z-10 h-[184px]'
            preserveAspectRatio='none'
            viewBox='0 0 9 21'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeWidth={0.4}
              stroke='var(--fg-color)'
              fill='none'
              strokeDasharray={2}
              d='M 4 1 C 7 5 7 15 4 20'
            />
          </svg>
        </div>

        <TillDivider
          className='relative -z-10 -mt-4'
          fill='#B3CEBD'
          fillDark='#26533a'
          top
          flip
        />
        <div className='relative z-10 flex  flex-col bg-[#B3CEBD] dark:bg-[#26533a]'>
          <div className='mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3'>
            <div className='mt-12 md:order-2 md:col-span-1'>
              <StartFrom
                Flag={<ItalyFlag className='h-14' />}
                country='Italy'
                day={6}
              />
              <OR />
              {[7, 8, 9, 10].map((num) => (
                <LinkDay key={num} day={num} />
              ))}
            </div>
            <div className='md:order-1 md:col-span-2'>
              <style jsx>{`
                div {
                  display: grid;
                  grid-template-columns: repeat(6, 1fr);
                  grid-template-rows: repeat(4, 1fr);
                  grid-column-gap: 0px;
                  grid-row-gap: 0px;
                }
              `}</style>
              <ResponsiveImage
                filename='italy1'
                zIndex={1}
                gridArea='1 / 1 / 3 / 4'
                className='rotate-3'
              />
              <ResponsiveImage
                filename='italy2'
                zIndex={2}
                gridArea='2 / 2 / 6 / 4'
                className='translate-y-[30%] -rotate-2'
              />
              <ResponsiveImage
                filename='italy3'
                zIndex={3}
                gridArea='1 / 4 / 3 / 7'
                className='translate-y-2 -rotate-6 '
              />
              <ResponsiveImage
                filename='italy4'
                zIndex={4}
                gridArea='2 / 4 / 6 / 6'
                className='translate-y-[20%]'
              />
            </div>
          </div>
        </div>
        <div className='relative -z-10'>
          <TillDivider fill='#B3CEBD' fillDark='#26533a' bottom flip />
          <svg
            className='absolute right-[52%] top-0 -z-10 h-[184px]'
            preserveAspectRatio='none'
            viewBox='0 0 9 21'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeWidth={0.4}
              stroke='var(--fg-color)'
              fill='none'
              strokeDasharray={2}
              d='M 4 1 C 1 7 3 18 4 20'
            />
          </svg>
        </div>

        <TillDivider className='-mt-6' fill='#EDDEAA' fillDark='#7b6d3a' top />
        <div className='relative z-10 flex  flex-col bg-[#EDDEAA] dark:bg-[#7b6d3a]'>
          <div className='mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3'>
            <div className='pt-12 md:col-span-1'>
              <StartFrom
                Flag={<SwedenFlag className='h-14' />}
                country='Sweden'
                day={11}
              />
              <OR />
              <div>
                {[12, 13, 14, 15].map((num) => (
                  <LinkDay key={num} day={num} />
                ))}
              </div>
            </div>
            <div className='swiss-picture md:col-span-2 '>
              <ResponsiveImage
                filename='sweden1'
                zIndex={1}
                gridArea='1 / 1 / 2 / 2'
                className='rotate-6'
              />
              <ResponsiveImage
                filename='sweden2'
                zIndex={2}
                gridArea='1 / 2 / 2 / 3'
                className='translate-y-10 -rotate-3'
              />
              <ResponsiveImage
                filename='sweden3'
                zIndex={3}
                gridArea='2 / 1 / 3 / 2'
                className='rotate-1'
              />
              <ResponsiveImage
                filename='sweden4'
                zIndex={4}
                gridArea='2 / 2 / 3 / 3'
                className='translate-y-8 -rotate-3'
              />

              <style jsx>
                {`
                  .swiss-picture {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                  }
                `}
              </style>
            </div>
          </div>
        </div>
        <div className='relative -z-10'>
          <TillDivider fill='#EDDEAA' fillDark='#7b6d3a' bottom />
          <svg
            className='absolute left-[54%] top-0 -z-10 h-[184px]'
            preserveAspectRatio='none'
            viewBox='0 0 9 21'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeWidth={0.4}
              stroke='var(--fg-color)'
              fill='none'
              strokeDasharray={2}
              d='M 4 1 C 7 11 7 15 4 20'
            />
          </svg>
        </div>

        <TillDivider
          className='relative -z-10 -mt-4'
          fill='#9FA4BB'
          fillDark='#1B2444'
          top
          flip
        />
        <div className='relative z-10 flex  flex-col bg-[#9FA4BB] dark:bg-[#1B2444]'>
          <div className='mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3'>
            <div className='mt-12 md:order-2 md:col-span-1'>
              <StartFrom
                Flag={<NorwayFlag className='h-14' />}
                country='Norway'
                day={16}
              />
              <OR />
              {[17, 18, 19].map((num) => (
                <LinkDay key={num} day={num} />
              ))}
            </div>
            <div className='md:order-1 md:col-span-2'>
              <style jsx>{`
                div {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  grid-template-rows: repeat(2, 1fr);
                  grid-column-gap: 0px;
                  grid-row-gap: 0px;
                }
              `}</style>
              <ResponsiveImage
                filename='norway1'
                zIndex={1}
                gridArea='1 / 1 / 2 / 4'
                className='rotate-1'
              />
              <ResponsiveImage
                filename='norway2'
                zIndex={2}
                gridArea='2 / 1 / 3 / 3'
                className='-translate-x-[15%] -rotate-2'
              />
              <ResponsiveImage
                filename='norway3'
                zIndex={3}
                gridArea='2 / 2 / 3 / 4'
                className='translate-x-[15%] rotate-3 scale-75'
              />
            </div>
          </div>
        </div>
        <div className='relative'>
          <TillDivider fill='#9FA4BB' fillDark='#1B2444' bottom flip />
          <div className='h-[80px]' />

          <div className='absolute left-[50%] top-0 -z-10 -translate-x-1/2 '>
            <svg
              className='h-[184px]'
              preserveAspectRatio='none'
              viewBox='0 0 9 21'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeWidth={0.4}
                stroke='var(--fg-color)'
                fill='none'
                strokeDasharray={2}
                d='M 4 1 C 2 11 5 15 4 20'
              />
            </svg>
            <PiAirplaneLanding className='-mt-4 text-[60px]' />
          </div>
        </div>

        <div className='mt-16 overflow-hidden'>
          <svg
            preserveAspectRatio='none'
            viewBox='0 0 1200 120'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              fill: 'var(--grey-color)',
              width: '100%',
              height: 92,
              transform: 'scaleX(-1) scaleY(-1)'
            }}
          >
            <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
          </svg>
        </div>
        <div className='relative z-10 flex  flex-col bg-[var(--grey-color)]'>
          <div className='mx-auto max-w-5xl pb-16 pt-16'>
            <div className='text-2xl font-medium'>Extra</div>
            <Link
              href={`${basePath}/lounge`}
              className='flex flex-col items-center bg-white/10 p-2 transition-colors hover:bg-white/20'
            >
              <PiArmchair className='text-[5rem]' /> <div>Lounge Review</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const ResponsiveImage = ({
  filename,
  zIndex,
  gridArea,
  className
}: {
  filename: string
  zIndex?: number
  gridArea?: string
  className?: string
}) => {
  const src = '/diary/' + filename
  return (
    <picture className={className} style={{ gridArea }}>
      <source
        media='(min-width:768px)'
        type='image/webp'
        srcSet={src + '.webp'}
      />
      <source srcSet={src + '-sm.webp'} type='image/webp' />
      <img
        style={{ zIndex: zIndex }}
        className=' shadow-2xl shadow-black'
        src={src + '.jpeg'}
      />
    </picture>
  )
}

const TillDivider = ({
  fill,
  fillDark,
  top,
  bottom,
  flip,
  className
}: {
  fill: string
  fillDark: string
  top?: boolean
  bottom?: boolean
  flip?: boolean
  className?: string
}) => {
  return (
    <div className={'overflow-hidden ' + className}>
      <style jsx>
        {`
          svg {
            fill: ${fill};
          }
          :is([class='dark-mode'] svg) {
            fill: ${fillDark};
          }
        `}
      </style>
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 1200 120'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          width: '100%',
          height: 92,
          transform: !flip
            ? `${top ? 'scaleY(-1)' : ''} ${bottom ? 'scaleX(-1)' : ''}`
            : `${top ? 'scale(-1)' : ''}`
        }}
      >
        <path d='M1200 120L0 16.48V0h1200v120z' />
      </svg>
    </div>
  )
}

export function SwissFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h32v32H0z' fill='red' />
      <path d='M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z' fill='#fff' />
    </svg>
  )
}

export function ThaiFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 900 600'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h900v600H0z' fill='#A51931' />
      <path d='M0 100h900v400H0z' fill='#F4F5F8' />
      <path d='M0 200h900v200H0z' fill='#2D2A4A' />
    </svg>
  )
}

export function ItalyFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 3 2'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h3v2H0z' fill='#009246' />
      <path d='M1 0h2v2H1z' fill='#fff' />
      <path d='M2 0h1v2H2z' fill='#ce2b37' />
    </svg>
  )
}
export function SwedenFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 16 10'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h16v10H0z' fill='#006aa7' />
      <path d='M0 4h5V0h2v4h9v2H7v4H5V6H0z' fill='#fecc00' />
    </svg>
  )
}
export function NorwayFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 22 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h22v16H0z' fill='#ba0c2f' />
      <path d='M0 8h22M8 0v16' stroke='#fff' strokeWidth='4' />
      <path d='M0 8h22M8 0v16' stroke='#00205b' strokeWidth='2' />
    </svg>
  )
}

export const StartFrom = ({
  Flag,
  country,
  day
}: {
  Flag: JSX.Element
  country: string
  day: number
}) => {
  return (
    <div>
      <a className='group flex items-end' href={getDayUrl(day)}>
        <div className='flex items-center bg-black/10 transition-colors hover:bg-white/5 dark:bg-white/20 '>
          <div className='mx-2'>
            <div className='text-xs'>Start from</div>
            <div className='font-medium'>{country}</div>
          </div>
          {Flag}
        </div>
        <svg
          fill='var(--blue-color)'
          className='mb-2 ml-2 w-4 -scale-x-100 opacity-0 transition-all delay-75 group-hover:opacity-100'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 26 18'
          preserveAspectRatio='none'
        >
          <path d='M 0 7 L 19 7 L 13 0 L 18 0 L 26 9 L 18 18 L 13 18 L 19 11 L 0 11 L 0 7' />
        </svg>
      </a>
      <div className='text-xs text-black/30 dark:text-white/30'>Day {day}</div>
    </div>
  )
}

const OR = () => {
  return <div className='pt-4 text-black/40 dark:text-white/50'>or</div>
}

const LinkDay = ({ day }: { day: number }) => {
  return (
    <>
      <Link className=' block py-2 font-medium' href={getDayUrl(day)}>
        <div className='underlined'>Day {day}</div>
      </Link>
      <style jsx>
        {`
          .underlined {
            position: relative;
            display: inline-block;
          }

          .underlined::before {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            height: 3px;
            width: 100%;
            border: solid 4px var(--green-color);
            border-color: var(--green-color) transparent transparent transparent;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  )
}
