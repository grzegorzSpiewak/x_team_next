'use strict';
import React from 'react'

const VideoFilter = (props) => (
  <section className="video-filter">
      	<span className="video-filter__title">{ props.title }</span>
      	<span className="video-filter__subtitle">{ props.subtitle}</span>
      	<a className="video-filter__link mediabox btn btn--big btn--light" href={`${props.link}`}>Watch Video</a>
	</section>
)

export default VideoFilter
