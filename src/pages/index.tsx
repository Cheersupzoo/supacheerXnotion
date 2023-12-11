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

        <FloatingMan className='ml-auto mt-8 hidden w-[250px] md:block' />
      </Container>
      <Container className='mb-8 flex px-6 md:px-12'>
        <div className='flex-grow'>
          <h1 className='text-lg  text-[--purple-color]'>RECENTLY DIARY</h1>
          <SneakPeakDiary />
        </div>
        <div className='md:w-[300px]'></div>
      </Container>
      <Container className='flex px-6 md:px-12'>
        <div>
          <h1 className='text-lg  text-[--purple-color]'>
            RECENTLY PUBLISHED BLOG
          </h1>
          <SneakPeakBlogV2 blogs={blogs} />
        </div>
        <div className='md:w-[300px]'></div>
      </Container>
      <Container className='mt-12 md:px-12'>
        <h1 className='px-6 text-lg text-[--purple-color]'>
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

// export async function getStaticProps() {
//   const notion = new NotionAPI()
//   const recordMap = await notion.getPage(
//     'Suppachai-a801d85fcc9e4c76bd7a4c60ad234952'
//   )

//   const imageCache = await buildImageCache(recordMap)

//   const previewImageMap = await buildPreviewImage(imageCache)
//   recordMap.preview_images = previewImageMap
//   const siteMap = await getSiteMap()
//   const idCanonicalMap = Object.entries(siteMap.canonicalPageMap).reduce(
//     (map, [canonical, id]) => ({ ...map, [id]: canonical }),
//     {}
//   )

//   return { props: { recordMap, imageCache, idCanonicalMap } }
// }
