import React from 'react'

const Video = ({ videoSrcURL, videoTitle, minHeight = 315, ...props }) => (
  <div className="video fit">
    <iframe
      height={minHeight}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video
