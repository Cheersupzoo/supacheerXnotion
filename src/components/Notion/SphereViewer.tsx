import dynamic from 'next/dynamic'
import { VideoPlayer } from './VideoPlayer'

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false
  }
)

export const LinkMod = (...all: any[]) => {
    if (all[0].children.props.children === '{{Sphere}}') {
      return (
        <ReactPhotoSphereViewer
          defaultYaw={'330deg'}
          littlePlanet
          maxFov={130}
          container={''}
          src={all[0].href}
          height='500px'
          width='100%'
        />
      )
    }

    if (all[0].children.props.children === '{{Video}}') {
      return (
        <VideoPlayer
          all={all}
        />
      )
    }

    return <a {...all[0]} />
  }