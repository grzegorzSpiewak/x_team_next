'use strict';
import React from 'react'

const Video = (props) => (
  <div className="hero-section__bg">
	  <iframe
      className="hero-section__bg__video"
      src={ props.link }
      allowFullScreen>
    </iframe>
  </div>
)

export default Video
