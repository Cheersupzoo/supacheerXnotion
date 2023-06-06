import { VscDebugRestart } from 'react-icons/vsc'

import { RevealRenderer } from './RevealRenderer'
import { Page1 } from './page/Page1'

export const RevealComponent = () => {
  return (
    <RevealRenderer>
      <Page1 />
      <section data-auto-animate>
        <div
          className='text-[1.2em] md:text-[0.8em]'
          style={{
            textTransform: 'uppercase',
            color: 'var(--pink-color)'
          }}
        >
          Hi there 👋🏼
        </div>
        <div className='mt-8 text-[1.2em] uppercase text-[--text-color] md:text-[0.8em]'>
          My name is <span className='text-[var(--blue-color)]'>Cheer</span>
        </div>
      </section>
      <section
        data-auto-animate
        className='space-y-10 text-[1em] md:text-[0.5em]'
        style={{
          textShadow:
            '0px 0px 5px var(--bg-color),0px 0px 10px var(--bg-color),2px 2px 10px var(--bg-color),0px 0px 30px var(--bg-color),1px 1px 30px var(--bg-color)'
        }}
      >
        <p className=''>
          I&lsquo;m a{' '}
          <span className='text-[var(--blue-color)]'>software engineer</span>{' '}
          and{' '}
          <span className='text-[var(--blue-color)]'>back-end developer</span>
        </p>
        <p className='fragment'>
          I&lsquo;m based in Bangkok, Thailand 🇹🇭 with 3 years of experience in
          the software industry.
        </p>
        <p className='fragment text-[0.8em]' style={{ lineHeight: '1.5' }}>
          I likes to face{' '}
          <span className='text-[var(--red-color)]'>challenging</span>{' '}
          development problems and I found it is very interesting to also
          working as a{' '}
          <span className='text-[var(--red-color)]'>communicator</span> since
          most of the time communication with and between other roles, such as
          project manager and designer, have improved workflow to be smooth,
          fast, and precise.
        </p>
      </section>
      <section
        data-auto-animate
        className='text-[1em] md:text-[0.5em]'
        style={{
          textShadow:
            '0px 0px 5px var(--bg-color),0px 0px 10px var(--bg-color),2px 2px 10px var(--bg-color),0px 0px 30px var(--bg-color),1px 1px 30px var(--bg-color)'
        }}
      >
        <p className=''>
          On my free time, I likes to write story on my blog and, thus, the
          beginning of my{' '}
          <span className='text-[var(--blue-color)]'>creative developer</span>{' '}
          skill to create a wonderful website that can clearly representing my
          thought into the website.
        </p>
      </section>

      <section
        data-auto-animate
        className='px-20 text-[2.4rem] text-[var(--text-color)] md:text-[1.2rem]'
      >
        <h3 style={{ color: 'var(--orange-color)' }}>Working Experience</h3>
        <h4 style={{ color: 'var(--sat-pink-color)' }}>Flutter Developer</h4>
        <h5 style={{ color: 'var(--light-blue-color)' }}>
          <span style={{ color: 'var(--red-color)' }}>Know Raise IT</span>,
          Bangkok, Thailand – (Jul 2020 - Oct 2020)
        </h5>
        <p className='text-shadow text-left'>
          Successfully shipped a redesign of a renting power bank app targeted
          to improve both UI and UX by renovating the whole new design,
          animation, and transition.
        </p>
        <h5 className='text-left' style={{ color: 'var(--light-blue-color)' }}>
          Tech Stack
        </h5>
        <p className='text-shadow text-left'>
          Java + Spring Boot + PostgreSQL + Redis + Flutter + Vue.Js
        </p>
      </section>
      <section
        data-auto-animate
        className='px-20 text-[2.4rem] text-[var(--text-color)] md:text-[1.2rem]'
      >
        <h3 style={{ color: 'var(--orange-color)' }}>Working Experience</h3>
        <h4 style={{ color: 'var(--sat-pink-color)' }}>Full Stack Developer</h4>
        <h5 style={{ color: 'var(--light-blue-color)' }}>
          <span style={{ color: 'var(--red-color)' }}>
            Hello World Technology
          </span>
          , Bangkok, Thailand – (Nov 2020 - Dec 2021)
        </h5>
        <p className='text-shadow text-left'>
          Implemented project based on requirement. Worked on health create
          software and apps.
        </p>
        <h5 className='text-left' style={{ color: 'var(--light-blue-color)' }}>
          Tech Stack
        </h5>
        <p className='text-shadow text-left'>
          Java + Spring Boot + Thymeleaf + Vue.Js + Swift
        </p>
      </section>
      <section
        data-auto-animate
        className='px-20 text-[2.4rem] text-[var(--text-color)] md:text-[1.2rem]'
      >
        <h3 style={{ color: 'var(--orange-color)' }}>Working Experience</h3>
        <h4 style={{ color: 'var(--sat-pink-color)' }}>
          Backend Engineer, Tech lead
        </h4>
        <h5 style={{ color: 'var(--light-blue-color)' }}>
          <span style={{ color: 'var(--red-color)' }}>Brikl</span>, Bangkok,
          Thailand – (Jan 2022 - Present){' '}
        </h5>
        <p className='text-shadow text-left'>
          Leading in Document App project, one of the main features in dashboard
          of e-commerce platform for various report.
        </p>
        <ul className='text-shadow text-left'>
          <li>
            Scoped the requirement, drafted, designed the system architecture,
            planned and delegated tasks across the team.
          </li>
        </ul>
        <p className='text-shadow text-left'>
          I helped maintain internal libraries and tools, and improve developer
          experience.
        </p>
        <h5 className='text-left' style={{ color: 'var(--light-blue-color)' }}>
          Tech Stack
        </h5>
        <p className='text-shadow text-left'>
          Node.js + Typescript + GraphQL + PostgreSQL + Prisma
        </p>
      </section>
      <style jsx>{`
        .text-shadow {
          text-shadow: 0px 0px 5px var(--bg-color), 0px 0px 10px var(--bg-color),
            1px 1px 30px var(--bg-color);
        }
      `}</style>
      <section
        id='CONTACT'
        data-auto-animate
        className='text-[2.4rem] md:text-[1.2rem] !flex'
        style={{
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            backgroundColor:
              'color-mix(in srgb, var(--bg-color), transparent 40%)'
          }}
          className=' mx-auto rounded-md bg-opacity-50 py-10 backdrop-blur-sm md:w-96'
        >
          Feel free to contact me on{' '}
          <a
            className='!text-[var(--blue-color)] transition-colors hover:!text-indigo-300'
            href='mailto:me@supacheer.com'
          >
            Email
          </a>{' '}
          and{' '}
          <a
            className='!text-[var(--blue-color)] transition-colors hover:!text-indigo-300'
            href='https://linkedin.com/in/suppachai-thanrukprasert'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <a
          style={{ position: 'absolute' }}
          className=' group bottom-10 right-10 flex items-center !text-[var(--red-color)] hover:!text-rose-300'
          href='#/START'
        >
          Restart{' '}
          <VscDebugRestart className='ml-2 transition-transform group-hover:-rotate-45' />
        </a>
      </section>
    </RevealRenderer>
  )
}
