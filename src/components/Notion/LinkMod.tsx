import React from 'react'

import { ImageHD } from './ImageHD'
import { ReactPhotoSphereViewer } from './SphereViewer'
import { VideoPlayer } from './VideoPlayer'

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
    return <VideoPlayer all={all} />
  }

  if (all[0].children.props.children === '{{ImageHD}}') {
    return <ImageHD all={all} />
  }

  return <a {...all[0]} />
}
