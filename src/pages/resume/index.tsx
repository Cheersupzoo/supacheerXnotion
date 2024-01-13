import Head from 'next/head'
import React from 'react'

import { Layout } from '@/components/Layout'

const Resume = () => {
  return (
    <Layout>
      <Head>
        <style>
          {`@font-face {
                font-family: lekton;
                src: url(/fonts/LektonNerdFont-Bold.ttf);
                font-weight: bold;
            }
            @font-face {
                font-family: lekton;
                src: url(/fonts/LektonNerdFont-Italic.ttf);
                font-weight: italic;
            }

            @font-face {
                font-family: lekton;
                src: url(/fonts/LektonNerdFont-Regular.ttf);
            }
            `}
        </style>
      </Head>
      <div className='h-16' />
      <div className='overflow-y-auto pt-6'>
        <div className='printable' data-size='A4'>
          <div className='pt-[13px] text-center text-[24pt]'>
            <span className='font-bold text-[#d923cc]'>SUPPACHAI</span>{' '}
            THANRUKPRASERT
          </div>
          <div className='-mt-2 text-center text-[14pt]'>
            <a href='tel:+66819329887'>(+66)81-932-9887</a> |{' '}
            <a href='mailto:me@supacheer.com'>me@supacheer.com</a>
          </div>
          <div className='text-center text-[10pt]'>
            <a href='https://github.com/Cheersupzoo'>github.com/Cheersupzoo</a>{' '}
            | <a href='https://supacheer.com'>supacheer.com</a> |{' '}
            <a href='https://linkedin.com/in/suppachai-thanrukprasert'>
              linkedin.com/in/suppachai-thanrukprasert
            </a>
          </div>

          <div className='mt-4 h-[1px] w-full bg-black' />

          <div className='grid grid-cols-[10fr_18fr] pt-6'>
            <div className='pl-7'>
              <div className='text-pink text-[14pt]'>PERSONAL INFORMATION</div>
              <div className='text-title mt-1 grid grid-cols-[2fr_3fr] text-[11pt] leading-[26pt]'>
                <div>First name</div>
                <div>Suppachai</div>
                <div>Family name</div>
                <div>Thanrukprasert</div>
                <div>Nickname</div>
                <div>Cheer</div>
                <div>Birthday</div>
                <div>October 1st, 1998</div>
                <div>Nationality</div>
                <div>Thai</div>
              </div>

              <div className='text-pink mt-7 text-[14pt]'>
                CONTACT INFORMATION
              </div>
              <div className='mt-2 text-[11pt] font-bold'>Address</div>
              <div className='mt-[0.6rem] pr-2 text-[11pt] leading-[18pt]'>
                79/480 Ramkamhaeng 150 soi
                <br />
                Rat Phatthana subdistrict
                <br />
                Sapansung district
                <br />
                Bangkok
                <br />
                Thailand 10240
              </div>

              <div className='text-pink mt-10 text-[14pt]'>SKILLS</div>
              <div className='mt-2 text-[11pt] font-bold'>
                Programming Languages
              </div>
              <div className='mt-[0.6rem] pr-2 text-[11pt] leading-[18pt]'>
                Typescript, Javascript, Dart, Java, Kotlin, Swift, C#
              </div>

              <div className='mt-7 text-[11pt] font-bold'>Frameworks</div>
              <div className='mt-[0.6rem] pr-2 text-[11pt] leading-[18pt]'>
                Next.JS, Nest.JS, Spring,
                <br />
                .NET Core
              </div>

              <div className='mt-7 text-[11pt] font-bold'>DevOps</div>
              <div className='mt-[0.6rem] pr-2 text-[11pt] leading-[18pt]'>
                Docker, AWS, GCP, Github Action, Jenkins
              </div>

              <div className='mt-4 text-[11pt] font-bold'>Operating System</div>
              <div className='mt-[0.6rem] pr-2 text-[11pt] leading-[18pt]'>
                Mac OS, Windows OS, Ubuntu OS
              </div>
            </div>

            <div className='pr-11'>
              <div className='text-purple text-[14pt] font-bold'>
                EXPERIENCE
              </div>

              <div className='mt-1 flex justify-between'>
                <div className='text-blue text-[12pt] font-bold'>
                   Full Stack Developer
                </div>
                <div className='text-[11pt] font-bold'>
                  <span className='text-green'>30 Seconds To Fly</span> ·{' '}
                  <span className='text-blue-green'>Full-time</span>
                </div>
              </div>
              <div className='-mt-1 text-end text-[11pt]'>
                Aug 2023 - Present
              </div>
              <div className='pl-5 text-justify text-[9pt] leading-[17pt]'>
                 Developed features for Chat Connectors and debug dashboard to
                enhance support team efficiency and troubleshooting
                capabilities.
                <br />
                 Engineered a robust web application for business flight
                search, focusing on optimizing performance for displaying and
                processing large datasets efficiently.
                <br />
                 Conducted regular code reviews and security audits to identify
                and rectify potential vulnerabilities, reducing the risk of data
                breaches.
                <br />
                 Enhanced the overall development experience through a
                multifaceted approach, including the generation of comprehensive
                JSDoc documentation for a js codebase, refining code
                documentation for greater clarity, and implementing end-to-end
                (E2E) testing for unique, custom use cases.
                <br />
                <span className='font-bold'>Tech Stack</span> Node.js + React +
                Vue.js + PostgreSQL + K8s
              </div>

              <div className='mt-4 flex justify-between'>
                <div className='text-blue text-[12pt] font-bold'>
                   Backend Developer
                </div>
                <div className='text-[11pt] font-bold'>
                  <span className='text-green'>Brikl</span> ·{' '}
                  <span className='text-blue-green'>Full-time</span>
                </div>
              </div>
              <div className='-mt-1 text-end text-[11pt]'>
                Jan 2022 - Jul 2023
              </div>
              <div className='pl-5 text-justify text-[9pt] leading-[17pt]'>
                 Led the Document App project, handling requirement scoping,
                system design, and task management for a versatile document
                template system used in generating PDFs for various purposes
                like invoices and sales reports.
                <br />
                 Enhanced microstore input validation for real-time user
                feedback, significantly improving UX and meeting complex
                business needs.
                <br />
                 Managed CI/CD pipelines utilizing GitHub Actions and internal
                tools.
                <br />
                 Maintained key internal libraries, including Apollo GraphQL
                and GraphQL Subscriptions.
                <br />
                <span className='font-bold'>Tech Stack</span> Node.js +
                Typescript + GraphQL + PostgreSQL + Prisma + Serverless +
                Next.JS
              </div>

              <div className='mt-1 flex justify-between'>
                <div className='text-blue text-[12pt] font-bold'>
                   Full Stack Developer
                </div>
                <div className='text-[11pt] font-bold'>
                  <span className='text-green'>Hello World Technology</span> ·{' '}
                  <span className='text-blue-green'>Full-time</span>
                </div>
              </div>
              <div className='-mt-1 text-end text-[11pt]'>
                Nov 2020 - Dec 2021
              </div>
              <div className='pl-5 text-justify text-[9pt] leading-[17pt]'>
                Developed a dynamic NHSO system auditing website using Spring
                Boot and Thymeleaf, and maintained the Samitivej Plus hospital
                app, enhancing security and adding a promotional course package
                selling feature.
              </div>

              <div className='mt-1 flex justify-between'>
                <div className='text-blue text-[12pt] font-bold'>
                   App Developer
                </div>
                <div className='text-[11pt] font-bold'>
                  <span className='text-green'>Know Raise It</span> ·{' '}
                  <span className='text-blue-green'>Full-time</span>
                </div>
              </div>
              <div className='-mt-1 text-end text-[11pt]'>
                Jul 2020 - Oct 2020
              </div>
              <div className='pl-5 text-justify text-[9pt] leading-[17pt]'>
                Enhanced the power bank rental app for improved user experience
                and advanced UI, utilizing Flutter.
              </div>
              <div className='text-purple mt-3 text-[14pt] font-bold'>
                EDUCATION
              </div>
              <div className='mt-1 pl-5 text-justify text-[9pt] leading-[15pt]'>
                Sirindhhorn International Institute of Technology
                <br />
                Thammasat University
                <br />
                Bachelor Degree in Computer engineering. Current GPA: 3.80 /
                4.00
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          body {
            background: rgb(204, 204, 204);
          }
          .text-pink {
            color: #df5766;
          }
          .text-blue {
            color: #2c7cf5;
          }
          .text-purple {
            color: #844aff;
          }
          .text-green {
            color: #2ea349;
          }
          .text-blue-green {
            color: #00c1c6;
          }
          div[data-size='A4'] {
            background: #ebeef5;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            width: 21cm;
            height: 29.7cm;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.5cm;
            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
            font-family: lekton;
          }
          @media print {
            body,
            page[size='A4'] {
              margin: 0;
              box-shadow: 0;
            }
          }

          .text-title > div:nth-child(2n-1) {
            font-weight: bold;
          }
        `}
      </style>

      <style jsx global>
        {`
          @media print {
            * {
              visibility: hidden;
            }

            .printable {
              visibility: visible;
              position: absolute;
              top: 0;
              left: 0;
            }

            .printable * {
              visibility: visible;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Resume
