import { FloatingMan } from '@/components/Components/FloatingMan'
import { FloatingTakatan } from '@/components/Components/FloatingTakatan'
import { HeadCurve } from '@/components/Components/HeadCurve'
import { KeyboardContainer } from '@/components/Keyboard/KeyboardContainer'
import { Container, Layout } from '@/components/Layout'
import SneakPeakBlogV2, {
  BlogsProp
} from '@/components/SneakPeakBlog/SneakPeakBlogV2'
import { SneakPeakCooking } from '@/components/SneakPeakCooking'
import { SneakPeakDiary } from '@/components/SneakPeakDiary'
import { PageHead } from '@/components/helper/PageHead'
import { directDownloadBlogFeed } from '@/lib/downloadBlogFeed'

export default function Home({ blogs }: { blogs: BlogsProp }) {
  return (
    <Layout>
      <PageHead
        title={'Supacheer'}
        description={'Supacheer Home Page'}
        url={'https://www.supacheer.com'}
        image={'https://www.supacheer.com/default.png'}
      />
      <HeadCurve />
      <Container className='flex'>
        <KeyboardContainer />

        <FloatingMan className='ml-auto mt-8 hidden w-[250px] lg:block' />
      </Container>
      <Container className='mb-8 grid xl:grid-cols-[1fr_300px]  '>
        <div className='flex-grow-0'>
          <h1 className='text-lg layout-padding text-[--purple-color]'>RECENTLY DIARY</h1>
          <SneakPeakDiary />
        </div>
        <div className=''></div>
      </Container>
      <Container className='grid xl:grid-cols-[1fr_300px] px-6 md:px-12'>
        <div>
          <h1 className='text-lg  text-[--purple-color]'>
            RECENTLY PUBLISHED BLOG
          </h1>
          <SneakPeakBlogV2 blogs={blogs} />
        </div>
        <div className='md:w-[300px]'></div>
      </Container>
      <Container className='mt-12 lg:px-12 w-screen '>
        <h1 className='px-6 md:px-12 lg:px-0 text-lg text-[--purple-color]'>
          RECENTLY COOKING MENU
        </h1>
        <SneakPeakCooking />
      </Container>
      <div className='h-14 md:hidden' />
      <Container>
        <div className='w-[340px]'>
          <FloatingTakatan />
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const blogs = await directDownloadBlogFeed()
  return {
    props: {
      blogs
    }
  }
}
